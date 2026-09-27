import { Link } from 'react-router-dom'
import { categories } from '../data/categories'
import { getCategoryStats, getReviewQuestions } from '../storage'

export default function Home() {
  const reviewCount = getReviewQuestions().length

  return (
    <div>
      <h1 className="page-title">財務会計事務 学習アプリ</h1>
      <p className="page-subtitle">
        起債・予算・決算の実務知識を、クイズと手順ガイドで身につけましょう。
      </p>
      {reviewCount > 0 && (
        <Link className="review-banner" to="/review">
          <span className="review-banner-title">間違えた問題が {reviewCount}問 あります</span>
          <span className="review-banner-sub">タップして解き直す ›</span>
        </Link>
      )}
      {categories.map((category) => {
        const stats = getCategoryStats(category.id)
        return (
          <div className="category-card" key={category.id}>
            <div className="category-card-header">
              <span className="category-dot" style={{ background: category.color }} />
              <span className="category-name">{category.name}</span>
            </div>
            <p className="category-desc">{category.description}</p>
            <p className="category-accuracy">
              {stats.attemptCount === 0
                ? 'まだクイズに挑戦していません'
                : `正解率 ${stats.accuracyRate}%(${stats.correctCount}/${stats.attemptCount}問)`}
            </p>
            <div className="category-actions">
              <Link className="btn btn-primary" to={`/quiz/${category.id}`}>
                クイズに挑戦
              </Link>
              <Link className="btn btn-secondary" to={`/guide/${category.id}`}>
                ガイドを読む
              </Link>
            </div>
            <Link className="btn btn-outline btn-block category-dialogue-link" to={`/dialogue/${category.id}`}>
              対話で学ぶ(記述式)
            </Link>
          </div>
        )
      })}
    </div>
  )
}
