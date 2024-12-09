import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PaymentPage = () => {
  const [useReward, setUseReward] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const paymentInfo = {
    amount: 1000000,
    dueDate: '2024년 4월 25일',
    reward: 30000,
    cardInfo: {
      type: 'PLCC',
      number: '**** **** **** 1234',
      bank: '신한카드',
    },
  };

  const finalAmount = useReward
    ? paymentInfo.amount - paymentInfo.reward
    : paymentInfo.amount;

  const handlePayment = () => {
    setIsLoading(true);
    // 실제로는 여기서 결제 API를 호출하게 됩니다
    setTimeout(() => {
      window.location.href = '/tenant/payment-complete';
    }, 1500);
  };

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="px-4 h-[60px] flex items-center justify-between">
          <Link to="/tenant" className="text-gray-800 hover:text-gray-600">
            ← 뒤로가기
          </Link>
          <h1 className="text-lg font-bold">월세 결제</h1>
          <div className="w-[60px]"></div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="p-4 space-y-6">
        {/* 결제 금액 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl shadow-sm"
        >
          <div className="text-center mb-6">
            <h2 className="text-[15px] text-gray-600 mb-2">
              이번 달 결제할 월세
            </h2>
            <div className="text-[32px] font-bold">
              {paymentInfo.amount.toLocaleString()}원
            </div>
            <p className="text-sm text-gray-500 mt-2">
              납부일: {paymentInfo.dueDate}
            </p>
          </div>

          {/* 카드 정보 */}
          <div className="p-4 bg-gray-50 rounded-xl mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">💳</span>
                <div>
                  <div className="font-medium">{paymentInfo.cardInfo.bank}</div>
                  <div className="text-sm text-gray-500">
                    {paymentInfo.cardInfo.number}
                  </div>
                </div>
              </div>
              <Link
                to="/tenant/register"
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                변경
              </Link>
            </div>
          </div>

          {/* 리워드 사용 옵션 */}
          <div className="border-t border-gray-100 pt-4">
            <label className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div>
                <div className="font-medium">리워드 사용</div>
                <div className="text-sm text-gray-500">
                  사용 가능한 리워드: {paymentInfo.reward.toLocaleString()}원
                </div>
              </div>
              <input
                type="checkbox"
                checked={useReward}
                onChange={(e) => setUseReward(e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded-md focus:ring-blue-500"
              />
            </label>
          </div>
        </motion.div>

        {/* 결제 금액 명세 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-sm"
        >
          <h3 className="font-medium mb-4">결제 금액 상세</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>월세 금액</span>
              <span>{paymentInfo.amount.toLocaleString()}원</span>
            </div>
            {useReward && (
              <div className="flex justify-between text-blue-600">
                <span>리워드 사용</span>
                <span>-{paymentInfo.reward.toLocaleString()}원</span>
              </div>
            )}
            <div className="pt-3 border-t border-gray-100 flex justify-between font-bold text-lg">
              <span>최종 결제 금액</span>
              <span>{finalAmount.toLocaleString()}원</span>
            </div>
          </div>
        </motion.div>

        {/* 결제 예정 안내 */}
        <section className="bg-blue-50 p-4 rounded-xl">
          <h3 className="font-medium text-blue-900 mb-2">결제 예정 안내</h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>• 결제 완료 시 이메일로 영수증이 발송됩니다</li>
            <li>• 다음 달 자동 결제는 설정에서 변경 가능합니다</li>
            <li>• 결제 후 취소나 환불은 어려울 수 있습니다</li>
          </ul>
        </section>

        {/* 결제하기 버튼 */}
        <div className="fixed bottom-4 left-4 right-4 max-w-[430px] mx-auto">
          <button
            onClick={handlePayment}
            disabled={isLoading}
            className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-center font-medium hover:shadow-lg transition-all relative overflow-hidden"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  className="block w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                <span>결제 처리 중...</span>
              </div>
            ) : (
              `${finalAmount.toLocaleString()}원 결제하기`
            )}
          </button>
        </div>

        {/* 하단 여백 */}
        <div className="h-[80px]" />
      </main>
    </div>
  );
};

export default PaymentPage;
