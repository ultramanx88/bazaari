'use client';

import React, { useState } from 'react';

const RealEstatePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedArea, setSelectedArea] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [bedrooms, setBedrooms] = useState('all');
  const [serviceType, setServiceType] = useState('all');
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');

  const properties = [
    {
      id: 1,
      title: "Luxury 3BR Condo in Sukhumvit",
      type: "condo",
      area: "Sukhumvit",
      price: "฿12,000,000",
      monthlyRent: "฿45,000",
      bedrooms: 3,
      bathrooms: 2,
      size: "120 sqm",
      floor: "25th floor",
      serviceType: "sale",
      image: "🏢",
      features: ["Pool", "Gym", "BTS Nearby", "Security 24/7"],
      description: "Modern luxury condominium with stunning city views and premium amenities",
      highlights: ["Prime Location", "High Floor", "Fully Furnished"],
      address: "Sukhumvit Soi 21, Bangkok",
      agent: "Raj Properties",
      phone: "02-555-1234",
      rating: 4.8,
      propertyId: "SUK001"
    },
    {
      id: 2,
      title: "Cozy 2BR Apartment for Rent",
      type: "apartment",
      area: "Thonglor",
      price: "฿25,000",
      monthlyRent: "฿25,000",
      bedrooms: 2,
      bathrooms: 1,
      size: "65 sqm",
      floor: "5th floor",
      serviceType: "rent",
      image: "🏠",
      features: ["Pet Friendly", "Balcony", "Near BTS", "Parking"],
      description: "Perfect for young professionals or small families in trendy Thonglor area",
      highlights: ["Pet Friendly", "Move-in Ready", "Quiet Neighborhood"],
      address: "Thonglor Soi 13, Bangkok",
      agent: "Bangkok Living",
      phone: "02-555-5678",
      rating: 4.6,
      propertyId: "THO002"
    },
    {
      id: 3,
      title: "Spacious 4BR House with Garden",
      type: "house",
      area: "Sathorn",
      price: "฿18,500,000",
      monthlyRent: "฿65,000",
      bedrooms: 4,
      bathrooms: 3,
      size: "200 sqm",
      floor: "2 stories",
      serviceType: "sale",
      image: "🏡",
      features: ["Garden", "Parking", "Maid Room", "Security"],
      description: "Beautiful family house with private garden in prestigious Sathorn area",
      highlights: ["Private Garden", "Family Friendly", "Premium Location"],
      address: "Sathorn Road, Bangkok",
      agent: "Elite Homes",
      phone: "02-555-9012",
      rating: 4.9,
      propertyId: "SAT003"
    },
    {
      id: 4,
      title: "Modern Studio Near BTS",
      type: "studio",
      area: "Asok",
      price: "฿3,200,000",
      monthlyRent: "฿18,000",
      bedrooms: 1,
      bathrooms: 1,
      size: "35 sqm",
      floor: "15th floor",
      serviceType: "sale",
      image: "🏙️",
      features: ["BTS Connected", "Pool", "Gym", "Modern Design"],
      description: "Perfect investment property or starter home in the heart of business district",
      highlights: ["Great Investment", "BTS Connected", "Modern"],
      address: "Asok Intersection, Bangkok",
      agent: "Metro Properties",
      phone: "02-555-3456",
      rating: 4.4,
      propertyId: "ASO004"
    },
    {
      id: 5,
      title: "Penthouse with Panoramic Views",
      type: "penthouse",
      area: "Silom",
      price: "฿35,000,000",
      monthlyRent: "฿120,000",
      bedrooms: 4,
      bathrooms: 4,
      size: "300 sqm",
      floor: "45th floor",
      serviceType: "sale",
      image: "🌆",
      features: ["Panoramic Views", "Private Elevator", "Rooftop Terrace", "Luxury Finishes"],
      description: "Ultra-luxury penthouse with breathtaking 360-degree city views",
      highlights: ["Panoramic Views", "Ultra Luxury", "Private Terrace"],
      address: "Silom Business District, Bangkok",
      agent: "Luxury Estates",
      phone: "02-555-7890",
      rating: 4.9,
      propertyId: "SIL005"
    },
    {
      id: 6,
      title: "Affordable 1BR for Students",
      type: "apartment",
      area: "Chatuchak",
      price: "฿12,000",
      monthlyRent: "฿12,000",
      bedrooms: 1,
      bathrooms: 1,
      size: "30 sqm",
      floor: "3rd floor",
      serviceType: "rent",
      image: "🎓",
      features: ["Student Friendly", "Near University", "Laundry", "WiFi"],
      description: "Budget-friendly accommodation perfect for students and young professionals",
      highlights: ["Student Friendly", "Affordable", "Near Universities"],
      address: "Chatuchak District, Bangkok",
      agent: "Student Housing",
      phone: "02-555-2468",
      rating: 4.2,
      propertyId: "CHA006"
    },
    {
      id: 7,
      title: "Family Townhouse with Pool",
      type: "townhouse",
      area: "Rama 9",
      price: "฿8,500,000",
      monthlyRent: "฿35,000",
      bedrooms: 3,
      bathrooms: 2,
      size: "150 sqm",
      floor: "3 stories",
      serviceType: "sale",
      image: "🏘️",
      features: ["Private Pool", "Garage", "Garden", "Security"],
      description: "Modern townhouse in gated community with excellent facilities",
      highlights: ["Gated Community", "Private Pool", "Family Perfect"],
      address: "Rama 9 District, Bangkok",
      agent: "Family Homes",
      phone: "02-555-1357",
      rating: 4.7,
      propertyId: "RAM007"
    },
    {
      id: 8,
      title: "Commercial Office Space",
      type: "office",
      area: "CBD",
      price: "฿25,000,000",
      monthlyRent: "฿80,000",
      bedrooms: 0,
      bathrooms: 2,
      size: "180 sqm",
      floor: "20th floor",
      serviceType: "lease",
      image: "🏢",
      features: ["Ready Office", "Meeting Rooms", "Reception", "Parking"],
      description: "Prime office space in Central Business District with modern facilities",
      highlights: ["Prime CBD Location", "Ready to Move", "Business Ready"],
      address: "Central Business District, Bangkok",
      agent: "Commercial Real Estate",
      phone: "02-555-8024",
      rating: 4.6,
      propertyId: "CBD008"
    }
  ];

  const propertyTypes = [
    { value: 'all', label: 'All Types', icon: '🏠' },
    { value: 'condo', label: 'Condominium', icon: '🏢' },
    { value: 'apartment', label: 'Apartment', icon: '🏠' },
    { value: 'house', label: 'House', icon: '🏡' },
    { value: 'studio', label: 'Studio', icon: '🏙️' },
    { value: 'penthouse', label: 'Penthouse', icon: '🌆' },
    { value: 'townhouse', label: 'Townhouse', icon: '🏘️' },
    { value: 'office', label: 'Office', icon: '🏢' }
  ];

  const areas = [
    { value: 'all', label: 'All Areas' },
    { value: 'sukhumvit', label: 'Sukhumvit' },
    { value: 'thonglor', label: 'Thonglor' },
    { value: 'sathorn', label: 'Sathorn' },
    { value: 'asok', label: 'Asok' },
    { value: 'silom', label: 'Silom' },
    { value: 'chatuchak', label: 'Chatuchak' },
    { value: 'rama-9', label: 'Rama 9' },
    { value: 'cbd', label: 'CBD' }
  ];

  const serviceTypes = [
    { value: 'all', label: 'All Services', icon: '🏠' },
    { value: 'sale', label: 'For Sale', icon: '💰' },
    { value: 'rent', label: 'For Rent', icon: '🏠' },
    { value: 'lease', label: 'For Lease', icon: '📋' }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'budget', label: 'Under ฿5M / ฿20K' },
    { value: 'mid', label: '฿5M-15M / ฿20K-50K' },
    { value: 'luxury', label: '฿15M+ / ฿50K+' }
  ];

  const bedroomOptions = ['all', '1', '2', '3', '4', '5+'];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = selectedType === 'all' || property.type === selectedType;
    const matchesArea = selectedArea === 'all' || 
                       property.area.toLowerCase().replace(/\s+/g, '-') === selectedArea;
    const matchesService = serviceType === 'all' || property.serviceType === serviceType;
    const matchesBedrooms = bedrooms === 'all' || 
                           (bedrooms === '5+' ? property.bedrooms >= 5 : property.bedrooms.toString() === bedrooms);
    return matchesSearch && matchesType && matchesArea && matchesService && matchesBedrooms;
  });

  const handleContact = (property) => {
    alert(`Contacting agent for property: ${property.title}\nProperty ID: ${property.propertyId}\nAgent: ${property.agent}`);
    // TODO: Implement contact form logic
  };

  const handleCall = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleViewDetails = (propertyId) => {
    alert(`Viewing details for property ID: ${propertyId}`);
    // TODO: Navigate to property details page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🏠 Real Estate Services
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Find your perfect property in Bangkok - Buy, Sell, Rent, or Lease with trusted agents
            </p>
          </div>

          {/* Property Search Form */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Find Your Dream Property</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {serviceTypes.map(service => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {propertyTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Area
                </label>
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {areas.map(area => (
                    <option key={area.value} value={area.value}>
                      {area.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bedrooms
                </label>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">Any</option>
                  {bedroomOptions.slice(1).map(bedroom => (
                    <option key={bedroom} value={bedroom}>
                      {bedroom === '5+' ? '5+ BR' : `${bedroom} BR`}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                  🔍 Search Properties
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Properties */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Service Type Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search properties by title, area, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Service Type Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {serviceTypes.map(service => (
              <button
                key={service.value}
                onClick={() => setServiceType(service.value)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition duration-300 ${
                  serviceType === service.value
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 shadow-sm'
                }`}
              >
                <span>{service.icon}</span>
                <span>{service.label}</span>
              </button>
            ))}
          </div>

          {/* Property Type Buttons */}
          <div className="flex flex-wrap gap-2 justify-center">
            {propertyTypes.map(type => (
              <button
                key={type.value}
                onClick={() => setSelectedType(type.value)}
                className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  selectedType === type.value
                    ? 'bg-gray-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
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
            Found <span className="font-semibold text-blue-600">{filteredProperties.length}</span> properties
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(property => (
            <div key={property.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Property Image */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-gray-500 flex items-center justify-center text-6xl relative">
                {property.image}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                    property.serviceType === 'sale' ? 'bg-green-500' :
                    property.serviceType === 'rent' ? 'bg-blue-500' : 'bg-purple-500'
                  }`}>
                    {property.serviceType.toUpperCase()}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    ID: {property.propertyId}
                  </span>
                </div>
              </div>

              {/* Property Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{property.title}</h3>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 text-sm">
                      {'★'.repeat(Math.floor(property.rating))}
                    </div>
                    <span className="ml-1 text-sm text-gray-600">{property.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{property.description}</p>

                {/* Property Details */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-gray-500">Size</p>
                    <p className="font-semibold">{property.size}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Floor</p>
                    <p className="font-semibold">{property.floor}</p>
                  </div>
                  {property.bedrooms > 0 && (
                    <>
                      <div>
                        <p className="text-gray-500">Bedrooms</p>
                        <p className="font-semibold">{property.bedrooms} BR</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Bathrooms</p>
                        <p className="font-semibold">{property.bathrooms} BA</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {property.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="text-sm text-gray-600">
                    {property.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center mb-1">
                        <span className="mr-2 text-blue-500">•</span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location and Agent */}
                <div className="mb-4 text-sm text-gray-600">
                  <p className="flex items-center mb-1">
                    <span className="mr-2">📍</span>
                    {property.address}
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">🏢</span>
                    {property.agent}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="text-center bg-gray-50 rounded-lg p-3">
                    <span className="text-2xl font-bold text-blue-600">
                      {property.serviceType === 'sale' ? property.price : property.monthlyRent}
                    </span>
                    <span className="text-gray-600 text-sm ml-1">
                      {property.serviceType === 'sale' ? '' : '/month'}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCall(property.phone)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center text-sm"
                  >
                    📞 Call
                  </button>
                  <button
                    onClick={() => handleContact(property)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 text-sm"
                  >
                    Contact
                  </button>
                  <button
                    onClick={() => handleViewDetails(property.propertyId)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No properties found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Real Estate Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Buy Properties</h3>
              <p className="text-gray-600">Find your dream home or investment property</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Rent Properties</h3>
              <p className="text-gray-600">Discover rental properties that fit your lifestyle</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Lease Commercial</h3>
              <p className="text-gray-600">Office spaces and commercial properties</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sell Properties</h3>
              <p className="text-gray-600">Get the best value for your property</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-gray-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Property?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our experienced real estate agents are here to help you every step of the way
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition duration-300">
              📱 Schedule Viewing
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition duration-300">
              💼 Sell Your Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstatePage;