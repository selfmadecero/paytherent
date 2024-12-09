import { dummyPayments, dummyRewards } from '../../data/dummyData';
import {
  HomeIcon,
  CreditCardIcon,
  GiftIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

export default function TenantDashboard() {
  const latestPayment = dummyPayments[dummyPayments.length - 1];
  const totalRewardPoints = dummyRewards
    .filter((reward) => reward.userId === '1')
    .reduce((acc, curr) => {
      return curr.type === 'earned' ? acc + curr.points : acc - curr.points;
    }, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto relative">
      {/* 상단 헤더 */}
      <header className="bg-white px-4 py-3 shadow-sm fixed top-0 w-full max-w-md z-10">
        <h1 className="text-lg font-bold text-gray-900">홈</h1>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="flex-1 overflow-y-auto px-4 pt-16 pb-20">
        {/* 월세 결제 카드 */}
        <div className="bg-primary text-white rounded-2xl p-5 mb-6">
          <h2 className="text-sm font-medium mb-2">이번 달 월세</h2>
          <p className="text-2xl font-bold mb-4">
            {latestPayment.amount.toLocaleString()}원
          </p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs opacity-80">결제 예정일</p>
              <p className="font-medium">{latestPayment.date}</p>
            </div>
            <button className="bg-white text-primary px-4 py-2 rounded-full text-sm font-medium">
              {latestPayment.status === 'pending' ? '결제하기' : '결제완료'}
            </button>
          </div>
        </div>

        {/* 리워드 포인트 카드 */}
        <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">리워드 포인트</h2>
            <p className="text-xl font-bold text-primary">
              {totalRewardPoints.toLocaleString()} P
            </p>
          </div>
          <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-xl font-medium">
            포인트 사용하기
          </button>
        </div>

        {/* 최근 리워드 내역 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold mb-4">최근 리워드 내역</h2>
          <div className="space-y-4">
            {dummyRewards.map((reward) => (
              <div
                key={reward.id}
                className="flex justify-between items-center border-b border-gray-100 pb-4"
              >
                <div>
                  <p className="font-medium text-sm">{reward.description}</p>
                  <p className="text-xs text-gray-500">{reward.date}</p>
                </div>
                <p
                  className={`font-bold ${
                    reward.type === 'earned' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {reward.type === 'earned' ? '+' : '-'}
                  {reward.points.toLocaleString()} P
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 하단 네비게이션 바 */}
      <nav className="bg-white fixed bottom-0 w-full max-w-md border-t border-gray-200">
        <div className="flex justify-around py-2">
          <button className="flex flex-col items-center px-4 py-2 text-primary">
            <HomeIcon className="h-6 w-6" />
            <span className="text-xs mt-1">홈</span>
          </button>
          <button className="flex flex-col items-center px-4 py-2 text-gray-400">
            <CreditCardIcon className="h-6 w-6" />
            <span className="text-xs mt-1">결제</span>
          </button>
          <button className="flex flex-col items-center px-4 py-2 text-gray-400">
            <GiftIcon className="h-6 w-6" />
            <span className="text-xs mt-1">리워드</span>
          </button>
          <button className="flex flex-col items-center px-4 py-2 text-gray-400">
            <UserIcon className="h-6 w-6" />
            <span className="text-xs mt-1">내정보</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
