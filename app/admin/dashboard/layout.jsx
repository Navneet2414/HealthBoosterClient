import { AdminRoute } from '@/components/auth/RoleProtectedRoute';

export default function AdminDashboardLayout({ children }) {
  return (
    <AdminRoute>
      {children}
    </AdminRoute>
  );
}