import { Link } from 'react-router-dom'
import QuizSession from '../components/QuizSession'
import { pickRandom, QUESTIONS_PER_SESSION } from '../quizUtils'
import { getReviewQuestions } from '../storage'

export default function Review() {
  if (getReviewQuestions().length === 0) {
    return (
      <div>
        <h1 className="page-title">間違えた問題の復習</h1>
        <p className="empty-state">
          復習が必要な問題はありません。
          <br />
          各分野のクイズに挑戦してみましょう。
        </p>
        <Link className="btn btn-primary btn-block" to="/">
          ホームに戻る
        </Link>
      </div>
    )
  }

  // 「もう一度挑戦する」を押した時点で、まだ間違えたままの問題から選び直す
  return (
    <QuizSession
      title="間違えた問題の復習"
      pickQuestions={() => pickRandom(getReviewQuestions(), QUESTIONS_PER_SESSION)}
      showCategory
    />
  )
}
