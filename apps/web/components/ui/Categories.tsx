'use client';

import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: 'Food Delivery',
    icon: '🍕',
    href: '/food-delivery',
    description: 'Order from your favorite restaurants',
    color: 'bg-primary-100 text-primary'
  },
  {
    id: 2,
    name: 'Hotels & Booking',
    icon: '🏨',
    href: '/hotels',
    description: 'Find and book the perfect stay',
    color: 'bg-secondary-100 text-secondary-700'
  },
  {
    id: 3,
    name: 'Spa & Massage',
    icon: '💆',
    href: '/spa-massage',
    description: 'Relax and rejuvenate yourself',
    color: 'bg-accent-100 text-accent-700'
  },
  {
    id: 4,
    name: 'Visa Services',
    icon: '📋',
    href: '/visa-services',
    description: 'Visa assistance and documentation',
    color: 'bg-primary-100 text-primary'
  },
  {
    id: 5,
    name: 'Healthcare',
    icon: '🏥',
    href: '/healthcare',
    description: 'Medical services and consultations',
    color: 'bg-secondary-100 text-secondary-700'
  },
  {
    id: 6,
    name: 'Real Estate',
    icon: '🏠',
    href: '/real-estate',
    description: 'Buy, sell, or rent properties',
    color: 'bg-accent-100 text-accent-700'
  },
  {
    id: 7,
    name: 'Shopping',
    icon: '🛍️',
    href: '/shopping',
    description: 'Shop from various categories',
    color: 'bg-primary-100 text-primary'
  },
  {
    id: 8,
    name: 'More Services',
    icon: '➕',
    href: '/services',
    description: 'Explore all available services',
    color: 'bg-dark-100 text-dark'
  }
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="main-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            Our Services
          </h2>
          <p className="text-lg text-dark-500 max-w-2xl mx-auto">
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
              <h3 className="text-lg font-semibold text-dark mb-2 text-center">
                {category.name}
              </h3>
              <p className="text-sm text-dark-500 text-center">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}