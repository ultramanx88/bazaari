'use client';

import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: 'Food Delivery',
    icon: '🍕',
    href: '/food-delivery',
    description: 'Order from your favorite restaurants',
    color: 'bg-red-100 text-red-600'
  },
  {
    id: 2,
    name: 'Hotels & Booking',
    icon: '🏨',
    href: '/hotels',
    description: 'Find and book the perfect stay',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 3,
    name: 'Spa & Massage',
    icon: '💆',
    href: '/spa-massage',
    description: 'Relax and rejuvenate yourself',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 4,
    name: 'Visa Services',
    icon: '📋',
    href: '/visa-services',
    description: 'Visa assistance and documentation',
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 5,
    name: 'Healthcare',
    icon: '🏥',
    href: '/healthcare',
    description: 'Medical services and consultations',
    color: 'bg-pink-100 text-pink-600'
  },
  {
    id: 6,
    name: 'Real Estate',
    icon: '🏠',
    href: '/real-estate',
    description: 'Buy, sell, or rent properties',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    id: 7,
    name: 'Shopping',
    icon: '🛍️',
    href: '/shopping',
    description: 'Shop from various categories',
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    id: 8,
    name: 'More Services',
    icon: '➕',
    href: '/services',
    description: 'Explore all available services',
    color: 'bg-gray-100 text-gray-600'
  }
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="main-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of services designed to make your life easier and more convenient
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}