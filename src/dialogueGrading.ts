import type { DialogueQuestion } from './types'

export type DialogueVerdict = 'correct' | 'partial' | 'incorrect'

export interface DialogueGradeResult {
  verdict: DialogueVerdict
  mistakeFeedback: string[]
}

export function gradeDialogueAnswer(
  question: DialogueQuestion,
  rawAnswer: string,
): DialogueGradeResult {
  const answer = rawAnswer.trim()

  const mistakeFeedback = question.mistakes
    .filter((m) => m.keywords.some((k) => answer.includes(k)))
    .map((m) => m.feedback)

  if (!answer) {
    return { verdict: 'incorrect', mistakeFeedback }
  }

  const matchedGroupCount = question.keywordGroups.filter((group) =>
    group.some((k) => answer.includes(k)),
  ).length
  const totalGroups = question.keywordGroups.length

  let verdict: DialogueVerdict
  if (mistakeFeedback.length > 0) {
    verdict = 'incorrect'
  } else if (totalGroups > 0 && matchedGroupCount === totalGroups) {
    verdict = 'correct'
  } else if (matchedGroupCount > 0) {
    verdict = 'partial'
  } else {
    verdict = 'incorrect'
  }

  return { verdict, mistakeFeedback }
}
