import { AdminRoute } from '@/components/auth/RoleProtectedRoute';

export default function AdminLayout({ children }) {
  return (
    <AdminRoute>
      <div className="min-h-screen bg-gray-50">
        {/* <div className="bg-red-600 text-white p-4">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </div> */}
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </AdminRoute>
  );
}