'use client';

import React, { useState } from 'react';

const VisaServicesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedUrgency, setSelectedUrgency] = useState('all');
  const [nationality, setNationality] = useState('indian');

  const visaServices = [
    {
      id: 1,
      country: "Thailand",
      flag: "🇹🇭",
      visaType: "Tourist Visa",
      duration: "60 days",
      price: "฿2,500",
      processingTime: "3-5 working days",
      category: "tourist",
      urgency: "normal",
      description: "Single entry tourist visa for leisure travel",
      requirements: ["Passport valid 6+ months", "Flight booking", "Hotel booking", "Bank statement"],
      features: ["Single Entry", "60 days stay", "Extendable"],
      rating: 4.8,
      successRate: "98%"
    },
    {
      id: 2,
      country: "Singapore",
      flag: "🇸🇬",
      visaType: "Business Visa",
      duration: "30 days",
      price: "฿4,200",
      processingTime: "2-3 working days",
      category: "business",
      urgency: "normal",
      description: "Business visa for meetings and conferences",
      requirements: ["Passport", "Business invitation", "Company letter", "Financial proof"],
      features: ["Multiple Entry", "Business activities", "Quick processing"],
      rating: 4.7,
      successRate: "95%"
    },
    {
      id: 3,
      country: "United States",
      flag: "🇺🇸",
      visaType: "B1/B2 Visa",
      duration: "10 years",
      price: "฿15,800",
      processingTime: "3-4 weeks",
      category: "tourist",
      urgency: "normal",
      description: "Tourism and business combination visa",
      requirements: ["DS-160 form", "Interview appointment", "Financial documents", "Travel history"],
      features: ["10 years validity", "Multiple entries", "6 months per visit"],
      rating: 4.6,
      successRate: "85%"
    },
    {
      id: 4,
      country: "United Kingdom",
      flag: "🇬🇧",
      visaType: "Standard Visitor",
      duration: "6 months",
      price: "฿12,500",
      processingTime: "2-3 weeks",
      category: "tourist",
      urgency: "normal",
      description: "Standard visitor visa for tourism and family visits",
      requirements: ["Online application", "Biometrics", "Financial proof", "Travel itinerary"],
      features: ["6 months stay", "Tourism & family visits", "Online application"],
      rating: 4.5,
      successRate: "88%"
    },
    {
      id: 5,
      country: "Japan",
      flag: "🇯🇵",
      visaType: "Tourist Visa",
      duration: "15-90 days",
      price: "฿3,800",
      processingTime: "5-7 working days",
      category: "tourist",
      urgency: "normal",
      description: "Short-term tourist visa for sightseeing",
      requirements: ["Application form", "Photo", "Flight booking", "Hotel confirmation"],
      features: ["Single/Multiple entry", "Cultural tours", "Shopping"],
      rating: 4.9,
      successRate: "92%"
    },
    {
      id: 6,
      country: "Australia",
      flag: "🇦🇺",
      visaType: "ETA (601)",
      duration: "3 months",
      price: "฿1,200",
      processingTime: "1-2 working days",
      category: "tourist",
      urgency: "express",
      description: "Electronic Travel Authority for short visits",
      requirements: ["Valid passport", "Online application", "Email address"],
      features: ["Electronic visa", "Quick processing", "Multiple entries"],
      rating: 4.8,
      successRate: "99%"
    },
    {
      id: 7,
      country: "Canada",
      flag: "🇨🇦",
      visaType: "Visitor Visa",
      duration: "6 months",
      price: "฿8,500",
      processingTime: "2-4 weeks",
      category: "tourist",
      urgency: "normal",
      description: "Temporary resident visa for tourism",
      requirements: ["IMM 5257 form", "Family info", "Financial support", "Purpose of visit"],
      features: ["Up to 6 months", "Family visits", "Tourism"],
      rating: 4.4,
      successRate: "82%"
    },
    {
      id: 8,
      country: "Germany",
      flag: "🇩🇪",
      visaType: "Schengen Visa",
      duration: "90 days",
      price: "฿6,800",
      processingTime: "1-2 weeks",
      category: "tourist",
      urgency: "normal",
      description: "Schengen area visa for European travel",
      requirements: ["Application form", "Travel insurance", "Itinerary", "Financial proof"],
      features: ["26 Schengen countries", "90 days in 180 days", "Travel insurance"],
      rating: 4.7,
      successRate: "89%"
    }
  ];

  const countries = [
    { value: 'all', label: 'All Countries' },
    { value: 'thailand', label: 'Thailand' },
    { value: 'singapore', label: 'Singapore' },
    { value: 'united-states', label: 'United States' },
    { value: 'united-kingdom', label: 'United Kingdom' },
    { value: 'japan', label: 'Japan' },
    { value: 'australia', label: 'Australia' },
    { value: 'canada', label: 'Canada' },
    { value: 'germany', label: 'Germany' }
  ];

  const visaTypes = [
    { value: 'all', label: 'All Types', icon: '📋' },
    { value: 'tourist', label: 'Tourist', icon: '🏖️' },
    { value: 'business', label: 'Business', icon: '💼' },
    { value: 'student', label: 'Student', icon: '🎓' },
    { value: 'work', label: 'Work', icon: '👔' },
    { value: 'transit', label: 'Transit', icon: '✈️' }
  ];

  const urgencyOptions = ['all', 'express', 'normal', 'economy'];

  const filteredServices = visaServices.filter(service => {
    const matchesSearch = service.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.visaType.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = selectedCountry === 'all' || 
                          service.country.toLowerCase().replace(/\s+/g, '-') === selectedCountry;
    const matchesType = selectedType === 'all' || service.category === selectedType;
    const matchesUrgency = selectedUrgency === 'all' || service.urgency === selectedUrgency;
    return matchesSearch && matchesCountry && matchesType && matchesUrgency;
  });

  const handleConsultation = (serviceId) => {
    alert(`Requesting consultation for visa service ID: ${serviceId}`);
    // TODO: Implement consultation booking logic
  };

  const handleApply = (serviceId) => {
    alert(`Starting visa application for service ID: ${serviceId}`);
    // TODO: Implement visa application logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              📋 Visa Services & Consultation
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Professional visa assistance and consultation for your international travel needs
            </p>
          </div>

          {/* Quick Quote Form */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Get Quick Visa Quote</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Nationality
                </label>
                <select
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="indian">🇮🇳 Indian</option>
                  <option value="thai">🇹🇭 Thai</option>
                  <option value="other">🌍 Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destination
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {countries.map(country => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Travel Purpose
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {visaTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                  💬 Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by country or visa type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <select
                value={selectedUrgency}
                onChange={(e) => setSelectedUrgency(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Processing Times</option>
                <option value="express">Express (1-3 days)</option>
                <option value="normal">Normal (1-3 weeks)</option>
                <option value="economy">Economy (3+ weeks)</option>
              </select>
            </div>
          </div>

          {/* Visa Type Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {visaTypes.map(type => (
              <button
                key={type.value}
                onClick={() => setSelectedType(type.value)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition duration-300 ${
                  selectedType === type.value
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 shadow-sm'
                }`}
              >
                <span>{type.icon}</span>
                <span>{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-blue-600">{filteredServices.length}</span> visa services
          </p>
        </div>

        {/* Visa Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Country Header */}
              <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{service.flag}</span>
                    <div>
                      <h3 className="text-xl font-bold">{service.country}</h3>
                      <p className="text-blue-100">{service.visaType}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-blue-100">Success Rate</p>
                    <p className="text-lg font-bold">{service.successRate}</p>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold text-gray-800">{service.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Processing</p>
                    <p className="font-semibold text-gray-800">{service.processingTime}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(service.rating))}
                    {'☆'.repeat(5 - Math.floor(service.rating))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {service.rating} ({Math.floor(Math.random() * 100) + 20} reviews)
                  </span>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Requirements Preview */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Required Documents:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {service.requirements.slice(0, 3).map((req, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2">•</span>
                        {req}
                      </li>
                    ))}
                    {service.requirements.length > 3 && (
                      <li className="text-blue-600">+ {service.requirements.length - 3} more...</li>
                    )}
                  </ul>
                </div>

                {/* Price and Actions */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-gray-600 text-sm ml-1">+ govt fees</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleConsultation(service.id)}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-300"
                    >
                      💬 Consult
                    </button>
                    <button
                      onClick={() => handleApply(service.id)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No visa services found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Professional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Document Preparation</h3>
              <p className="text-gray-600">Complete assistance with document preparation and verification</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Express Processing</h3>
              <p className="text-gray-600">Fast-track visa processing for urgent travel requirements</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">High Success Rate</h3>
              <p className="text-gray-600">98%+ approval rate with our expert guidance and support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Need Expert Visa Consultation?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our visa experts are ready to help you with personalized guidance and support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition duration-300">
              📞 Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition duration-300">
              📧 Email Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaServicesPage;