import { baseApi } from './baseApi';

export const laboratoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginLaboratory: builder.mutation({
      query: (credentials) => ({
        url: '/laboratory/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    registerLaboratory: builder.mutation({
      query: (laboratoryData) => ({
        url: '/laboratory/register',
        method: 'POST',
        body: laboratoryData,
      }),
    }),
    getCurrentLaboratory: builder.query({
      query: () => '/auth/me',
      providesTags: ['Laboratory'],
    }),
    updateLaboratoryProfile: builder.mutation({
      query: (profileData) => ({
        url: '/auth/profile',
        method: 'PUT',
        body: profileData,
      }),
      invalidatesTags: ['Laboratory'],
    }),
  }),
});

export const {
  useLoginLaboratoryMutation,
  useRegisterLaboratoryMutation,
  // useGetCurrentLaboratoryQuery,
  // useUpdateLaboratoryProfileMutation,
} = laboratoryApi;