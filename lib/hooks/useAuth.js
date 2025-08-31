import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setCredentials, logout } from '@/lib/store/slices/authSlice';
import { 
  useLoginUserMutation,
  useLoginDoctorMutation,
  useLoginLaboratoryMutation,
  useLoginAdminMutation,
  useRegisterUserMutation,
  useRegisterDoctorMutation,
  useGetCurrentUserQuery
} from '@/lib/store/api/authApi';

export function useAuth() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, token, role, isAuthenticated } = useSelector((state) => state.auth);

  const [loginUser] = useLoginUserMutation();
  const [loginDoctor] = useLoginDoctorMutation();
  const [loginLaboratory] = useLoginLaboratoryMutation();
  const [loginAdmin] = useLoginAdminMutation();
  const [registerUser] = useRegisterUserMutation();
  const [registerDoctor] = useRegisterDoctorMutation();

  const login = async (credentials, userType = 'user') => {
    try {
      let result;
      switch (userType) {
        case 'doctor':
          result = await loginDoctor(credentials).unwrap();
          break;
        case 'laboratory':
          result = await loginLaboratory(credentials).unwrap();
          break;
        case 'admin':
          result = await loginAdmin(credentials).unwrap();
          break;
        default:
          result = await loginUser(credentials).unwrap();
      }

      dispatch(setCredentials({
        user: result.user || result.doctor || result.laboratory || result.admin,
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
      let result;
      switch (userType) {
        case 'doctor':
          result = await registerDoctor(userData).unwrap();
          break;
        default:
          result = await registerUser(userData).unwrap();
      }

      if (result.token) {
        dispatch(setCredentials({
          user: result.user || result.doctor,
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