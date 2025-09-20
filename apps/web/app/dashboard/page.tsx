import { UserButton, currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Bazaari Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {user.firstName || user.emailAddresses[0].emailAddress}
              </span>
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Welcome Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {user.firstName?.charAt(0) || user.emailAddresses[0].emailAddress.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Welcome!</h3>
                    <p className="text-sm text-gray-500">
                      You're successfully logged in
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visa Services Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white">🇹🇭</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Visa Services</h3>
                    <p className="text-sm text-gray-500">
                      Thailand visa assistance
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <a 
                    href="/visa-services" 
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View Services →
                  </a>
                </div>
              </div>
            </div>

            {/* Account Info Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Account Info</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-gray-500">Email:</span>
                    <p className="text-sm font-medium text-gray-900">
                      {user.emailAddresses[0].emailAddress}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Member since:</span>
                    <p className="text-sm font-medium text-gray-900">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Services Grid */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <a href="/visa-services" className="group">
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">🇹🇭</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                    Visa Services
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Thailand visa assistance
                  </p>
                </div>
              </a>

              <a href="/hotels" className="group">
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">🏨</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                    Hotels
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Book accommodations
                  </p>
                </div>
              </a>

              <a href="/food-delivery" className="group">
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">🍕</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                    Food Delivery
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Order food online
                  </p>
                </div>
              </a>

              <a href="/healthcare" className="group">
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">🏥</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                    Healthcare
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Medical services
                  </p>
                </div>
              </a>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}