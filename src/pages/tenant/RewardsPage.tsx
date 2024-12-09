import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TenantLayout from '../../components/layout/TenantLayout';

const RewardsPage = () => {
  const rewardInfo = {
    availableAmount: 90000,
    nextReward: 30000,
    nextPaymentDate: '2024년 5월 25일',
  };

  const rewardUsages = [
    {
      id: '1',
      icon: '💰',
      title: '월세 결제',
      description: '다음 달 월세 결제 시 현금처럼 사용',
      color: 'from-blue-50 to-blue-100',
      discount: '최대 100%',
    },
    {
      id: '2',
      icon: '💡',
      title: '공과금 결제',
      description: '전기/수도/가스 요금 결제',
      color: 'from-yellow-50 to-yellow-100',
      discount: '최대 5만원',
    },
    {
      id: '3',
      icon: '🏪',
      title: '편의점',
      description: 'CU, GS25, 세븐일레븐 등',
      color: 'from-green-50 to-green-100',
      discount: '최대 30% 할인',
    },
    {
      id: '4',
      icon: '🍽️',
      title: '식당/카페',
      description: '제휴 맛집 및 프랜차이즈',
      color: 'from-orange-50 to-orange-100',
      discount: '최대 20% 할인',
    },
  ];

  return (
    <TenantLayout>
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="px-4 h-[60px] flex items-center justify-between">
          <Link to="/tenant" className="text-gray-800 hover:text-gray-600">
            ← 뒤로가기
          </Link>
          <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold">
            리워드
          </h1>
          <div className="w-[60px]"></div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="p-4 space-y-6">
        {/* 리워드 요약 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-2xl text-white"
        >
          <div className="text-center mb-6">
            <h2 className="text-sm opacity-90 mb-2">사용 가능한 리워드</h2>
            <div className="text-3xl font-bold">
              {rewardInfo.availableAmount.toLocaleString()}원
            </div>
          </div>
          <Link
            to="/tenant/reward-history"
            className="block w-full py-3 bg-white/20 rounded-xl text-center backdrop-blur-sm hover:bg-white/30 transition-colors font-medium text-white"
          >
            리워드 내역 보기 →
          </Link>
        </motion.div>

        {/* 다음 리워드 예정 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-blue-50 p-6 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🎁</span>
            <h2 className="text-lg font-bold text-blue-900">
              다음 리워드 예정
            </h2>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-blue-800">예상 적립액</span>
              <span className="font-bold text-blue-900">
                +{rewardInfo.nextReward.toLocaleString()}원
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-800">적립 예정일</span>
              <span className="font-medium text-blue-900">
                {rewardInfo.nextPaymentDate}
              </span>
            </div>
          </div>
        </motion.div>

        {/* 리워드 사용처 */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold">리워드 사용처</h2>
          <div className="grid grid-cols-1 gap-4">
            {rewardUsages.map((usage, index) => (
              <motion.div
                key={usage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className={`bg-gradient-to-br ${usage.color} p-6 rounded-2xl relative overflow-hidden`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">
                    {usage.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">
                      {usage.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {usage.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-white/60 rounded-full text-sm font-medium text-gray-900 backdrop-blur-sm">
                      {usage.discount}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 리워드 적립 안내 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-100 p-6 rounded-2xl"
        >
          <h3 className="font-medium text-gray-900 mb-3">리워드 적립 안내</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• 월세 결제 금액의 최대 5%가 리워드로 적립</li>
            <li>• PLCC 카드 사용 시 추가 리워드 적립</li>
            <li>• 적립된 리워드는 다음 달부터 사용 가능</li>
            <li>• 리워드 유효기간: 적립일로부터 1년</li>
          </ul>
        </motion.div>
      </main>
    </TenantLayout>
  );
};

export default RewardsPage;
