'use client';

import React, { useState } from 'react';
import { structuredData } from './structured-data';

const VisaServicesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedUrgency, setSelectedUrgency] = useState('all');

  const visaServices = [
    {
      id: 1,
      nationality: "American",
      flag: "🇺🇸",
      visaType: "Tourist Visa (TR)",
      duration: "60 days",
      price: "฿2,000",
      processingTime: "3-5 working days",
      category: "tourist",
      urgency: "normal",
      description: "Single entry tourist visa for American citizens visiting Thailand",
      requirements: ["Passport valid 6+ months", "Passport photo", "Flight booking", "Hotel booking", "Bank statement (20,000 THB)"],
      features: ["Single Entry", "60 days stay", "Extendable once for 30 days"],
      rating: 4.9,
      successRate: "99%",
      govFee: "฿1,000"
    },
    {
      id: 2,
      nationality: "British",
      flag: "🇬🇧",
      visaType: "Tourist Visa (TR)",
      duration: "60 days",
      price: "฿2,000",
      processingTime: "3-5 working days",
      category: "tourist",
      urgency: "normal",
      description: "Single entry tourist visa for British citizens visiting Thailand",
      requirements: ["Passport valid 6+ months", "Passport photo", "Flight booking", "Hotel booking", "Bank statement (20,000 THB)"],
      features: ["Single Entry", "60 days stay", "Extendable once"],
      rating: 4.9,
      successRate: "99%",
      govFee: "฿1,000"
    },
    {
      id: 3,
      nationality: "Chinese",
      flag: "🇨🇳",
      visaType: "Tourist Visa (TR)",
      duration: "60 days",
      price: "฿2,500",
      processingTime: "5-7 working days",
      category: "tourist",
      urgency: "normal",
      description: "Single entry tourist visa for Chinese citizens visiting Thailand",
      requirements: ["Passport valid 6+ months", "Passport photo", "Flight booking", "Hotel booking", "Bank statement (20,000 THB)", "Employment letter"],
      features: ["Single Entry", "60 days stay", "Extendable"],
      rating: 4.8,
      successRate: "97%",
      govFee: "฿1,000"
    },
    {
      id: 4,
      nationality: "Indian",
      flag: "🇮🇳",
      visaType: "Tourist Visa (TR)",
      duration: "60 days",
      price: "฿2,500",
      processingTime: "5-7 working days",
      category: "tourist",
      urgency: "normal",
      description: "Single entry tourist visa for Indian citizens visiting Thailand",
      requirements: ["Passport valid 6+ months", "Passport photo", "Flight booking", "Hotel booking", "Bank statement (20,000 THB)", "Employment letter"],
      features: ["Single Entry", "60 days stay", "Extendable"],
      rating: 4.8,
      successRate: "96%",
      govFee: "฿1,000"
    },
    {
      id: 5,
      nationality: "Japanese",
      flag: "🇯🇵",
      visaType: "Visa Exemption",
      duration: "30 days",
      price: "฿500",
      processingTime: "Same day",
      category: "tourist",
      urgency: "express",
      description: "Visa exemption consultation and document verification for Japanese citizens",
      requirements: ["Passport valid 6+ months", "Return ticket", "Proof of accommodation"],
      features: ["No visa required", "30 days stay", "Consultation service"],
      rating: 5.0,
      successRate: "100%",
      govFee: "฿0"
    },
    {
      id: 6,
      nationality: "Australian",
      flag: "🇦🇺",
      visaType: "Tourist Visa (TR)",
      duration: "60 days",
      price: "฿2,000",
      processingTime: "3-5 working days",
      category: "tourist",
      urgency: "normal",
      description: "Single entry tourist visa for Australian citizens visiting Thailand",
      requirements: ["Passport valid 6+ months", "Passport photo", "Flight booking", "Hotel booking", "Bank statement (20,000 THB)"],
      features: ["Single Entry", "60 days stay", "Extendable"],
      rating: 4.9,
      successRate: "99%",
      govFee: "฿1,000"
    },
    {
      id: 7,
      nationality: "German",
      flag: "🇩🇪",
      visaType: "Tourist Visa (TR)",
      duration: "60 days",
      price: "฿2,000",
      processingTime: "3-5 working days",
      category: "tourist",
      urgency: "normal",
      description: "Single entry tourist visa for German citizens visiting Thailand",
      requirements: ["Passport valid 6+ months", "Passport photo", "Flight booking", "Hotel booking", "Bank statement (20,000 THB)"],
      features: ["Single Entry", "60 days stay", "Extendable"],
      rating: 4.9,
      successRate: "99%",
      govFee: "฿1,000"
    },
    {
      id: 8,
      nationality: "Russian",
      flag: "🇷🇺",
      visaType: "Tourist Visa (TR)",
      duration: "60 days",
      price: "฿3,000",
      processingTime: "7-10 working days",
      category: "tourist",
      urgency: "normal",
      description: "Single entry tourist visa for Russian citizens visiting Thailand",
      requirements: ["Passport valid 6+ months", "Passport photo", "Flight booking", "Hotel booking", "Bank statement (20,000 THB)", "Employment letter", "Travel insurance"],
      features: ["Single Entry", "60 days stay", "Extendable"],
      rating: 4.7,
      successRate: "95%",
      govFee: "฿1,000"
    },
    {
      id: 9,
      nationality: "American",
      flag: "🇺🇸",
      visaType: "Non-Immigrant B (Work)",
      duration: "90 days",
      price: "฿8,500",
      processingTime: "10-15 working days",
      category: "work",
      urgency: "normal",
      description: "Non-immigrant B visa for American citizens seeking employment in Thailand",
      requirements: ["Passport valid 6+ months", "Passport photos", "Employment contract", "Company documents", "Educational certificates", "Medical certificate", "Police clearance"],
      features: ["90 days stay", "Work permit eligible", "Extendable"],
      rating: 4.6,
      successRate: "92%",
      govFee: "฿2,000"
    },
    {
      id: 10,
      nationality: "British",
      flag: "🇬🇧",
      visaType: "Non-Immigrant O (Retirement)",
      duration: "90 days",
      price: "฿6,500",
      processingTime: "7-10 working days",
      category: "retirement",
      urgency: "normal",
      description: "Non-immigrant O visa for British retirees over 50 years old",
      requirements: ["Passport valid 6+ months", "Passport photos", "Bank statement (800,000 THB)", "Medical certificate", "Police clearance", "Pension proof"],
      features: ["90 days stay", "Renewable annually", "Multiple entry option"],
      rating: 4.8,
      successRate: "94%",
      govFee: "฿2,000"
    },
    {
      id: 11,
      nationality: "Canadian",
      flag: "🇨🇦",
      visaType: "Non-Immigrant ED (Education)",
      duration: "90 days",
      price: "฿5,500",
      processingTime: "7-10 working days",
      category: "education",
      urgency: "normal",
      description: "Non-immigrant ED visa for Canadian students in Thailand",
      requirements: ["Passport valid 6+ months", "Passport photos", "Acceptance letter", "Educational certificates", "Financial proof", "Medical certificate"],
      features: ["90 days stay", "Extendable"],
      rating: 4.7,
      successRate: "93%",
      govFee: "฿2,000"
    },
    {
      id: 12,
      nationality: "French",
      flag: "🇫🇷",
      visaType: "Non-Immigrant O (Marriage)",
      duration: "90 days",
      price: "฿5,000",
      processingTime: "7-10 working days",
      category: "family",
      urgency: "normal",
      description: "Non-immigrant O visa for French citizens married to Thai nationals",
      requirements: ["Passport valid 6+ months", "Passport photos", "Marriage certificate", "Spouse's ID card", "Bank statement (400,000 THB)", "Medical certificate"],
      features: ["90 days stay", "Renewable annually", "Work permit eligible"],
      rating: 4.8,
      successRate: "96%",
      govFee: "฿2,000"
    },
    {
      id: 13,
      nationality: "All",
      flag: "🌍",
      visaType: "Business Visa Consultation",
      duration: "Varies",
      price: "฿3,500",
      processingTime: "5-10 working days",
      category: "business",
      urgency: "normal",
      description: "Professional business visa consultation and application assistance for Thailand",
      requirements: ["Business invitation", "Company documents", "Financial statements", "Travel itinerary"],
      features: ["Expert guidance", "Document review", "Application support"],
      rating: 4.9,
      successRate: "97%",
      govFee: "฿2,000"
    },
    {
      id: 14,
      nationality: "All",
      flag: "🌍",
      visaType: "1-Year Multiple Entry Visa",
      duration: "1 year",
      price: "฿15,000",
      processingTime: "15-20 working days",
      category: "longterm",
      urgency: "normal",
      description: "1-year multiple entry visa for frequent travelers to Thailand",
      requirements: ["Passport valid 18+ months", "Financial proof", "Travel history", "Medical certificate"],
      features: ["Multiple entries", "1-year validity", "Extended stays"],
      rating: 4.7,
      successRate: "94%",
      govFee: "฿5,000"
    },
    {
      id: 15,
      nationality: "All",
      flag: "🌍",
      visaType: "Work Permit Application",
      duration: "Processing only",
      price: "฿12,000",
      processingTime: "20-30 working days",
      category: "workpermit",
      urgency: "normal",
      description: "Complete work permit application assistance for foreign workers in Thailand",
      requirements: ["Non-B visa", "Employment contract", "Company documents", "Educational certificates", "Medical certificate"],
      features: ["Legal employment", "Full documentation", "Renewal assistance"],
      rating: 4.8,
      successRate: "95%",
      govFee: "฿3,000"
    },
    {
      id: 16,
      nationality: "All",
      flag: "🌍",
      visaType: "Company Registration",
      duration: "30-45 days",
      price: "฿25,000",
      processingTime: "30-45 working days",
      category: "business",
      urgency: "normal",
      description: "Complete company registration services in Thailand for foreign investors",
      requirements: ["Business plan", "Capital proof", "Director documents", "Office lease"],
      features: ["Legal entity", "Tax registration", "Bank account setup"],
      rating: 4.6,
      successRate: "98%",
      govFee: "฿5,000"
    },
    {
      id: 17,
      nationality: "All",
      flag: "🌍",
      visaType: "Marriage Registration",
      duration: "5-10 days",
      price: "฿8,500",
      processingTime: "5-10 working days",
      category: "family",
      urgency: "normal",
      description: "Legal marriage registration services in Thailand for foreign nationals",
      requirements: ["Single status certificate", "Passport", "Birth certificate", "Divorce decree (if applicable)"],
      features: ["Legal marriage", "Certificate translation", "Embassy assistance"],
      rating: 4.9,
      successRate: "99%",
      govFee: "฿1,500"
    },
    {
      id: 18,
      nationality: "All",
      flag: "🌍",
      visaType: "Corporate Law Consultation",
      duration: "Ongoing",
      price: "฿5,500",
      processingTime: "Same day",
      category: "legal",
      urgency: "express",
      description: "Professional corporate law consultation and legal team arrangement",
      requirements: ["Business documents", "Legal requirements", "Consultation appointment"],
      features: ["Expert lawyers", "Legal compliance", "Ongoing support"],
      rating: 4.8,
      successRate: "100%",
      govFee: "฿0"
    },
    {
      id: 19,
      nationality: "All",
      flag: "🌍",
      visaType: "Investment Consultant Services",
      duration: "Ongoing",
      price: "฿8,500",
      processingTime: "1-3 working days",
      category: "investment",
      urgency: "express",
      description: "Professional investment consulting and business advisory services for foreign investors in Thailand",
      requirements: ["Investment plan", "Financial documents", "Business proposal", "Market analysis"],
      features: ["Investment strategy", "Market research", "ROI analysis", "Risk assessment"],
      rating: 4.9,
      successRate: "100%",
      govFee: "฿0"
    },
    {
      id: 20,
      nationality: "All",
      flag: "🌍",
      visaType: "Accounting & Tax Advisory",
      duration: "Monthly/Annual",
      price: "฿6,500",
      processingTime: "Same day",
      category: "accounting",
      urgency: "express",
      description: "Complete accounting services and tax advisory for businesses and individuals in Thailand",
      requirements: ["Financial records", "Business registration", "Tax documents", "Bank statements"],
      features: ["Monthly bookkeeping", "Tax filing", "Financial reporting", "Compliance audit"],
      rating: 4.8,
      successRate: "100%",
      govFee: "฿0"
    },
    {
      id: 21,
      nationality: "All",
      flag: "🌍",
      visaType: "Legal Advisory Services",
      duration: "As needed",
      price: "฿7,500",
      processingTime: "Same day",
      category: "legal",
      urgency: "express",
      description: "Comprehensive legal advice and consultation services by experienced Thai lawyers",
      requirements: ["Legal documents", "Case details", "Consultation appointment", "Legal requirements"],
      features: ["Contract review", "Legal compliance", "Dispute resolution", "Court representation"],
      rating: 4.9,
      successRate: "100%",
      govFee: "฿0"
    },
    {
      id: 22,
      nationality: "All",
      flag: "🌍",
      visaType: "Personal Security Services",
      duration: "As needed",
      price: "฿15,000",
      processingTime: "3-5 working days",
      category: "security",
      urgency: "normal",
      description: "Professional bodyguard and personal protection services in Thailand",
      requirements: ["Security assessment", "Background check", "Service agreement"],
      features: ["Trained professionals", "24/7 protection", "Discreet service"],
      rating: 4.7,
      successRate: "100%",
      govFee: "฿0"
    }
  ];

  const nationalities = [
    { value: 'all', label: 'All Nationalities' },
    { value: 'american', label: 'American 🇺🇸' },
    { value: 'british', label: 'British 🇬🇧' },
    { value: 'chinese', label: 'Chinese 🇨🇳' },
    { value: 'indian', label: 'Indian 🇮🇳' },
    { value: 'japanese', label: 'Japanese 🇯🇵' },
    { value: 'australian', label: 'Australian 🇦🇺' },
    { value: 'german', label: 'German 🇩🇪' },
    { value: 'russian', label: 'Russian 🇷🇺' },
    { value: 'canadian', label: 'Canadian 🇨🇦' },
    { value: 'french', label: 'French 🇫🇷' }
  ];

  const visaTypes = [
    { value: 'all', label: 'All Services', icon: '📋' },
    { value: 'tourist', label: 'Tourist Visa', icon: '🏖️' },
    { value: 'work', label: 'Work Visa', icon: '💼' },
    { value: 'education', label: 'Education Visa', icon: '🎓' },
    { value: 'retirement', label: 'Retirement Visa', icon: '🏡' },
    { value: 'family', label: 'Family & Marriage', icon: '👨‍👩‍👧‍👦' },
    { value: 'business', label: 'Business Services', icon: '🏢' },
    { value: 'longterm', label: 'Long-term Visa', icon: '📅' },
    { value: 'workpermit', label: 'Work Permit', icon: '📄' },
    { value: 'investment', label: 'Investment Consulting', icon: '💰' },
    { value: 'accounting', label: 'Accounting & Tax', icon: '📊' },
    { value: 'legal', label: 'Legal Services', icon: '⚖️' },
    { value: 'security', label: 'Security Services', icon: '🛡️' }
  ];

  const urgencyOptions = ['all', 'express', 'normal', 'economy'];

  const filteredServices = visaServices.filter(service => {
    const matchesSearch = service.nationality.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.visaType.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesNationality = selectedNationality === 'all' || 
                          service.nationality.toLowerCase() === selectedNationality;
    const matchesType = selectedType === 'all' || service.category === selectedType;
    const matchesUrgency = selectedUrgency === 'all' || service.urgency === selectedUrgency;
    return matchesSearch && matchesNationality && matchesType && matchesUrgency;
  });

  const handleConsultation = (serviceId) => {
    // Open email client with pre-filled subject and body
    const subject = encodeURIComponent(`Free Consultation Request - Service ID: ${serviceId}`);
    const body = encodeURIComponent(`Hello,\n\nI would like to request a free consultation for visa service ID: ${serviceId}.\n\nPlease contact me to discuss the requirements and process.\n\nThank you.`);
    window.open(`mailto:ttbkkrhun@yahoo.com?subject=${subject}&body=${body}`, '_blank');
  };

  const handleApply = (serviceId) => {
    // Open phone dialer
    window.open(`tel:0993533556`, '_self');
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Thailand Visa Work Permit Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-4">
              Professional Thailand visa assistance for foreigners seeking to visit, work, or retire in Thailand
            </p>
            <p className="text-lg text-blue-200 max-w-4xl mx-auto mb-6">
              Expert Consultant & Investment Services, Accounting & Legal Advice, Corporate Law by Professional Lawyer Team
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full">✅ 98% Success Rate</span>
              <span className="bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full">⚡ Fast Processing</span>
              <span className="bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full">🏆 Expert Consultation</span>
              <span className="bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full">📋 Document Preparation</span>
              <span className="bg-green-500 bg-opacity-30 px-3 py-1 rounded-full">💰 Investment Consulting</span>
              <span className="bg-green-500 bg-opacity-30 px-3 py-1 rounded-full">📊 Accounting Services</span>
              <span className="bg-green-500 bg-opacity-30 px-3 py-1 rounded-full">⚖️ Legal Advisory</span>
              <span className="bg-green-500 bg-opacity-30 px-3 py-1 rounded-full">👨‍💼 Professional Lawyer Team</span>
            </div>
          </div>

          {/* Quick Quote Form */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Get Your Thailand Visa Quote</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Nationality
                </label>
                <select
                  value={selectedNationality}
                  onChange={(e) => setSelectedNationality(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {nationalities.map(nationality => (
                    <option key={nationality.value} value={nationality.value}>
                      {nationality.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Visa Purpose
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Processing Speed
                </label>
                <select
                  value={selectedUrgency}
                  onChange={(e) => setSelectedUrgency(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Processing Times</option>
                  <option value="express">Express (1-3 days)</option>
                  <option value="normal">Standard (3-15 days)</option>
                </select>
              </div>

              <div className="flex items-end">
                <button 
                  onClick={() => {
                    const subject = encodeURIComponent('Free Quote Request - Thailand Visa Services');
                    const body = encodeURIComponent('Hello,\n\nI would like to request a free quote for Thailand visa services.\n\nPlease provide me with detailed information and pricing.\n\nThank you.');
                    window.open(`mailto:ttbkkrhun@yahoo.com?subject=${subject}&body=${body}`, '_blank');
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                >
                  📧 Email for Quote
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
              {/* Nationality Header */}
              <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{service.flag}</span>
                    <div>
                      <h3 className="text-xl font-bold">{service.nationality} Citizens</h3>
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

                {/* Actions */}
                <div className="border-t pt-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleConsultation(service.id)}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-300"
                    >
                      📧 Email Consult
                    </button>
                    <button
                      onClick={() => handleApply(service.id)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
                    >
                      📞 Call Now
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

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Why Choose Our Thailand Visa Work Permit Services?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We are Thailand's leading visa service provider with over 10 years of experience helping foreigners obtain Thai visas
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Knowledge</h3>
              <p className="text-gray-600">10+ years experience with Thai immigration law and visa requirements</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Document Preparation</h3>
              <p className="text-gray-600">Complete assistance with document preparation, translation, and verification</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Processing</h3>
              <p className="text-gray-600">Express processing available for urgent visa applications</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">98% Success Rate</h3>
              <p className="text-gray-600">Highest approval rate in Thailand with money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Complete Thailand Services for Foreigners
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From visa applications to business setup, investment consulting to legal advice - we provide comprehensive services including professional consultant & investment services, accounting & legal advice, and corporate law by our expert lawyer team for foreigners living and working in Thailand
          </p>
          
          {/* Visa Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Visa & Immigration Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="text-3xl mb-4">🏖️</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Tourist Visas</h4>
                <p className="text-gray-600 text-sm mb-3">60-day single/multiple entry visas for leisure travel</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• All nationalities</li>
                  <li>• Extendable once</li>
                  <li>• Fast processing</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="text-3xl mb-4">💼</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Work Visas & Permits</h4>
                <p className="text-gray-600 text-sm mb-3">Non-B visas and work permit applications</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Employment authorization</li>
                  <li>• Annual renewals</li>
                  <li>• Legal compliance</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <div className="text-3xl mb-4">🏡</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Retirement Visas</h4>
                <p className="text-gray-600 text-sm mb-3">Non-O visas for retirees over 50 years</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• 800K THB requirement</li>
                  <li>• Annual renewable</li>
                  <li>• Multiple entry option</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="text-3xl mb-4">📅</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">1-Year Multiple Entry</h4>
                <p className="text-gray-600 text-sm mb-3">Long-term visas for frequent travelers</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Multiple entries</li>
                  <li>• Extended validity</li>
                  <li>• Business eligible</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Consulting Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Professional Consultant & Investment Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="text-3xl mb-4">💰</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Investment Consulting</h4>
                <p className="text-gray-600 text-sm mb-3">Expert investment advice and business strategy</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Investment strategy</li>
                  <li>• Market research</li>
                  <li>• ROI analysis</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="text-3xl mb-4">📊</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Accounting & Tax</h4>
                <p className="text-gray-600 text-sm mb-3">Complete accounting and tax advisory services</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Monthly bookkeeping</li>
                  <li>• Tax filing</li>
                  <li>• Financial reporting</li>
                  <li>• Compliance audit</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="text-3xl mb-4">⚖️</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Legal Advisory</h4>
                <p className="text-gray-600 text-sm mb-3">Professional lawyer team for legal advice</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Contract review</li>
                  <li>• Legal compliance</li>
                  <li>• Dispute resolution</li>
                  <li>• Court representation</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <div className="text-3xl mb-4">🎯</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Business Consulting</h4>
                <p className="text-gray-600 text-sm mb-3">Comprehensive business advisory services</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Business planning</li>
                  <li>• Market entry strategy</li>
                  <li>• Operational consulting</li>
                  <li>• Growth strategy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Business & Legal Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Corporate Law by Professional Lawyer Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-indigo-50 p-6 rounded-xl">
                <div className="text-3xl mb-4">🏢</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Company Registration</h4>
                <p className="text-gray-600 text-sm mb-3">Complete business setup and registration in Thailand</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Legal entity formation</li>
                  <li>• Tax registration</li>
                  <li>• Bank account setup</li>
                  <li>• Ongoing compliance</li>
                </ul>
              </div>
              <div className="bg-teal-50 p-6 rounded-xl">
                <div className="text-3xl mb-4">💼</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Business Visa Consultation</h4>
                <p className="text-gray-600 text-sm mb-3">Expert guidance for business visa applications</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Investment visas</li>
                  <li>• BOI applications</li>
                  <li>• Business planning</li>
                  <li>• Compliance advice</li>
                </ul>
              </div>
              <div className="bg-cyan-50 p-6 rounded-xl">
                <div className="text-3xl mb-4">⚖️</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Corporate Law Services</h4>
                <p className="text-gray-600 text-sm mb-3">Professional legal team and consultation</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Experienced lawyers</li>
                  <li>• Contract drafting</li>
                  <li>• Legal compliance</li>
                  <li>• Dispute resolution</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Personal Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Personal & Family Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-pink-50 p-6 rounded-xl">
                <div className="text-3xl mb-4">💒</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Marriage Registration</h4>
                <p className="text-gray-600 text-sm mb-3">Legal marriage registration services in Thailand</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Document preparation</li>
                  <li>• Embassy assistance</li>
                  <li>• Translation services</li>
                  <li>• Legal certification</li>
                </ul>
              </div>
              <div className="bg-rose-50 p-6 rounded-xl">
                <div className="text-3xl mb-4">👨‍👩‍👧‍👦</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Family Visa Services</h4>
                <p className="text-gray-600 text-sm mb-3">Marriage and dependent visa applications</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Spouse visas</li>
                  <li>• Dependent visas</li>
                  <li>• Family reunification</li>
                  <li>• Extension services</li>
                </ul>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl">
                <div className="text-3xl mb-4">🛡️</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Personal Security</h4>
                <p className="text-gray-600 text-sm mb-3">Professional bodyguard and protection services</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Trained professionals</li>
                  <li>• 24/7 protection</li>
                  <li>• Discreet service</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Simple 4-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Free Consultation</h3>
              <p className="text-gray-600">Contact us for free visa consultation and requirement assessment</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Document Preparation</h3>
              <p className="text-gray-600">We help prepare and verify all required documents for your visa application</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Application Submission</h3>
              <p className="text-gray-600">Submit your application to Thai embassy/consulate with our guidance</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Visa Approval</h3>
              <p className="text-gray-600">Receive your approved Thailand visa and travel with confidence</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How long does it take to get a Thailand visa?</h3>
              <p className="text-gray-600">Processing times vary by nationality and visa type. Tourist visas typically take 3-7 working days, while work and other non-immigrant visas may take 7-15 working days.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do I need a visa to visit Thailand?</h3>
              <p className="text-gray-600">It depends on your nationality. Citizens of many countries can enter Thailand visa-free for 30 days. However, if you plan to stay longer or for specific purposes like work, you'll need a visa.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What documents do I need for a Thailand visa?</h3>
              <p className="text-gray-600">Common requirements include a valid passport (6+ months validity), passport photos, flight bookings, accommodation proof, and financial statements. Specific requirements vary by visa type and nationality.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Can you guarantee visa approval?</h3>
              <p className="text-gray-600">While we have a 98% success rate, visa approval ultimately depends on the Thai embassy/consulate. We provide expert guidance to maximize your chances of approval and offer a money-back guarantee if your application is rejected due to our error.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Location Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Our Thailand Visa Experts</h2>
              <p className="text-gray-600 mb-8">
                Get professional assistance for all your Thailand visa and legal service needs. Our experienced team is ready to help you navigate Thai immigration requirements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:0993533556" className="hover:text-blue-600 transition-colors">
                        099-353-3556
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-green-600 text-white p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                    <p className="text-gray-600">
                      <a href="https://wa.me/66993533556" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                        099-353-3556
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 text-white p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:ttbkkrhun@yahoo.com" className="hover:text-purple-600 transition-colors">
                        ttbkkrhun@yahoo.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Office Location */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Visit Our Bangkok Office</h2>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-red-600 text-white p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Office Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      19/18 Soi Sukhumvit 13 (Saeng Chan)<br/>
                      Sukhumvit Road, Khlong Toei Nuea<br/>
                      Watthana District, Bangkok 10110<br/>
                      Thailand
                    </p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Office Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Languages Spoken</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">English</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Thai</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Chinese</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Japanese</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Thailand Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for expert assistance with visas, business setup, legal services, and more. Free consultation available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('tel:0993533556', '_self')}
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              📞 Call: 099-353-3556
            </button>
            <button 
              onClick={() => {
                const subject = encodeURIComponent('Thailand Visa Services Inquiry');
                const body = encodeURIComponent('Hello,\n\nI am interested in your Thailand visa and legal services.\n\nPlease contact me to discuss my requirements.\n\nThank you.');
                window.open(`mailto:ttbkkrhun@yahoo.com?subject=${subject}&body=${body}`, '_blank');
              }}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              📧 Email: ttbkkrhun@yahoo.com
            </button>
            <button 
              onClick={() => window.open('https://wa.me/66993533556', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              💬 WhatsApp: 099-353-3556
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default VisaServicesPage;