import { useState } from 'react'
import { categories } from '../data/categories'
import { clearAllRecords, getCategoryStats, getWeakQuestions } from '../storage'

export default function Records() {
  const [, setVersion] = useState(0)

  const handleClear = () => {
    if (window.confirm('これまでの学習記録をすべて削除します。よろしいですか?')) {
      clearAllRecords()
      setVersion((v) => v + 1)
    }
  }

  const weakQuestions = getWeakQuestions()

  return (
    <div>
      <h1 className="page-title">学習記録</h1>
      <p className="page-subtitle">分野ごとの正解率と、間違えることが多い問題を確認できます。</p>

      <p className="section-title">分野別の正解率</p>
      {categories.map((category) => {
        const stats = getCategoryStats(category.id)
        return (
          <div className="stat-card" key={category.id}>
            <div className="stat-card-header">
              <span className="stat-card-name">{category.name}</span>
              <span className="stat-card-rate">
                {stats.attemptCount === 0 ? '-' : `${stats.accuracyRate}%`}
              </span>
            </div>
            <div className="stat-bar-track">
              <div
                className="stat-bar-fill"
                style={{
                  width: `${stats.attemptCount === 0 ? 0 : stats.accuracyRate}%`,
                  background: category.color,
                }}
              />
            </div>
            <p className="stat-card-sub">
              {stats.attemptCount === 0
                ? 'まだ挑戦していません'
                : `${stats.attemptCount}問中 ${stats.correctCount}問正解`}
            </p>
          </div>
        )
      })}

      <p className="section-title">苦手な問題</p>
      {weakQuestions.length === 0 ? (
        <p className="empty-state">間違えた問題はまだありません。</p>
      ) : (
        <div className="weak-list">
          {weakQuestions.map((w) => (
            <div className="weak-item" key={w.questionId}>
              <p className="weak-item-meta">間違えた回数 {w.wrongCount}回</p>
              <p className="weak-item-question">{w.question}</p>
            </div>
          ))}
        </div>
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
