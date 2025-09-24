'use client';

import { useState } from 'react';

export default function EmailManagementPage() {
  const [testEmail, setTestEmail] = useState({
    to: '',
    subject: 'Test Email from Bazaari',
    message: 'This is a test email from Bazaari mail server.'
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSendTestEmail = async () => {
    if (!testEmail.to || !testEmail.subject) {
      alert('Please fill in required fields');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/email/send-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testEmail),
      });

      const result = await response.json();

      if (result.success) {
        alert('Test email sent successfully!');
        setTestEmail(prev => ({ ...prev, to: '' }));
      } else {
        alert(`Failed to send test email: ${result.error}`);
      }
    } catch (error) {
      console.error('Test email error:', error);
      alert('Failed to send test email');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTestConnection = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/email/test-connection');
      const result = await response.json();
      
      if (result.success) {
        alert('Mail server connection successful!');
      } else {
        alert(`Connection failed: ${result.error}`);
      }
    } catch (error) {
      alert('Failed to test connection');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Email Management</h1>
          <p className="text-gray-600 mt-2">Test and manage Bazaari mail server</p>
        </div>

        {/* Server Status */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Mail Server Status</h3>
            <button
              onClick={handleTestConnection}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              {isLoading ? 'Testing...' : 'Test Connection'}
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-600">SMTP Server: Ready</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-600">IMAP Server: Ready</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-600">Webmail: Ready</span>
            </div>
          </div>
        </div>

        {/* Send Test Email */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Send Test Email</h3>
            <p className="text-gray-600 mt-1">Send a test email to verify mail server functionality</p>
          </div>
          
          <div className="p-6">
            <div className="max-w-2xl space-y-4">
              <div>
                <label htmlFor="test-to" className="block text-sm font-medium text-gray-700 mb-2">
                  To Email Address *
                </label>
                <input
                  type="email"
                  id="test-to"
                  value={testEmail.to}
                  onChange={(e) => setTestEmail(prev => ({ ...prev, to: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="recipient@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="test-subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="test-subject"
                  value={testEmail.subject}
                  onChange={(e) => setTestEmail(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Test Email Subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="test-message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="test-message"
                  rows={6}
                  value={testEmail.message}
                  onChange={(e) => setTestEmail(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Test email message content..."
                />
              </div>

              <button
                onClick={handleSendTestEmail}
                disabled={!testEmail.to || !testEmail.subject || isLoading}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Sending...' : 'Send Test Email'}
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="text-2xl">📧</div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Sent</p>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="text-2xl">❌</div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Failed</p>
                <p className="text-2xl font-bold text-red-600">23</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="text-2xl">📈</div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Success Rate</p>
                <p className="text-2xl font-bold text-green-600">98.2%</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="text-2xl">📅</div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Today</p>
                <p className="text-2xl font-bold text-blue-600">45</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}