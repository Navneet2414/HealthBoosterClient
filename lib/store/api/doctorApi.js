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
      query: (speciality) => `/doctor/getSpecialityDoctors/${speciality}`,
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
    getDoctorSpecialities: builder.query({
      query: () => '/doctor/getDoctorSpecialization',
      providesTags: ['Specialities'],
    }),
    getAllDoctors: builder.query({
      query: () => '/doctor/getAllDoctors',
      providesTags: ['Doctors'],
    }),
    getDoctorById: builder.query({
      query: (doctorId) => `/doctor/getDoctorById/${doctorId}`,
      providesTags: ['Doctor'],
    }),
    bookDoctorAppointment: builder.mutation({
      query: (appointmentData) => ({
        url: '/doctor/bookDoctorAppointment',
        method: 'POST',
        body: appointmentData,
      }),
      invalidatesTags: ['doctorAppointment'],
    }),
    getDoctorAppointments: builder.query({
      query: () => '/doctor/getDoctorAppointments',
      providesTags: ['doctorAppointment'],
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
  useGetDoctorSpecialitiesQuery,
  useGetAllDoctorsQuery,
  useGetDoctorByIdQuery,
  useBookDoctorAppointmentMutation,
  useGetDoctorAppointmentsQuery,
} = doctorApi;