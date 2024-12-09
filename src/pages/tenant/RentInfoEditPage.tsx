import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const RentInfoEditPage = () => {
  const navigate = useNavigate();
  const [rentInfo, setRentInfo] = useState({
    rentAmount: '1000000',
    rentDay: '25',
    landlordName: '홍길동',
    bankAccount: '1234567890',
    bankName: '신한은행',
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

  const handleSubmit = () => {
    // 실제로는 여기서 API를 호출하여 월세 정보를 업데이트합니다
    navigate('/tenant');
  };

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="px-4 h-[60px] flex items-center justify-between">
          <Link to="/tenant" className="text-gray-800 hover:text-gray-600">
            ← 뒤로가기
          </Link>
          <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold">
            월세 정보 변경
          </h1>
          <div className="w-[60px]"></div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="p-4 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl shadow-sm"
        >
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
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
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>
                    매월 {day}일
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                임대인 성함
              </label>
              <input
                type="text"
                name="landlordName"
                value={rentInfo.landlordName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
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
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              >
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
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="'-' 없이 입력"
              />
            </div>
          </div>
        </motion.div>

        {/* 주의사항 */}
        <section className="bg-yellow-50 p-4 rounded-xl">
          <h3 className="font-medium text-yellow-900 mb-2">
            월세 정보 변경 시 주의사항
          </h3>
          <ul className="space-y-2 text-sm text-yellow-800">
            <li>• 변경된 정보는 다음 결제일부터 적용됩니다</li>
            <li>• 임대인 정보 변경 시 확인이 필요할 수 있습니다</li>
            <li>• 계약서와 다른 정보 입력 시 불이익이 있을 수 있습니다</li>
          </ul>
        </section>

        {/* 저장 버튼 */}
        <div className="fixed bottom-4 left-4 right-4 max-w-[430px] mx-auto">
          <button
            onClick={handleSubmit}
            className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-center font-medium hover:shadow-lg transition-all"
          >
            변경사항 저장
          </button>
        </div>

        {/* 하단 여백 */}
        <div className="h-[80px]" />
      </main>
    </div>
  );
};

export default RentInfoEditPage;
