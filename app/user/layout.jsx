import { UserRoute } from '@/components/auth/RoleProtectedRoute';

export default function UserLayout({ children }) {
  return (
    <UserRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-purple-600 text-white p-4">
          <h1 className="text-xl font-bold">User Dashboard</h1>
        </div>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </UserRoute>
  );
}