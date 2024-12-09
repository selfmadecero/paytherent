import { motion } from 'framer-motion';

import TenantLayout from '../../components/layout/TenantLayout';

interface PaymentHistory {
  id: string;
  date: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  rewardAmount: number;
}

const HistoryPage = () => {
  const paymentHistories: PaymentHistory[] = [
    {
      id: '1',
      date: '2024년 4월 25일',
      amount: 1000000,
      status: 'completed',
      rewardAmount: 30000,
    },
    {
      id: '2',
      date: '2024년 3월 25일',
      amount: 1000000,
      status: 'completed',
      rewardAmount: 30000,
    },
    {
      id: '3',
      date: '2024년 2월 25일',
      amount: 1000000,
      status: 'completed',
      rewardAmount: 30000,
    },
  ];

  const getStatusColor = (status: PaymentHistory['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50';
      case 'failed':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusText = (status: PaymentHistory['status']) => {
    switch (status) {
      case 'completed':
        return '결제완료';
      case 'pending':
        return '결제예정';
      case 'failed':
        return '결제실패';
      default:
        return status;
    }
  };

  return (
    <TenantLayout>
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="px-4 h-[60px] flex items-center justify-between">
          <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold">
            결제내역
          </h1>
          <div className="w-[60px]"></div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="p-4 space-y-6">
        {/* 결제 요약 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl shadow-sm"
        >
          <h2 className="text-lg font-bold mb-4">결제 요약</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-xl">
              <div className="text-sm text-blue-600 mb-1">총 결제 금액</div>
              <div className="text-xl font-bold">
                {(3000000).toLocaleString()}원
              </div>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <div className="text-sm text-purple-600 mb-1">총 적립 리워드</div>
              <div className="text-xl font-bold">
                {(90000).toLocaleString()}원
              </div>
            </div>
          </div>
        </motion.div>

        {/* 결제 내역 리스트 */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold">상세 내역</h2>
          {paymentHistories.map((history, index) => (
            <motion.div
              key={history.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{history.date}</div>
                  <div className="text-2xl font-bold mt-1">
                    {history.amount.toLocaleString()}원
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    history.status
                  )}`}
                >
                  {getStatusText(history.status)}
                </span>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">적립 리워드</span>
                  <span className="font-medium text-blue-600">
                    +{history.rewardAmount.toLocaleString()}원
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </TenantLayout>
  );
};

export default HistoryPage;
