export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Join Bazaari
          </h1>
          <p className="text-gray-600">
            Create your account to access all our services
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center py-8">
            <div className="text-4xl mb-4">📝</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Registration Coming Soon</h2>
            <p className="text-gray-600 mb-6">
              We're setting up secure account creation. 
              Meanwhile, explore our comprehensive Thailand visa services.
            </p>
            <a 
              href="/visa-services" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View Visa Services
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}