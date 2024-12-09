import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyUsers } from '../data/dummyData';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = dummyUsers.find((user) => user.email === email);
    if (user) {
      if (user.role === 'tenant') {
        navigate('/tenant');
      } else {
        navigate('/landlord');
      }
    } else {
      alert('이메일 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white max-w-md mx-auto">
      {/* 상단 이미지/로고 영역 */}
      <div className="flex-1 flex items-center justify-center bg-primary">
        <h1 className="text-4xl font-bold text-white">PayTheRent</h1>
      </div>

      {/* 로그인 폼 영역 */}
      <div className="flex-1 px-6 pt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">로그인</h2>
        <p className="text-gray-600 mb-8">월세 결제의 새로운 기준</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              이메일
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            로그인
          </button>

          <div className="text-center">
            <a href="#" className="text-sm text-gray-600 hover:text-primary">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            아직 계정이 없으신가요?{' '}
            <a href="#" className="text-primary font-medium">
              회원가입
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
