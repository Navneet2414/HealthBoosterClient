import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const paymentApi = createApi({
  reducerPath: 'paymentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/payment`,
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: '/create-order',
        method: 'POST',
        body: orderData,
      }),
    }),
    verifyPayment: builder.mutation({
      query: (paymentData) => ({
        url: '/verify',
        method: 'POST',
        body: paymentData,
      }),
    }),
    getPaymentHistory: builder.query({
      query: ({ userId, page = 1, limit = 10 }) => 
        `/history/${userId}?page=${page}&limit=${limit}`,
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useVerifyPaymentMutation,
  useGetPaymentHistoryQuery,
} = paymentApi;