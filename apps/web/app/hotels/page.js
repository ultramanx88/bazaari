'use client';

import React, { useState } from 'react';

const HotelsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('bangkok');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [priceRange, setPriceRange] = useState('all');

  const hotels = [
    {
      id: 1,
      name: "The Grand Palace Hotel",
      location: "Sukhumvit, Bangkok",
      price: "฿2,500",
      rating: 4.5,
      image: "🏨",
      amenities: ["WiFi", "Pool", "Gym", "Spa"],
      type: "Luxury",
      description: "Elegant hotel in the heart of Bangkok with world-class amenities"
    },
    {
      id: 2,
      name: "Cozy Bangkok Inn",
      location: "Khao San Road, Bangkok",
      price: "฿800",
      rating: 4.2,
      image: "🏨",
      amenities: ["WiFi", "AC", "Breakfast"],
      type: "Budget",
      description: "Comfortable budget accommodation near major attractions"
    },
    {
      id: 3,
      name: "Business Center Hotel",
      location: "Silom, Bangkok",
      price: "฿1,800",
      rating: 4.3,
      image: "🏨",
      amenities: ["WiFi", "Meeting Rooms", "Gym", "Restaurant"],
      type: "Business",
      description: "Perfect for business travelers with modern facilities"
    },
    {
      id: 4,
      name: "Family Resort Bangkok",
      location: "Chatuchak, Bangkok",
      price: "฿1,200",
      rating: 4.4,
      image: "🏨",
      amenities: ["WiFi", "Pool", "Kids Club", "Parking"],
      type: "Family",
      description: "Family-friendly resort with activities for all ages"
    },
    {
      id: 5,
      name: "Heritage Boutique Hotel",
      location: "Old Town, Bangkok",
      price: "฿2,200",
      rating: 4.6,
      image: "🏨",
      amenities: ["WiFi", "Restaurant", "Cultural Tours", "Spa"],
      type: "Boutique",
      description: "Unique boutique hotel showcasing Thai heritage and culture"
    },
    {
      id: 6,
      name: "Modern Sky Hotel",
      location: "Asok, Bangkok",
      price: "฿1,500",
      rating: 4.1,
      image: "🏨",
      amenities: ["WiFi", "Sky Bar", "Gym", "Pool"],
      type: "Modern",
      description: "Contemporary hotel with stunning city views"
    }
  ];

  const locations = [
    { value: 'bangkok', label: 'Bangkok' },
    { value: 'phuket', label: 'Phuket' },
    { value: 'chiangmai', label: 'Chiang Mai' },
    { value: 'pattaya', label: 'Pattaya' }
  ];

  const hotelTypes = ['All', 'Luxury', 'Budget', 'Business', 'Family', 'Boutique', 'Modern'];

  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hotel.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedLocation === 'all' || hotel.type.toLowerCase() === selectedLocation;
    return matchesSearch && matchesType;
  });

  const handleBooking = (hotelId) => {
    alert(`Booking hotel ID: ${hotelId}`);
    // TODO: Implement booking logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🏨 Find Your Perfect Stay
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover comfortable accommodations from budget-friendly inns to luxury hotels
            </p>
          </div>

          {/* Search Form */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {locations.map(location => (
                    <option key={location.value} value={location.value}>
                      {location.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Check-in */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-in
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Check-out */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {[1,2,3,4,5,6].map(num => (
                    <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                  🔍 Search Hotels
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search hotels by name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {hotelTypes.map(type => (
              <button
                key={type}
                onClick={() => setSelectedLocation(type.toLowerCase())}
                className={`px-4 py-2 rounded-full font-medium transition duration-300 ${
                  selectedLocation === type.toLowerCase()
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-blue-600">{filteredHotels.length}</span> hotels
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map(hotel => (
            <div key={hotel.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Hotel Image */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-6xl">
                {hotel.image}
              </div>

              {/* Hotel Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                    {hotel.type}
                  </span>
                </div>

                <p className="text-gray-600 mb-3 flex items-center">
                  📍 {hotel.location}
                </p>

                <p className="text-gray-600 text-sm mb-4">{hotel.description}</p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(hotel.rating))}
                    {'☆'.repeat(5 - Math.floor(hotel.rating))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {hotel.rating} ({Math.floor(Math.random() * 200) + 50} reviews)
                  </span>
                </div>

                {/* Amenities */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.map((amenity, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Book Button */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">{hotel.price}</span>
                    <span className="text-gray-600 text-sm ml-1">/night</span>
                  </div>
                  <button
                    onClick={() => handleBooking(hotel.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredHotels.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏨</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No hotels found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Footer Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Need Help Finding the Perfect Hotel?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our travel experts are here to help you find the best accommodation for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition duration-300">
              📞 Call Us
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition duration-300">
              💬 Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsPage;