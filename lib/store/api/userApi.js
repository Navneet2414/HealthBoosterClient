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
    getCurrentUser: builder.query({
      query: () => '/auth/me',
      providesTags: ['User'],
    }),
    updateUserProfile: builder.mutation({
      query: (profileData) => ({
        url: '/auth/profile',
        method: 'PUT',
        body: profileData,
      }),
      invalidatesTags: ['User'],
    }),

    
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  // useGetCurrentUserQuery,
  // useUpdateUserProfileMutation,
} = userApi;