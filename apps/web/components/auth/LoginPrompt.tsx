'use client';

import { useRouter } from 'next/navigation';

interface LoginPromptProps {
  serviceName: string;
  serviceIcon: string;
  description: string;
}

export default function LoginPrompt({ serviceName, serviceIcon, description }: LoginPromptProps) {
  const router = useRouter();

  const handleLogin = () => {
    // Store the current service for redirect after login
    localStorage.setItem('returnUrl', window.location.pathname);
    router.push('/login');
  };

  const handleRegister = () => {
    // Store the current service for redirect after registration
    localStorage.setItem('returnUrl', window.location.pathname);
    router.push('/register');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="text-6xl mb-4">{serviceIcon}</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {serviceName}
          </h1>
          <p className="text-gray-600">
            {description}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🔐</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              เข้าสู่ระบบเพื่อใช้บริการ
            </h2>
            <p className="text-gray-600 mb-6">
              กรุณาเข้าสู่ระบบหรือสมัครสมาชิกเพื่อเข้าถึงบริการ {serviceName} ของเรา
            </p>
            
            <div className="space-y-4">
              <button
                onClick={handleLogin}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                เข้าสู่ระบบ
              </button>
              
              <button
                onClick={handleRegister}
                className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-lg font-medium transition-colors"
              >
                สมัครสมาชิก
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            หลังจากเข้าสู่ระบบแล้ว คุณจะสามารถเข้าถึงบริการทั้งหมดของ Bazaari ได้
          </p>
        </div>
      </div>
    </div>
  );
}