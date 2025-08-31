# Authentication Setup Guide

## Overview
This project uses Redux Toolkit (RTK) for state management with a unified authentication system supporting multiple user types: users, doctors, laboratories, and admins.

## Usage Examples

### 1. Using ProtectedRoute Component
```jsx
import ProtectedRoute from '@/components/auth/ProtectedRoute';

export default function DoctorDashboard() {
  return (
    <ProtectedRoute allowedRoles={['doctor']}>
      <div>Doctor Dashboard Content</div>
    </ProtectedRoute>
  );
}
```

### 2. Using HOC (Higher-Order Component)
```jsx
import { withDoctorAuth } from '@/components/auth/withAuth';

function DoctorDashboard() {
  return <div>Doctor Dashboard Content</div>;
}

export default withDoctorAuth(DoctorDashboard);
```

### 3. Using the Auth Hook
```jsx
import { useAuth } from '@/lib/hooks/useAuth';

export default function LoginForm() {
  const { login, isAuthenticated } = useAuth();

  const handleLogin = async (credentials) => {
    const result = await login(credentials, 'doctor');
    if (result.success) {
      // Handle success
    } else {
      // Handle error
    }
  };

  return (
    // Your login form JSX
  );
}
```

## Available HOCs
- `withUserAuth` - For user-only pages
- `withDoctorAuth` - For doctor-only pages  
- `withLabAuth` - For laboratory-only pages
- `withAdminAuth` - For admin-only pages
- `withAnyAuth` - For any authenticated user

## Auth Hook Methods
- `login(credentials, userType)` - Login user
- `logout()` - Logout and redirect
- `hasRole(role)` - Check specific role
- `hasAnyRole([roles])` - Check multiple roles