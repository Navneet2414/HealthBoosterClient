// import { baseApi } from './baseApi';

// export const authApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     loginUser: builder.mutation({
//       query: (credentials) => ({
//         url: '/auth/user/login',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//     loginDoctor: builder.mutation({
//       query: (credentials) => ({
//         url: '/auth/doctor/login',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//     loginLaboratory: builder.mutation({
//       query: (credentials) => ({
//         url: '/auth/laboratory/login',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//     loginAdmin: builder.mutation({
//       query: (credentials) => ({
//         url: '/auth/admin/login',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//     registerUser: builder.mutation({
//       query: (userData) => ({
//         url: '/auth/user/register',
//         method: 'POST',
//         body: userData,
//       }),
//     }),
//     registerDoctor: builder.mutation({
//       query: (doctorData) => ({
//         url: '/auth/doctor/register',
//         method: 'POST',
//         body: doctorData,
//       }),
//     }),
//     getCurrentUser: builder.query({
//       query: () => '/auth/me',
//       providesTags: ['User', 'Doctor', 'Laboratory', 'Admin'],
//     }),
//     updateProfile: builder.mutation({
//       query: (profileData) => ({
//         url: '/auth/profile',
//         method: 'PUT',
//         body: profileData,
//       }),
//       invalidatesTags: ['User', 'Doctor', 'Laboratory', 'Admin'],
//     }),
//   }),
// });

// export const {
//   useLoginUserMutation,
//   useLoginDoctorMutation,
//   useLoginLaboratoryMutation,
//   useLoginAdminMutation,
//   useRegisterUserMutation,
//   useRegisterDoctorMutation,
//   useGetCurrentUserQuery,
//   useUpdateProfileMutation,
// } = authApi;