import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TenantPage from './pages/tenant/TenantPage';
import RegisterCardPage from './pages/tenant/RegisterCardPage';
import PaymentPage from './pages/tenant/PaymentPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tenant" element={<TenantPage />} />
          <Route path="/tenant/register" element={<RegisterCardPage />} />
          <Route
            path="/tenant/register-premium"
            element={<RegisterCardPage />}
          />
          <Route path="/tenant/payment" element={<PaymentPage />} />
          <Route
            path="/landlord"
            element={<div>임대인 대시보드 (개발 중)</div>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
