import type { CategoryId, QuizAttempt, QuizQuestion } from './types'
import { quizzes } from './data/quizzes'

const STORAGE_KEY = 'zaimukaikei-study-app:attempts'

export function getAllAttempts(): QuizAttempt[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw) as QuizAttempt[]
  } catch {
    return []
  }
}

export function recordAttempt(
  questionId: string,
  categoryId: CategoryId,
  correct: boolean,
): void {
  const attempts = getAllAttempts()
  attempts.push({
    questionId,
    categoryId,
    correct,
    answeredAt: new Date().toISOString(),
  })
  localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts))
}

export interface CategoryStats {
  categoryId: CategoryId
  attemptCount: number
  correctCount: number
  accuracyRate: number // 0-100, -1 if no attempts
}

export function getCategoryStats(categoryId: CategoryId): CategoryStats {
  const attempts = getAllAttempts().filter((a) => a.categoryId === categoryId)
  const correctCount = attempts.filter((a) => a.correct).length
  const accuracyRate =
    attempts.length === 0 ? -1 : Math.round((correctCount / attempts.length) * 100)
  return {
    categoryId,
    attemptCount: attempts.length,
    correctCount,
    accuracyRate,
  }
}

// 正解率がこの値未満の分野を「苦手分野」として表示する
export const WEAK_CATEGORY_THRESHOLD = 60

export type AccuracyLevel = 'none' | 'good' | 'fair' | 'weak'

export function getAccuracyLevel(stats: CategoryStats): AccuracyLevel {
  if (stats.attemptCount === 0) return 'none'
  if (stats.accuracyRate >= 80) return 'good'
  if (stats.accuracyRate >= WEAK_CATEGORY_THRESHOLD) return 'fair'
  return 'weak'
}

export interface WeakQuestion {
  question: QuizQuestion
  attemptCount: number
  wrongCount: number
  // 直近の回答が正解なら「克服済み」とみなす
  lastCorrect: boolean
}

export function getWeakQuestions(limit = 10): WeakQuestion[] {
  const attempts = getAllAttempts()
  const byQuestion = new Map<
    string,
    { attemptCount: number; wrongCount: number; lastCorrect: boolean }
  >()

  // attempts は回答した順に並んでいるため、最後に処理したものが直近の回答になる
  for (const attempt of attempts) {
    const current = byQuestion.get(attempt.questionId) ?? {
      attemptCount: 0,
      wrongCount: 0,
      lastCorrect: false,
    }
    current.attemptCount += 1
    if (!attempt.correct) current.wrongCount += 1
    current.lastCorrect = attempt.correct
    byQuestion.set(attempt.questionId, current)
  }

  const result: WeakQuestion[] = []
  for (const [questionId, stats] of byQuestion.entries()) {
    if (stats.wrongCount === 0) continue
    const question = quizzes.find((q) => q.id === questionId)
    if (!question) continue
    result.push({ question, ...stats })
  }

  // 未克服の問題を先に、その中で間違えた回数が多い順に並べる
  result.sort(
    (a, b) => Number(a.lastCorrect) - Number(b.lastCorrect) || b.wrongCount - a.wrongCount,
  )
  return result.slice(0, limit)
}

// 直近の回答が不正解のままになっている問題(復習モードの出題対象)
export function getReviewQuestions(): QuizQuestion[] {
  return getWeakQuestions(Infinity)
    .filter((w) => !w.lastCorrect)
    .map((w) => w.question)
}

export function clearAllRecords(): void {
  localStorage.removeItem(STORAGE_KEY)
}
