import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const paymentInfo = {
    amount: 1000000,
    dueDate: '2024년 4월 25일',
    reward: 30000,
    status: 'pending', // pending, completed, overdue
  };

  const handleLogout = () => {
    // 실제 구현시에는 여기서 로그아웃 API를 호출하고,
    // 로컬 스토리지나 쿠키의 인증 정보를 삭제합니다
    navigate('/');
  };

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="px-4 h-[60px] flex items-center justify-between">
          <h1 className="text-lg font-bold">PayTheRent</h1>
          <button
            onClick={() => setShowLogoutModal(true)}
            className="text-gray-600 hover:text-gray-800 bg-transparent"
          >
            로그아웃
          </button>
        </div>
      </header>

      {/* 로그아웃 확인 모달 */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-[320px] bg-white rounded-2xl p-6 space-y-4"
          >
            <h2 className="text-lg font-bold text-gray-900 text-center">
              로그아웃
            </h2>
            <p className="text-gray-600 text-center">
              정말 로그아웃 하시겠습니까?
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="py-3 px-4 text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
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

      {/* 메인 컨텐츠 */}
      <main className="p-4 space-y-6">
        {/* 이번 달 월세 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl shadow-sm"
        >
          <div className="text-center mb-6 relative">
            <Link
              to="/tenant/rent-info-edit"
              className="absolute right-0 top-0 text-sm text-blue-600 hover:text-blue-700"
            >
              변경
            </Link>
            <h2 className="text-[15px] text-gray-600 mb-2">
              이번 달 결제할 월세
            </h2>
            <div className="text-[32px] font-bold">
              {paymentInfo.amount.toLocaleString()}원
            </div>
            <p className="text-sm text-gray-500 mt-2">
              다음 납부일: {paymentInfo.dueDate}
            </p>
          </div>

          <Link
            to="/tenant/payment"
            className="block w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-center font-medium hover:shadow-lg transition-all"
          >
            결제하기
          </Link>
        </motion.div>

        {/* 리워드 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">사용 가능한 리워드</h3>
            <Link
              to="/tenant/rewards"
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              자세히 보기
            </Link>
          </div>
          <div className="text-2xl font-bold text-blue-600">
            {paymentInfo.reward.toLocaleString()}원
          </div>
          <p className="text-sm text-gray-500 mt-1">
            다음 결제 시 사용 가능합니다
          </p>
        </motion.div>

        {/* 결제 내역 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">최근 결제 내역</h3>
            <Link
              to="/tenant/history"
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              전체 보기
            </Link>
          </div>
          <div className="space-y-4">
            {[
              {
                date: '2024년 3월 25일',
                amount: 1000000,
                status: 'completed',
              },
              {
                date: '2024년 2월 25일',
                amount: 1000000,
                status: 'completed',
              },
            ].map((payment, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
              >
                <div>
                  <div className="font-medium">
                    {payment.amount.toLocaleString()}원
                  </div>
                  <div className="text-sm text-gray-500">{payment.date}</div>
                </div>
                <span className="text-green-600">결제완료</span>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* 하단 네비게이션 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100">
        <div className="max-w-[430px] mx-auto px-4 h-[60px] flex items-center justify-around">
          <Link
            to="/tenant"
            className="flex flex-col items-center text-blue-600"
          >
            <span className="text-2xl">🏠</span>
            <span className="text-xs">홈</span>
          </Link>
          <Link
            to="/tenant/history"
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-2xl">📋</span>
            <span className="text-xs">결제내역</span>
          </Link>
          <Link
            to="/tenant/rewards"
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-2xl">🎁</span>
            <span className="text-xs">리워드</span>
          </Link>
          <Link
            to="/tenant/settings"
            className="flex flex-col items-center text-gray-400"
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

export default DashboardPage;
