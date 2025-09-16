import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Contact Hero Section */}
      <section className="py-20 bg-theme-gradient">
        <div className="container">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90">Get in touch with our team</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="card p-8">
                <h2 className="text-3xl font-bold mb-6 text-primary">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="row">
                    <div className="col-md-6">
                      <label className="block text-sm font-semibold mb-2">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="block text-sm font-semibold mb-2">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <label className="block text-sm font-semibold mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                        placeholder="099-XXX-XXXX"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="block text-sm font-semibold mb-2">Service Interest</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none">
                        <option value="">Select a service</option>
                        <option value="food">Food Delivery</option>
                        <option value="hotel">Hotels</option>
                        <option value="spa">Spa & Wellness</option>
                        <option value="visa">Visa Services</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="realestate">Real Estate</option>
                        <option value="marketplace">Marketplace</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea 
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="space-y-6">
                {/* Contact Info Card */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="service-card__icon bg-theme-blue">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold">Address</h4>
                        <p className="text-gray-600">
                          19/18 Soi Sukhumvit 13 (Saeng Chan)<br/>
                          Sukhumvit Road, Khlong Toei Nuea<br/>
                          Watthana, Bangkok 10110
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="service-card__icon bg-theme-orange">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold">Phone</h4>
                        <p className="text-gray-600">099-353-3556</p>
                        <p className="text-sm text-gray-500">Available 24/7</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="service-card__icon bg-theme-mint">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-gray-600">hello@bazaari.com</p>
                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Business Hours Card */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-theme-mint bg-opacity-20 rounded-lg">
                    <p className="text-sm text-center">
                      <i className="fas fa-clock mr-2"></i>
                      Emergency support available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Find Us</h2>
            <p>Visit our office in the heart of Bangkok</p>
          </div>
          
          <div className="card">
            <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-map-marked-alt text-4xl text-primary mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-gray-600">
                  19/18 Soi Sukhumvit 13 (Saeng Chan)<br/>
                  Sukhumvit Road, Khlong Toei Nuea<br/>
                  Watthana, Bangkok 10110
                </p>
                <button className="btn-primary mt-4">
                  <i className="fas fa-directions mr-2"></i>
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}