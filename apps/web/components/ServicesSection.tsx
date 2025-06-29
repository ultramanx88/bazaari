'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './ServicesSection.css';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  link: string;
}

const ServicesSection: React.FC = () => {
  const router = useRouter();

  const services: Service[] = [
    {
      id: 1,
      title: "Food Delivery",
      description: "Order authentic Indian cuisine delivered to your door",
      icon: "🍛",
      bgColor: "#FF6B35",
      link: "/food-delivery"
    },
    {
      id: 2,
      title: "Hotels & Accommodation", 
      description: "Find comfortable stays and accommodations",
      icon: "🏨",
      bgColor: "#4ECDC4",
      link: "/hotels"
    },
    {
      id: 3,
      title: "Spa & Massage",
      description: "Relax with traditional wellness services",
      icon: "💆‍♀️",
      bgColor: "#45B7D1",
      link: "/spa-massage"
    },
    {
      id: 4,
      title: "Visa Services",
      description: "Professional visa assistance and consultation",
      icon: "📋",
      bgColor: "#96CEB4",
      link: "/visa-services"
    },
    {
      id: 5,
      title: "Restaurant Services",
      description: "Discover the best Indian restaurants near you",
      icon: "🍴",
      bgColor: "#FFEAA7",
      link: "/restaurants"
    },
    {
      id: 6,
      title: "Healthcare",
      description: "Access quality healthcare services",
      icon: "🏥",
      bgColor: "#DDA0DD",
      link: "/healthcare"
    },
    {
      id: 7,
      title: "Real Estate",
      description: "Buy, sell, rent, or lease properties",
      icon: "🏠",
      bgColor: "#FFB74D",
      link: "/real-estate"
    },
    {
      id: 8,
      title: "Shopping & Delivery",
      description: "Shop Indian groceries and essentials online",
      icon: "🛒",
      bgColor: "#F06292",
      link: "/shopping"
    }
  ];

  const handleCardClick = (link: string): void => {
    router.push(link);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, link: string): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(link);
    }
  };

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Connecting you to authentic Indian experiences and essential services
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service: Service) => (
            <div 
              key={service.id}
              className="service-card"
              style={{ backgroundColor: service.bgColor }}
              onClick={() => handleCardClick(service.link)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, service.link)}
              aria-label={`Navigate to ${service.title}`}
            >
              <div className="service-icon">
                <span role="img" aria-label={service.title}>
                  {service.icon}
                </span>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              <div className="service-arrow">
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;