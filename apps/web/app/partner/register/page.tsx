'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DefaultLayout from '../../../components/layouts/DefaultLayout';

export default function PartnerRegisterPage() {
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    businessTypes: [] as string[],
    businessAddress: '',
    businessLicense: '',
    taxId: '',
    bankAccount: '',
    bankName: '',
    description: '',
  });
  const router = useRouter();

  useEffect(() => {
    // Check if user agreed to terms
    const agreed = localStorage.getItem('partner_terms_agreed');
    if (!agreed) {
      router.push('/partner/terms');
      return;
    }
    setTermsAgreed(true);
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBusinessTypeChange = (businessType: string) => {
    setFormData(prev => ({
      ...prev,
      businessTypes: prev.businessTypes.includes(businessType)
        ? prev.businessTypes.filter(type => type !== businessType)
        : [...prev.businessTypes, businessType]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate that at least one business type is selected
    if (formData.businessTypes.length === 0) {
      alert('Please select at least one business type');
      return;
    }
    
    // Here you would typically send the data to your API
    console.log('Partner registration data:', formData);
    
    // For now, just show success message
    alert('Partner registration submitted successfully! We will review your application and contact you within 2-3 business days.');
    
    // Clear localStorage and redirect
    localStorage.removeItem('partner_terms_agreed');
    router.push('/');
  };

  if (!termsAgreed) {
    return (
      <DefaultLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Checking agreement status...</p>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Partner Registration
            </h1>
            <p className="text-lg text-gray-600">
              Join Bazaari and start growing your business today
            </p>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Business Information
                </h2>
                
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your business name"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Business Types * (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { value: 'restaurant', label: 'Restaurant / Food Delivery', commission: '15%' },
                      { value: 'hotel', label: 'Hotel / Accommodation', commission: '10%' },
                      { value: 'spa', label: 'Spa / Massage', commission: '12%' },
                      { value: 'healthcare', label: 'Healthcare Services', commission: '8%' },
                      { value: 'realestate', label: 'Real Estate', commission: '5%' },
                      { value: 'visa', label: 'Visa Services', commission: '10%' },
                      { value: 'shopping', label: 'Shopping / Retail', commission: '10%' },
                      { value: 'other', label: 'Other Services', commission: '10%' }
                    ].map((businessType) => (
                      <div key={businessType.value} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id={`businessType-${businessType.value}`}
                            checked={formData.businessTypes.includes(businessType.value)}
                            onChange={() => handleBusinessTypeChange(businessType.value)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor={`businessType-${businessType.value}`} className="ml-3 text-sm font-medium text-gray-700">
                            {businessType.label}
                          </label>
                        </div>
                        <span className="text-sm text-blue-600 font-medium">
                          {businessType.commission}
                        </span>
                      </div>
                    ))}
                  </div>
                  {formData.businessTypes.length === 0 && (
                    <p className="mt-2 text-sm text-red-600">Please select at least one business type</p>
                  )}
                  {formData.businessTypes.length > 0 && (
                    <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Selected:</strong> {formData.businessTypes.length} business type{formData.businessTypes.length > 1 ? 's' : ''}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Address *
                  </label>
                  <textarea
                    id="businessAddress"
                    name="businessAddress"
                    required
                    rows={3}
                    value={formData.businessAddress}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Full business address"
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe your business and services"
                  />
                </div>
              </div>

              {/* Owner Information */}
              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Owner Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 mb-2">
                      Owner Name *
                    </label>
                    <input
                      type="text"
                      id="ownerName"
                      name="ownerName"
                      required
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+66 xx-xxx-xxxx"
                    />
                  </div>
                </div>
              </div>

              {/* Legal & Financial Information */}
              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Legal & Financial Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="businessLicense" className="block text-sm font-medium text-gray-700 mb-2">
                      Business License Number
                    </label>
                    <input
                      type="text"
                      id="businessLicense"
                      name="businessLicense"
                      value={formData.businessLicense}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="License number (if applicable)"
                    />
                  </div>

                  <div>
                    <label htmlFor="taxId" className="block text-sm font-medium text-gray-700 mb-2">
                      Tax ID Number
                    </label>
                    <input
                      type="text"
                      id="taxId"
                      name="taxId"
                      value={formData.taxId}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tax identification number"
                    />
                  </div>

                  <div>
                    <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-2">
                      Bank Name *
                    </label>
                    <input
                      type="text"
                      id="bankName"
                      name="bankName"
                      required
                      value={formData.bankName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Bank name"
                    />
                  </div>

                  <div>
                    <label htmlFor="bankAccount" className="block text-sm font-medium text-gray-700 mb-2">
                      Bank Account Number *
                    </label>
                    <input
                      type="text"
                      id="bankAccount"
                      name="bankAccount"
                      required
                      value={formData.bankAccount}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Account number for payments"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="border-t pt-6">
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => router.push('/partner/terms')}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Back to Terms
                  </button>
                  
                  <button
                    type="submit"
                    className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              After submitting your application, our team will review it within 2-3 business days.
              You will receive an email with further instructions once approved.
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}