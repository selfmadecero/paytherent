import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import TenantLayout from '../../components/layout/TenantLayout';

interface RewardDetail {
  id: string;
  name: string;
  category: string;
  description: string;
  discount: string;
  brandImage?: string;
  color: string;
  howToUse: string[];
  terms: string[];
  partnerStores?: string[];
  additionalInfo?: string[];
  travelInfo?: {
    validRoutes: string[];
    blackoutDates: string[];
    mileageInfo: string[];
  };
}

const RewardDetailPage = () => {
  const { id } = useParams();

  // 실제로는 API나 store에서 가져올 데이터
  const rewardDetails: Record<string, RewardDetail> = {
    '1': {
      id: '1',
      name: '월세 결제',
      category: 'monthly',
      description: '다음 달 월세 결제 시 사용',
      discount: '최대 100% 할인',
      color: 'from-blue-50 to-blue-100',
      howToUse: [
        '결제 페이지에서 "리워드 사용" 옵션 선택',
        '사용할 리워드 금액 입력 (최소 1,000원 단위)',
        '리워드 차감 후 남은 금액만 카드 결제',
        '리워드 사용 시 취소/환불 불가',
      ],
      terms: [
        '월세 결제 시에만 사용 가능',
        '부분 취소 및 환불 불가',
        '리워드 유효기간: 적립일로부터 1년',
        '최소 사용 금액: 1,000원',
      ],
    },
    '2': {
      id: '2',
      name: '전기요금',
      category: 'monthly',
      description: '한국전력공사 전기요금',
      discount: '최대 5만원 할인',
      color: 'from-yellow-50 to-yellow-100',
      howToUse: [
        '한전 홈페이지/앱에서 고객번호 확인',
        'PayTheRent 앱에서 전기요금 선택',
        '고객번호 입력 후 납부할 요금 확인',
        '리워드로 결제할 금액 선택 (최소 1천원)',
        '리워드 차감 후 남은 금액 카드 결제',
      ],
      terms: [
        '한국전력공사 전기요금만 결제 가능',
        '월 최대 5만원까지 리워드 사용 가능',
        '부분 취소 및 환불 불가',
        '리워드 유효기간: 적립일로부터 1년',
        '자동이체 설정된 고객번호는 결제 불가',
      ],
      partnerStores: [
        '한국전력공사 홈페이지',
        '한전 모바일 앱',
        'PayTheRent 앱 내 공과금 결제',
      ],
      additionalInfo: [
        '전기요금 미납분도 결제 가능',
        '연체료는 리워드 사용 불가',
        '고객번호 등록 시 다음 달부터 자동 알림',
        '결제 완료 시 전자영수증 발급',
      ],
    },
    '7': {
      id: '7',
      name: '스타벅스',
      category: 'food',
      description: '전국 스타벅스 매장',
      discount: '최대 30% 할인',
      color: 'from-green-50 to-green-100',
      howToUse: [
        '스타벅스 매장에서 주문 시 PayTheRent 앱 실행',
        '리워드 사용하기 메뉴에서 QR코드 생성',
        '결제 금액 입력 후 리워드 사용 금액 선택',
        '바리스타에게 QR코드 제시',
        '잔여 금액은 다른 결제수단으로 결제',
      ],
      terms: [
        '전국 스타벅스 매장에서 사용 가능',
        '1회 최대 10만원까지 사용 가능',
        'DT(Drive Thru) 매장 포함',
        '일부 시즌 상품 및 프로모션 제외',
        '다른 쿠폰/할인과 중복 사용 불가',
        '리워드 유효기간: 적립일로부터 1년',
      ],
      partnerStores: [
        '전국 스타벅스 매장',
        '스타벅스 DT 매장',
        '스타벅스 리저브 매장',
        '스타벅스 커뮤니티 스토어',
      ],
      additionalInfo: [
        '스타벅스 리워�� 스타 적립 가능',
        'Siren Order 주문 시에도 사용 가능',
        '기프트카드와 중복 사용 가능',
        '결제 취소는 당일에 한해 가능',
        '취소 시 리워드 즉시 재적립',
      ],
      travelInfo: {
        validRoutes: [
          '음료 전 메뉴',
          '푸드 전 메뉴',
          '원두/티/상품',
          '리저브 메뉴',
        ],
        blackoutDates: [
          '스타벅스 프로모션 기간',
          '연말 시즌(12월)',
          '밸런타인 시즌(2월)',
        ],
        mileageInfo: [
          '스타벅스 리워드 기본 적립',
          'e-프리퀀시 이벤트 참여 가능',
          '스타벅스 카드 충전 시 적립 제외',
        ],
      },
    },
    '3': {
      id: '3',
      name: '도시가스',
      category: 'monthly',
      description: '서울도시가스 요금',
      discount: '최대 3만원 할인',
      color: 'from-orange-50 to-orange-100',
      howToUse: [
        '도시가스 고객번호 확인 (고지서 또는 앱)',
        'PayTheRent 앱에서 도시가스 선택',
        '지역 선택 후 고객번호 입력',
        '납부할 요금 확인 및 리워드 사용 금액 선택',
        '리워드 차감 후 남은 금액 결제',
      ],
      terms: [
        '전국 도시가스 요금 결제 가능',
        '월 최대 3만원까지 리워드 사용 가능',
        '부분 취소 및 환불 불가',
        '리워드 유효기간: 적립일로부터 1년',
        '자동이체 설정된 고객번호는 결제 불가',
      ],
      partnerStores: [
        '서울도시가스',
        '인천도시가스',
        '경기도시가스',
        '대륜이엔에스',
        '삼천리도시가스',
        'PayTheRent 앱 내 공과금 결제',
      ],
      additionalInfo: [
        '미납 요금도 리워드로 결제 가능',
        '연체료는 리워드 사용 불가',
        '고객번호 등록 시 다음 달부터 자동 알림',
        '결제 완료 시 전자영수증 발급',
        '지역별로 도시가스 회사가 다를 수 있음',
      ],
    },
    '4': {
      id: '4',
      name: '대한항공',
      category: 'travel',
      description: '국내/국제선 항공권',
      discount: '최대 15% 할인',
      color: 'from-sky-50 to-sky-100',
      howToUse: [
        '대한항공 웹사이트/앱에서 항공권 검색',
        'PayTheRent 리워드 사용 메뉴 선택',
        '리워드 사용 금액 입력 (최소 5천원)',
        '잔여 금액 카드 결제로 진행',
        '예약 완료 후 이메일로 e-티켓 발송',
      ],
      terms: [
        '국내선/국제선 전 노선 사용 가능',
        '성수기 및 특가 항공권 제외',
        '왕복/편도 모두 사용 가능',
        '1인당 최대 4매까지 적용',
        '타 할인/프로모션과 중복 사용 불가',
        '리워드 유효기간: 적립일로부터 1년',
      ],
      partnerStores: [
        '대한항공 공식 웹사이트',
        '대한항공 모바일 앱',
        '대한항공 지점/공항 카운터',
        'PayTheRent 앱 내 항공권 예약',
      ],
      additionalInfo: [
        '예약 변경 시 리워드 재사용 가능',
        '취소 시 리워드 재적립 (영업일 기준 3-5일 소요)',
        '일부 마일리지 적립 가능',
        '비즈니스석 업그레이드 시에도 사용 가능',
        '예약 후 24시간 이내 취소 시 수수료 면제',
      ],
      travelInfo: {
        validRoutes: [
          '국내선 전 노선',
          '국제선 전 노선 (일부 노선 제외)',
          '제주도 노선 성수기 제외',
        ],
        blackoutDates: [
          '설/추석 연휴 기간',
          '7월 중순-8월 중순',
          '12월 말-1월 초',
        ],
        mileageInfo: ['정상 마일리지의 50% 적립', '보너스 마일리지 적립 제외'],
      },
    },
    '5': {
      id: '5',
      name: '아시아나항공',
      category: 'travel',
      description: '국내/국제선 항공권',
      discount: '최대 12% 할인',
      color: 'from-indigo-50 to-indigo-100',
      howToUse: [
        '아시아나항공 웹사이트/앱에서 항공권 검색',
        'PayTheRent 리워드 결제 선택',
        '리워드 사용 금액 입력 (최소 1만원)',
        '잔여 금액 카드 결제',
        '예약 완료 후 이메일로 e-티켓 발송',
      ],
      terms: [
        '국내선/국제선 전 노선 사용 가능',
        '성수기 및 특가 항공권 제외',
        '왕복/편도 모두 적용 가능',
        '1인당 최대 4매까지 사용 가능',
        '타 할인/프로모션과 중복 사용 불가',
        '리워드 유효기간: 적립일로부터 1년',
      ],
      partnerStores: [
        '아시아나항공 공식 웹사이트',
        '아시아나항공 모바일 앱',
        '아시아나항공 지점/공항 카운터',
        'PayTheRent 앱 내 항공권 예약',
      ],
      additionalInfo: [
        '예약 변경 시 리워드 재사용 가능',
        '취소 수수료 발생 시 리워드 차감',
        '아시아나클럽 마일리지 적립 가능',
        '비즈니스석 업그레이드 시에도 사용 ���능',
        '예약 후 24시간 이내 취소 시 수수료 면제',
      ],
      travelInfo: {
        validRoutes: [
          '국내선 전 노선',
          '국제선 전 노선 (일부 노선 제외)',
          '제주도 노선 성수기 제외',
        ],
        blackoutDates: [
          '설/추석 연휴 기간',
          '7월 15일-8월 15일',
          '12월 20일-1월 10일',
        ],
        mileageInfo: [
          '정상 마일리지의 60% 적립',
          '보너스 마일리지 적립 제외',
          '아시아나클럽 회원 등급별 추가 적립',
        ],
      },
    },
    '6': {
      id: '6',
      name: '여기어때',
      category: 'travel',
      description: '국내 숙박 예약',
      discount: '최대 20% 할인',
      color: 'from-pink-50 to-pink-100',
      howToUse: [
        '여기어때 앱에서 숙소 검색',
        '원하는 객실 선택 후 결제 페이지 진입',
        'PayTheRent 리워드 결제 선택',
        '리워드 사용 금액 입력 (최소 5천원)',
        '잔여 금액 카드 결제로 진행',
      ],
      terms: [
        '전국 여기어때 제휴 숙소 사용 가능',
        '당일 예약 건 제외',
        '성수기 특가 상품 제외',
        '1회 최대 50만원까지 사용 가능',
        '�� 쿠폰/할인과 중복 사용 불가',
        '리워드 유효기간: 적립일로부터 1년',
      ],
      partnerStores: [
        '여기어때 공식 웹사이트',
        '여기어때 모바일 앱',
        'PayTheRent 앱 내 숙박 예약',
      ],
      additionalInfo: [
        '체크인 24시간 전까지 취소 시 전액 환불',
        '취소 시 리워드 재적립 (영업일 기준 1-3일 소요)',
        '여기어때 멤버십 포인트 적립 가능',
        '예약자와 투숙객 정보 달라도 사용 가능',
        '연박 예약 시에도 사용 가능',
      ],
      travelInfo: {
        validRoutes: [
          '호텔/리조트',
          '펜션/풀빌라',
          '모텔',
          '게스트하우스',
          '캠핑/글램핑',
        ],
        blackoutDates: [
          '설/추석 연휴 기간',
          '여름 성수기 (7/15-8/15)',
          '연말연시 (12/24-1/1)',
        ],
        mileageInfo: [
          '여기어때 멤버십 포인트 3% 적립',
          '등급별 추가 포인트 적립',
          '이벤트 중복 적립 가능',
        ],
      },
    },
    '8': {
      id: '8',
      name: '배달의민족',
      category: 'food',
      description: '배달의민족 앱 문',
      discount: '최대 25% 할인',
      color: 'from-blue-400 to-blue-500',
      howToUse: [
        '배달의민족 앱에서 메뉴 선택 후 결제 페이지 진입',
        '결제수단에서 "PayTheRent 리워드" 선택',
        '사용할 리워드 금액 입력 (최소 1천원)',
        '잔여 금액은 다른 결제수단으로 결제',
        '주문 완료 후 배민페이 포인트 추가 적립',
      ],
      terms: [
        '전국 배달의민족 입점 매장에서 사용 가능',
        '1회 최대 3만원까지 사용 가능',
        'B마트 주문 시에도 사용 가능',
        '배민1 주문 가능 (일부 매장 제외)',
        '일부 프로모션 메뉴 제외',
        '리워드 유효기간: 적립일로부터 1년',
      ],
      partnerStores: [
        '배달의민족 앱',
        '배달의민족 웹사이트',
        'B마트',
        '배민1 서비스',
      ],
      additionalInfo: [
        '배민페이 포인트 기본 적립',
        '배민커넥트 할인과 중복 적용 가능',
        '주문 취소 시 즉시 리워드 재적립',
        '부분 취소 불가',
        '배달팁은 리워드 사용 제외',
      ],
      travelInfo: {
        validRoutes: [
          '일반 배달 주문',
          '포장/방문 주문',
          'B마트 주문',
          '배민1 주문',
        ],
        blackoutDates: [
          '배달의민족 블랙위크 기간',
          '설/추석 연휴 기간',
          '공휴일 연휴 기간',
        ],
        mileageInfo: [
          '배민페이 포인트 0.5% 기본 적립',
          '우동네 플러스 회원 추가 적립',
          '첫 주문 시 추가 포인트 적립',
        ],
      },
    },
    '9': {
      id: '9',
      name: 'CU 편의점',
      category: 'life',
      description: '전국 CU 매장',
      discount: '최대 20% 할인',
      color: 'from-purple-50 to-purple-100',
      howToUse: [
        'CU 매장에서 PayTheRent 앱 실행',
        '리워드 사용하기 메뉴에서 QR코드 생성',
        '결제 금액 입력 후 리워드 사용 금액 선택',
        '점원에게 QR코드 제시',
        '잔여 금액은 다른 결제수단으로 결제',
      ],
      terms: [
        '전국 CU 매장에서 사용 가능',
        '1회 최대 5만원까지 사용 가능',
        '일부 상품 제외 (담배, 유가증권 등)',
        '타 할인/프로모션과 중복 사용 불가',
        '리워드 유효기간: 적립일로부터 1년',
      ],
      partnerStores: ['전국 CU 매장', 'CU 온라인몰', 'BGF리테일 제휴매장'],
      additionalInfo: [
        'CU 멤버십 포인트 적립 가능',
        '결제 취소는 당일에 한해 가능',
        '취소 시 리워드 즉시 재적립',
        '1천원 단위로 사용 가능',
        '24시간 연중무휴 사용 가능',
      ],
      travelInfo: {
        validRoutes: ['식품/음료', '생활용품', '편의점 서비스', '신선식품'],
        blackoutDates: ['시스템 점검 시간 (02:00-04:00)', '일부 휴무 매장'],
        mileageInfo: [
          'CU 멤버십 포인트 기본 적립',
          'BGF 포인트 추가 적립',
          '제휴카드 추가 할인 가능',
        ],
      },
    },
    '10': {
      id: '10',
      name: 'GS25',
      category: 'life',
      description: '전국 GS25 매장',
      discount: '최대 20% 할인',
      color: 'from-orange-50 to-orange-100',
      howToUse: [
        'GS25 매장에서 PayTheRent 앱 실행',
        '리워드 사용하기 메뉴에서 QR코드 생성',
        '결제 금액 입력 후 리워드 사용 금액 선택',
        '점원에게 QR코드 제시',
        '잔여 금액은 다른 결제수단으로 결제',
      ],
      terms: [
        '전국 GS25 매장에서 사용 가능',
        '1회 최대 5만원까지 사용 가능',
        '일부 상품 제외 (담배, 유가증권 등)',
        '타 할인/프로모션과 중복 사용 불가',
        '리워드 유효기간: 적립일로부터 1년',
      ],
      partnerStores: ['전국 GS25 매장', 'GS25 온라인몰', 'GS리테일 제휴매장'],
      additionalInfo: [
        'GS&POINT 적립 가능',
        '결제 취소는 당일에 한해 가능',
        '취소 시 리워드 즉시 재적립',
        '1천원 단위로 사용 가능',
        '24시간 연중무휴 사용 가능',
      ],
      travelInfo: {
        validRoutes: ['식품/음료', '생활용품', '편의점 서비스', '신선식품'],
        blackoutDates: ['시스템 점검 시간 (02:00-04:00)', '일부 휴무 매장'],
        mileageInfo: [
          'GS&POINT 기본 적립',
          'GS 멤버십 추가 적립',
          '제휴카드 추가 할인 가능',
        ],
      },
    },
  };

  const detail = id ? rewardDetails[id] : null;

  // 현재 리워드의 카테고리 정보를 이용해 뒤로가기 URL 생성
  const backToRewardsUrl = detail
    ? `/tenant/rewards?category=${detail.category}`
    : '/tenant/rewards';

  if (!detail) {
    return <div>존재하지 않는 리워드입니다.</div>;
  }

  return (
    <TenantLayout>
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="px-4 h-[60px] flex items-center justify-between">
          <Link
            to={backToRewardsUrl}
            className="text-gray-800 hover:text-gray-600"
          >
            ← 뒤로가기
          </Link>
          <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold">
            사용 안내
          </h1>
          <div className="w-[60px]"></div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="p-4 space-y-6 pb-[150px]">
        {/* 리워드 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`bg-gradient-to-br ${detail.color} p-6 rounded-2xl`}
        >
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {detail.name}
              </h2>
              <p className="text-gray-600 mb-4">{detail.description}</p>
              <div className="inline-block px-4 py-2 bg-white/60 rounded-full text-sm font-medium text-gray-900 backdrop-blur-sm">
                {detail.discount}
              </div>
            </div>
            {detail.brandImage && (
              <img
                src={detail.brandImage}
                alt={detail.name}
                className="w-16 h-16 object-contain"
              />
            )}
          </div>
        </motion.div>

        {/* 사용 방법 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold">사용 방법</h3>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <ol className="space-y-4">
              {detail.howToUse.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                    {index + 1}
                  </div>
                  <p className="text-gray-600 mt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </motion.section>

        {/* 제휴 매장 */}
        {detail.partnerStores && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">제휴 매장</h3>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <ul className="space-y-2">
                {detail.partnerStores.map((store, index) => (
                  <li key={index} className="text-gray-600">
                    • {store}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        )}

        {/* 이용 약관 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold">이용 약관</h3>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <ul className="space-y-2">
              {detail.terms.map((term, index) => (
                <li key={index} className="text-gray-600">
                  • {term}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* 추가 정보 섹션 (있는 경우에만 표시) */}
        {detail.additionalInfo && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">추가 안내</h3>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <ul className="space-y-2">
                {detail.additionalInfo.map((info, index) => (
                  <li key={index} className="text-gray-600">
                    • {info}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        )}

        {/* 여행 정보 섹션 (있는 경우에만 표시) */}
        {detail.travelInfo && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">여행 정보</h3>
            <div className="bg-white p-6 rounded-2xl shadow-sm space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  이용 가능 노선
                </h4>
                <ul className="space-y-1">
                  {detail.travelInfo.validRoutes.map((route, index) => (
                    <li key={index} className="text-gray-600">
                      • {route}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">제외 기간</h4>
                <ul className="space-y-1">
                  {detail.travelInfo.blackoutDates.map((date, index) => (
                    <li key={index} className="text-gray-600">
                      • {date}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  마일리지 적립
                </h4>
                <ul className="space-y-1">
                  {detail.travelInfo.mileageInfo.map((info, index) => (
                    <li key={index} className="text-gray-600">
                      • {info}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>
        )}

        {/* 하단 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="fixed bottom-[80px] left-4 right-4 max-w-[430px] mx-auto"
        >
          <Link
            to={detail.category === 'monthly' ? '/tenant/payment' : '#'}
            className="block w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-center font-medium hover:shadow-lg transition-all"
          >
            {detail.category === 'monthly'
              ? '리워드로 결제하기'
              : '리워드 사용하러 가기'}
          </Link>
        </motion.div>
      </main>
    </TenantLayout>
  );
};

export default RewardDetailPage;
