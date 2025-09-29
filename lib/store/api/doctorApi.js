import { baseApi } from './baseApi';

export const doctorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginDoctor: builder.mutation({
      query: (credentials) => ({
        url: '/doctor/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    registerDoctor: builder.mutation({
      query: (doctorData) => ({
        url: '/doctor/register',
        method: 'POST',
        body: doctorData,
      }),
    }),
    getCurrentDoctor: builder.query({
      query: () => '/auth/me',
      providesTags: ['Doctor'],
    }),
    updateDoctorProfile: builder.mutation({
      query: (profileData) => ({
        url: '/auth/profile',
        method: 'PUT',
        body: profileData,
      }),
      invalidatesTags: ['Doctor'],
    }),
    getSpecialityDoctors:builder.query({
      query: (speciality) => `/doctor/getSpecialization/${speciality}`,
      providesTags: ['Doctors'],
    }),
    getFeaturedDoctors:builder.query({
      query: () => '/doctor/getFeaturedDoctors',
      providesTags: ['Doctors'],
    }),
    getLatestDoctors:builder.query({
      query: () => '/doctor/getLatestDoctors',
      providesTags: ['Doctors'],
    }),

  }),
});

export const {
  useLoginDoctorMutation,
  useRegisterDoctorMutation,
  // useGetCurrentDoctorQuery,
  // useUpdateDoctorProfileMutation,
  useGetSpecialityDoctorsQuery,
  useGetFeaturedDoctorsQuery,
  useGetLatestDoctorsQuery,
} = doctorApi;