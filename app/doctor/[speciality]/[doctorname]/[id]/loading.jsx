export default function Loading() {
  return (
    <div className="w-full px-4 py-8">
      <div className="animate-pulse">
        {/* Back button skeleton */}
        <div className="h-6 bg-gray-300 rounded w-48 mb-6"></div>
        
        {/* Main card skeleton */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Doctor header skeleton */}
          <div className="flex items-center mb-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full mr-6"></div>
            <div className="flex-1">
              <div className="h-8 bg-gray-300 rounded w-64 mb-2"></div>
              <div className="h-6 bg-gray-300 rounded w-48 mb-2"></div>
              <div className="flex space-x-4">
                <div className="h-4 bg-gray-300 rounded w-16"></div>
                <div className="h-4 bg-gray-300 rounded w-20"></div>
                <div className="h-4 bg-gray-300 rounded w-32"></div>
              </div>
            </div>
          </div>
          
          {/* Content grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="h-6 bg-gray-300 rounded w-32"></div>
              <div className="h-32 bg-gray-300 rounded"></div>
            </div>
            <div className="space-y-4">
              <div className="h-6 bg-gray-300 rounded w-40"></div>
              <div className="h-48 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}