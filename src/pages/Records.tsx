import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories, getCategory } from '../data/categories'
import {
  type AccuracyLevel,
  clearAllRecords,
  getAccuracyLevel,
  getCategoryStats,
  getReviewQuestions,
  getWeakQuestions,
} from '../storage'

const levelLabel: Record<AccuracyLevel, string> = {
  none: '',
  good: 'よくできています',
  fair: 'もう少し',
  weak: '苦手分野',
}

export default function Records() {
  const [, setVersion] = useState(0)

  const handleClear = () => {
    if (window.confirm('これまでの学習記録をすべて削除します。よろしいですか?')) {
      clearAllRecords()
      setVersion((v) => v + 1)
    }
  }

  const weakQuestions = getWeakQuestions()
  const reviewCount = getReviewQuestions().length

  return (
    <div>
      <h1 className="page-title">学習記録</h1>
      <p className="page-subtitle">分野ごとの正解率と、間違えることが多い問題を確認できます。</p>

      <p className="section-title">分野別の正解率</p>
      {categories.map((category) => {
        const stats = getCategoryStats(category.id)
        const level = getAccuracyLevel(stats)
        return (
          <div className={`stat-card level-${level}`} key={category.id}>
            <div className="stat-card-header">
              <span className="stat-card-name">
                {category.name}
                {level !== 'none' && <span className="level-badge">{levelLabel[level]}</span>}
              </span>
              <span className="stat-card-rate">
                {stats.attemptCount === 0 ? '-' : `${stats.accuracyRate}%`}
              </span>
            </div>
            <div className="stat-bar-track">
              <div
                className="stat-bar-fill"
                style={{ width: `${stats.attemptCount === 0 ? 0 : stats.accuracyRate}%` }}
              />
            </div>
            <p className="stat-card-sub">
              {stats.attemptCount === 0
                ? 'まだ挑戦していません'
                : `${stats.attemptCount}問中 ${stats.correctCount}問正解`}
            </p>
            {level === 'weak' && (
              <div className="stat-card-actions">
                <Link className="btn btn-secondary" to={`/guide/${category.id}`}>
                  ガイドで復習
                </Link>
                <Link className="btn btn-outline" to={`/quiz/${category.id}`}>
                  クイズに再挑戦
                </Link>
              </div>
            )}
          </div>
        )
      })}

      <p className="section-title">間違えた問題</p>
      {weakQuestions.length === 0 ? (
        <p className="empty-state">間違えた問題はまだありません。</p>
      ) : (
        <>
          {reviewCount > 0 && (
            <Link className="btn btn-primary btn-block review-start-btn" to="/review">
              間違えた問題だけ解き直す({reviewCount}問)
            </Link>
          )}
          <p className="weak-hint">問題をタップすると、正解と解説を確認できます。</p>
          <div className="weak-list">
            {weakQuestions.map((w) => {
              const category = getCategory(w.question.categoryId)
              return (
                <details className="weak-item" key={w.question.id}>
                  <summary>
                    <p className="weak-item-meta">
                      {category && (
                        <span className="category-tag" style={{ background: category.color }}>
                          {category.name}
                        </span>
                      )}
                      <span>間違えた回数 {w.wrongCount}回</span>
                      {w.lastCorrect && <span className="resolved-tag">前回は正解</span>}
                    </p>
                    <p className="weak-item-question">{w.question.question}</p>
                  </summary>
                  <div className="weak-item-answer">
                    <p className="weak-item-answer-label">正解</p>
                    <p className="weak-item-answer-text">
                      {w.question.choices[w.question.correctIndex]}
                    </p>
                    <p className="weak-item-answer-label">解説</p>
                    <p className="weak-item-answer-text">{w.question.explanation}</p>
                  </div>
                </details>
              )
            })}
          </div>
        </>
      )}

      <button
        className="btn btn-outline btn-block"
        style={{ marginTop: 20 }}
        onClick={handleClear}
      >
        学習記録をリセット
      </button>

      <p className="disclaimer">
        本アプリのクイズ・解説は一般的な自治体財務会計知識をもとに作成した学習用コンテンツです。実際の事務処理にあたっては、必ず所属団体の例規・マニュアル等をご確認ください。
      </p>
    </div>
  )
}
