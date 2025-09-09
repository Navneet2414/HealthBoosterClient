import { DoctorRoute } from '@/components/auth/RoleProtectedRoute';

export default function DoctorDashboardLayout({ children }) {
  return (
    <DoctorRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-blue-600 text-white p-4">
          <h1 className="text-xl font-bold">Doctor Dashboard</h1>
        </div>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </DoctorRoute>
  );
}