import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getCategory } from '../data/categories'
import { shuffleChoices } from '../quizUtils'
import { recordAttempt } from '../storage'
import type { QuizQuestion } from '../types'

interface Props {
  title: string
  // 出題する問題を選ぶ関数。開始時と「もう一度挑戦する」のたびに呼び出す
  pickQuestions: () => QuizQuestion[]
  // 復習モードなど、複数分野の問題が混ざる場合に分野名を表示する
  showCategory?: boolean
}

function prepareQuestions(pickQuestions: () => QuizQuestion[]): QuizQuestion[] {
  return pickQuestions().map(shuffleChoices)
}

export default function QuizSession({ title, pickQuestions, showCategory = false }: Props) {
  const [questions, setQuestions] = useState(() => prepareQuestions(pickQuestions))
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [finished, setFinished] = useState(false)

  const handleRestart = () => {
    setQuestions(prepareQuestions(pickQuestions))
    setIndex(0)
    setSelected(null)
    setAnswered(false)
    setCorrectCount(0)
    setFinished(false)
  }

  // 復習モードで全問克服した後に「もう一度挑戦する」を押した場合など
  if (questions.length === 0) {
    return (
      <div>
        <h1 className="page-title">{title}</h1>
        <p className="empty-state">出題できる問題がありません。</p>
        <Link className="btn btn-primary btn-block" to="/">
          ホームに戻る
        </Link>
      </div>
    )
  }

  if (finished) {
    return (
      <div>
        <h1 className="page-title">{title} 結果</h1>
        <div className="summary-card">
          <p>お疲れさまでした!</p>
          <p className="summary-score">
            {correctCount} / {questions.length} 問正解
          </p>
          <p>正解率 {Math.round((correctCount / questions.length) * 100)}%</p>
          <div className="summary-actions">
            <button className="btn btn-primary btn-block" onClick={handleRestart}>
              もう一度挑戦する
            </button>
            <Link className="btn btn-secondary btn-block" to="/records">
              学習記録を見る
            </Link>
            <Link className="btn btn-outline btn-block" to="/">
              ホームに戻る
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[index]
  const isCorrect = selected === question.correctIndex
  const questionCategory = getCategory(question.categoryId)

  const handleSelect = (choiceIndex: number) => {
    if (answered) return
    const correct = choiceIndex === question.correctIndex
    setSelected(choiceIndex)
    setAnswered(true)
    if (correct) setCorrectCount((c) => c + 1)
    recordAttempt(question.id, question.categoryId, correct)
  }

  const handleNext = () => {
    if (index + 1 >= questions.length) {
      setFinished(true)
      return
    }
    setIndex((i) => i + 1)
    setSelected(null)
    setAnswered(false)
  }

  return (
    <div>
      <h1 className="page-title">{title}</h1>
      <p className="progress-label">
        問題 {index + 1} / {questions.length}
      </p>
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${((index + (answered ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>
      <div className="question-card">
        {showCategory && questionCategory && (
          <span className="category-tag" style={{ background: questionCategory.color }}>
            {questionCategory.name}
          </span>
        )}
        <p className="question-text">{question.question}</p>
        <div className="choice-list">
          {question.choices.map((choice, i) => {
            let className = 'choice-btn'
            if (answered) {
              if (i === question.correctIndex) className += ' correct'
              else if (i === selected) className += ' incorrect'
            }
            return (
              <button
                key={i}
                className={className}
                disabled={answered}
                onClick={() => handleSelect(i)}
              >
                {choice}
              </button>
            )
          })}
        </div>
      </div>
      {answered && (
        <>
          <div className={`result-banner ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? '正解です!' : '不正解です'}
          </div>
          <div className="explanation-box">{question.explanation}</div>
          <button className="btn btn-primary btn-block" onClick={handleNext}>
            {index + 1 >= questions.length ? '結果を見る' : '次の問題へ'}
          </button>
        </>
      )}
    </div>
  )
}
