import { NavLink } from 'react-router-dom'

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
        <span className="nav-icon">🏠</span>
        <span>ホーム</span>
      </NavLink>
      <NavLink to="/records" className={({ isActive }) => (isActive ? 'active' : '')}>
        <span className="nav-icon">📊</span>
        <span>学習記録</span>
      </NavLink>
    </nav>
  )
}
