'use client';

import React, { useState } from 'react';

const ShoppingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStore, setSelectedStore] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [deliveryArea, setDeliveryArea] = useState('bangkok');
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Basmati Rice Premium 5kg",
      category: "rice-grains",
      store: "indian-grocery",
      price: "฿450",
      originalPrice: "฿500",
      discount: "10%",
      image: "🍚",
      brand: "Royal Basmati",
      rating: 4.8,
      reviews: 156,
      description: "Premium quality aged Basmati rice imported directly from India",
      features: ["Aged 2 Years", "Long Grain", "Aromatic", "Premium Quality"],
      inStock: true,
      fastDelivery: true,
      freeShipping: false,
      unit: "5kg bag"
    },
    {
      id: 2,
      name: "Garam Masala Powder 100g",
      category: "spices",
      store: "spice-palace",
      price: "฿85",
      originalPrice: "฿95",
      discount: "11%",
      image: "🌶️",
      brand: "Everest",
      rating: 4.9,
      reviews: 203,
      description: "Authentic Indian spice blend perfect for curries and meat dishes",
      features: ["Authentic Recipe", "Fresh Ground", "No Preservatives", "Premium Mix"],
      inStock: true,
      fastDelivery: true,
      freeShipping: false,
      unit: "100g pack"
    },
    {
      id: 3,
      name: "Coconut Oil Cold Pressed 500ml",
      category: "oils",
      store: "health-store",
      price: "฿320",
      originalPrice: "฿380",
      discount: "16%",
      image: "🥥",
      brand: "Organic India",
      rating: 4.7,
      reviews: 89,
      description: "Pure cold-pressed coconut oil for cooking and beauty applications",
      features: ["Cold Pressed", "Organic", "Multi-purpose", "Glass Bottle"],
      inStock: true,
      fastDelivery: false,
      freeShipping: true,
      unit: "500ml bottle"
    },
    {
      id: 4,
      name: "Toor Dal (Pigeon Peas) 1kg",
      category: "dal-lentils",
      store: "indian-grocery",
      price: "฿180",
      originalPrice: "฿200",
      discount: "10%",
      image: "🫘",
      brand: "India Gate",
      rating: 4.6,
      reviews: 124,
      description: "High-quality toor dal, essential for South Indian cuisine",
      features: ["Premium Quality", "Cleaned & Sorted", "Rich in Protein", "Fresh Stock"],
      inStock: true,
      fastDelivery: true,
      freeShipping: false,
      unit: "1kg pack"
    },
    {
      id: 5,
      name: "Ghee Pure Cow 500ml",
      category: "dairy",
      store: "dairy-fresh",
      price: "฿420",
      originalPrice: "฿450",
      discount: "7%",
      image: "🧈",
      brand: "Amul",
      rating: 4.8,
      reviews: 178,
      description: "Pure cow ghee made from fresh cream, perfect for cooking and sweets",
      features: ["100% Pure", "Made from Cream", "Rich Flavor", "Traditional Method"],
      inStock: true,
      fastDelivery: true,
      freeShipping: true,
      unit: "500ml jar"
    },
    {
      id: 6,
      name: "Curry Leaves Fresh 50g",
      category: "herbs-vegetables",
      store: "fresh-mart",
      price: "฿35",
      originalPrice: "฿40",
      discount: "13%",
      image: "🌿",
      brand: "Farm Fresh",
      rating: 4.4,
      reviews: 67,
      description: "Fresh curry leaves, essential for authentic South Indian cooking",
      features: ["Farm Fresh", "Same Day Delivery", "Aromatic", "Pesticide Free"],
      inStock: true,
      fastDelivery: true,
      freeShipping: false,
      unit: "50g bunch"
    },
    {
      id: 7,
      name: "Papadum Plain 200g",
      category: "snacks",
      store: "snack-corner",
      price: "฿95",
      originalPrice: "฿110",
      discount: "14%",
      image: "🍪",
      brand: "Lijjat",
      rating: 4.5,
      reviews: 98,
      description: "Traditional Indian papadum, ready to fry for crispy snacks",
      features: ["Traditional Recipe", "Ready to Fry", "Crispy Texture", "Party Pack"],
      inStock: true,
      fastDelivery: false,
      freeShipping: false,
      unit: "200g pack"
    },
    {
      id: 8,
      name: "Turmeric Powder Organic 250g",
      category: "spices",
      store: "organic-hub",
      price: "฿150",
      originalPrice: "฿180",
      discount: "17%",
      image: "💛",
      brand: "Organic Tattva",
      rating: 4.9,
      reviews: 145,
      description: "Organic turmeric powder with high curcumin content for health benefits",
      features: ["Organic Certified", "High Curcumin", "Anti-inflammatory", "Pure Quality"],
      inStock: true,
      fastDelivery: true,
      freeShipping: true,
      unit: "250g pack"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories', icon: '🛒' },
    { value: 'rice-grains', label: 'Rice & Grains', icon: '🍚' },
    { value: 'spices', label: 'Spices & Masala', icon: '🌶️' },
    { value: 'dal-lentils', label: 'Dal & Lentils', icon: '🫘' },
    { value: 'oils', label: 'Oils & Ghee', icon: '🥥' },
    { value: 'dairy', label: 'Dairy Products', icon: '🧈' },
    { value: 'herbs-vegetables', label: 'Fresh Herbs', icon: '🌿' },
    { value: 'snacks', label: 'Snacks & Ready-to-eat', icon: '🍪' },
    { value: 'sweets', label: 'Sweets & Desserts', icon: '🍯' }
  ];

  const stores = [
    { value: 'all', label: 'All Stores' },
    { value: 'indian-grocery', label: 'Indian Grocery Store' },
    { value: 'spice-palace', label: 'Spice Palace' },
    { value: 'health-store', label: 'Health & Organic Store' },
    { value: 'dairy-fresh', label: 'Dairy Fresh' },
    { value: 'fresh-mart', label: 'Fresh Mart' },
    { value: 'snack-corner', label: 'Snack Corner' },
    { value: 'organic-hub', label: 'Organic Hub' }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under-100', label: 'Under ฿100' },
    { value: '100-300', label: '฿100 - ฿300' },
    { value: '300-500', label: '฿300 - ฿500' },
    { value: 'above-500', label: 'Above ฿500' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' }
  ];

  const deliveryAreas = [
    { value: 'bangkok', label: 'Bangkok Metropolitan' },
    { value: 'samut-prakan', label: 'Samut Prakan' },
    { value: 'nonthaburi', label: 'Nonthaburi' },
    { value: 'pathum-thani', label: 'Pathum Thani' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesStore = selectedStore === 'all' || product.store === selectedStore;
    
    const price = parseInt(product.price.replace('฿', ''));
    const matchesPrice = priceRange === 'all' ||
                        (priceRange === 'under-100' && price < 100) ||
                        (priceRange === '100-300' && price >= 100 && price <= 300) ||
                        (priceRange === '300-500' && price >= 300 && price <= 500) ||
                        (priceRange === 'above-500' && price > 500);
    
    return matchesSearch && matchesCategory && matchesStore && matchesPrice;
  });

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    alert(`Added ${product.name} to cart!`);
  };

  const buyNow = (product) => {
    alert(`Proceeding to checkout for ${product.name}`);
    // TODO: Implement checkout logic
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace('฿', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🛒 Indian Groceries & Essentials
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Shop authentic Indian groceries, spices, and daily essentials with fast delivery
            </p>
          </div>

          {/* Quick Order Form */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Quick Delivery Setup</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Area
                </label>
                <select
                  value={deliveryArea}
                  onChange={(e) => setDeliveryArea(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {deliveryAreas.map(area => (
                    <option key={area.value} value={area.value}>
                      {area.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Time
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="asap">ASAP (1-2 hours)</option>
                  <option value="today">Today Evening</option>
                  <option value="tomorrow">Tomorrow</option>
                  <option value="schedule">Schedule Later</option>
                </select>
              </div>

              <div className="flex items-end">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                  🚚 Set Delivery
                </button>
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          {cart.length > 0 && (
            <div className="mt-6 bg-orange-500 bg-opacity-90 rounded-lg p-4 text-center">
              <p className="text-lg font-semibold">
                🛒 Cart: {cart.length} items - Total: ฿{getCartTotal()}
              </p>
              <button className="mt-2 bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 transition duration-300">
                View Cart & Checkout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Filters and Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search products, brands, or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-2">
              <select
                value={selectedStore}
                onChange={(e) => setSelectedStore(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {stores.map(store => (
                  <option key={store.value} value={store.value}>{store.label}</option>
                ))}
              </select>
              
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200 shadow-sm'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-green-600">{filteredProducts.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Product Image and Badges */}
              <div className="h-40 bg-gradient-to-br from-green-400 to-orange-400 flex items-center justify-center text-4xl relative">
                {product.image}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {product.discount && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      -{product.discount}
                    </span>
                  )}
                  {product.fastDelivery && (
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                      ⚡ Fast
                    </span>
                  )}
                  {product.freeShipping && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                      🚚 Free
                    </span>
                  )}
                </div>
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="mb-2">
                  <span className="text-xs text-gray-500 uppercase">{product.brand}</span>
                  <h3 className="text-sm font-bold text-gray-800 line-clamp-2">{product.name}</h3>
                  <p className="text-xs text-gray-600">{product.unit}</p>
                </div>

                <p className="text-xs text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 text-xs">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="ml-1 text-xs text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Features */}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 2 && (
                      <span className="text-xs text-orange-600">+{product.features.length - 2}</span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-green-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-500 line-through ml-2">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-3 rounded-lg transition duration-300 text-xs disabled:opacity-50"
                  >
                    🛒 Add
                  </button>
                  <button
                    onClick={() => buyNow(product)}
                    disabled={!product.inStock}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded-lg transition duration-300 transform hover:scale-105 text-xs disabled:opacity-50"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Shop With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Same-day delivery for fresh groceries and essentials</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Authentic Products</h3>
              <p className="text-gray-600">Genuine Indian products imported directly from trusted sources</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing with regular discounts and offers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Ordering</h3>
              <p className="text-gray-600">Simple online ordering with multiple payment options</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Need Fresh Indian Groceries?</h2>
          <p className="text-xl text-green-100 mb-8">
            Order now and get fresh authentic Indian ingredients delivered to your doorstep
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-8 rounded-lg transition duration-300">
              📱 Download Shopping App
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition duration-300">
              🎁 View Weekly Offers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;