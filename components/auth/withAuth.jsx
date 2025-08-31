"use client";

import ProtectedRoute from './ProtectedRoute';

export function withAuth(Component, allowedRoles = []) {
  return function AuthenticatedComponent(props) {
    return (
      <ProtectedRoute allowedRoles={allowedRoles}>
        <Component {...props} />
      </ProtectedRoute>
    );
  };
}

// Convenience HOCs for specific roles
export const withUserAuth = (Component) => withAuth(Component, ['user']);
export const withDoctorAuth = (Component) => withAuth(Component, ['doctor']);
export const withLabAuth = (Component) => withAuth(Component, ['laboratory']);
export const withAdminAuth = (Component) => withAuth(Component, ['admin']);
export const withAnyAuth = (Component) => withAuth(Component, []);