import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TenantLayout from '../../components/layout/TenantLayout';

interface RewardHistory {
  id: string;
  date: string;
  amount: number;
  type: 'earned' | 'used';
  description: string;
}

const RewardHistoryPage = () => {
  const rewardHistories: RewardHistory[] = [
    {
      id: '1',
      date: '2024년 4월 25일',
      amount: 30000,
      type: 'earned',
      description: '4월 월세 결제 적립',
    },
    {
      id: '2',
      date: '2024년 4월 10일',
      amount: 20000,
      type: 'used',
      description: '4월 공과금 결제 사용',
    },
    {
      id: '3',
      date: '2024년 3월 25일',
      amount: 30000,
      type: 'earned',
      description: '3월 월세 결제 적립',
    },
  ];

  const totalStats = {
    earned: 150000,
    used: 60000,
  };

  return (
    <TenantLayout>
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="px-4 h-[60px] flex items-center justify-between">
          <Link
            to="/tenant/rewards"
            className="text-gray-800 hover:text-gray-600"
          >
            ← 뒤로가기
          </Link>
          <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold">
            리워드 내역
          </h1>
          <div className="w-[60px]"></div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="p-4 space-y-6">
        {/* 리워드 통계 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl shadow-sm"
        >
          <h2 className="text-lg font-bold mb-4">리워드 통계</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-xl">
              <div className="text-sm text-blue-600 mb-1">총 적립</div>
              <div className="text-xl font-bold">
                {totalStats.earned.toLocaleString()}원
              </div>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <div className="text-sm text-purple-600 mb-1">총 사용</div>
              <div className="text-xl font-bold">
                {totalStats.used.toLocaleString()}원
              </div>
            </div>
          </div>
        </motion.div>

        {/* 리워드 내역 리스트 */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold">상세 내역</h2>
          {rewardHistories.map((history, index) => (
            <motion.div
              key={history.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">{history.date}</span>
                <span
                  className={`font-bold ${
                    history.type === 'earned'
                      ? 'text-blue-600'
                      : 'text-purple-600'
                  }`}
                >
                  {history.type === 'earned' ? '+' : '-'}
                  {history.amount.toLocaleString()}원
                </span>
              </div>
              <div className="text-sm text-gray-500">{history.description}</div>
            </motion.div>
          ))}
        </section>

        {/* 리워드 정책 안내 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-100 p-6 rounded-2xl"
        >
          <h3 className="font-medium text-gray-900 mb-3">리워드 정책 안내</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• 리워드는 적립일로부터 1년간 유효합니다</li>
            <li>• 사용하지 않은 리워드는 자동으로 소멸됩니다</li>
            <li>• 리워드는 최소 1,000원 단위로 사용 가능합니다</li>
          </ul>
        </motion.div>
      </main>
    </TenantLayout>
  );
};

export default RewardHistoryPage;
