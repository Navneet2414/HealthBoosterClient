import { use } from 'react';
import { baseApi } from './baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/user/userLogin',
        method: 'POST',
        body: credentials,
      }),
    }),
    registerUser: builder.mutation({
      query: (userData) => ({
        url: '/user/userRegister',
        method: 'POST',
        body: userData,
      }),
    }),


    getUserAppointments: builder.query({
      query: (userId) => `/user/userBookingList/${userId}`,
      providesTags: (result, error, userId) => [
        { type: 'Appointments', id: 'LIST' },
        { type: 'Appointments', id: userId },
      ],
    }),
    
    updateAppointment: builder.mutation({
      query: ({ appointmentId, ...data }) => ({
        url: `/user/appointment/${appointmentId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { userId }) => [
        { type: 'Appointments', id: 'LIST' },
        { type: 'Appointments', id: userId },
      ],
    }),
    
    deleteAppointment: builder.mutation({
      query: (appointmentId) => ({
        url: `/user/appointment/${appointmentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Appointments'],
    }),
    userProfile: builder.query({
      query: (userId) => `/user/userProfile/${userId}`,
      providesTags: ['User'],
    }),
    updateUserProfileData: builder.mutation({
      query: ({ userId, ...profileData }) => {
        const formData = new FormData();
        Object.keys(profileData).forEach(key => {
          if (profileData[key] !== undefined && profileData[key] !== null) {
            formData.append(key, profileData[key]);
          }
        });
        return {
          url: `/user/updateUserProfile/${userId}`,
          method: 'PUT',
          body: formData,
        };
      },
      invalidatesTags: ['User'],
    }),
    
    
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetUserAppointmentsQuery,
  useUpdateAppointmentMutation,
  useDeleteAppointmentMutation,
  useUserProfileQuery,
  useUpdateUserProfileDataMutation,
  
  // useGetCurrentUserQuery,
} = userApi;