'use client';

import { useState } from 'react';
import AuthGuard from '../../../components/auth/AuthGuard';

interface Order {
  id: string;
  orderNumber: string;
  customer: {
    name: string;
    phone: string;
    address: string;
  };
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  status: string;
  orderType: string;
  total: number;
  createdAt: string;
}

export default function RestaurantOrders() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showReceipt, setShowReceipt] = useState(false);

  const orders = [
    {
      id: '1',
      orderNumber: 'ORD-2024-001',
      customer: { name: 'John Doe', phone: '+66 81-234-5678', address: '123 Sukhumvit Road, Bangkok' },
      items: [
        { name: 'Chicken Biryani', quantity: 2, price: 180 },
        { name: 'Garlic Naan', quantity: 3, price: 45 }
      ],
      status: 'preparing',
      orderType: 'delivery',
      total: 570.7,
      createdAt: '2024-01-20 14:30:00'
    }
  ];

  const statusColors = {
    pending: 'bg-gray-100 text-gray-800',
    preparing: 'bg-yellow-100 text-yellow-800',
    ready: 'bg-green-100 text-green-800',
    delivered: 'bg-blue-100 text-blue-800'
  };

  return (
    <AuthGuard requireAuth={true}>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{order.orderNumber}</h3>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[order.status]}`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">฿{order.total.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Customer</h4>
                    <p className="text-sm">{order.customer.name} - {order.customer.phone}</p>
                    <p className="text-sm text-gray-600">{order.customer.address}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Items</h4>
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{item.quantity}x {item.name}</span>
                        <span>฿{(item.quantity * item.price).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                      Update Status
                    </button>
                    <button 
                      onClick={() => {
                        setSelectedOrder(order);
                        setShowReceipt(true);
                      }}
                      className="px-3 py-1 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50"
                    >
                      Print Receipt
                    </button>
                    <button 
                      onClick={() => window.open(`https://www.openstreetmap.org/search?query=${encodeURIComponent(order.customer.address)}`)}
                      className="px-3 py-1 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50"
                    >
                      View on Map
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Receipt Modal */}
        {showReceipt && selectedOrder && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold">Order Receipt</h3>
                <p className="text-sm text-gray-600">Spice Garden Indian Restaurant</p>
              </div>
              
              <div className="mb-4">
                <p><strong>Order:</strong> {selectedOrder.orderNumber}</p>
                <p><strong>Customer:</strong> {selectedOrder.customer.name}</p>
                <p><strong>Phone:</strong> {selectedOrder.customer.phone}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Items:</h4>
                {selectedOrder.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{item.quantity}x {item.name}</span>
                    <span>฿{(item.quantity * item.price).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-2 mb-4">
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>฿{selectedOrder.total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowReceipt(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Print
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AuthGuard>
  );
}