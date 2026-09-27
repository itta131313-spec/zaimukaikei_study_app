import { Route, Routes } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import Dialogue from './pages/Dialogue'
import Glossary from './pages/Glossary'
import Guide from './pages/Guide'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Records from './pages/Records'
import Review from './pages/Review'

export default function App() {
  return (
    <>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide/:categoryId" element={<Guide />} />
          <Route path="/quiz/:categoryId" element={<Quiz />} />
          <Route path="/dialogue/:categoryId" element={<Dialogue />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/review" element={<Review />} />
          <Route path="/records" element={<Records />} />
        </Routes>
      </main>
      <BottomNav />
    </>
  )
}
