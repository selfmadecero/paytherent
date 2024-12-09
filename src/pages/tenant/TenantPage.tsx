import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TenantPage = () => {
  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="px-4 h-[60px] flex items-center justify-between">
          <Link to="/" className="text-gray-800 hover:text-gray-600">
            ← 뒤로가기
          </Link>
          <h1 className="text-lg font-bold">PayTheRent</h1>
          <div className="w-[60px]"></div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="p-4 space-y-6">
        {/* 월세 정보 섹션 */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-2xl shadow-sm"
          >
            <div className="text-center mb-6">
              <h2 className="text-[15px] text-gray-600 mb-2">
                이번 달 결제할 월세
              </h2>
              <div className="text-[32px] font-bold">1,000,000원</div>
              <p className="text-sm text-gray-500 mt-2">
                납부일: 2024년 4월 25일
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 p-3 bg-blue-50 rounded-lg mb-6">
              <span className="text-blue-600">💡</span>
              <p className="text-sm text-blue-600">
                PLCC 카드로 결제 시 <strong>수수료 0원 + 60만원 캐시백</strong>
              </p>
            </div>

            <div className="space-y-4">
              <Link
                to="/tenant/register-premium"
                className="block w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-center font-medium hover:shadow-lg transition-all relative overflow-hidden group hover:text-white"
              >
                <div className="absolute inset-0 bg-black/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">PLCC 카드로 시작하기</span>
              </Link>
              <Link
                to="/tenant/register"
                className="block w-full py-4 px-6 bg-white text-gray-700 border border-gray-200 rounded-xl text-center font-medium hover:bg-gray-50 transition-colors"
              >
                일반 카드로 시작하기
              </Link>
            </div>
          </motion.div>
        </section>

        {/* 혜택 비교 섹션 */}
        <section>
          <h2 className="text-lg font-bold mb-4">카드 혜택 비교</h2>
          <div className="grid grid-cols-1 gap-4">
            {/* PLCC 카드 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-2xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0">
                <div className="bg-yellow-400 text-[13px] font-bold px-4 py-1 rounded-bl-lg text-gray-900">
                  추천
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">PLCC 카드</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>
                    결제 수수료 <strong>0원</strong>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>
                    월 최대 <strong>60만원</strong> 캐시백
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>
                    연간 최대 <strong>720만원</strong> 혜택
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>제휴사 추가 5~10% 할인</span>
                </li>
              </ul>
            </motion.div>

            {/* 일반 카드 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-2xl border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                일반 카드
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-gray-400">✓</span>
                  <span>결제 수수료 5%</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-gray-400">✓</span>
                  <span>월 최대 5% 리워드 적립</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-gray-400">✓</span>
                  <span>자동 결제 설정</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* 안내 섹션 */}
        <section className="bg-gray-50 p-4 rounded-xl">
          <h3 className="font-medium text-gray-900 mb-2">꼭 확인해주세요!</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• PLCC 카드는 신용평가 후 발급됩니다</li>
            <li>• 리워드는 다음 달 월세 결제 시 사용 가능합니다</li>
            <li>• 카드 등록 시 본인 인증이 필요합니다</li>
          </ul>
        </section>
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

export default TenantPage;
