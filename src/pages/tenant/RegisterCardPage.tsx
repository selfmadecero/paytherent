import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const RegisterCardPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardType, setCardType] = useState<string | null>(null);

  // 카드 번호 포맷팅 (4자리씩 구분)
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  // 유효기간 포맷팅 (MM/YY)
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return `${v.slice(0, 2)}/${v.slice(2, 4)}`;
    }
    return v;
  };

  // 카드 타입 감지
  const detectCardType = (number: string) => {
    const cleaned = number.replace(/\s+/g, '');
    if (cleaned.startsWith('4')) {
      setCardType('VISA');
    } else if (cleaned.startsWith('5')) {
      setCardType('Mastercard');
    } else if (cleaned.startsWith('3')) {
      setCardType('American Express');
    } else {
      setCardType(null);
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
    detectCardType(formatted);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    setExpiryDate(formatted);
  };

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="px-4 h-[60px] flex items-center justify-between">
          <Link to="/tenant" className="text-gray-800 hover:text-gray-600">
            ← 뒤로가기
          </Link>
          <h1 className="text-lg font-bold">카드 등록</h1>
          <div className="w-[60px]"></div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="p-4 space-y-6">
        {/* 카드 입력 폼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl shadow-sm"
        >
          <div className="space-y-4">
            {/* 카드 번호 입력 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                카드 번호
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  maxLength={19}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0000 0000 0000 0000"
                />
                {cardType && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    {cardType}
                  </span>
                )}
              </div>
            </div>

            {/* 유효기간과 CVC */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  유효기간
                </label>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                  maxLength={5}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVC
                </label>
                <input
                  type="password"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value.slice(0, 3))}
                  maxLength={3}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="000"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* 안내 사항 */}
        <section className="bg-blue-50 p-4 rounded-xl">
          <h3 className="font-medium text-blue-900 mb-2">
            안전한 결제를 위한 안내
          </h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>• 카드 정보는 암호화되어 안전하게 보관됩니다</li>
            <li>• 등록된 카드는 언제든 삭제/변경이 가능합니다</li>
            <li>• 카드 등록 후 바로 월세 결제가 가능합니다</li>
          </ul>
        </section>

        {/* 다음 버튼 */}
        <div className="fixed bottom-4 left-4 right-4 max-w-[430px] mx-auto">
          <Link
            to="/tenant/payment"
            className={`block w-full py-4 px-6 bg-gradient-to-r 
              ${
                cardNumber && expiryDate && cvc
                  ? 'from-blue-600 to-purple-600 text-white'
                  : 'from-gray-200 to-gray-300 text-gray-400'
              } 
              rounded-xl text-center font-medium transition-all`}
          >
            다음
          </Link>
        </div>

        {/* 하단 여백 */}
        <div className="h-[80px]" />
      </main>
    </div>
  );
};

export default RegisterCardPage;
