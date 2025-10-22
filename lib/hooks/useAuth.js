import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setCredentials, logout } from '@/lib/store/slices/authSlice';
import { 
  useLoginUserMutation,
  useRegisterUserMutation
} from '@/lib/store/api/userApi';

export function useAuth() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, token, role, isAuthenticated } = useSelector((state) => state.auth);

  const [loginUser] = useLoginUserMutation();
  const [registerUser] = useRegisterUserMutation();

  const login = async (credentials, userType = 'user') => {
    try {
      const result = await loginUser(credentials).unwrap();

      dispatch(setCredentials({
        user: result.user,
        token: result.token,
        role: userType
      }));

      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error.data?.message || 'Login failed' };
    }
  };

  const register = async (userData, userType = 'user') => {
    try {
      const result = await registerUser(userData).unwrap();

      if (result.token) {
        dispatch(setCredentials({
          user: result.user,
          token: result.token,
          role: userType
        }));
      }

      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error.data?.message || 'Registration failed' };
    }
  };

  const logoutUser = () => {
    dispatch(logout());
    router.push('/');
  };

  const hasRole = (requiredRole) => {
    return role === requiredRole;
  };

  const hasAnyRole = (requiredRoles) => {
    return requiredRoles.includes(role);
  };

  return {
    user,
    token,
    role,
    isAuthenticated,
    login,
    register,
    logout: logoutUser,
    hasRole,
    hasAnyRole,
  };
}