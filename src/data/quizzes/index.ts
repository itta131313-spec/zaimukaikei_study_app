import type { QuizQuestion } from '../../types'
import { kessanQuizzes } from './kessan'
import { kisaiQuizzes } from './kisai'
import { yosanQuizzes } from './yosan'

export const quizzes: QuizQuestion[] = [...kisaiQuizzes, ...yosanQuizzes, ...kessanQuizzes]

export function getQuizzesByCategory(categoryId: string): QuizQuestion[] {
  return quizzes.filter((q) => q.categoryId === categoryId)
}
