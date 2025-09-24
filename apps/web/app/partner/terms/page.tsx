'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DefaultLayout from '../../../components/layouts/DefaultLayout';

export default function PartnerTermsPage() {
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    if (agreed) {
      // Store agreement in localStorage
      localStorage.setItem('partner_terms_agreed', 'true');
      router.push('/partner/register');
    }
  };

  return (
    <DefaultLayout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Partner Terms & Conditions
            </h1>
            <p className="text-lg text-gray-600">
              Please read and accept our terms before becoming a Bazaari partner
            </p>
          </div>

          {/* Terms Content */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Partnership Agreement
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                1. Partnership Overview
              </h3>
              <p className="text-gray-700 mb-4">
                By joining Bazaari as a partner, you agree to provide services through our platform 
                to customers in Thailand. This partnership allows you to reach more customers while 
                maintaining your business independence.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                2. Service Standards
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Maintain high-quality service standards</li>
                <li>Respond to customer inquiries within 24 hours</li>
                <li>Provide accurate service descriptions and pricing</li>
                <li>Honor all confirmed bookings and appointments</li>
                <li>Maintain professional conduct with customers</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                3. Commission Structure
              </h3>
              <p className="text-gray-700 mb-4">
                Bazaari charges a commission on completed transactions:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Food Delivery: 15% commission</li>
                <li>Hotels & Accommodation: 10% commission</li>
                <li>Spa & Massage: 12% commission</li>
                <li>Healthcare Services: 8% commission</li>
                <li>Real Estate: 5% commission</li>
                <li>Other Services: 10% commission</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                4. Payment Terms
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Payments are processed weekly every Friday</li>
                <li>Minimum payout threshold: 1,000 THB</li>
                <li>Bank transfer fees may apply</li>
                <li>Tax documentation required for payments above 40,000 THB/month</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                5. Partner Responsibilities
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Maintain valid business licenses and permits</li>
                <li>Provide accurate business information</li>
                <li>Update availability and pricing regularly</li>
                <li>Handle customer complaints professionally</li>
                <li>Comply with local laws and regulations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                6. Platform Usage
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Use the partner dashboard to manage your services</li>
                <li>Keep your profile and service information up to date</li>
                <li>Respond to customer messages through the platform</li>
                <li>Report any technical issues promptly</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                7. Termination
              </h3>
              <p className="text-gray-700 mb-4">
                Either party may terminate this partnership with 30 days written notice. 
                Bazaari reserves the right to suspend or terminate partnerships for 
                violations of these terms or poor service quality.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                8. Support & Contact
              </h3>
              <p className="text-gray-700 mb-4">
                For partner support, contact us at:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Email: partners@bazaari.com</li>
                <li>Phone: +66 2-xxx-xxxx</li>
                <li>Line: @bazaari-partners</li>
              </ul>
            </div>
          </div>

          {/* Agreement Section */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-start space-x-3">
              <input
                id="terms-agreement"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms-agreement" className="text-sm text-gray-700">
                I have read and agree to the Partner Terms & Conditions. I understand 
                the commission structure, payment terms, and my responsibilities as a 
                Bazaari partner.
              </label>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => router.back()}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              
              <button
                onClick={handleContinue}
                disabled={!agreed}
                className={`px-8 py-2 rounded-lg font-medium transition-colors ${
                  agreed
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue to Registration
              </button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}