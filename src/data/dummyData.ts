export interface User {
  id: string;
  email: string;
  name: string;
  phoneNumber: string;
  role: 'tenant' | 'landlord';
}

export interface Payment {
  id: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  date: string;
  tenantId: string;
  landlordId: string;
  rewardPoints: number;
}

export interface Reward {
  id: string;
  userId: string;
  points: number;
  type: 'earned' | 'used';
  description: string;
  date: string;
}

export const dummyUsers: User[] = [
  {
    id: '1',
    email: 'tenant@example.com',
    name: '김철수',
    phoneNumber: '010-1234-5678',
    role: 'tenant',
  },
  {
    id: '2',
    email: 'landlord@example.com',
    name: '박영희',
    phoneNumber: '010-8765-4321',
    role: 'landlord',
  },
];

export const dummyPayments: Payment[] = [
  {
    id: '1',
    amount: 800000,
    status: 'completed',
    date: '2024-01-05',
    tenantId: '1',
    landlordId: '2',
    rewardPoints: 24000,
  },
  {
    id: '2',
    amount: 800000,
    status: 'pending',
    date: '2024-02-05',
    tenantId: '1',
    landlordId: '2',
    rewardPoints: 0,
  },
];

export const dummyRewards: Reward[] = [
  {
    id: '1',
    userId: '1',
    points: 24000,
    type: 'earned',
    description: '1월 월세 결제 리워드',
    date: '2024-01-05',
  },
  {
    id: '2',
    userId: '1',
    points: 10000,
    type: 'used',
    description: '공과금 결제',
    date: '2024-01-20',
  },
];
