'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthGuard from '../../components/auth/AuthGuard';

export default function RestaurantDashboard() {
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
                  onClick={() => router.push('/restaurant/notifications')}
                  className="relative px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  🔔 Notifications
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </button>
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

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                <button 
                  onClick={() => router.push('/restaurant/menu')}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
                >
                  <div className="text-2xl mb-2">📋</div>
                  <h4 className="font-medium text-gray-900">Manage Menu</h4>
                  <p className="text-sm text-gray-600">Add, edit menu items</p>
                </button>

                <button 
                  onClick={() => router.push('/restaurant/orders')}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
                >
                  <div className="text-2xl mb-2">🛒</div>
                  <h4 className="font-medium text-gray-900">View Orders</h4>
                  <p className="text-sm text-gray-600">Check pending orders</p>
                </button>

                <button 
                  onClick={() => router.push('/restaurant/profile')}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
                >
                  <div className="text-2xl mb-2">🏪</div>
                  <h4 className="font-medium text-gray-900">Restaurant Profile</h4>
                  <p className="text-sm text-gray-600">Edit information</p>
                </button>

                <button 
                  onClick={() => router.push('/restaurant/branches')}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
                >
                  <div className="text-2xl mb-2">🏪</div>
                  <h4 className="font-medium text-gray-900">Branches</h4>
                  <p className="text-sm text-gray-600">Manage locations</p>
                </button>

                <button 
                  onClick={() => router.push('/restaurant/users')}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
                >
                  <div className="text-2xl mb-2">👥</div>
                  <h4 className="font-medium text-gray-900">Staff</h4>
                  <p className="text-sm text-gray-600">Manage team</p>
                </button>

                <button 
                  onClick={() => router.push('/restaurant/pos')}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
                >
                  <div className="text-2xl mb-2">💳</div>
                  <h4 className="font-medium text-gray-900">POS System</h4>
                  <p className="text-sm text-gray-600">Point of Sale</p>
                </button>

                <button 
                  onClick={() => router.push('/restaurant/accounting')}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
                >
                  <div className="text-2xl mb-2">📊</div>
                  <h4 className="font-medium text-gray-900">Accounting</h4>
                  <p className="text-sm text-gray-600">Finance & Reports</p>
                </button>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { id: '#1234', customer: 'John Doe', items: 'Chicken Biryani, Naan', total: '฿450', status: 'Preparing', time: '10 mins ago' },
                    { id: '#1235', customer: 'Jane Smith', items: 'Butter Chicken, Rice', total: '฿380', status: 'Ready', time: '15 mins ago' },
                    { id: '#1236', customer: 'Mike Johnson', items: 'Vegetable Curry', total: '฿280', status: 'Delivered', time: '25 mins ago' }
                  ].map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <div className="flex items-center space-x-4">
                          <span className="font-medium text-gray-900">{order.id}</span>
                          <span className="text-gray-600">{order.customer}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{order.items}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-4">
                          <span className="font-medium text-gray-900">{order.total}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            order.status === 'Preparing' ? 'bg-yellow-100 text-yellow-800' :
                            order.status === 'Ready' ? 'bg-blue-100 text-blue-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{order.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </AuthGuard>
  );
}