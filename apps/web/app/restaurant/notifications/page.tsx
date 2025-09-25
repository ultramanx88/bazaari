'use client';

import { useState, useEffect } from 'react';
import AuthGuard from '../../../components/auth/AuthGuard';

interface Notification {
  id: string;
  type: string;
  title: string;
  message: string;
  branch: string;
  timestamp: string;
  read: boolean;
  priority: string;
  data?: any;
}

export default function RestaurantNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Mock notifications data
    setNotifications([
      {
        id: '1',
        type: 'order',
        title: 'New Order Received',
        message: 'Order #ORD-2024-001 from John Doe - ฿570.70',
        branch: 'Main Branch',
        timestamp: '2024-01-20 15:30:00',
        read: false,
        priority: 'high',
        data: { orderId: 'ORD-2024-001', amount: 570.70 }
      },
      {
        id: '2',
        type: 'booking',
        title: 'Table Reservation',
        message: 'Table for 4 people at 19:00 - Jane Smith',
        branch: 'Main Branch',
        timestamp: '2024-01-20 14:45:00',
        read: false,
        priority: 'medium',
        data: { bookingId: 'BK-001', guests: 4, time: '19:00' }
      },
      {
        id: '3',
        type: 'order',
        title: 'Order Ready for Pickup',
        message: 'Order #ORD-2024-002 is ready for pickup',
        branch: 'Silom Branch',
        timestamp: '2024-01-20 14:15:00',
        read: true,
        priority: 'medium',
        data: { orderId: 'ORD-2024-002' }
      },
      {
        id: '4',
        type: 'system',
        title: 'Daily Sales Report',
        message: 'Daily sales report is ready for review',
        branch: 'All Branches',
        timestamp: '2024-01-20 09:00:00',
        read: true,
        priority: 'low',
        data: {}
      }
    ]);
  }, []);

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'order': return '🛒';
      case 'booking': return '📅';
      case 'system': return '⚙️';
      default: return '📢';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-blue-500 bg-blue-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notif.read;
    return notif.type === filter;
  });

  return (
    <AuthGuard requireAuth={true}>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
              <div className="flex items-center space-x-4">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">
                  {notifications.filter(n => !n.read).length} unread
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Filters */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex space-x-4">
              {[
                { id: 'all', name: 'All', count: notifications.length },
                { id: 'unread', name: 'Unread', count: notifications.filter(n => !n.read).length },
                { id: 'order', name: 'Orders', count: notifications.filter(n => n.type === 'order').length },
                { id: 'booking', name: 'Bookings', count: notifications.filter(n => n.type === 'booking').length }
              ].map((filterOption) => (
                <button
                  key={filterOption.id}
                  onClick={() => setFilter(filterOption.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === filterOption.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filterOption.name} ({filterOption.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`bg-white border-l-4 rounded-lg shadow-sm p-6 ${getPriorityColor(notification.priority)} ${
                    !notification.read ? 'ring-2 ring-blue-200' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {notification.title}
                          </h3>
                          {!notification.read && (
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          )}
                        </div>
                        <p className="text-gray-700 mt-1">{notification.message}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span>📍 {notification.branch}</span>
                          <span>🕒 {notification.timestamp}</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            notification.priority === 'high' ? 'bg-red-100 text-red-800' :
                            notification.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {notification.priority} priority
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                        >
                          Mark Read
                        </button>
                      )}
                      
                      {notification.type === 'order' && (
                        <button className="px-3 py-1 border border-green-600 text-green-600 rounded text-sm hover:bg-green-50">
                          View Order
                        </button>
                      )}
                      
                      {notification.type === 'booking' && (
                        <button className="px-3 py-1 border border-purple-600 text-purple-600 rounded text-sm hover:bg-purple-50">
                          View Booking
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredNotifications.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📭</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
                  <p className="text-gray-600">You're all caught up!</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}