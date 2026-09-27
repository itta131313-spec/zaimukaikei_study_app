import { Link, useParams } from 'react-router-dom'
import QuizSession from '../components/QuizSession'
import { getCategory } from '../data/categories'
import { getQuizzesByCategory } from '../data/quizzes'
import { pickRandom, QUESTIONS_PER_SESSION } from '../quizUtils'

export default function Quiz() {
  const { categoryId } = useParams<{ categoryId: string }>()
  const category = getCategory(categoryId ?? '')
  const questions = getQuizzesByCategory(categoryId ?? '')

  if (!category || questions.length === 0) {
    return (
      <div>
        <p className="page-subtitle">クイズが見つかりませんでした。</p>
        <Link className="btn btn-primary" to="/">
          ホームに戻る
        </Link>
      </div>
    )
  }

  // 分野が切り替わったときに回答状況をリセットするため key を指定する
  return (
    <QuizSession
      key={category.id}
      title={`${category.name}のクイズ`}
      pickQuestions={() => pickRandom(questions, QUESTIONS_PER_SESSION)}
    />
  )
}
