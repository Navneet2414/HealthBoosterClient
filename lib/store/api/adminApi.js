import { baseApi } from './baseApi';

export const adminApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (credentials) => ({
        url: '/admin/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getPendingApprovals: builder.query({
      query: () => '/admin/pending-approvals',
      providesTags: ['Approvals'],
    }),
    approveUser: builder.mutation({
      query: ({ role, id }) => ({
        url: `/admin/approve/${role}/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Approvals'],
    }),
  }),
});

export const {
  useLoginAdminMutation,
  useGetPendingApprovalsQuery,
  useApproveUserMutation,
} = adminApi;