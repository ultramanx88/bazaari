import React from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
}

const services: Service[] = [
  {
    id: 'food',
    title: 'Food Delivery',
    description: 'Order delicious meals from your favorite restaurants',
    icon: 'fa-utensils',
    color: 'theme-orange',
    href: '/food',
  },
  {
    id: 'hotel',
    title: 'Hotels',
    description: 'Book comfortable accommodations for your stay',
    icon: 'fa-bed',
    color: 'theme-blue',
    href: '/hotels',
  },
  {
    id: 'spa',
    title: 'Spa & Wellness',
    description: 'Relax and rejuvenate with our wellness services',
    icon: 'fa-spa',
    color: 'theme-mint',
    href: '/spa',
  },
  {
    id: 'visa',
    title: 'Visa Services',
    description: 'Get professional help with your visa applications',
    icon: 'fa-passport',
    color: 'theme-dark-blue',
    href: '/visa',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Book appointments with qualified healthcare professionals',
    icon: 'fa-heartbeat',
    color: 'accent-500',
    href: '/healthcare',
  },
  {
    id: 'realestate',
    title: 'Real Estate',
    description: 'Find your dream property with our real estate services',
    icon: 'fa-home',
    color: 'theme-yellow',
    href: '/realestate',
  },
  {
    id: 'marketplace',
    title: 'Marketplace',
    description: 'Shop from a wide variety of local and international vendors',
    icon: 'fa-store',
    color: 'primary-600',
    href: '/marketplace',
  },
];

export const ServiceSection: React.FC = () => {
  return (
    <section className="py-20 bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Discover all the services we offer to make your life easier</p>
        </div>
        
        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 mb-4">
              <div className="service-card">
                <div className={`service-card__icon bg-${service.color}`}>
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
                <a href={service.href} className="btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};