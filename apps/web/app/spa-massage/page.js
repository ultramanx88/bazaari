'use client';

import React, { useState } from 'react';

const SpaMassagePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const spaServices = [
    {
      id: 1,
      name: "Traditional Thai Massage",
      description: "Authentic Thai massage using ancient techniques to relieve tension and improve flexibility",
      price: "฿800",
      duration: "60 min",
      category: "massage",
      image: "💆‍♀️",
      rating: 4.8,
      benefits: ["Stress Relief", "Muscle Relaxation", "Improved Circulation"],
      therapist: "Certified Thai Therapist",
      location: "Sukhumvit Spa Center"
    },
    {
      id: 2,
      name: "Hot Stone Therapy",
      description: "Relaxing massage using heated stones to melt away stress and tension",
      price: "฿1,200",
      duration: "90 min",
      category: "massage",
      image: "🔥",
      rating: 4.7,
      benefits: ["Deep Relaxation", "Pain Relief", "Better Sleep"],
      therapist: "Expert Stone Therapist",
      location: "Wellness Retreat Bangkok"
    },
    {
      id: 3,
      name: "Aromatherapy Facial",
      description: "Rejuvenating facial treatment with essential oils for glowing skin",
      price: "฿1,500",
      duration: "75 min",
      category: "facial",
      image: "🌸",
      rating: 4.9,
      benefits: ["Skin Rejuvenation", "Anti-aging", "Deep Cleansing"],
      therapist: "Skincare Specialist",
      location: "Beauty & Wellness Clinic"
    },
    {
      id: 4,
      name: "Couples Massage Package",
      description: "Romantic spa experience for couples with side-by-side massage rooms",
      price: "฿2,800",
      duration: "120 min",
      category: "couples",
      image: "💑",
      rating: 4.6,
      benefits: ["Bonding Experience", "Stress Relief", "Romantic Atmosphere"],
      therapist: "Duo Massage Team",
      location: "Romantic Spa Retreat"
    },
    {
      id: 5,
      name: "Deep Tissue Massage",
      description: "Intensive massage targeting deep muscle layers for pain relief",
      price: "฿1,000",
      duration: "60 min",
      category: "massage",
      image: "💪",
      rating: 4.5,
      benefits: ["Pain Relief", "Muscle Recovery", "Tension Release"],
      therapist: "Sports Massage Therapist",
      location: "Therapeutic Massage Center"
    },
    {
      id: 6,
      name: "Herbal Steam Treatment",
      description: "Traditional herbal steam therapy to detoxify and rejuvenate the body",
      price: "฿600",
      duration: "45 min",
      category: "wellness",
      image: "🌿",
      rating: 4.4,
      benefits: ["Detoxification", "Skin Purification", "Respiratory Health"],
      therapist: "Herbal Therapy Specialist",
      location: "Natural Wellness Center"
    },
    {
      id: 7,
      name: "Prenatal Massage",
      description: "Gentle massage specially designed for expecting mothers",
      price: "฿900",
      duration: "60 min",
      category: "wellness",
      image: "🤱",
      rating: 4.7,
      benefits: ["Pregnancy Comfort", "Circulation", "Stress Relief"],
      therapist: "Certified Prenatal Therapist",
      location: "Maternity Wellness Center"
    },
    {
      id: 8,
      name: "Full Body Scrub & Wrap",
      description: "Exfoliating body scrub followed by nourishing body wrap",
      price: "฿1,800",
      duration: "90 min",
      category: "body-treatment",
      image: "✨",
      rating: 4.6,
      benefits: ["Skin Smoothing", "Hydration", "Body Contouring"],
      therapist: "Body Treatment Specialist",
      location: "Luxury Body Spa"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Services', icon: '🌟' },
    { value: 'massage', label: 'Massage', icon: '💆‍♀️' },
    { value: 'facial', label: 'Facial', icon: '🌸' },
    { value: 'couples', label: 'Couples', icon: '💑' },
    { value: 'wellness', label: 'Wellness', icon: '🌿' },
    { value: 'body-treatment', label: 'Body Treatment', icon: '✨' }
  ];

  const durations = ['all', '45 min', '60 min', '75 min', '90 min', '120 min'];
  const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

  const filteredServices = spaServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesDuration = selectedDuration === 'all' || service.duration === selectedDuration;
    return matchesSearch && matchesCategory && matchesDuration;
  });

  const handleBooking = (serviceId) => {
    if (!selectedDate || !selectedTime) {
      alert('Please select date and time for your appointment');
      return;
    }
    alert(`Booking spa service ID: ${serviceId} on ${selectedDate} at ${selectedTime}`);
    // TODO: Implement booking logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              💆‍♀️ Spa & Massage Services
            </h1>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Relax, rejuvenate, and restore your mind and body with our premium wellness treatments
            </p>
          </div>

          {/* Quick Booking Form */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Quick Appointment Booking</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Select time</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                  📅 Set Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Category Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search spa services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="all">All Durations</option>
                {durations.slice(1).map(duration => (
                  <option key={duration} value={duration}>{duration}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-pink-50 border border-gray-200 shadow-sm'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-pink-600">{filteredServices.length}</span> spa services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Service Image */}
              <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-6xl">
                {service.image}
              </div>

              {/* Service Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                  <span className="text-sm bg-pink-100 text-pink-800 px-2 py-1 rounded-full font-medium">
                    {service.duration}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(service.rating))}
                    {'☆'.repeat(5 - Math.floor(service.rating))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {service.rating} ({Math.floor(Math.random() * 150) + 30} reviews)
                  </span>
                </div>

                {/* Therapist & Location */}
                <div className="mb-4 text-sm text-gray-600">
                  <p className="flex items-center mb-1">
                    <span className="mr-2">👨‍⚕️</span>
                    {service.therapist}
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📍</span>
                    {service.location}
                  </p>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.benefits.map((benefit, index) => (
                      <span key={index} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Book Button */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-pink-600">{service.price}</span>
                    <span className="text-gray-600 text-sm ml-1">/{service.duration}</span>
                  </div>
                  <button
                    onClick={() => handleBooking(service.id)}
                    className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💆‍♀️</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No spa services found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Spa Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Certified Therapists</h3>
              <p className="text-gray-600">All our therapists are professionally trained and certified</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Natural Products</h3>
              <p className="text-gray-600">We use only premium, natural, and organic spa products</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">😌</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Relaxing Environment</h3>
              <p className="text-gray-600">Peaceful and serene atmosphere for ultimate relaxation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Relax and Rejuvenate?</h2>
          <p className="text-xl text-pink-100 mb-8">
            Book your spa appointment today and experience the ultimate wellness journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 hover:bg-pink-50 font-semibold py-3 px-8 rounded-lg transition duration-300">
              📞 Call for Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-pink-600 font-semibold py-3 px-8 rounded-lg transition duration-300">
              💬 Live Chat Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaMassagePage;