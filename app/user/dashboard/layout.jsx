import { UserRoute } from '@/components/auth/RoleProtectedRoute';

export default function UserDashboardLayout({ children }) {
  return (
    <UserRoute>
      <div className="min-h-screen bg-gray-50">
        <main>
          {children}
        </main>
      </div>
    </UserRoute>
  );
}