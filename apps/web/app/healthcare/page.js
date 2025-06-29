'use client';

import React, { useState } from 'react';

const HealthcarePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedArea, setSelectedArea] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedInsurance, setSelectedInsurance] = useState('all');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [urgency, setUrgency] = useState('routine');

  const healthcareProviders = [
    {
      id: 1,
      name: "Bangkok International Hospital",
      type: "Hospital",
      specialty: "general",
      area: "Sukhumvit",
      rating: 4.8,
      image: "🏥",
      services: ["Emergency Care", "Surgery", "Cardiology", "Neurology"],
      languages: ["English", "Hindi", "Thai"],
      insurance: ["International", "Local", "Self-pay"],
      consultationFee: "฿1,500-3,000",
      description: "Leading international hospital with comprehensive medical services and Indian-speaking staff",
      highlights: ["24/7 Emergency", "International Standards", "Insurance Accepted"],
      address: "Sukhumvit Soi 3, Bangkok",
      phone: "02-310-3000",
      availability: "24/7"
    },
    {
      id: 2,
      name: "Dr. Rajesh Sharma - Cardiologist",
      type: "Specialist",
      specialty: "cardiology",
      area: "Silom",
      rating: 4.9,
      image: "👨‍⚕️",
      services: ["Heart Checkup", "ECG", "Stress Test", "Cardiac Surgery"],
      languages: ["English", "Hindi", "Punjabi"],
      insurance: ["International", "Self-pay"],
      consultationFee: "฿2,000",
      description: "Experienced cardiologist with 15+ years serving the Indian community in Bangkok",
      highlights: ["Indian Doctor", "Cardiac Specialist", "Hindi Speaking"],
      address: "Silom Medical Center, Bangkok",
      phone: "02-234-5678",
      availability: "Mon-Sat 9AM-6PM"
    },
    {
      id: 3,
      name: "Family Care Clinic",
      type: "Clinic",
      specialty: "family-medicine",
      area: "Thonglor",
      rating: 4.6,
      image: "👨‍👩‍👧‍👦",
      services: ["General Checkup", "Vaccination", "Child Care", "Women's Health"],
      languages: ["English", "Hindi", "Thai"],
      insurance: ["Local", "Self-pay"],
      consultationFee: "฿800-1,200",
      description: "Family-friendly clinic providing comprehensive healthcare for all ages",
      highlights: ["Family Practice", "Affordable Care", "Multi-lingual"],
      address: "Thonglor District, Bangkok",
      phone: "02-391-2345",
      availability: "Mon-Fri 8AM-8PM, Sat 9AM-5PM"
    },
    {
      id: 4,
      name: "Dr. Priya Patel - Gynecologist",
      type: "Specialist",
      specialty: "gynecology",
      area: "Asok",
      rating: 4.7,
      image: "👩‍⚕️",
      services: ["Women's Health", "Prenatal Care", "Fertility Treatment", "Surgery"],
      languages: ["English", "Hindi", "Gujarati"],
      insurance: ["International", "Local"],
      consultationFee: "฿1,800",
      description: "Female gynecologist specializing in women's health with cultural sensitivity",
      highlights: ["Female Doctor", "Cultural Understanding", "Pregnancy Care"],
      address: "Asok Medical Tower, Bangkok",
      phone: "02-665-4321",
      availability: "Tue-Sat 10AM-7PM"
    },
    {
      id: 5,
      name: "Mumbai Dental Clinic",
      type: "Dental",
      specialty: "dentistry",
      area: "Pratunam",
      rating: 4.5,
      image: "🦷",
      services: ["Dental Checkup", "Cleaning", "Orthodontics", "Implants"],
      languages: ["English", "Hindi", "Marathi"],
      insurance: ["Local", "Self-pay"],
      consultationFee: "฿600-2,500",
      description: "Modern dental clinic with Indian dentists providing quality oral healthcare",
      highlights: ["Indian Dentists", "Modern Equipment", "Affordable Prices"],
      address: "Pratunam Area, Bangkok",
      phone: "02-252-7890",
      availability: "Mon-Sat 9AM-7PM"
    },
    {
      id: 6,
      name: "Traditional Ayurveda Center",
      type: "Alternative",
      specialty: "ayurveda",
      area: "Chatuchak",
      rating: 4.4,
      image: "🌿",
      services: ["Ayurvedic Consultation", "Herbal Medicine", "Panchakarma", "Massage Therapy"],
      languages: ["English", "Hindi", "Sanskrit"],
      insurance: ["Self-pay"],
      consultationFee: "฿1,000-2,000",
      description: "Authentic Ayurvedic treatments by certified practitioners from India",
      highlights: ["Traditional Ayurveda", "Certified Practitioners", "Herbal Medicine"],
      address: "Chatuchak District, Bangkok",
      phone: "02-940-1234",
      availability: "Daily 9AM-6PM"
    },
    {
      id: 7,
      name: "Emergency Care Plus",
      type: "Emergency",
      specialty: "emergency",
      area: "Multiple Locations",
      rating: 4.3,
      image: "🚑",
      services: ["24/7 Emergency", "Ambulance", "Urgent Care", "Home Visits"],
      languages: ["English", "Hindi", "Thai"],
      insurance: ["International", "Local", "Self-pay"],
      consultationFee: "฿2,000-5,000",
      description: "24/7 emergency medical services with multilingual support",
      highlights: ["24/7 Available", "Multiple Locations", "Ambulance Service"],
      address: "Multiple locations across Bangkok",
      phone: "1669",
      availability: "24/7"
    },
    {
      id: 8,
      name: "Mental Health & Wellness Center",
      type: "Mental Health",
      specialty: "psychiatry",
      area: "Phrom Phong",
      rating: 4.6,
      image: "🧠",
      services: ["Counseling", "Therapy", "Stress Management", "Depression Treatment"],
      languages: ["English", "Hindi", "Tamil"],
      insurance: ["International", "Self-pay"],
      consultationFee: "฿1,500-2,500",
      description: "Mental health support with understanding of cultural backgrounds and stressors",
      highlights: ["Cultural Sensitivity", "Confidential Care", "Holistic Approach"],
      address: "Phrom Phong Area, Bangkok",
      phone: "02-712-3456",
      availability: "Mon-Fri 9AM-7PM, Sat 10AM-4PM"
    }
  ];

  const specialties = [
    { value: 'all', label: 'All Specialties', icon: '🏥' },
    { value: 'general', label: 'General Medicine', icon: '👨‍⚕️' },
    { value: 'cardiology', label: 'Cardiology', icon: '❤️' },
    { value: 'family-medicine', label: 'Family Medicine', icon: '👨‍👩‍👧‍👦' },
    { value: 'gynecology', label: 'Gynecology', icon: '👩‍⚕️' },
    { value: 'dentistry', label: 'Dentistry', icon: '🦷' },
    { value: 'ayurveda', label: 'Ayurveda', icon: '🌿' },
    { value: 'emergency', label: 'Emergency Care', icon: '🚑' },
    { value: 'psychiatry', label: 'Mental Health', icon: '🧠' }
  ];

  const areas = [
    { value: 'all', label: 'All Areas' },
    { value: 'sukhumvit', label: 'Sukhumvit' },
    { value: 'silom', label: 'Silom' },
    { value: 'thonglor', label: 'Thonglor' },
    { value: 'asok', label: 'Asok' },
    { value: 'pratunam', label: 'Pratunam' },
    { value: 'chatuchak', label: 'Chatuchak' },
    { value: 'phrom-phong', label: 'Phrom Phong' },
    { value: 'multiple-locations', label: 'Multiple Locations' }
  ];

  const languages = [
    { value: 'all', label: 'All Languages' },
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'tamil', label: 'Tamil' },
    { value: 'punjabi', label: 'Punjabi' },
    { value: 'gujarati', label: 'Gujarati' },
    { value: 'marathi', label: 'Marathi' }
  ];

  const insuranceTypes = [
    { value: 'all', label: 'All Insurance' },
    { value: 'international', label: 'International Insurance' },
    { value: 'local', label: 'Local Insurance' },
    { value: 'self-pay', label: 'Self-pay' }
  ];

  const timeSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];

  const filteredProviders = healthcareProviders.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         provider.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         provider.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || provider.specialty === selectedSpecialty;
    const matchesArea = selectedArea === 'all' || 
                       provider.area.toLowerCase().replace(/\s+/g, '-') === selectedArea;
    const matchesLanguage = selectedLanguage === 'all' ||
                           provider.languages.some(lang => lang.toLowerCase() === selectedLanguage);
    const matchesInsurance = selectedInsurance === 'all' ||
                            provider.insurance.some(ins => ins.toLowerCase().replace(/\s+/g, '-') === selectedInsurance);
    return matchesSearch && matchesSpecialty && matchesArea && matchesLanguage && matchesInsurance;
  });

  const handleAppointment = (providerId) => {
    if (!appointmentDate || !appointmentTime) {
      alert('Please select date and time for your appointment');
      return;
    }
    alert(`Booking appointment with provider ID: ${providerId} on ${appointmentDate} at ${appointmentTime} (${urgency} priority)`);
    // TODO: Implement appointment booking logic
  };

  const handleEmergencyCall = () => {
    if (confirm('Are you experiencing a medical emergency? This will call emergency services.')) {
      window.open('tel:1669', '_self');
    }
  };

  const handleCall = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🏥 Healthcare Services for Indian Community
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Access quality healthcare with doctors who understand your language and cultural needs
            </p>
          </div>

          {/* Emergency Banner */}
          <div className="mt-8 bg-red-600 rounded-lg p-4 text-center">
            <h3 className="text-lg font-bold mb-2">🚨 Medical Emergency?</h3>
            <button 
              onClick={handleEmergencyCall}
              className="bg-white text-red-600 hover:bg-red-50 font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              Call 1669 - Emergency Services
            </button>
          </div>

          {/* Appointment Booking Form */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Book Medical Appointment</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Appointment Date
                </label>
                <input
                  type="date"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <select
                  value={appointmentTime}
                  onChange={(e) => setAppointmentTime(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select time</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urgency
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="routine">Routine Checkup</option>
                  <option value="urgent">Urgent Care</option>
                  <option value="emergency">Emergency</option>
                </select>
              </div>

              <div className="flex items-end">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                  🩺 Find Doctor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Providers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search doctors, hospitals, or medical services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-2">
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {areas.map(area => (
                  <option key={area.value} value={area.value}>{area.label}</option>
                ))}
              </select>
              
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {languages.map(lang => (
                  <option key={lang.value} value={lang.value}>{lang.label}</option>
                ))}
              </select>

              <select
                value={selectedInsurance}
                onChange={(e) => setSelectedInsurance(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {insuranceTypes.map(insurance => (
                  <option key={insurance.value} value={insurance.value}>{insurance.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Specialty Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {specialties.map(specialty => (
              <button
                key={specialty.value}
                onClick={() => setSelectedSpecialty(specialty.value)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition duration-300 ${
                  selectedSpecialty === specialty.value
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 shadow-sm'
                }`}
              >
                <span>{specialty.icon}</span>
                <span>{specialty.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-blue-600">{filteredProviders.length}</span> healthcare providers
          </p>
        </div>

        {/* Healthcare Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProviders.map(provider => (
            <div key={provider.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Provider Header */}
              <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{provider.image}</span>
                    <div>
                      <h3 className="text-xl font-bold">{provider.name}</h3>
                      <p className="text-blue-100">{provider.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex text-yellow-300">
                      {'★'.repeat(Math.floor(provider.rating))}
                    </div>
                    <p className="text-sm text-blue-100">{provider.rating}</p>
                  </div>
                </div>
              </div>

              {/* Provider Details */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">{provider.description}</p>

                {/* Key Info */}
                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-500">Consultation Fee</p>
                      <p className="font-semibold text-blue-600">{provider.consultationFee}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Availability</p>
                      <p className="font-semibold text-green-600">{provider.availability}</p>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Services:</h4>
                  <div className="flex flex-wrap gap-1">
                    {provider.services.slice(0, 3).map((service, index) => (
                      <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {service}
                      </span>
                    ))}
                    {provider.services.length > 3 && (
                      <span className="text-xs text-blue-600">+{provider.services.length - 3} more</span>
                    )}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Languages:</h4>
                  <div className="flex flex-wrap gap-1">
                    {provider.languages.map((language, index) => (
                      <span key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Insurance */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Insurance Accepted:</h4>
                  <div className="flex flex-wrap gap-1">
                    {provider.insurance.map((ins, index) => (
                      <span key={index} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                        {ins}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="text-sm text-gray-600">
                    {provider.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center mb-1">
                        <span className="mr-2 text-green-500">•</span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mb-4 text-sm text-gray-600">
                  <p className="flex items-center mb-1">
                    <span className="mr-2">📍</span>
                    {provider.address}
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📞</span>
                    {provider.phone}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCall(provider.phone)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    📞 Call
                  </button>
                  <button
                    onClick={() => handleAppointment(provider.id)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProviders.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏥</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No healthcare providers found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Health Tips Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Healthcare Network?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Language Support</h3>
              <p className="text-gray-600">Doctors and staff who speak Hindi, Tamil, Punjabi, and other Indian languages</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cultural Understanding</h3>
              <p className="text-gray-600">Healthcare providers who understand Indian culture and dietary requirements</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Insurance Friendly</h3>
              <p className="text-gray-600">Accept both international and local insurance plans for convenience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Need Medical Assistance?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our healthcare partners are ready to provide quality medical care in your preferred language
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition duration-300">
              📱 Download Health App
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition duration-300">
              🩺 Health Checkup Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcarePage;