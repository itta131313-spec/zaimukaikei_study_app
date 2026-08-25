export type CategoryId = 'kisai' | 'yosan' | 'kessan'

export interface Category {
  id: CategoryId
  name: string
  description: string
  color: string
}

export interface QuizQuestion {
  id: string
  categoryId: CategoryId
  question: string
  choices: string[]
  correctIndex: number
  explanation: string
}

export interface GuideStep {
  title: string
  body: string
}

export interface GuideContent {
  categoryId: CategoryId
  title: string
  steps: GuideStep[]
}

export interface QuizAttempt {
  questionId: string
  categoryId: CategoryId
  correct: boolean
  answeredAt: string
}

export interface DialogueMistake {
  keywords: string[]
  feedback: string
}

export interface DialogueQuestion {
  id: string
  categoryId: CategoryId
  prompt: string
  // 各グループから1つ以上のキーワードが回答に含まれていれば、そのグループは「言及できた」とみなす
  keywordGroups: string[][]
  mistakes: DialogueMistake[]
  modelAnswer: string
}
