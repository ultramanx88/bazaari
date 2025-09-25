'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Business {
  id: string;
  name: string;
  type: string;
  branches: Branch[];
}

interface Branch {
  id: string;
  name: string;
  address: string;
}

export default function POSHome() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [selectedBusiness, setSelectedBusiness] = useState<string>('');
  const [selectedBranch, setSelectedBranch] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Mock business data - replace with API call
    setBusinesses([
      {
        id: '1',
        name: 'Spice Garden Indian Restaurant',
        type: 'restaurant',
        branches: [
          { id: '1', name: 'Main Branch', address: '123 Sukhumvit Road, Bangkok' },
          { id: '2', name: 'Silom Branch', address: '456 Silom Road, Bangkok' }
        ]
      },
      {
        id: '2',
        name: 'Bangkok Spa & Wellness',
        type: 'spa',
        branches: [
          { id: '3', name: 'Central Branch', address: '789 Central Road, Bangkok' }
        ]
      },
      {
        id: '3',
        name: 'Grand Hotel Bangkok',
        type: 'hotel',
        branches: [
          { id: '4', name: 'Main Hotel', address: '321 Hotel Street, Bangkok' }
        ]
      }
    ]);
    setIsLoading(false);
  }, []);

  const handleBusinessSelect = (businessId: string) => {
    setSelectedBusiness(businessId);
    setSelectedBranch(''); // Reset branch selection
  };

  const handleBranchSelect = (branchId: string) => {
    setSelectedBranch(branchId);
  };

  const startPOS = () => {
    if (!selectedBusiness || !selectedBranch) {
      alert('Please select both business and branch');
      return;
    }

    // Store selection in localStorage
    localStorage.setItem('pos_business_id', selectedBusiness);
    localStorage.setItem('pos_branch_id', selectedBranch);
    
    // Navigate to POS system
    router.push('/pos');
  };

  const selectedBusinessData = businesses.find(b => b.id === selectedBusiness);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading businesses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Bazaari POS System</h1>
            </div>
            <div className="text-sm text-gray-600">
              Select your business and branch to continue
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">💳</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Bazaari POS</h2>
          <p className="text-lg text-gray-600">
            Select your business and branch to start using the Point of Sale system
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
          
          {/* Business Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Your Business
            </label>
            <div className="grid grid-cols-1 gap-3">
              {businesses.map((business) => (
                <button
                  key={business.id}
                  onClick={() => handleBusinessSelect(business.id)}
                  className={`p-4 border rounded-lg text-left transition-colors ${
                    selectedBusiness === business.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">
                      {business.type === 'restaurant' ? '🍽️' : 
                       business.type === 'spa' ? '💆' : 
                       business.type === 'hotel' ? '🏨' : '🏪'}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{business.name}</h3>
                      <p className="text-sm text-gray-600 capitalize">{business.type} • {business.branches.length} branch(es)</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Branch Selection */}
          {selectedBusinessData && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Branch
              </label>
              <div className="grid grid-cols-1 gap-3">
                {selectedBusinessData.branches.map((branch) => (
                  <button
                    key={branch.id}
                    onClick={() => handleBranchSelect(branch.id)}
                    className={`p-4 border rounded-lg text-left transition-colors ${
                      selectedBranch === branch.id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="text-2xl mr-4">🏪</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{branch.name}</h3>
                        <p className="text-sm text-gray-600">{branch.address}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Start POS Button */}
          <div className="text-center">
            <button
              onClick={startPOS}
              disabled={!selectedBusiness || !selectedBranch}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-colors ${
                selectedBusiness && selectedBranch
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Start POS System
            </button>
            
            {(!selectedBusiness || !selectedBranch) && (
              <p className="text-sm text-gray-500 mt-2">
                Please select both business and branch to continue
              </p>
            )}
          </div>

          {/* Selected Info */}
          {selectedBusiness && selectedBranch && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">Selected Configuration:</h4>
              <div className="text-sm text-blue-800">
                <p><strong>Business:</strong> {selectedBusinessData?.name}</p>
                <p><strong>Branch:</strong> {selectedBusinessData?.branches.find(b => b.id === selectedBranch)?.name}</p>
                <p><strong>Type:</strong> {selectedBusinessData?.type}</p>
              </div>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="text-3xl mb-2">🏪</div>
            <h3 className="font-semibold text-gray-900">Multi-Business</h3>
            <p className="text-sm text-gray-600">Support for restaurants, spas, hotels, and more</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="text-3xl mb-2">🌐</div>
            <h3 className="font-semibold text-gray-900">Multi-Branch</h3>
            <p className="text-sm text-gray-600">Manage multiple locations from one system</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="font-semibold text-gray-900">Real-time Sync</h3>
            <p className="text-sm text-gray-600">Sync with main platform in real-time</p>
          </div>
        </div>
      </main>
    </div>
  );
}