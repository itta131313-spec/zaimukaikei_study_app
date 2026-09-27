import { useState } from 'react'
import { Link } from 'react-router-dom'
import QuizSession from '../components/QuizSession'
import { getReviewQuestions } from '../storage'

export default function Review() {
  // 解いている途中で出題リストが変わらないよう、開始時点の問題で固定する
  const [questions] = useState(getReviewQuestions)

  if (questions.length === 0) {
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

  return <QuizSession title="間違えた問題の復習" questions={questions} showCategory />
}
