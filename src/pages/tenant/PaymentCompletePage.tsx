import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PaymentCompletePage = () => {
  const paymentInfo = {
    amount: 1000000,
    date: '2024년 4월 25일',
    reward: 30000,
    nextPaymentDate: '2024년 5월 25일',
  };

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-gray-50">
      {/* 메인 컨텐츠 */}
      <main className="p-4 space-y-6">
        {/* 결제 완료 메시지 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-6 rounded-2xl shadow-sm text-center"
        >
          <div className="mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <span className="text-4xl">✓</span>
            </motion.div>
            <h1 className="text-2xl font-bold mb-2">결제가 완료되었습니다</h1>
            <p className="text-gray-600">
              {paymentInfo.date} 월세 결제가 정상적으로 처리되었습니다
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-600">결제 금액</span>
              <span className="font-bold">
                {paymentInfo.amount.toLocaleString()}원
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-gray-600">적립된 리워드</span>
              <span className="font-bold text-blue-600">
                +{paymentInfo.reward.toLocaleString()}원
              </span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-600">다음 결제일</span>
              <span className="font-medium">{paymentInfo.nextPaymentDate}</span>
            </div>
          </div>
        </motion.div>

        {/* 리워드 적립 알림 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-blue-50 p-6 rounded-2xl"
        >
          <h3 className="font-medium text-blue-900 mb-2">
            리워드가 적립되었어요! 🎉
          </h3>
          <p className="text-sm text-blue-800 mb-4">
            적립된 리워드는 다음 결제 시 사용하실 수 있습니다
          </p>
          <Link
            to="/tenant/rewards"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            리워드 확인하기 →
          </Link>
        </motion.div>

        {/* 버튼 */}
        <div className="space-y-4">
          <Link
            to="/tenant"
            className="block w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-center font-medium hover:shadow-lg transition-all"
          >
            홈으로 돌아가기
          </Link>
          <Link
            to="/tenant/history"
            className="block w-full py-4 px-6 bg-white text-gray-700 border border-gray-200 rounded-xl text-center font-medium hover:bg-gray-50 transition-all"
          >
            결제 내역 보기
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PaymentCompletePage;
