'use client';

import Link from 'next/link';

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Your All-in-One
              <span className="block text-yellow-300">Service Platform</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              From food delivery to real estate, spa services to visa assistance - 
              everything you need in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Explore Services
              </Link>
              <Link 
                href="/partner" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Become a Partner
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🍕</div>
                  <div className="text-sm">Food Delivery</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🏨</div>
                  <div className="text-sm">Hotels</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">💆</div>
                  <div className="text-sm">Spa & Massage</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🏥</div>
                  <div className="text-sm">Healthcare</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}