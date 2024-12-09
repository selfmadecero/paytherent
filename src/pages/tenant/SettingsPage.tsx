import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import TenantLayout from '../../components/layout/TenantLayout';
import { useState } from 'react';

const SettingsPage = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [autoPayment, setAutoPayment] = useState(true);
  const [paymentAlarm, setPaymentAlarm] = useState(true);
  const [marketingAlarm, setMarketingAlarm] = useState(false);

  const handleLogout = () => {
    // 실제 구현시에는 여기서 로그아웃 API를 호출하고,
    // 로컬 스토리지나 쿠키의 인증 정보를 삭제합니다
    navigate('/');
  };

  const userInfo = {
    name: '홍길동',
    email: 'user@example.com',
    phone: '010-1234-5678',
  };

  return (
    <TenantLayout>
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="px-4 h-[60px] flex items-center justify-center">
          <h1 className="text-lg font-bold">설정</h1>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="p-4 space-y-6">
        {/* 프로필 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl shadow-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
              👤
            </div>
            <div>
              <div className="font-bold text-lg">{userInfo.name}</div>
              <div className="text-sm text-gray-500">{userInfo.email}</div>
            </div>
          </div>
          <Link
            to="/tenant/profile"
            className="block w-full py-3 px-4 text-center text-gray-600 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            프로필 수정
          </Link>
        </motion.div>

        {/* 결제 설정 */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold">결제 설정</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100"
          >
            <Link
              to="/tenant/rent-info-edit"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-900">월세 정보 변경</span>
              <span className="text-gray-400">→</span>
            </Link>
            <Link
              to="/tenant/register"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-900">결제 카드 변경</span>
              <span className="text-gray-400">→</span>
            </Link>
            <div className="flex items-center justify-between p-4">
              <span className="text-gray-900">자동 결제</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoPayment}
                  onChange={(e) => setAutoPayment(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </motion.div>
        </section>

        {/* 알림 설정 */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold">알림 설정</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100"
          >
            <div className="flex items-center justify-between p-4">
              <span className="text-gray-900">결제 알림</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={paymentAlarm}
                  onChange={(e) => setPaymentAlarm(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4">
              <span className="text-gray-900">마케팅 알림</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={marketingAlarm}
                  onChange={(e) => setMarketingAlarm(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </motion.div>
        </section>

        {/* 기타 메뉴 */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold">기타</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100"
          >
            <Link
              to="/tenant/terms"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-900">이용약관</span>
              <span className="text-gray-400">→</span>
            </Link>
            <Link
              to="/tenant/privacy"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-900">개인정보 처리방침</span>
              <span className="text-gray-400">→</span>
            </Link>
            <button
              onClick={() => setShowLogoutModal(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-red-500"
            >
              <span>로그아웃</span>
              <span>→</span>
            </button>
          </motion.div>
        </section>

        {/* 앱 버전 */}
        <div className="text-center text-sm text-gray-400">앱 버전 1.0.0</div>
      </main>

      {/* 로그아웃 확인 모달 */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-[320px] bg-white rounded-2xl p-6 space-y-4"
          >
            <h2 className="text-lg font-bold text-center">로그아웃</h2>
            <p className="text-gray-600 text-center">
              정말 로그아웃 하시겠습니까?
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="py-3 px-4 text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                취소
              </button>
              <button
                onClick={handleLogout}
                className="py-3 px-4 text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors"
              >
                확인
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </TenantLayout>
  );
};

export default SettingsPage;
