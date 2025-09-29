import { baseApi } from './baseApi';

export const otpApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    verifyOtp: builder.mutation({
      query: (otpData) => ({
        url: '/common/verify-otp',
        method: 'POST',
        body: otpData,
      }),
    }),
    resendOtp: builder.mutation({
      query: (otpData) => ({
        url: '/common/resend-otp',
        method: 'POST',
        body: otpData,
      }),
    }),
  }),
});

export const {
  useVerifyOtpMutation,
  useResendOtpMutation,
} = otpApi;