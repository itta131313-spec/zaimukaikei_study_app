import type { QuizQuestion } from './types'

// 1回のクイズで出題する問題数
export const QUESTIONS_PER_SESSION = 10

// 配列をランダムな順番に並べ替えた新しい配列を返す(元の配列は変更しない)
export function shuffle<T>(items: T[]): T[] {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

// 問題の中からランダムに指定数を選ぶ
export function pickRandom<T>(items: T[], count: number): T[] {
  return shuffle(items).slice(0, count)
}

// 選択肢の並び順をランダムにし、正解の番号もそれに合わせて付け替える
export function shuffleChoices(question: QuizQuestion): QuizQuestion {
  const order = shuffle(question.choices.map((_, i) => i))
  return {
    ...question,
    choices: order.map((i) => question.choices[i]),
    correctIndex: order.indexOf(question.correctIndex),
  }
}
