import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCategory } from '../data/categories'
import { getDialoguesByCategory } from '../data/dialogues'
import { gradeDialogueAnswer, type DialogueVerdict } from '../dialogueGrading'

const verdictLabel: Record<DialogueVerdict, string> = {
  correct: '正解です!',
  partial: '惜しい、一部足りません',
  incorrect: '見直しが必要です',
}

export default function Dialogue() {
  const { categoryId } = useParams<{ categoryId: string }>()
  const category = getCategory(categoryId ?? '')
  const questions = useMemo(() => getDialoguesByCategory(categoryId ?? ''), [categoryId])

  const [index, setIndex] = useState(0)
  const [input, setInput] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [verdict, setVerdict] = useState<DialogueVerdict | null>(null)
  const [mistakeFeedback, setMistakeFeedback] = useState<string[]>([])
  const [tally, setTally] = useState({ correct: 0, partial: 0, incorrect: 0 })
  const [finished, setFinished] = useState(false)

  if (!category || questions.length === 0) {
    return (
      <div>
        <p className="page-subtitle">対話形式の問題が見つかりませんでした。</p>
        <Link className="btn btn-primary" to="/">
          ホームに戻る
        </Link>
      </div>
    )
  }

  const handleRestart = () => {
    setIndex(0)
    setInput('')
    setSubmitted(false)
    setVerdict(null)
    setMistakeFeedback([])
    setTally({ correct: 0, partial: 0, incorrect: 0 })
    setFinished(false)
  }

  if (finished) {
    return (
      <div>
        <h1 className="page-title">{category.name}の対話演習 結果</h1>
        <div className="summary-card">
          <p>お疲れさまでした!</p>
          <p className="summary-score">{tally.correct} / {questions.length} 問正解</p>
          <p>
            一部正解 {tally.partial}問 ・ 要復習 {tally.incorrect}問
          </p>
          <div className="summary-actions">
            <button className="btn btn-primary btn-block" onClick={handleRestart}>
              もう一度挑戦する
            </button>
            <Link className="btn btn-outline btn-block" to="/">
              ホームに戻る
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[index]

  const handleSubmit = () => {
    if (submitted || !input.trim()) return
    const result = gradeDialogueAnswer(question, input)
    setVerdict(result.verdict)
    setMistakeFeedback(result.mistakeFeedback)
    setSubmitted(true)
    setTally((t) => ({ ...t, [result.verdict]: t[result.verdict] + 1 }))
  }

  const handleNext = () => {
    if (index + 1 >= questions.length) {
      setFinished(true)
      return
    }
    setIndex((i) => i + 1)
    setInput('')
    setSubmitted(false)
    setVerdict(null)
    setMistakeFeedback([])
  }

  return (
    <div>
      <h1 className="page-title">{category.name}の対話演習</h1>
      <p className="page-subtitle">
        財政担当者からの質問に、自分の言葉で答えてみましょう。間違いがあれば指摘します。
      </p>
      <p className="progress-label">
        質問 {index + 1} / {questions.length}
      </p>
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${((index + (submitted ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      <div className="dialogue-bubble dialogue-bubble-bot">
        <p className="dialogue-bubble-label">財政担当者</p>
        <p className="dialogue-bubble-text">{question.prompt}</p>
      </div>

      {!submitted ? (
        <>
          <textarea
            className="dialogue-textarea"
            placeholder="自分の言葉で答えを入力してください"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
          />
          <button className="btn btn-primary btn-block" onClick={handleSubmit} disabled={!input.trim()}>
            回答する
          </button>
        </>
      ) : (
        <>
          <div className="dialogue-bubble dialogue-bubble-user">
            <p className="dialogue-bubble-label">あなたの回答</p>
            <p className="dialogue-bubble-text">{input}</p>
          </div>

          <div className={`result-banner ${verdict === 'correct' ? 'correct' : verdict === 'partial' ? 'partial' : 'incorrect'}`}>
            {verdict ? verdictLabel[verdict] : ''}
          </div>

          {mistakeFeedback.map((feedback, i) => (
            <div className="explanation-box dialogue-mistake-box" key={i}>
              {feedback}
            </div>
          ))}

          <div className="dialogue-model-answer">
            <p className="dialogue-model-answer-label">模範解答</p>
            <p className="dialogue-model-answer-text">{question.modelAnswer}</p>
          </div>

          <button className="btn btn-primary btn-block" onClick={handleNext}>
            {index + 1 >= questions.length ? '結果を見る' : '次の質問へ'}
          </button>
        </>
      )}
    </div>
  )
}
