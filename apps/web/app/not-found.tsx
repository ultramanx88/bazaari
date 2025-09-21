'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center px-4 max-w-md mx-auto">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-dark mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you entered the wrong URL.
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block w-full bg-primary hover:bg-primary text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Go Back Home
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="inline-block w-full border border-gray-300 hover:border-primary text-dark hover:text-primary font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Go Back
          </button>
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