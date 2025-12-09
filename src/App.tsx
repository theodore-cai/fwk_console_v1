import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ConsoleLayout from './components/layout/ConsoleLayout'
import HomePage from './pages/sections/HomePage'
import TIRPage from './pages/sections/TIRPage'
import LTSPage from './pages/sections/LTSPage'
import AuthPage from './pages/sections/AuthPage'
import MFPage from './pages/sections/MFPage'
import BPFPage from './pages/sections/BPFPage'

function App() {
  return (
    <BrowserRouter>
      <ConsoleLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tir" element={<TIRPage />} />
          <Route path="/lts" element={<LTSPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/mf" element={<MFPage />} />
          <Route path="/bpf" element={<BPFPage />} />
        </Routes>
      </ConsoleLayout>
    </BrowserRouter>
  )
}

export default App
