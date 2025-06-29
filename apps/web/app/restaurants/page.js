'use client';

import React, { useState } from 'react';

const RestaurantPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('all');
  const [selectedArea, setSelectedArea] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedFeature, setSelectedFeature] = useState('all');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [guests, setGuests] = useState(2);

  const restaurants = [
    {
      id: 1,
      name: "Royal Delhi Palace",
      cuisine: "North Indian",
      area: "Sukhumvit",
      priceRange: "premium",
      rating: 4.8,
      image: "🏰",
      specialties: ["Tandoor", "Biryani", "Curry"],
      features: ["Fine Dining", "Private Rooms", "Live Music"],
      averagePrice: "฿800-1200",
      openHours: "11:00 AM - 11:00 PM",
      phone: "02-555-0123",
      description: "Authentic North Indian cuisine in an elegant royal setting with traditional tandoor specialties",
      highlights: ["Award-winning chef", "Royal ambiance", "Halal certified"],
      address: "Sukhumvit Soi 12, Bangkok"
    },
    {
      id: 2,
      name: "Spice Garden",
      cuisine: "South Indian",
      area: "Silom",
      priceRange: "mid-range",
      rating: 4.6,
      image: "🌶️",
      specialties: ["Dosa", "Sambar", "Coconut Curry"],
      features: ["Vegetarian Options", "Spice Bar", "Family Friendly"],
      averagePrice: "฿400-600",
      openHours: "10:00 AM - 10:00 PM",
      phone: "02-555-0456",
      description: "Traditional South Indian flavors with authentic spices and vegetarian specialties",
      highlights: ["100% vegetarian", "Fresh spices", "Traditional recipes"],
      address: "Silom Road, Bangkok"
    },
    {
      id: 3,
      name: "Mumbai Street Kitchen",
      cuisine: "Street Food",
      area: "Chatuchak",
      priceRange: "budget",
      rating: 4.4,
      image: "🍛",
      specialties: ["Pani Puri", "Vada Pav", "Chaat"],
      features: ["Street Food", "Quick Service", "Outdoor Seating"],
      averagePrice: "฿150-300",
      openHours: "12:00 PM - 9:00 PM",
      phone: "02-555-0789",
      description: "Authentic Mumbai street food experience with bold flavors and quick service",
      highlights: ["Street food authentic", "Quick bites", "Budget friendly"],
      address: "Chatuchak Weekend Market, Bangkok"
    },
    {
      id: 4,
      name: "Taj Mahal Restaurant",
      cuisine: "Mughlai",
      area: "Asok",
      priceRange: "premium",
      rating: 4.7,
      image: "🕌",
      specialties: ["Kebab", "Biryani", "Korma"],
      features: ["Fine Dining", "Catering", "Private Events"],
      averagePrice: "฿900-1500",
      openHours: "11:30 AM - 11:00 PM",
      phone: "02-555-0321",
      description: "Exquisite Mughlai cuisine with rich gravies and aromatic biryanis in a luxurious setting",
      highlights: ["Royal Mughlai cuisine", "Luxury dining", "Event catering"],
      address: "Terminal 21, Asok, Bangkok"
    },
    {
      id: 5,
      name: "Kerala House",
      cuisine: "Kerala",
      area: "Thonglor",
      priceRange: "mid-range",
      rating: 4.5,
      image: "🥥",
      specialties: ["Fish Curry", "Appam", "Coconut Rice"],
      features: ["Seafood Specialist", "Coconut Bar", "Traditional"],
      averagePrice: "฿500-800",
      openHours: "11:00 AM - 10:30 PM",
      phone: "02-555-0654",
      description: "Coastal Kerala cuisine featuring fresh seafood and coconut-based curries",
      highlights: ["Fresh seafood", "Coconut specialties", "Coastal flavors"],
      address: "Thonglor Soi 15, Bangkok"
    },
    {
      id: 6,
      name: "Punjabi Dhaba",
      cuisine: "Punjabi",
      area: "Kaosan",
      priceRange: "budget",
      rating: 4.3,
      image: "🫓",
      specialties: ["Butter Chicken", "Naan", "Lassi"],
      features: ["Casual Dining", "Large Portions", "Takeaway"],
      averagePrice: "฿250-450",
      openHours: "10:00 AM - 11:00 PM",
      phone: "02-555-0987",
      description: "Hearty Punjabi comfort food with generous portions and authentic flavors",
      highlights: ["Generous portions", "Comfort food", "Authentic taste"],
      address: "Kaosan Road, Bangkok"
    },
    {
      id: 7,
      name: "Gujarati Thali House",
      cuisine: "Gujarati",
      area: "Pratunam",
      priceRange: "mid-range",
      rating: 4.6,
      image: "🍽️",
      specialties: ["Unlimited Thali", "Dhokla", "Fafda"],
      features: ["Unlimited Refills", "Pure Vegetarian", "Traditional Seating"],
      averagePrice: "฿350-550",
      openHours: "11:00 AM - 9:00 PM",
      phone: "02-555-0147",
      description: "Traditional Gujarati thali experience with unlimited refills and authentic preparations",
      highlights: ["Unlimited thali", "Pure vegetarian", "Traditional experience"],
      address: "Pratunam Market Area, Bangkok"
    },
    {
      id: 8,
      name: "Hyderabadi Biryani Corner",
      cuisine: "Hyderabadi",
      area: "Phrom Phong",
      priceRange: "mid-range",
      rating: 4.9,
      image: "🍚",
      specialties: ["Dum Biryani", "Haleem", "Kebab"],
      features: ["Biryani Specialist", "Delivery", "Catering"],
      averagePrice: "฿400-700",
      openHours: "12:00 PM - 10:00 PM",
      phone: "02-555-0258",
      description: "Authentic Hyderabadi dum biryani and traditional specialties with aromatic spices",
      highlights: ["Best biryani in town", "Dum cooking method", "Aromatic spices"],
      address: "Phrom Phong BTS, Bangkok"
    }
  ];

  const cuisineTypes = [
    { value: 'all', label: 'All Cuisines', icon: '🍽️' },
    { value: 'north-indian', label: 'North Indian', icon: '🏰' },
    { value: 'south-indian', label: 'South Indian', icon: '🌶️' },
    { value: 'street-food', label: 'Street Food', icon: '🍛' },
    { value: 'mughlai', label: 'Mughlai', icon: '🕌' },
    { value: 'kerala', label: 'Kerala', icon: '🥥' },
    { value: 'punjabi', label: 'Punjabi', icon: '🫓' },
    { value: 'gujarati', label: 'Gujarati', icon: '🍽️' },
    { value: 'hyderabadi', label: 'Hyderabadi', icon: '🍚' }
  ];

  const areas = [
    { value: 'all', label: 'All Areas' },
    { value: 'sukhumvit', label: 'Sukhumvit' },
    { value: 'silom', label: 'Silom' },
    { value: 'chatuchak', label: 'Chatuchak' },
    { value: 'asok', label: 'Asok' },
    { value: 'thonglor', label: 'Thonglor' },
    { value: 'kaosan', label: 'Kaosan' },
    { value: 'pratunam', label: 'Pratunam' },
    { value: 'phrom-phong', label: 'Phrom Phong' }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices', icon: '💰' },
    { value: 'budget', label: 'Budget (฿150-300)', icon: '💵' },
    { value: 'mid-range', label: 'Mid-range (฿350-800)', icon: '💶' },
    { value: 'premium', label: 'Premium (฿800+)', icon: '💎' }
  ];

  const features = [
    { value: 'all', label: 'All Features' },
    { value: 'fine-dining', label: 'Fine Dining' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'halal', label: 'Halal' },
    { value: 'delivery', label: 'Delivery' },
    { value: 'catering', label: 'Catering' },
    { value: 'family-friendly', label: 'Family Friendly' }
  ];

  const timeSlots = ['11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCuisine = selectedCuisine === 'all' || 
                          restaurant.cuisine.toLowerCase().replace(/\s+/g, '-') === selectedCuisine;
    const matchesArea = selectedArea === 'all' || 
                       restaurant.area.toLowerCase().replace(/\s+/g, '-') === selectedArea;
    const matchesPrice = priceRange === 'all' || restaurant.priceRange === priceRange;
    return matchesSearch && matchesCuisine && matchesArea && matchesPrice;
  });

  const handleReservation = (restaurantId) => {
    if (!reservationDate || !reservationTime) {
      alert('Please select date and time for your reservation');
      return;
    }
    alert(`Making reservation at restaurant ID: ${restaurantId} for ${guests} guests on ${reservationDate} at ${reservationTime}`);
    // TODO: Implement reservation logic
  };

  const handleCall = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🍴 Discover Authentic Indian Restaurants
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Find the best Indian restaurants in Bangkok with authentic flavors and traditional recipes
            </p>
          </div>

          {/* Reservation Form */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Make a Reservation</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={reservationDate}
                  onChange={(e) => setReservationDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time
                </label>
                <select
                  value={reservationTime}
                  onChange={(e) => setReservationTime(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select time</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                  🍽️ Find Table
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Restaurants */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search restaurants, cuisines, or dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-2">
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {areas.map(area => (
                  <option key={area.value} value={area.value}>{area.label}</option>
                ))}
              </select>
              
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Cuisine Type Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {cuisineTypes.map(cuisine => (
              <button
                key={cuisine.value}
                onClick={() => setSelectedCuisine(cuisine.value)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition duration-300 ${
                  selectedCuisine === cuisine.value
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200 shadow-sm'
                }`}
              >
                <span>{cuisine.icon}</span>
                <span>{cuisine.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-orange-600">{filteredRestaurants.length}</span> restaurants
          </p>
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map(restaurant => (
            <div key={restaurant.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Restaurant Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-6xl">
                {restaurant.image}
              </div>

              {/* Restaurant Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{restaurant.name}</h3>
                    <p className="text-orange-600 font-medium">{restaurant.cuisine}</p>
                  </div>
                  <span className={`text-sm px-2 py-1 rounded-full font-medium ${
                    restaurant.priceRange === 'budget' ? 'bg-green-100 text-green-800' :
                    restaurant.priceRange === 'mid-range' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {restaurant.priceRange}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{restaurant.description}</p>

                {/* Rating and Location */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(Math.floor(restaurant.rating))}
                      {'☆'.repeat(5 - Math.floor(restaurant.rating))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{restaurant.rating}</span>
                  </div>
                  <span className="text-sm text-gray-600">📍 {restaurant.area}</span>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {restaurant.specialties.map((specialty, index) => (
                      <span key={index} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {restaurant.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="text-sm text-gray-600">
                    {restaurant.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center mb-1">
                        <span className="mr-2 text-orange-500">•</span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hours and Price */}
                <div className="mb-4 text-sm text-gray-600">
                  <p className="flex items-center mb-1">
                    <span className="mr-2">🕒</span>
                    {restaurant.openHours}
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">💰</span>
                    {restaurant.averagePrice}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCall(restaurant.phone)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    📞 Call
                  </button>
                  <button
                    onClick={() => handleReservation(restaurant.id)}
                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍴</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No restaurants found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Restaurant Partners?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Authentic Recipes</h3>
              <p className="text-gray-600">Traditional recipes passed down through generations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌶️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fresh Spices</h3>
              <p className="text-gray-600">Imported spices and fresh ingredients for authentic taste</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Award Winning</h3>
              <p className="text-gray-600">Recognized restaurants with excellent reviews and ratings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Craving Authentic Indian Food?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Discover the best Indian restaurants in Bangkok and satisfy your taste buds
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-orange-50 font-semibold py-3 px-8 rounded-lg transition duration-300">
              📱 Download Our App
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold py-3 px-8 rounded-lg transition duration-300">
              🍽️ Join Our Food Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;