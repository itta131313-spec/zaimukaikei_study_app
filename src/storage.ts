import type { CategoryId, QuizAttempt } from './types'
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

export interface WeakQuestion {
  questionId: string
  categoryId: CategoryId
  question: string
  attemptCount: number
  wrongCount: number
}

export function getWeakQuestions(limit = 5): WeakQuestion[] {
  const attempts = getAllAttempts()
  const byQuestion = new Map<string, { attemptCount: number; wrongCount: number }>()

  for (const attempt of attempts) {
    const current = byQuestion.get(attempt.questionId) ?? { attemptCount: 0, wrongCount: 0 }
    current.attemptCount += 1
    if (!attempt.correct) current.wrongCount += 1
    byQuestion.set(attempt.questionId, current)
  }

  const result: WeakQuestion[] = []
  for (const [questionId, stats] of byQuestion.entries()) {
    if (stats.wrongCount === 0) continue
    const question = quizzes.find((q) => q.id === questionId)
    if (!question) continue
    result.push({
      questionId,
      categoryId: question.categoryId,
      question: question.question,
      attemptCount: stats.attemptCount,
      wrongCount: stats.wrongCount,
    })
  }

  result.sort((a, b) => b.wrongCount - a.wrongCount)
  return result.slice(0, limit)
}

export function clearAllRecords(): void {
  localStorage.removeItem(STORAGE_KEY)
}
