import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// 타입 정의
interface PaymentHistory {
  id: string;
  date: string;
  amount: number;
  reward: number;
  cardType: string;
  status: 'completed' | 'pending' | 'failed';
}

interface RewardHistory {
  id: string;
  date: string;
  amount: number;
  type: 'earn' | 'use';
  description: string;
}

const DashboardPage = () => {
  const [currentRent] = useState(1000000); // 현재 월세
  const [rewardBalance] = useState(50000); // 현재 리워드 잔액
  const [nextPaymentDate] = useState('2024-04-25'); // 다음 결제일
  const [showQuickMenu, setShowQuickMenu] = useState(false);

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-gray-50">
      {/* 헤더 개선 */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[430px] mx-auto">
          {/* 메인 헤더 */}
          <div className="bg-white px-4 h-14 flex items-center justify-between border-b border-gray-100">
            <h1 className="text-lg font-bold text-gray-900">PayTheRent</h1>
            <button
              className="p-2 hover:bg-gray-50 rounded-full transition-colors"
              onClick={() => setShowQuickMenu(!showQuickMenu)}
            >
              <span className="text-xl">☰</span>
            </button>
          </div>

          {/* 퀵 메뉴 */}
          <AnimatePresence>
            {showQuickMenu && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-14 right-0 w-48 bg-white shadow-lg rounded-bl-2xl overflow-hidden border border-gray-100"
              >
                <div className="py-2">
                  <Link
                    to="/tenant/profile"
                    className="px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <span>👤</span> 프로필
                  </Link>
                  <Link
                    to="/tenant/settings"
                    className="px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <span>⚙️</span> 설정
                  </Link>
                  <Link
                    to="/tenant/support"
                    className="px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <span>💬</span> 고객센터
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <main className="pt-14 pb-20">
        {/* 리워드 현황 섹션 개선 */}
        <section className="px-4 py-6 bg-gradient-to-br from-blue-600 to-purple-600">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white mb-4"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm opacity-90">현재 리워드 잔액</span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="px-2 py-0.5 bg-white/20 rounded-full text-xs backdrop-blur-sm"
              >
                PLCC 카드 사용 시 2배 적립
              </motion.span>
            </div>
            <p className="text-3xl font-bold">
              {rewardBalance.toLocaleString()}
              <span className="text-lg font-normal ml-1">원</span>
            </p>
          </motion.div>
          <div className="flex gap-2">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-2.5 px-4 bg-white/20 rounded-xl text-white text-sm font-medium backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <span>📊</span> 적립 내역
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-2.5 px-4 bg-white rounded-xl text-gray-900 text-sm font-medium flex items-center justify-center gap-2"
            >
              <span>💰</span> 사용하기
            </motion.button>
          </div>
        </section>

        {/* 월세 결제 섹션 개선 */}
        <section className="px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    이번 달 월세
                  </h3>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                    D-7
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  납부일: {nextPaymentDate}
                </p>
              </div>
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-1">결제 예정 금액</p>
                <div className="flex items-end gap-2">
                  <p className="text-3xl font-bold text-gray-900">
                    {currentRent.toLocaleString()}
                    <span className="text-lg font-normal ml-1">원</span>
                  </p>
                  <span className="text-sm text-blue-600 mb-1">
                    리워드 적립 예정: {(currentRent * 0.05).toLocaleString()}원
                  </span>
                </div>
              </div>
              <motion.div whileTap={{ scale: 0.98 }}>
                <Link
                  to="/tenant/payment"
                  className="block w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-center text-base font-medium shadow-sm"
                >
                  결제하기
                </Link>
              </motion.div>
            </div>
            {/* 배경 장식 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
          </motion.div>
        </section>

        {/* PLCC 카드 홍보 섹션 개선 */}
        <section className="px-4 mb-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900">수수료 0원</h3>
                <span className="px-2 py-0.5 bg-black/10 rounded-full text-xs font-medium">
                  PLCC 전용
                </span>
              </div>
              <p className="text-sm text-gray-800 mb-4">
                PLCC 카드로 결제하면 수수료가 무료!
                <br />
                리워드도 2배로 적립받으세요
              </p>
              <Link
                to="/tenant/plcc"
                className="inline-flex items-center gap-2 py-2.5 px-4 bg-gray-900 text-white rounded-xl text-sm font-medium"
              >
                <span>💳</span> 카드 발급받기
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-300 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
          </motion.div>
        </section>

        {/* 결제 내역 섹션 개선 */}
        <section className="px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">결제 내역</h3>
            <Link
              to="/tenant/history"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              전체보기
            </Link>
          </div>
          <div className="space-y-4">
            {/* 결제 내역 아이템 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-4 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">2024년 3월 월세</span>
                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                  완료
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-gray-900">
                  1,000,000원
                </span>
                <span className="text-sm text-green-600">+50,000 리워드</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits 섹션 수정 */}
        <section className="px-4 py-6">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded-full mb-3">
              특별한 혜택
            </span>
            <h2 className="text-[22px] font-bold mb-2">
              월세 결제가 특별해지는 순간
            </h2>
            <p className="text-[15px] text-gray-600">
              PayTheRent에서만 경험할 수 있는 혜택
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: '💳',
                title: '수수료 부담 ZERO',
                description: 'PLCC 카드로 결제하면\n수수료 걱정 없이',
                color: 'bg-blue-50',
              },
              {
                icon: '✨',
                title: '최대 5% 리워드',
                description: '생활비로 사용 가능한\n리워드 적립',
                color: 'bg-purple-50',
              },
              {
                icon: '⚡',
                title: '자동 결제',
                description: '매달 자동으로 결제되어\n연체 걱정 없이',
                color: 'bg-green-50',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${benefit.color} p-6 rounded-2xl`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-sm mb-4">
                    <span className="text-3xl">{benefit.icon}</span>
                  </div>
                  <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[15px] text-gray-600 whitespace-pre-line leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features 섹션 */}
        <section className="px-4 py-12 bg-gray-50">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 text-sm text-purple-600 bg-purple-50 rounded-full mb-3">
              이용 방법
            </span>
            <h2 className="text-[22px] font-bold mb-2">
              3분만에 시작하는
              <br />
              스마트한 월세 결제
            </h2>
            <p className="text-[15px] text-gray-600">
              복잡한 과정 없이 빠르게 시작하세요
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-full mb-4">
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials 섹션 */}
        <section className="px-4 py-12 bg-white">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 text-sm text-green-600 bg-green-50 rounded-full mb-3">
              고객 후기
            </span>
            <h2 className="text-[22px] font-bold mb-2">
              이미 많은 분들이
              <br />
              경험하고 있어요
            </h2>
            <p className="text-[15px] text-gray-600">
              PayTheRent 사용자들의 실제 후기
            </p>
          </div>

          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
                    {testimonial.content}
                  </p>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.emoji}
                    </div>
                    <div className="text-center">
                      <div className="text-[16px] font-medium text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-[14px] text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* 하단 네비게이션 개선 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100">
        <div className="max-w-[430px] mx-auto px-4 h-16 flex items-center justify-around">
          {[
            { to: '/tenant', icon: '🏠', label: '홈', active: true },
            { to: '/tenant/payment', icon: '💳', label: '결제' },
            { to: '/tenant/reward', icon: '🎁', label: '리워드' },
            { to: '/tenant/more', icon: '⚙️', label: '더보기' },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`flex flex-col items-center ${
                item.active ? 'text-blue-600' : 'text-gray-400'
              }`}
            >
              <span className="text-xl mb-1">{item.icon}</span>
              <span className="text-xs">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default DashboardPage;
