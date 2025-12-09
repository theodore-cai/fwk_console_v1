import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ConsoleLayout from './components/layout/ConsoleLayout'
import HomePage from './pages/sections/HomePage'
import LTSPage from './pages/sections/LTSPage'
import AuthPage from './pages/sections/AuthPage'
import MFPage from './pages/sections/MFPage'
import BPFPage from './pages/sections/BPFPage'
import IndexManagementPage from './pages/sections/TIRPage/IndexManagementPage'
import HealthMonitorPage from './pages/sections/TIRPage/HealthMonitorPage'
import RemoteServiceTriggerPage from './pages/sections/TIRPage/RemoteServiceTriggerPage'
import UserBehaviorAnalysisPage from './pages/sections/TIRPage/UserBehaviorAnalysisPage'
import TIRDomainManagementPage from './pages/sections/TIRPage/TIRDomainManagementPage'

function App() {
  return (
    <BrowserRouter>
      <ConsoleLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tir" element={<Navigate to="/tir/index-management" replace />} />
          <Route path="/tir/index-management" element={<IndexManagementPage />} />
          <Route path="/tir/health-monitor" element={<HealthMonitorPage />} />
          <Route path="/tir/remote-service-trigger" element={<RemoteServiceTriggerPage />} />
          <Route path="/tir/user-behavior-analysis" element={<UserBehaviorAnalysisPage />} />
          <Route path="/tir/tir-domain-management" element={<TIRDomainManagementPage />} />
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
