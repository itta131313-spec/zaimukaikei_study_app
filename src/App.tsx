import { Route, Routes } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import Dialogue from './pages/Dialogue'
import Guide from './pages/Guide'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Records from './pages/Records'

export default function App() {
  return (
    <>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide/:categoryId" element={<Guide />} />
          <Route path="/quiz/:categoryId" element={<Quiz />} />
          <Route path="/dialogue/:categoryId" element={<Dialogue />} />
          <Route path="/records" element={<Records />} />
        </Routes>
      </main>
      <BottomNav />
    </>
  )
}
