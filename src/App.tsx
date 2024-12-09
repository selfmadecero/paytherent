import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TenantDashboard from './pages/tenant/DashboardPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tenant" element={<TenantDashboard />} />
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
