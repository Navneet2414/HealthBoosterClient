export { baseApi } from './baseApi';
export { authApi } from './authApi';
export { userApi } from './userApi';
export { doctorApi } from './doctorApi';
export { laboratoryApi } from './laboratoryApi';
export { adminApi } from './adminApi';
export { paymentApi } from './paymentApi';

// Re-export all hooks for convenience
export {
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetCurrentUserQuery,
  useUpdateUserProfileMutation,
} from './userApi';

export {
  useLoginDoctorMutation,
  useRegisterDoctorMutation,
  useGetCurrentDoctorQuery,
  useUpdateDoctorProfileMutation,
} from './doctorApi';

export {
  useLoginLaboratoryMutation,
  useRegisterLaboratoryMutation,
  useGetCurrentLaboratoryQuery,
  useUpdateLaboratoryProfileMutation,
} from './laboratoryApi';

export {
  useLoginAdminMutation,
  useGetCurrentAdminQuery,
  useUpdateAdminProfileMutation,
} from './adminApi';

export {
  useLoginUserMutation,
  useLoginDoctorMutation,
  useLoginLaboratoryMutation,
  useLoginAdminMutation,
  useRegisterUserMutation,
  useRegisterDoctorMutation,
  useGetCurrentUserQuery,
  useUpdateProfileMutation,
} from './authApi';