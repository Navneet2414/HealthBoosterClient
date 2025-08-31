"use client";

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ROLE_REDIRECTS = {
  admin: '/admin',
  doctor: '/doctor',
  laboratory: '/laboratory',
  user: '/user'
};

export function AdminRoute({ children }) {
  return (
    <ProtectedRoute allowedRoles={['admin']} redirectTo="/login">
      {children}
    </ProtectedRoute>
  );
}

export function DoctorRoute({ children }) {
  return (
    <ProtectedRoute allowedRoles={['doctor']} redirectTo="/doctor/login">
      {children}
    </ProtectedRoute>
  );
}

export function LaboratoryRoute({ children }) {
  return (
    <ProtectedRoute allowedRoles={['laboratory']} redirectTo="/laboratory/login">
      {children}
    </ProtectedRoute>
  );
}

export function UserRoute({ children }) {
  return (
    <ProtectedRoute allowedRoles={['user']} redirectTo="/user/login">
      {children}
    </ProtectedRoute>
  );
}

function ProtectedRoute({ children, allowedRoles, redirectTo }) {
  const { isAuthenticated, role, token } = useSelector((state) => state.auth);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated || !token) {
        router.push(redirectTo);
        return;
      }

      if (!allowedRoles.includes(role)) {
        router.push(ROLE_REDIRECTS[role] || '/');
      }
    }
  }, [isAuthenticated, role, token, allowedRoles, router, redirectTo, isLoading]);

  if (isLoading || !isAuthenticated || !allowedRoles.includes(role)) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return children;
}