'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import AuthGuard from '../../../components/auth/AuthGuard';

interface Restaurant {
  id: string;
  name: string;
  description: string;
  heroImage: string;
  gallery: string[];
  rating: number;
  totalReviews: number;
  priceRange: string;
  cuisine: string;
  isOpen: boolean;
  branches: any[];
}

export default function RestaurantDetail() {
  const params = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [selectedBranch, setSelectedBranch] = useState(0);

  useEffect(() => {
    // Mock restaurant data
    setRestaurant({
      id: Array.isArray(params.id) ? params.id[0] : params.id,
      name: 'Spice Garden Indian Restaurant',
      description: 'Authentic Indian cuisine with traditional flavors and modern presentation',
      heroImage: '/api/placeholder/800/400',
      gallery: ['/api/placeholder/300/200', '/api/placeholder/300/200', '/api/placeholder/300/200'],
      rating: 4.5,
      totalReviews: 234,
      priceRange: '฿฿',
      cuisine: 'Indian',
      isOpen: true,
      branches: [
        {
          id: '1',
          name: 'Main Branch',
          address: '123 Sukhumvit Road, Khlong Toei, Bangkok 10110',
          phone: '+66 2-123-4567',
          coordinates: { lat: 13.7563, lng: 100.5018 },
          openingHours: {
            monday: { open: '10:00', close: '22:00', closed: false },
            tuesday: { open: '10:00', close: '22:00', closed: false },
            wednesday: { open: '10:00', close: '22:00', closed: false },
            thursday: { open: '10:00', close: '22:00', closed: false },
            friday: { open: '10:00', close: '23:00', closed: false },
            saturday: { open: '10:00', close: '23:00', closed: false },
            sunday: { open: '11:00', close: '21:00', closed: false }
          }
        },
        {
          id: '2',
          name: 'Silom Branch',
          address: '456 Silom Road, Bang Rak, Bangkok 10500',
          phone: '+66 2-234-5678',
          coordinates: { lat: 13.7244, lng: 100.5347 },
          openingHours: {
            monday: { open: '11:00', close: '22:00', closed: false },
            tuesday: { open: '11:00', close: '22:00', closed: false },
            wednesday: { open: '11:00', close: '22:00', closed: false },
            thursday: { open: '11:00', close: '22:00', closed: false },
            friday: { open: '11:00', close: '23:00', closed: false },
            saturday: { open: '11:00', close: '23:00', closed: false },
            sunday: { open: '12:00', close: '21:00', closed: false }
          }
        }
      ],
      menuCategories: [
        {
          name: 'Appetizers',
          items: [
            { name: 'Samosa', price: 80, description: 'Crispy pastry with spiced vegetables' },
            { name: 'Pakora', price: 90, description: 'Mixed vegetable fritters' }
          ]
        },
        {
          name: 'Main Course',
          items: [
            { name: 'Chicken Biryani', price: 180, description: 'Fragrant basmati rice with spiced chicken' },
            { name: 'Butter Chicken', price: 220, description: 'Creamy tomato curry with tender chicken' }
          ]
        }
      ]
    });
  }, [params.id]);

  const openInMaps = (branch) => {
    const { lat, lng } = branch.coordinates;
    const address = encodeURIComponent(branch.address);
    
    // Try to open in Google Maps app first, fallback to web
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    const openStreetMapUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}&zoom=16`;
    
    // For mobile devices, try to open native app
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.open(googleMapsUrl, '_blank');
    } else {
      window.open(openStreetMapUrl, '_blank');
    }
  };

  const getDirections = (branch) => {
    const { lat, lng } = branch.coordinates;
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(directionsUrl, '_blank');
  };

  if (!restaurant) {
    return (
      <AuthGuard requireAuth={true}>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading restaurant...</p>
          </div>
        </div>
      </AuthGuard>
    );
  }

  const currentBranch = restaurant.branches[selectedBranch];

  return (
    <AuthGuard requireAuth={true}>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-64 md:h-96 bg-gray-200">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{restaurant.name}</h1>
              <p className="text-xl opacity-90">{restaurant.description}</p>
            </div>
          </div>
        </div>

        {/* Restaurant Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Basic Info */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-xl">⭐</span>
                      <span className="ml-1 font-semibold">{restaurant.rating}</span>
                      <span className="ml-1 text-gray-600">({restaurant.totalReviews} reviews)</span>
                    </div>
                    <span className="text-gray-600">{restaurant.priceRange}</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {restaurant.cuisine}
                    </span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    restaurant.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {restaurant.isOpen ? '🟢 Open Now' : '🔴 Closed'}
                  </div>
                </div>
              </div>

              {/* Branch Selection */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Branch</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {restaurant.branches.map((branch, index) => (
                    <div
                      key={branch.id}
                      onClick={() => setSelectedBranch(index)}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedBranch === index
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <h4 className="font-medium text-gray-900">{branch.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{branch.address}</p>
                      <p className="text-sm text-gray-600">{branch.phone}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Menu */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Menu</h3>
                <div className="space-y-6">
                  {restaurant.menuCategories.map((category, index) => (
                    <div key={index}>
                      <h4 className="text-md font-semibold text-gray-900 mb-3">{category.name}</h4>
                      <div className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex justify-between items-start">
                            <div>
                              <h5 className="font-medium text-gray-900">{item.name}</h5>
                              <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                            <div className="text-right">
                              <span className="font-semibold text-gray-900">฿{item.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Branch Details */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {currentBranch.name}
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">📍</span>
                    <div>
                      <p className="text-sm text-gray-900">{currentBranch.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-3">📞</span>
                    <p className="text-sm text-gray-900">{currentBranch.phone}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <button
                    onClick={() => openInMaps(currentBranch)}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    📍 View on Map
                  </button>
                  
                  <button
                    onClick={() => getDirections(currentBranch)}
                    className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    🧭 Get Directions
                  </button>
                </div>

                {/* Embedded Map */}
                <div className="mb-4">
                  <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🗺️</div>
                      <p className="text-sm text-gray-600">Interactive Map</p>
                      <button
                        onClick={() => openInMaps(currentBranch)}
                        className="text-blue-600 text-sm hover:underline"
                      >
                        Open in Maps
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Opening Hours</h3>
                <div className="space-y-2">
                  {Object.entries(currentBranch.openingHours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="capitalize font-medium text-gray-700">{day}</span>
                      <span className="text-gray-600">
                        {hours.closed ? 'Closed' : `${hours.open} - ${hours.close}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Actions */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Now</h3>
                <div className="space-y-3">
                  <button className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                    🚚 Order Delivery
                  </button>
                  <button className="w-full border border-orange-600 text-orange-600 px-4 py-3 rounded-lg hover:bg-orange-50 transition-colors">
                    🏃 Order Pickup
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                    🍽️ Reserve Table
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}