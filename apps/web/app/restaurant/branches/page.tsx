'use client';

import { useState } from 'react';
import AuthGuard from '../../../components/auth/AuthGuard';

export default function BranchManagement() {
  const [branches, setBranches] = useState([
    {
      id: '1',
      name: 'Main Branch',
      address: '123 Sukhumvit Road, Bangkok 10110',
      phone: '+66 2-123-4567',
      coordinates: { lat: 13.7563, lng: 100.5018 },
      manager: 'Jane Smith',
      status: 'active',
      staffCount: 8,
      todayOrders: 23,
      revenue: 15600
    },
    {
      id: '2',
      name: 'Silom Branch',
      address: '456 Silom Road, Bangkok 10500',
      phone: '+66 2-234-5678',
      coordinates: { lat: 13.7244, lng: 100.5347 },
      manager: 'Mike Johnson',
      status: 'active',
      staffCount: 5,
      todayOrders: 18,
      revenue: 12400
    }
  ]);

  const [showAddBranch, setShowAddBranch] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const openInMaps = (branch) => {
    const { lat, lng } = branch.coordinates;
    const openStreetMapUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}&zoom=16`;
    window.open(openStreetMapUrl, '_blank');
  };

  return (
    <AuthGuard requireAuth={true}>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-2xl font-bold text-gray-900">Branch Management</h1>
              <button
                onClick={() => setShowAddBranch(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                + Add New Branch
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">🏪</div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Branches</p>
                    <p className="text-2xl font-bold text-gray-900">{branches.length}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">👥</div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Staff</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {branches.reduce((sum, branch) => sum + branch.staffCount, 0)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">📦</div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Today's Orders</p>
                    <p className="text-2xl font-bold text-green-600">
                      {branches.reduce((sum, branch) => sum + branch.todayOrders, 0)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">💰</div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Today's Revenue</p>
                    <p className="text-2xl font-bold text-purple-600">
                      ฿{branches.reduce((sum, branch) => sum + branch.revenue, 0).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Branches Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {branches.map((branch) => (
                <div key={branch.id} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{branch.name}</h3>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      {branch.status}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <span className="text-gray-400 mr-3 mt-1">📍</span>
                      <p className="text-sm text-gray-900">{branch.address}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-3">📞</span>
                      <p className="text-sm text-gray-900">{branch.phone}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-3">👨‍💼</span>
                      <p className="text-sm text-gray-900">Manager: {branch.manager}</p>
                    </div>
                  </div>

                  {/* Branch Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <p className="text-lg font-bold text-gray-900">{branch.staffCount}</p>
                      <p className="text-xs text-gray-600">Staff</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-blue-600">{branch.todayOrders}</p>
                      <p className="text-xs text-gray-600">Orders</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-green-600">฿{branch.revenue.toLocaleString()}</p>
                      <p className="text-xs text-gray-600">Revenue</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700">
                        Manage
                      </button>
                      <button
                        onClick={() => openInMaps(branch)}
                        className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-50"
                      >
                        View Map
                      </button>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 border border-blue-600 text-blue-600 px-3 py-2 rounded text-sm hover:bg-blue-50">
                        Staff ({branch.staffCount})
                      </button>
                      <button className="flex-1 border border-green-600 text-green-600 px-3 py-2 rounded text-sm hover:bg-green-50">
                        Orders
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </main>

        {/* Add Branch Modal */}
        {showAddBranch && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Branch</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Branch Name</label>
                  <input
                    type="text"
                    placeholder="Branch Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <textarea
                    placeholder="Full Address"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+66 2-xxx-xxxx"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
                    <input
                      type="number"
                      step="any"
                      placeholder="13.7563"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
                    <input
                      type="number"
                      step="any"
                      placeholder="100.5018"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Manager</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select Manager</option>
                    <option value="jane">Jane Smith</option>
                    <option value="mike">Mike Johnson</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowAddBranch(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowAddBranch(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add Branch
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </AuthGuard>
  );
}