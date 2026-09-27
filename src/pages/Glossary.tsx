import { useState } from 'react'
import { categories, getCategory } from '../data/categories'
import { glossary } from '../data/glossary'
import type { CategoryId } from '../types'

// カタカナをひらがなに変換し、よみがなでも検索できるようにする
function normalize(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60))
}

export default function Glossary() {
  const [keyword, setKeyword] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<CategoryId | 'all'>('all')

  const query = normalize(keyword)
  const terms = glossary.filter(
    (t) =>
      (categoryFilter === 'all' || t.categoryId === categoryFilter) &&
      (!query || [t.term, t.reading, t.description].some((s) => normalize(s).includes(query))),
  )

  return (
    <div>
      <h1 className="page-title">用語集</h1>
      <p className="page-subtitle">財務会計事務でよく出てくる言葉を、やさしく説明しています。</p>

      <input
        className="glossary-search"
        type="search"
        placeholder="用語を検索(例:償還、しょうかん)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <div className="filter-chips">
        <button
          className={`filter-chip ${categoryFilter === 'all' ? 'active' : ''}`}
          onClick={() => setCategoryFilter('all')}
        >
          すべて
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            className={`filter-chip ${categoryFilter === c.id ? 'active' : ''}`}
            onClick={() => setCategoryFilter(c.id)}
          >
            {c.name}
          </button>
        ))}
      </div>

      <p className="glossary-count">{terms.length}語</p>

      {terms.length === 0 ? (
        <p className="empty-state">該当する用語が見つかりませんでした。</p>
      ) : (
        <div className="glossary-list">
          {terms.map((t) => {
            const category = getCategory(t.categoryId)
            return (
              <div className="glossary-item" key={t.term}>
                <div className="glossary-item-header">
                  <span className="glossary-term">{t.term}</span>
                  {category && (
                    <span className="category-tag" style={{ background: category.color }}>
                      {category.name}
                    </span>
                  )}
                </div>
                <p className="glossary-reading">{t.reading}</p>
                <p className="glossary-description">{t.description}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
