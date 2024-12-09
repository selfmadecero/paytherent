import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import TenantLayout from '../../components/layout/TenantLayout';
import { useState, useEffect } from 'react';

interface RewardProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  discount: string;
  brandImage?: string;
  color: string;
}

const RewardsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'monthly'
  );

  useEffect(() => {
    const category = searchParams.get('category') || 'monthly';
    setSelectedCategory(category);
  }, [searchParams]);

  const handleCategoryChange = (categoryId: string) => {
    setSearchParams({ category: categoryId });
  };

  const rewardInfo = {
    availableAmount: 90000,
    nextReward: 30000,
    nextPaymentDate: '2024년 5월 25일',
  };

  const categories = [
    { id: 'monthly', name: '월세/공과금', icon: '💰' },
    { id: 'travel', name: '항공/여행', icon: '✈️' },
    { id: 'food', name: '맛집/카페', icon: '🍽️' },
    { id: 'life', name: '생활/편의점', icon: '🏪' },
  ];

  const rewardProducts: RewardProduct[] = [
    // 월세/공과금
    {
      id: '1',
      name: '월세 결제',
      category: 'monthly',
      description: '다음 달 월세 결제 시 사용',
      discount: '최대 100% 할인',
      color: 'from-blue-50 to-blue-100',
    },
    {
      id: '2',
      name: '전기요금',
      category: 'monthly',
      description: '한국전력공사 전기요금',
      discount: '최대 5만원 할인',
      color: 'from-yellow-50 to-yellow-100',
    },
    {
      id: '3',
      name: '도시가스',
      category: 'monthly',
      description: '서울도시가스 요금',
      discount: '최대 3만원 할인',
      color: 'from-orange-50 to-orange-100',
    },
    // 항공/여행
    {
      id: '4',
      name: '대한항공',
      category: 'travel',
      description: '국내/국제선 항공권',
      discount: '최대 15% 할인',
      color: 'from-sky-50 to-sky-100',
    },
    {
      id: '5',
      name: '아시아나항공',
      category: 'travel',
      description: '국내/국제선 항공권',
      discount: '최대 15% 할인',
      color: 'from-indigo-50 to-indigo-100',
    },
    {
      id: '6',
      name: '여기어때',
      category: 'travel',
      description: '국내 숙박 예약',
      discount: '최대 20% 할인',
      color: 'from-purple-50 to-purple-100',
    },
    // 맛집/카페
    {
      id: '7',
      name: '스타벅스',
      category: 'food',
      description: '전국 스타벅스 매장',
      discount: '최대 30% 할인',
      color: 'from-green-50 to-green-100',
    },
    {
      id: '8',
      name: '배달의민족',
      category: 'food',
      description: '배달앱 결제',
      discount: '최대 5천원 할인',
      color: 'from-blue-50 to-blue-100',
    },
    // 생활/편의점
    {
      id: '9',
      name: 'CU 편의점',
      category: 'life',
      description: '전국 CU 매장',
      discount: '최대 20% 할인',
      color: 'from-purple-50 to-purple-100',
    },
    {
      id: '10',
      name: 'GS25',
      category: 'life',
      description: '전국 GS25 매장',
      discount: '최대 20% 할인',
      color: 'from-orange-50 to-orange-100',
    },
  ];

  const filteredProducts = rewardProducts.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <TenantLayout>
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="px-4 h-[60px] flex items-center justify-center">
          <h1 className="text-lg font-bold">리워드</h1>
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

        {/* 카테고리 선택 */}
        <section className="space-y-4">
          <div className="flex overflow-x-auto py-2 -mx-4 px-4 space-x-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* 상품 리스트 */}
          <div className="grid grid-cols-1 gap-4">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/tenant/rewards/${product.id}`}
                className={`flex flex-col items-center bg-gradient-to-br ${product.color} p-6 rounded-2xl`}
              >
                <div className="flex items-start justify-between w-full">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {product.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-white/60 rounded-full text-sm font-medium text-gray-900 backdrop-blur-sm">
                      {product.discount}
                    </div>
                  </div>
                  {product.brandImage && (
                    <img
                      src={product.brandImage}
                      alt={product.name}
                      className="w-12 h-12 object-contain"
                    />
                  )}
                </div>
              </Link>
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
