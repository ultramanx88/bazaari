"use client";
import React, { useState } from "react";

const FoodDeliveryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [location, setLocation] = useState("Bangkok, Thailand");

  const categories = [
    { id: "all", name: "All", icon: "🍽️" },
    { id: "indian", name: "Indian", icon: "🍛" },
    { id: "thai", name: "Thai", icon: "🍜" },
    { id: "chinese", name: "Chinese", icon: "🥢" },
    { id: "fast-food", name: "Fast Food", icon: "🍔" },
    { id: "dessert", name: "Dessert", icon: "🍰" },
    { id: "beverages", name: "Beverages", icon: "🥤" },
    { id: "healthy", name: "Healthy", icon: "🥗" },
  ];

  const restaurants = [
    {
      id: 1,
      name: "Spice Garden Indian",
      image: "/api/placeholder/300/200",
      rating: 4.5,
      deliveryTime: "25-35 min",
      deliveryFee: "฿25",
      category: "indian",
      distance: "1.2 km",
      featured: true,
    },
    {
      id: 2,
      name: "Bangkok Street Food",
      image: "/api/placeholder/300/200",
      rating: 4.3,
      deliveryTime: "20-30 min",
      deliveryFee: "฿20",
      category: "thai",
      distance: "0.8 km",
      featured: false,
    },
    {
      id: 3,
      name: "Maharaja Palace",
      image: "/api/placeholder/300/200",
      rating: 4.7,
      deliveryTime: "30-40 min",
      deliveryFee: "฿30",
      category: "indian",
      distance: "2.1 km",
      featured: true,
    },
    {
      id: 4,
      name: "Golden Dragon",
      image: "/api/placeholder/300/200",
      rating: 4.4,
      deliveryTime: "25-35 min",
      deliveryFee: "฿25",
      category: "chinese",
      distance: "1.5 km",
      featured: false,
    },
    {
      id: 5,
      name: "Healthy Bowl",
      image: "/api/placeholder/300/200",
      rating: 4.6,
      deliveryTime: "20-25 min",
      deliveryFee: "฿22",
      category: "healthy",
      distance: "1.0 km",
      featured: false,
    },
    {
      id: 6,
      name: "Burger Junction",
      image: "/api/placeholder/300/200",
      rating: 4.2,
      deliveryTime: "15-25 min",
      deliveryFee: "฿18",
      category: "fast-food",
      distance: "0.5 km",
      featured: false,
    },
  ];

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCategory =
      selectedCategory === "all" || restaurant.category === selectedCategory;
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredRestaurants = restaurants.filter((r) => r.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Authentic Indian Food Delivery
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Taste the flavors of India, delivered fresh to your door
            </p>
          </div>

          {/* Search & Location */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Location */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  📍 Delivery Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                  placeholder="Enter your address"
                />
              </div>

              {/* Search */}
              <div className="relative md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  🔍 Search for restaurants or dishes
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                    placeholder="Biryani, Curry, Restaurant name..."
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors">
                    🔍
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      {selectedCategory === "all" && (
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              ⭐ Featured Restaurants
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRestaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                >
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                      <span className="text-white text-4xl">🍛</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                      {restaurant.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        ⭐ {restaurant.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        🕒 {restaurant.deliveryTime}
                      </span>
                      <span className="flex items-center gap-1">
                        📍 {restaurant.distance}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-orange-600 font-medium">
                        Delivery: {restaurant.deliveryFee}
                      </span>
                      <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Restaurants */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {selectedCategory === "all"
                ? "🍽️ All Restaurants"
                : `${categories.find((c) => c.id === selectedCategory)?.icon} ${categories.find((c) => c.id === selectedCategory)?.name} Restaurants`}
            </h2>
            <span className="text-gray-600">
              {filteredRestaurants.length} restaurants found
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-600 text-4xl">
                      {categories.find((c) => c.id === restaurant.category)
                        ?.icon || "🍽️"}
                    </span>
                  </div>
                  {restaurant.featured && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      ⭐ {restaurant.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      🕒 {restaurant.deliveryTime}
                    </span>
                    <span className="flex items-center gap-1">
                      📍 {restaurant.distance}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 font-medium">
                      Delivery: {restaurant.deliveryFee}
                    </span>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Become Partner */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-xl">
              <div className="text-6xl mb-4">🏪</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Become a Partner
              </h3>
              <p className="text-gray-600 mb-6">
                Join our network of restaurants and grow your business with
                Bazaaari
              </p>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                Register as Partner
              </button>
            </div>

            {/* Become Rider */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-xl">
              <div className="text-6xl mb-4">🏍️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Become a Rider
              </h3>
              <p className="text-gray-600 mb-6">
                Earn money on your schedule by delivering food with Bazaaari
              </p>
              <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors">
                Register as Rider
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodDeliveryPage;
