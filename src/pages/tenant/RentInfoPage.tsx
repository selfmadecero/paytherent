import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface RentInfo {
  rentAmount: string;
  rentDay: string;
  landlordName: string;
  bankAccount: string;
  bankName: string;
  phoneNumber: string;
  autoPayment: boolean;
}

const RentInfoPage = () => {
  const [step, setStep] = useState(1);
  const [rentInfo, setRentInfo] = useState<RentInfo>({
    rentAmount: '',
    rentDay: '',
    landlordName: '',
    bankAccount: '',
    bankName: '',
    phoneNumber: '',
    autoPayment: true,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setRentInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAutoPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRentInfo((prev) => ({
      ...prev,
      autoPayment: e.target.checked,
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <h2 className="text-xl font-bold mb-6">월세 정보 입력</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  월세 금액
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="rentAmount"
                    value={rentInfo.rentAmount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="1,000,000"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    원
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  월세 납부일
                </label>
                <select
                  name="rentDay"
                  value={rentInfo.rentDay}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">납부일 선택</option>
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <option key={day} value={day}>
                      매월 {day}일
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <h2 className="text-xl font-bold mb-6">임대인 정보 입력</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  임대인 성함
                </label>
                <input
                  type="text"
                  name="landlordName"
                  value={rentInfo.landlordName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  은행
                </label>
                <select
                  name="bankName"
                  value={rentInfo.bankName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">은행 선택</option>
                  {['신한은행', '국민은행', '우리은행', '하나은행'].map(
                    (bank) => (
                      <option key={bank} value={bank}>
                        {bank}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  계좌번호
                </label>
                <input
                  type="text"
                  name="bankAccount"
                  value={rentInfo.bankAccount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="'-' 없이 입력"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  연락처 (선택)
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={rentInfo.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="010-0000-0000"
                />
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <h2 className="text-xl font-bold mb-6">자동 결제 설정</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-xl">
                <h3 className="font-medium text-blue-900 mb-2">
                  매월 자동으로 결제되는 서비스입니다
                </h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• 설정한 날짜에 자동으로 결제됩니다</li>
                  <li>• 결제 전날 알림을 보내드립니다</li>
                  <li>• 언제든 설정에서 변경 가능합니다</li>
                </ul>
              </div>

              <label className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200">
                <div>
                  <div className="font-medium">자동 결제 설정</div>
                  <div className="text-sm text-gray-500">
                    매월 {rentInfo.rentDay}일에 자동으로 결제됩니다
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={rentInfo.autoPayment}
                  onChange={handleAutoPaymentChange}
                  className="w-5 h-5 text-blue-600 rounded-md focus:ring-blue-500"
                />
              </label>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="px-4 h-[60px] flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="text-gray-800 hover:text-gray-600 bg-transparent"
            >
              ← 이전
            </button>
          ) : (
            <Link to="/" className="text-gray-800 hover:text-gray-600">
              ← 홈으로
            </Link>
          )}
          <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold">
            월세 정보 설정
          </h1>
          <div className="w-[60px]"></div>
        </div>
      </header>

      {/* 진행 상태 바 */}
      <div className="bg-white px-4 py-3">
        <div className="h-1 bg-gray-100 rounded-full">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <main className="p-4">{renderStep()}</main>

      {/* 하단 버튼 */}
      <div className="fixed bottom-4 left-4 right-4 max-w-[430px] mx-auto">
        {step < 3 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-center font-medium hover:shadow-lg transition-all"
          >
            다음
          </button>
        ) : (
          <Link
            to="/tenant/register"
            className="block w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-center font-medium hover:shadow-lg transition-all"
          >
            카드 등록하기
          </Link>
        )}
      </div>

      {/* 하단 여백 */}
      <div className="h-[80px]" />
    </div>
  );
};

export default RentInfoPage;
