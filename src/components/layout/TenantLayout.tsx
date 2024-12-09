import { Link, useLocation } from 'react-router-dom';

interface TenantLayoutProps {
  children: React.ReactNode;
}

const TenantLayout = ({ children }: TenantLayoutProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-gray-50">
      {children}

      {/* 하단 네비게이션 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100">
        <div className="max-w-[430px] mx-auto px-4 h-[60px] flex items-center justify-around">
          <Link
            to="/tenant"
            className={`flex flex-col items-center ${
              isActive('/tenant') ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <span className="text-2xl">🏠</span>
            <span className="text-xs">홈</span>
          </Link>
          <Link
            to="/tenant/history"
            className={`flex flex-col items-center ${
              isActive('/tenant/history') ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <span className="text-2xl">📋</span>
            <span className="text-xs">결제내역</span>
          </Link>
          <Link
            to="/tenant/rewards"
            className={`flex flex-col items-center ${
              isActive('/tenant/rewards') ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <span className="text-2xl">🎁</span>
            <span className="text-xs">리워드</span>
          </Link>
          <Link
            to="/tenant/settings"
            className={`flex flex-col items-center ${
              isActive('/tenant/settings') ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <span className="text-2xl">⚙️</span>
            <span className="text-xs">설정</span>
          </Link>
        </div>
      </nav>

      {/* 하단 여백 */}
      <div className="h-[80px]" />
    </div>
  );
};

export default TenantLayout;
