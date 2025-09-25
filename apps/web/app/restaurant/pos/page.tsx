'use client';

import { useState } from 'react';
import AuthGuard from '../../../components/auth/AuthGuard';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

export default function RestaurantPOS() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [orderType, setOrderType] = useState('dine_in');
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', table: '' });

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'mains', name: 'Main Course', icon: '🍛' },
    { id: 'drinks', name: 'Beverages', icon: '🥤' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' }
  ];

  const menuItems = [
    { id: '1', name: 'Chicken Biryani', price: 180, category: 'mains', image: '🍛' },
    { id: '2', name: 'Butter Chicken', price: 220, category: 'mains', image: '🍗' },
    { id: '3', name: 'Garlic Naan', price: 45, category: 'appetizers', image: '🫓' },
    { id: '4', name: 'Samosa', price: 80, category: 'appetizers', image: '🥟' },
    { id: '5', name: 'Mango Lassi', price: 60, category: 'drinks', image: '🥤' },
    { id: '6', name: 'Gulab Jamun', price: 70, category: 'desserts', image: '🍰' }
  ];

  const addToCart = (item: MenuItem) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const getSubtotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const getTax = () => {
    return getSubtotal() * 0.07; // 7% tax
  };

  const getTotal = () => {
    return getSubtotal() + getTax();
  };

  const processOrder = () => {
    if (cart.length === 0) {
      alert('Please add items to cart');
      return;
    }

    const orderData = {
      items: cart,
      orderType,
      customer: customerInfo,
      subtotal: getSubtotal(),
      tax: getTax(),
      total: getTotal(),
      timestamp: new Date().toISOString()
    };

    console.log('Processing order:', orderData);
    alert('Order processed successfully!');
    
    // Reset form
    setCart([]);
    setCustomerInfo({ name: '', phone: '', table: '' });
  };

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <AuthGuard requireAuth={true}>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-2xl font-bold text-gray-900">POS System</h1>
              <div className="flex items-center space-x-4">
                <select
                  value={orderType}
                  onChange={(e) => setOrderType(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="dine_in">Dine In</option>
                  <option value="takeaway">Takeaway</option>
                  <option value="delivery">Delivery</option>
                </select>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Menu Section */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-sm border p-4">
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                          selectedCategory === category.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <span>{category.icon}</span>
                        <span>{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Menu Items */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => addToCart(item)}
                        className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left transition-colors"
                      >
                        <div className="text-4xl mb-2">{item.image}</div>
                        <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-lg font-bold text-blue-600">฿{item.price}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cart Section */}
              <div className="space-y-6">
                
                {/* Customer Info */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h3>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Customer Name"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                    {orderType === 'dine_in' && (
                      <input
                        type="text"
                        placeholder="Table Number"
                        value={customerInfo.table}
                        onChange={(e) => setCustomerInfo({...customerInfo, table: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    )}
                  </div>
                </div>

                {/* Cart */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Order Summary ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">฿{item.price} each</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                        <div className="w-20 text-right font-medium">
                          ฿{(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                    
                    {cart.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        <div className="text-4xl mb-2">🛒</div>
                        <p>Cart is empty</p>
                      </div>
                    )}
                  </div>

                  {cart.length > 0 && (
                    <>
                      <div className="border-t pt-4 space-y-2">
                        <div className="flex justify-between">
                          <span>Subtotal:</span>
                          <span>฿{getSubtotal().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax (7%):</span>
                          <span>฿{getTax().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg border-t pt-2">
                          <span>Total:</span>
                          <span>฿{getTotal().toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="mt-6 space-y-3">
                        <button
                          onClick={processOrder}
                          className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700"
                        >
                          Process Order
                        </button>
                        
                        <div className="grid grid-cols-2 gap-2">
                          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            Print Receipt
                          </button>
                          <button
                            onClick={() => setCart([])}
                            className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50"
                          >
                            Clear Cart
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Quick Stats */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Orders:</span>
                      <span className="font-medium">23</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue:</span>
                      <span className="font-medium text-green-600">฿15,600</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg Order:</span>
                      <span className="font-medium">฿678</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}