'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

export default function AuthGuard({ children, requireAuth = true }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      
      if (requireAuth && (!token || !user)) {
        // Store the current path to redirect back after login
        localStorage.setItem('returnUrl', pathname || '/');
        router.push('/login');
        return;
      }
      
      setIsAuthenticated(!!token && !!user);
      setIsLoading(false);
    };

    checkAuth();
  }, [requireAuth, router, pathname]);

  if (requireAuth && isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">กำลังตรวจสอบการเข้าสู่ระบบ...</p>
        </div>
      </div>
    );
  }

  if (requireAuth && !isAuthenticated) {
    return null; // Will redirect to login
  }

  return <>{children}</>;
}