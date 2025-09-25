export default function RestaurantUsers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Restaurant User Management</h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Staff & Branch Management</h2>
          <p className="text-gray-600">
            This system will allow restaurant owners to:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• Add and manage staff members</li>
            <li>• Create and manage multiple branches</li>
            <li>• Set roles and permissions</li>
            <li>• Track staff performance</li>
            <li>• Manage branch operations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}