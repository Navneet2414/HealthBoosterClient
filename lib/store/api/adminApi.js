import { baseApi } from './baseApi';

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (credentials) => ({
        url: '/auth/admin/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getCurrentAdmin: builder.query({
      query: () => '/auth/me',
      providesTags: ['Admin'],
    }),
    updateAdminProfile: builder.mutation({
      query: (profileData) => ({
        url: '/auth/profile',
        method: 'PUT',
        body: profileData,
      }),
      invalidatesTags: ['Admin'],
    }),
  }),
});

export const {
  useLoginAdminMutation,
  useGetCurrentAdminQuery,
  useUpdateAdminProfileMutation,
} = adminApi;