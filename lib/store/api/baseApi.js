import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1',
    prepareHeaders: (headers, { getState }) => {
      try {
        const token = getState().auth?.token;
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
      } catch (error) {
        console.warn('Error accessing auth state:', error);
      }
      return headers;
    },
  }),
  tagTypes: ['User', 'Doctor', 'Laboratory', 'Admin', 'Approvals', 'Doctors', 'Specialities', 'Appointments'],
  endpoints: () => ({}),
});