import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCategory } from '../data/categories'
import { getGuideByCategory } from '../data/guides'

export default function Guide() {
  const { categoryId } = useParams<{ categoryId: string }>()
  const category = getCategory(categoryId ?? '')
  const guide = getGuideByCategory(categoryId ?? '')
  const [index, setIndex] = useState(0)

  if (!category || !guide) {
    return (
      <div>
        <p className="page-subtitle">ガイドが見つかりませんでした。</p>
        <Link className="btn btn-primary" to="/">
          ホームに戻る
        </Link>
      </div>
    )
  }

  const step = guide.steps[index]
  const isLast = index === guide.steps.length - 1

  return (
    <div>
      <h1 className="page-title">{guide.title}</h1>
      <p className="progress-label">
        手順 {index + 1} / {guide.steps.length}
      </p>
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${((index + 1) / guide.steps.length) * 100}%` }}
        />
      </div>
      <div className="guide-step-card">
        <h2 className="guide-step-title">{step.title}</h2>
        <p className="guide-step-body">{step.body}</p>
      </div>
      <div className="guide-nav-actions">
        <button
          className="btn btn-outline"
          disabled={index === 0}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
        >
          前へ
        </button>
        {isLast ? (
          <Link className="btn btn-primary" to={`/quiz/${category.id}`}>
            クイズに挑戦する
          </Link>
        ) : (
          <button className="btn btn-primary" onClick={() => setIndex((i) => i + 1)}>
            次へ
          </button>
        )}
      </div>
    </div>
  )
}
