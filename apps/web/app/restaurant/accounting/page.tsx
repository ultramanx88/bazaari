'use client';

import { useState } from 'react';
import AuthGuard from '../../../components/auth/AuthGuard';

export default function RestaurantAccounting() {
  const [selectedPeriod, setSelectedPeriod] = useState('today');
  const [selectedBranch, setSelectedBranch] = useState('all');

  const accountingData = {
    today: {
      revenue: 28500,
      expenses: 12300,
      profit: 16200,
      orders: 45,
      avgOrderValue: 633
    },
    week: {
      revenue: 185000,
      expenses: 89000,
      profit: 96000,
      orders: 312,
      avgOrderValue: 593
    },
    month: {
      revenue: 750000,
      expenses: 380000,
      profit: 370000,
      orders: 1250,
      avgOrderValue: 600
    }
  };

  const expenses = [
    { category: 'Food Cost', amount: 8500, percentage: 69 },
    { category: 'Staff Wages', amount: 2800, percentage: 23 },
    { category: 'Utilities', amount: 600, percentage: 5 },
    { category: 'Other', amount: 400, percentage: 3 }
  ];

  const transactions = [
    { id: '1', type: 'income', description: 'Order #ORD-001', amount: 570, time: '15:30', branch: 'Main' },
    { id: '2', type: 'expense', description: 'Food Supplies', amount: -1200, time: '14:00', branch: 'Main' },
    { id: '3', type: 'income', description: 'Order #ORD-002', amount: 380, time: '13:45', branch: 'Silom' },
    { id: '4', type: 'expense', description: 'Staff Payment', amount: -2500, time: '12:00', branch: 'All' }
  ];

  const currentData = accountingData[selectedPeriod];

  return (
    <AuthGuard requireAuth={true}>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-2xl font-bold text-gray-900">Accounting & Finance</h1>
              <div className="flex space-x-4">
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                </select>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="all">All Branches</option>
                  <option value="main">Main Branch</option>
                  <option value="silom">Silom Branch</option>
                </select>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            
            {/* Financial Overview */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">💰</div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Revenue</p>
                    <p className="text-2xl font-bold text-green-600">฿{currentData.revenue.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">💸</div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Expenses</p>
                    <p className="text-2xl font-bold text-red-600">฿{currentData.expenses.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">📈</div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Profit</p>
                    <p className="text-2xl font-bold text-blue-600">฿{currentData.profit.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">🛒</div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Orders</p>
                    <p className="text-2xl font-bold text-purple-600">{currentData.orders}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">💳</div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg Order</p>
                    <p className="text-2xl font-bold text-orange-600">฿{currentData.avgOrderValue}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Expense Breakdown */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Expense Breakdown</h3>
                <div className="space-y-4">
                  {expenses.map((expense, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-blue-500 rounded mr-3" style={{
                          backgroundColor: ['#3B82F6', '#EF4444', '#F59E0B', '#10B981'][index]
                        }}></div>
                        <span className="text-sm font-medium text-gray-700">{expense.category}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-gray-900">฿{expense.amount.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">{expense.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Total Expenses</span>
                    <span className="font-bold text-red-600">฿{currentData.expenses.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
                <div className="space-y-3">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 ${
                          transaction.type === 'income' ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{transaction.description}</p>
                          <p className="text-xs text-gray-500">{transaction.time} • {transaction.branch}</p>
                        </div>
                      </div>
                      <div className={`text-sm font-semibold ${
                        transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.amount > 0 ? '+' : ''}฿{Math.abs(transaction.amount).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-4 text-blue-600 text-sm hover:underline">
                  View All Transactions
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                  <div className="text-2xl mb-2">📊</div>
                  <h4 className="font-medium text-gray-900">Generate Report</h4>
                  <p className="text-sm text-gray-600">Create financial report</p>
                </button>

                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                  <div className="text-2xl mb-2">💸</div>
                  <h4 className="font-medium text-gray-900">Add Expense</h4>
                  <p className="text-sm text-gray-600">Record new expense</p>
                </button>

                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                  <div className="text-2xl mb-2">🧾</div>
                  <h4 className="font-medium text-gray-900">Tax Report</h4>
                  <p className="text-sm text-gray-600">Generate tax documents</p>
                </button>

                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                  <div className="text-2xl mb-2">📈</div>
                  <h4 className="font-medium text-gray-900">Analytics</h4>
                  <p className="text-sm text-gray-600">View detailed analytics</p>
                </button>
              </div>
            </div>

          </div>
        </main>
      </div>
    </AuthGuard>
  );
}