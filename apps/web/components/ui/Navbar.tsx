'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  MagnifyingGlassIcon, 
  Bars3Icon, 
  XMarkIcon,
  UserIcon,
  HeartIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

  const searchProducts = () => {
    // TODO: Implement search functionality
    console.log('Searching for:', search);
  };

  return (
    <div className="sticky top-0 bg-white z-10 shadow-sm">
      {/* Top Navbar */}
      <div className="bg-gray-50 py-1">
        <div className="main-container flex justify-between items-center text-sm">
          <div className="text-gray-600">
            Welcome to Bazaari - Your Multi-Service Platform
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Help</span>
            <span className="text-gray-600">Track Order</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-container py-2 flex items-center justify-between gap-8">
        
        <div className="flex items-center gap-8 grow">
          <Link href="/" className="w-[130px] md:w-[180px] lg:w-[240px]">
            <div className="text-2xl font-bold text-primary">Bazaari</div>
          </Link>
          
          <div className="relative overflow-hidden grow max-w-[800px] hidden md:block">
            <input 
              type="text" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products, services..."
              className="px-2.5 py-2.5 block rounded-lg border border-slate-200 focus:border-primary w-full placeholder:text-gray-400 outline-none text-base font-normal leading-normal"
              onKeyUp={(e) => e.key === 'Enter' && searchProducts()}
            />
            <button 
              className="bg-primary-600 h-full w-14 border-none absolute top-0 right-0 rounded-r-lg flex items-center justify-center"
              onClick={searchProducts}
            >
              <MagnifyingGlassIcon className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-end md:gap-4 lg:gap-8">
          <div className="flex items-center md:gap-1 lg:gap-3">
            <button className="p-2.5 cursor-pointer relative">
              <HeartIcon className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                0
              </span>
            </button>

            <button className="p-2.5 relative">
              <ShoppingBagIcon className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                0
              </span>
            </button>
          </div>

          <Link href="/login" className="flex items-center gap-2 lg:p-2.5 text-slate-600 hover:text-primary">
            <span className="text-base font-normal leading-normal">Login</span>
            <UserIcon className="w-5 h-5" />
          </Link>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex items-center gap-4 relative">
          <div 
            className="h-10 w-10 flex items-center justify-center bg-slate-100 rounded-[40px]" 
            onClick={() => setShowSearch(!showSearch)}
          >
            <MagnifyingGlassIcon className="w-5 h-5 text-slate-950" />
          </div>

          <button className="pl-1 relative">
            <ShoppingBagIcon className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              0
            </span>
          </button>

          <div className="h-10 w-10 flex items-center justify-end" onClick={() => setMobileMenuOpen(true)}>
            <Bars3Icon className="w-6 h-6 text-slate-950" />
          </div>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="border-t border-gray-200">
        <div className="main-container py-3">
          <div className="flex items-center gap-8 overflow-x-auto">
            <Link href="/food-delivery" className="text-sm font-medium text-gray-700 hover:text-primary whitespace-nowrap">
              Food Delivery
            </Link>
            <Link href="/hotels" className="text-sm font-medium text-gray-700 hover:text-primary whitespace-nowrap">
              Hotels
            </Link>
            <Link href="/spa-massage" className="text-sm font-medium text-gray-700 hover:text-primary whitespace-nowrap">
              Spa & Massage
            </Link>
            <Link href="/visa-services" className="text-sm font-medium text-gray-700 hover:text-primary whitespace-nowrap">
              Visa Services
            </Link>
            <Link href="/healthcare" className="text-sm font-medium text-gray-700 hover:text-primary whitespace-nowrap">
              Healthcare
            </Link>
            <Link href="/real-estate" className="text-sm font-medium text-gray-700 hover:text-primary whitespace-nowrap">
              Real Estate
            </Link>
            <Link href="/shopping" className="text-sm font-medium text-gray-700 hover:text-primary whitespace-nowrap">
              Shopping
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Search Modal */}
      {showSearch && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="bg-white m-4 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">Search</span>
              <button onClick={() => setShowSearch(false)}>
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <input 
              type="text" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products, services..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              onKeyUp={(e) => e.key === 'Enter' && (setShowSearch(false), searchProducts())}
            />
            <button 
              className="w-full mt-3 bg-primary text-white py-2 rounded-lg"
              onClick={() => (setShowSearch(false), searchProducts())}
            >
              Search
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="bg-white w-80 h-full ml-auto p-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <Link href="/login" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <UserIcon className="w-5 h-5" />
                <span>Login</span>
              </Link>
              
              <div className="space-y-2">
                <Link href="/food-delivery" className="block py-2 border-b border-gray-200">Food Delivery</Link>
                <Link href="/hotels" className="block py-2 border-b border-gray-200">Hotels</Link>
                <Link href="/spa-massage" className="block py-2 border-b border-gray-200">Spa & Massage</Link>
                <Link href="/visa-services" className="block py-2 border-b border-gray-200">Visa Services</Link>
                <Link href="/healthcare" className="block py-2 border-b border-gray-200">Healthcare</Link>
                <Link href="/real-estate" className="block py-2 border-b border-gray-200">Real Estate</Link>
                <Link href="/shopping" className="block py-2 border-b border-gray-200">Shopping</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}