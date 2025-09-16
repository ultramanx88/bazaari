import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ServiceSection } from '../components/ServiceSection';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServiceSection />
      
      {/* Featured Section */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Bazaari?</h2>
            <p>We provide the best services with quality and reliability</p>
          </div>
          
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="card text-center p-6">
                <div className="service-card__icon bg-theme-blue mb-4">
                  <i className="fas fa-shipping-fast"></i>
                </div>
                <h4 className="card__title">Fast Delivery</h4>
                <p className="card__description">
                  Quick and reliable service delivery to your doorstep
                </p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card text-center p-6">
                <div className="service-card__icon bg-theme-orange mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4 className="card__title">Secure & Safe</h4>
                <p className="card__description">
                  Your safety and security is our top priority
                </p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card text-center p-6">
                <div className="service-card__icon bg-theme-mint mb-4">
                  <i className="fas fa-headset"></i>
                </div>
                <h4 className="card__title">24/7 Support</h4>
                <p className="card__description">
                  Round the clock customer support for all your needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}