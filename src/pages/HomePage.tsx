import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// 타입 정의
interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Testimonial {
  content: string;
  emoji: string;
  name: string;
  role: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// 데이터
const benefits: Benefit[] = [
  {
    icon: '💳',
    title: '수수료 부담 ZERO',
    description: 'PLCC 카드로 결제하면 수수료 걱정 없이',
  },
  {
    icon: '💰',
    title: '월 최대 60만원 혜택',
    description: '연간 최대 720만원의 캐시백 혜택',
  },
  {
    icon: '⚡',
    title: '자동 결제',
    description: '매달 자동으로 결제되어 연체 걱정 없이',
  },
];

const features: Feature[] = [
  {
    icon: '💳',
    title: '카드 등록',
    description: '신용카드 또는 PLCC 카드를 등록하세요',
  },
  {
    icon: '📝',
    title: '계약 정보 입력',
    description: '임대차 계약 정보를 간편하게 입력하세요',
  },
  {
    icon: '💰',
    title: '월세 결제',
    description: '매월 자동으로 결제되어 번거로움 없이',
  },
  {
    icon: '🎁',
    title: '스마트한 리워드',
    description: '월세 100만원 결제 시 매달 5만원씩 현금성 리워드 적립',
  },
];

const testimonials: Testimonial[] = [
  {
    content:
      '월세 결제가 이렇게 편할 줄 몰랐어요.\n리워드도 받고 일석이조네요!',
    emoji: '👩',
    name: '김지현',
    role: '직장인 세입자',
  },
  {
    content: 'PLCC 카드로 수수료 없이 결제하니 정말 좋아요.\n강추합니다!',
    emoji: '👨',
    name: '이상철',
    role: '프리랜서 세입자',
  },
  {
    content: '자동결제 덕분에 한번도 연체없이 잘 납부하고 있어요.',
    emoji: '👩',
    name: '박미영',
    role: '대학원생 세입자',
  },
];

const faqs: FAQ[] = [
  {
    question: '어떤 카드로 결제할 수 있나요?',
    answer:
      '국내 모든 신용/체크카드로 결제 가능합니다. PLCC 카드 사용시 수수료가 무료입니다.',
  },
  {
    question: '리워드는 어떻게 받을 수 있나요?',
    answer:
      '월세 결제 시 자동으로 리워드가 적립되며, 월 최대 5만원(연 60만원)까지 적립됩니다. 예를 들어, 월세 100만원을 결제하시면 매달 5만원의 현금성 리워드를 받으실 수 있습니다. 적립된 리워드는 다음 달 월세 결제나 제휴사에서 현금처럼 자유롭게 사용 가능합니다.',
  },
  {
    question: '자동결제는 언제 이루어지나요?',
    answer:
      '임대차계약서에 명시된 납부일에 자동으로 결제됩니다. 결제 전 알림을 보내드립니다.',
  },
];

const HomePage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      setScrollProgress(currentProgress / totalScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen">
      {/* 스크롤 프로그레스 바 */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX: scrollProgress }}
      />

      {/* Hero Section */}
      <section className="px-4 pt-8 pb-12 bg-gradient-to-b from-blue-50/50 via-white to-white relative overflow-hidden">
        {/* 배경 장식 요소 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
            className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-40 right-10 w-32 h-32 bg-purple-100 rounded-full blur-3xl"
          />
        </div>

        {/* 프로모션 배지 개선 */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="sticky top-0 z-50 mb-6 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-[1px] rounded-full shadow-lg"
          >
            <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  🎁
                </motion.span>
                <span>첫 결제 시 10만원 캐시백</span>
                <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  선착순 100명
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 메인 타이틀 섹션 개선 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="relative">
            {/* 배경 장식 요소 */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-6 -left-6 w-12 h-12 bg-blue-100 rounded-full opacity-50"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-100 rounded-full opacity-50"
            />

            <span className="block text-[32px] font-bold leading-tight mb-3">
              매달 월세{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  카드 결제
                </span>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute bottom-0 left-0 w-full"
                  viewBox="0 0 100 10"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M0,5 C30,5 70,5 100,5" className="text-blue-300" />
                </motion.svg>
              </span>
              로
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                리워드까지 챙기세요
              </span>
            </span>
          </h1>

          {/* 서브 타이틀 개선 */}
          <p className="text-[17px] text-gray-600 leading-relaxed">
            이제 PayTheRent로 월세를 결제하고
            <br />
            <span className="font-semibold text-blue-600">
              매달 최대 5%의 리워드
            </span>
            를 받아보세요
          </p>
        </motion.div>

        {/* 핵심 가치 제안 개선 */}
        <div className="mb-10">
          <motion.div
            className="grid grid-cols-1 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {[
              {
                icon: '💳',
                title: 'PLCC 카드 전용 혜택',
                description: '수수료 0원 + 추가 캐시백',
                color: 'bg-gradient-to-br from-blue-50 to-blue-100',
                highlight: '수수료 0원',
              },
              {
                icon: '💰',
                title: '최대 5% 리워드',
                description: '월 최대 60만원까지 적립',
                color: 'bg-gradient-to-br from-purple-50 to-purple-100',
                highlight: '연간 최대 720만원',
              },
              {
                icon: '⚡',
                title: '스마트한 자동결제',
                description: '설정 한번으로 매월 자동결제',
                color: 'bg-gradient-to-br from-green-50 to-green-100',
                highlight: '자동결제',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${item.color} p-6 rounded-2xl shadow-sm backdrop-blur-sm relative overflow-hidden group hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[17px] font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-gray-600">
                      <span className="font-semibold block">
                        {item.highlight}
                      </span>
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:scale-110 transition-transform" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA 버튼 개선 */}
        <div className="space-y-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/tenant/rent-info"
              className="block w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-[16px] font-medium hover:shadow-lg transition-all relative overflow-hidden group hover:text-white"
            >
              <div className="absolute inset-0 bg-black/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10">지금 시작하기</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/landlord"
              className="block w-full py-4 px-6 bg-white text-gray-700 border border-gray-200 rounded-xl text-[16px] font-medium transition-all hover:bg-gray-50 hover:border-gray-300 relative overflow-hidden group"
            >
              <div className="relative flex items-center justify-center gap-2">
                <span>임대인 회원가입</span>
                <span className="text-gray-400 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 신뢰도 지표 섹션 추가 */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { number: '10만+', label: '월간 거래액' },
            { number: '98%', label: '고객 만족도' },
            { number: '5만+', label: '누적 회원' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-[20px] font-bold text-gray-900 mb-1">
                {stat.number}
              </div>
              <div className="text-[13px] text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-12 bg-white">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded-full mb-3">
            특별한 혜택
          </span>
          <h2 className="text-[22px] font-bold mb-2">
            월세 결제가 특별해지 순간
          </h2>
          <p className="text-[15px] text-gray-600">
            PayTheRent에서만 경험할 수 있는 혜택
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 rounded-2xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-sm mb-4">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed whitespace-pre-line">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rewards Usage Section */}
      <section className="px-4 py-12 bg-gradient-to-b from-white to-blue-50/30">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 text-sm text-rose-600 bg-rose-50 rounded-full mb-3">
            리워드 사용처
          </span>
          <h2 className="text-[22px] font-bold mb-2">
            월세 결제하고 받은 리워드로
            <br />
            일상의 즐거움을 더하세요
          </h2>
          <p className="text-[15px] text-gray-600">
            다양한 곳에서 현금처럼 자유롭게 사용
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            {
              icon: '🍽️',
              category: '맛집',
              description: '전국 맛집\n제휴 할인',
              color: 'from-orange-50 to-orange-100',
              brands: ['배달의민족', '요기요', '쿠팡이츠'],
            },
            {
              icon: '🏨',
              category: '숙박',
              description: '호텔/펜션\n특가 예약',
              color: 'from-blue-50 to-blue-100',
              brands: ['야놀자', '여기어때', '아고다'],
            },
            {
              icon: '✈️',
              category: '여행',
              description: '항공권/패키지\n할인',
              color: 'from-sky-50 to-sky-100',
              brands: ['마이리얼트립', '익스피디아', '클룩'],
            },
            {
              icon: '⛳',
              category: '레저',
              description: '액티비티\n할인 예약',
              color: 'from-green-50 to-green-100',
              brands: ['클래스101', '프립', '액티비티'],
            },
            {
              icon: '💡',
              category: '공과금',
              description: '각 공과금\n결제',
              color: 'from-yellow-50 to-yellow-100',
              brands: ['전기요금', '수도요금', '도시가스'],
            },
            {
              icon: '⛽',
              category: '주유',
              description: '주유/충전\n할인',
              color: 'from-purple-50 to-purple-100',
              brands: ['GS칼텍스', 'SK에너지', 'S-OIL'],
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-gradient-to-br ${item.color} p-5 rounded-2xl relative overflow-hidden group`}
            >
              {/* 배경 장식 */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2"
              />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                  className="text-3xl mb-3"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-[16px] font-bold text-gray-900 mb-1">
                  {item.category}
                </h3>
                <p className="text-[14px] text-gray-600 whitespace-pre-line mb-3">
                  {item.description}
                </p>
                <div className="text-[12px] text-gray-500">
                  {item.brands.join(' • ')}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* 추가 혜택 배너 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-2xl"
              >
                🎉
              </motion.span>
              <h3 className="text-lg font-bold">더 큰 혜택을 누려보세요</h3>
            </div>
            <p className="text-sm text-white/90 mb-4">
              PLCC 카드로 결제 시 모든 사용처에서
              <br />
              추가 5% 할인 혜택을 제공해드려요
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 bg-white text-blue-600 rounded-lg text-sm font-medium"
            >
              혜택 더 알아보기 →
            </motion.button>
          </div>

          {/* 배경 장식 */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-12 bg-gradient-to-b from-white to-blue-50/30">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded-full mb-3">
            요금제 안내
          </span>
          <h2 className="text-[22px] font-bold mb-2">
            합리적인 수수료로
            <br />
            월세 결제를 시작���세요
          </h2>
          <p className="text-[15px] text-gray-600">
            PLCC 카드로 수수료 부담을 줄일 수 있어요
          </p>
        </div>

        <div className="space-y-4">
          {/* 기본 플랜 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-2xl border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[18px] font-bold text-gray-900">기본 플랜</h3>
              <span className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full">
                일반 카드
              </span>
            </div>
            <div className="mb-6">
              <div className="text-[28px] font-bold text-gray-900 mb-1">
                5%
                <span className="text-[15px] font-normal text-gray-600 ml-2">
                  결제 수수료
                </span>
              </div>
              <p className="text-[14px] text-gray-600">
                일반 신용카드/체크카드 결제 시 적용
              </p>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                '모��� 카드사 결제 가능',
                '월 최대 5% 리워드 적립',
                '자동결제 설정',
                '월세 납부 내역 관리',
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-[15px] text-gray-600"
                >
                  <span className="mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/tenant/register"
                className="block w-full py-3 px-6 text-center text-gray-600 bg-gray-50 rounded-xl text-[15px] font-medium hover:bg-gray-100 transition-all"
              >
                기본 플랜으로 시작하기
              </Link>
            </motion.div>
          </motion.div>

          {/* 프리미엄 플랜 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl text-white relative overflow-hidden"
          >
            {/* 추천 배지 */}
            <div className="absolute top-0 right-0">
              <div className="bg-yellow-400 text-[13px] font-bold px-4 py-1 rounded-bl-lg text-gray-900">
                추천
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[18px] font-bold">프리미엄 플랜</h3>
              <span className="px-3 py-1 text-sm bg-white/20 rounded-full">
                PLCC 카드
              </span>
            </div>
            <div className="mb-6">
              <div className="text-[28px] font-bold mb-1">
                0%
                <span className="text-[15px] font-normal text-white/90 ml-2">
                  결제 수수료
                </span>
              </div>
              <p className="text-[14px] text-white/80">
                PayTheRent PLCC 카드 결제 시 적용
              </p>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                '결제 수수료 완전 면제',
                '월 최대 60만원 캐시백 (연 720만원)',
                '전월 실적 조건 없음',
                '자동결제 설정',
                '월세 납부 내역 관리',
                '프리미엄 고객 전용 상담',
                '카드 발급 시 10만원 캐시백',
                '제휴사 추가 5~10% 할인',
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-[15px]">
                  <span className="mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/tenant/register-premium"
                className="block w-full py-3 px-6 text-center text-gray-900 bg-white rounded-xl text-[15px] font-medium hover:bg-gray-50 transition-all"
              >
                프리미엄 플랜 시작하기
              </Link>
            </motion.div>

            {/* 배경 장식 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          </motion.div>

          {/* 부가 설명 */}
          <div className="mt-6 text-center">
            <p className="text-[14px] text-gray-500">
              * PLCC 카드는 신용평가 후 발급 가능합니다
              <br />* 리워드 적립 한도는 월 최대 60만원입니다
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 text-sm text-purple-600 bg-purple-50 rounded-full mb-3">
            이용 방법
          </span>
          <h2 className="text-[22px] font-bold mb-2">
            3분만에 시작하는
            <br />
            스마트한 월세 결제
          </h2>
          <p className="text-[15px] text-gray-600">
            복잡한 과정 없이 빠르게 시작하세요
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow-sm"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-full mb-4">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-12 bg-white">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 text-sm text-green-600 bg-green-50 rounded-full mb-3">
            고객 후기
          </span>
          <h2 className="text-[22px] font-bold mb-2">
            ���미 많은 분들이
            <br />
            경험하고 있어요
          </h2>
          <p className="text-[15px] text-gray-600">
            PayTheRent 사용자들의 실제 후기
          </p>
        </div>

        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <p className="text-[15px] text-gray-600 leading-relaxed mb-4 whitespace-pre-line">
                  {testimonial.content}
                </p>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.emoji}
                  </div>
                  <div className="text-center">
                    <div className="text-[16px] font-medium text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-[14px] text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 text-sm text-orange-600 bg-orange-50 rounded-full mb-3">
            자주 묻는 질문
          </span>
          <h2 className="text-[22px] font-bold mb-2">
            궁금하신 점이 있으신가요?
          </h2>
          <p className="text-[15px] text-gray-600">
            자주 묻는 질문들을 모았습니다
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100"
            >
              <button
                onClick={() =>
                  setOpenFaqIndex(openFaqIndex === index ? null : index)
                }
                className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-[16px] font-medium text-gray-900">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-400 text-sm"
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence>
                {openFaqIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-[15px] text-gray-600 border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-gray-900 text-white">
        <div className="text-center mb-8">
          <h2 className="text-[22px] font-bold mb-3">PayTheRent</h2>
          <p className="text-[15px] text-gray-400">월세 결제의 새로운 기준</p>
        </div>

        <div className="space-y-8 mb-8">
          <div>
            <h3 className="text-[15px] font-bold mb-3">고객센터</h3>
            <p className="text-[14px] text-gray-400">평일 09:00 - 18:00</p>
            <p className="text-[18px] font-bold mt-1">1544-0000</p>
            <p className="text-[14px] text-gray-400 mt-1">
              help@paytherent.com
            </p>
          </div>

          <div>
            <h3 className="text-[15px] font-bold mb-3">바로가기</h3>
            <div className="grid grid-cols-2 gap-2 text-[14px]">
              <Link to="/about" className="text-gray-400">
                회사 소개
              </Link>
              <Link to="/pricing" className="text-gray-400">
                요금제
              </Link>
              <Link to="/guide" className="text-gray-400">
                이용가이드
              </Link>
              <Link to="/contact" className="text-gray-400">
                문의하기
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-[13px] text-gray-500">
          <p>© 2024 PayTheRent. All rights reserved.</p>
        </div>
      </footer>

      {/* 나머지 섹션들... */}
    </div>
  );
};

export default HomePage;
