"use client";

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ROLE_REDIRECTS = {
  admin: '/admin/dashboard',
  doctor: '/doctor/dashboard',
  laboratory: '/laboratory/dashboard',
  user: '/user/dashboard'
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
    <ProtectedRoute allowedRoles={['doctor']} redirectTo="/login/doctor" requiresVerification={true}>
      {children}
    </ProtectedRoute>
  );
}

export function LaboratoryRoute({ children }) {
  return (
    <ProtectedRoute allowedRoles={['laboratory']} redirectTo="/login/laboratory" requiresVerification={true}>
      {children}
    </ProtectedRoute>
  );
}

export function UserRoute({ children }) {
  return (
    <ProtectedRoute allowedRoles={['user']} redirectTo="/login/user">
      {children}
    </ProtectedRoute>
  );
}

function ProtectedRoute({ children, allowedRoles, redirectTo, requiresVerification = false }) {
  const { isAuthenticated, role, token, user } = useSelector((state) => state.auth);
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
        return;
      }

      if (requiresVerification && user && (!user.isVerified || !user.isApproved)) {
        router.push('/verification-pending');
        return;
      }
    }
  }, [isAuthenticated, role, token, allowedRoles, router, redirectTo, isLoading, requiresVerification, user]);

  if (isLoading || !isAuthenticated || !allowedRoles.includes(role)) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (requiresVerification && user && (!user.isVerified || !user.isApproved)) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Verification Pending</h2>
          <p className="text-gray-600">Your account is pending admin verification.</p>
        </div>
      </div>
    );
  }

  return children;
}