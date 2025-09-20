'use client';

import Link from 'next/link';

const popularServices = [
  {
    id: 1,
    title: 'Fast Food Delivery',
    description: 'Get your favorite meals delivered in 30 minutes or less',
    image: '🍔',
    price: 'From $5',
    rating: 4.8,
    category: 'Food'
  },
  {
    id: 2,
    title: 'Luxury Hotel Booking',
    description: 'Book premium hotels with exclusive deals and offers',
    image: '🏨',
    price: 'From $99/night',
    rating: 4.9,
    category: 'Hotels'
  },
  {
    id: 3,
    title: 'Relaxing Spa Treatment',
    description: 'Professional massage and spa services at your location',
    image: '💆‍♀️',
    price: 'From $50',
    rating: 4.7,
    category: 'Spa'
  },
  {
    id: 4,
    title: 'Tourist Visa Assistance',
    description: 'Complete visa processing with document verification',
    image: '✈️',
    price: 'From $150',
    rating: 4.6,
    category: 'Visa'
  },
  {
    id: 5,
    title: 'Online Doctor Consultation',
    description: 'Consult with certified doctors from home',
    image: '👨‍⚕️',
    price: 'From $25',
    rating: 4.8,
    category: 'Healthcare'
  },
  {
    id: 6,
    title: 'Property Investment',
    description: 'Find the best real estate investment opportunities',
    image: '🏠',
    price: 'From $100K',
    rating: 4.5,
    category: 'Real Estate'
  }
];

export default function PopularServices() {
  return (
    <section className="py-16">
      <div className="main-container">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              Popular Services
            </h2>
            <p className="text-lg text-dark-500">
              Most requested services by our customers
            </p>
          </div>
          <Link 
            href="/services" 
            className="hidden md:block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
          >
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.image}</div>
                  <span className="bg-light-100 text-dark-500 px-3 py-1 rounded-full text-sm">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-dark-500 mb-4 text-sm">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(Math.floor(service.rating))}
                    </div>
                    <span className="text-sm text-dark-500">{service.rating}</span>
                  </div>
                  <div className="text-lg font-semibold text-primary">
                    {service.price}
                  </div>
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <button className="w-full bg-light-100 text-dark py-3 rounded-lg hover:bg-primary hover:text-white transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link 
            href="/services" 
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}