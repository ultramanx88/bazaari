'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthGuard from '../../../components/auth/AuthGuard';

export default function RestaurantDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [restaurant, setRestaurant] = useState({
    name: 'Spice Garden Indian Restaurant',
    isOpen: true,
    totalOrders: 1247,
    todayOrders: 23,
    revenue: 45600,
    rating: 4.5
  });
  const router = useRouter();

  const toggleRestaurantStatus = () => {
    setRestaurant(prev => ({
      ...prev,
      isOpen: !prev.isOpen
    }));
  };

  return (
    <AuthGuard requireAuth={true}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">
                  {restaurant.name}
                </h1>
                <div className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${
                  restaurant.isOpen 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {restaurant.isOpen ? '🟢 Open' : '🔴 Closed'}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleRestaurantStatus}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    restaurant.isOpen
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {restaurant.isOpen ? 'Close Restaurant' : 'Open Restaurant'}
                </button>
                <button 
                  onClick={() => router.push('/dashboard')}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8">
              {[
                { id: 'overview', name: 'Overview', icon: '📊' },
                { id: 'profile', name: 'Restaurant Profile', icon: '🏪' },
                { id: 'menu', name: 'Menu Management', icon: '📋' },
                { id: 'orders', name: 'Orders', icon: '🛒' },
                { id: 'analytics', name: 'Analytics', icon: '📈' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.icon} {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center">
                      <div className="text-3xl mr-4">📦</div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Orders</p>
                        <p className="text-2xl font-bold text-gray-900">{restaurant.totalOrders.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center">
                      <div className="text-3xl mr-4">📅</div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Today's Orders</p>
                        <p className="text-2xl font-bold text-blue-600">{restaurant.todayOrders}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center">
                      <div className="text-3xl mr-4">💰</div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Revenue</p>
                        <p className="text-2xl font-bold text-green-600">฿{restaurant.revenue.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center">
                      <div className="text-3xl mr-4">⭐</div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Rating</p>
                        <p className="text-2xl font-bold text-yellow-600">{restaurant.rating}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button 
                      onClick={() => setActiveTab('menu')}
                      className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
                    >
                      <div className="text-2xl mb-2">📋</div>
                      <h4 className="font-medium text-gray-900">Manage Menu</h4>
                      <p className="text-sm text-gray-600">Add, edit, or remove menu items</p>
                    </button>

                    <button 
                      onClick={() => setActiveTab('orders')}
                      className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
                    >
                      <div className="text-2xl mb-2">🛒</div>
                      <h4 className="font-medium text-gray-900">View Orders</h4>
                      <p className="text-sm text-gray-600">Check pending and completed orders</p>
                    </button>

                    <button 
                      onClick={() => setActiveTab('profile')}
                      className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
                    >
                      <div className="text-2xl mb-2">🏪</div>
                      <h4 className="font-medium text-gray-900">Update Profile</h4>
                      <p className="text-sm text-gray-600">Edit restaurant information</p>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Restaurant Profile</h3>
                  
                  <div className="space-y-6">
                    {/* Basic Information */}
                    <div>
                      <h4 className="text-md font-medium text-gray-900 mb-4">Basic Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols">
        
                    me</label>
                         
                            type="text"
                            value={restaurant.name}
                            className="w-full px-3 py-2 bor
                          />
                        </div>
                        <div>
                          <label
                          <
                            type="tel"
                            "
                          -500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Hero Imag}
                    <d
                      <h4 cla
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <div className="text-gray-400 mb-4">
                          <div classNam/div>
                        <v>
                        <p className="text-gray-600 mb-2">Upload hero image for your restaurant</p>
                        <button 
                          Choose File
                        </button>
                      </div>
                    </div>

                    <>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-7
                        Save Changes
                      </button>
                    </div>
                  </div>
</div>
              </div>
           

            {/* Other tabs pla*/}
            {activeTab ! (
              <d
                <p className="text-gray-8">
                  {activeTab.charAt(
                </p>
              </div>
            )}

          </div>
        </main>
      </div>
    </AuthGuard>
  );
}