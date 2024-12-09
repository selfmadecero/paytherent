import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/tenant/DashboardPage';
import RentInfoPage from './pages/tenant/RentInfoPage';
import RegisterCardPage from './pages/tenant/RegisterCardPage';
import PaymentPage from './pages/tenant/PaymentPage';
import RentInfoEditPage from './pages/tenant/RentInfoEditPage';
import PaymentCompletePage from './pages/tenant/PaymentCompletePage';
import HistoryPage from './pages/tenant/HistoryPage';
import RewardsPage from './pages/tenant/RewardsPage';
import SettingsPage from './pages/tenant/SettingsPage';
import RewardHistoryPage from './pages/tenant/RewardHistoryPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tenant" element={<DashboardPage />} />
          <Route path="/tenant/rent-info" element={<RentInfoPage />} />
          <Route path="/tenant/register" element={<RegisterCardPage />} />
          <Route
            path="/tenant/register-premium"
            element={<RegisterCardPage />}
          />
          <Route path="/tenant/payment" element={<PaymentPage />} />
          <Route
            path="/tenant/payment-complete"
            element={<PaymentCompletePage />}
          />
          <Route
            path="/landlord"
            element={<div>임대인 대시보드 (개발 중)</div>}
          />
          <Route path="/tenant/rent-info-edit" element={<RentInfoEditPage />} />
          <Route path="/tenant/history" element={<HistoryPage />} />
          <Route path="/tenant/rewards" element={<RewardsPage />} />
          <Route path="/tenant/settings" element={<SettingsPage />} />
          <Route
            path="/tenant/reward-history"
            element={<RewardHistoryPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
