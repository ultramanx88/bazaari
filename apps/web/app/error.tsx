'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center px-4 max-w-md mx-auto">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-red-500 mb-4">⚠️</div>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-dark mb-4">
          Something went wrong!
        </h1>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.
        </p>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <p className="text-sm text-red-700 font-mono break-all">
              {error.message}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-4">
          <button 
            onClick={reset}
            className="inline-block w-full bg-primary hover:bg-primary text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
          
          <Link 
            href="/"
            className="inline-block w-full border border-gray-300 hover:border-primary text-dark hover:text-primary font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Go Back Home
          </Link>
        </div>

        {/* Popular Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Or explore our popular services:</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link 
              href="/food-delivery" 
              className="text-sm text-primary font-medium px-3 py-1 rounded-full border border-primary hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Food Delivery
            </Link>
            <Link 
              href="/hotels" 
              className="text-sm text-primary font-medium px-3 py-1 rounded-full border border-primary hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Hotels
            </Link>
            <Link 
              href="/spa-massage" 
              className="text-sm text-primary font-medium px-3 py-1 rounded-full border border-primary hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Spa & Massage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}