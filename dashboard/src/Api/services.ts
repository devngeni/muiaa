import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import dotenv from "dotenv";
dotenv.config();

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URI;
//const binanceBaseUrl = `/api/binance`;
// Define a service using a base URL and expected endpoints
export const Auth = createApi({
  reducerPath: "Auth",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: (token: string) => ({
        url: `/auth0/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserDetailsQuery }: any = Auth;

export const Billing = createApi({
  reducerPath: "Billing",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    plans: builder.query({
      query: () => "/plans",
    }),
    subscribe: builder.mutation({
      query: (data) => ({
        url: "/subscription",
        method: "POST",
        body: data.body,
        headers: {
          Authorization: `x-auth-token ${data.token}`,
        },
      }),
    }),
    getSubscriptionsData: builder.query({
      query: (token) => ({
        url: "/subscription",
        method: "GET",
        headers: {
          Authorization: `x-auth-token ${token}`,
        },
      }),
    }),
    deleteSubscription: builder.mutation({
      query: (data) => ({
        url: `/subscription/${data.subscriptionId}`, // Adjust the endpoint URL
        method: "DELETE",
        headers: {
          Authorization: `x-auth-token ${data.token}`,
        },
      }),
    }),

    getPaymentMethods: builder.query({
      query: () => ({
        url: "/payment-methods",
        method: "GET",
      }),
    }),
    getInvoices: builder.query({
      query: (token) => ({
        url: "/invoices",
        method: "GET",
        headers: {
          Authorization: `x-auth-token ${token}`,
        },
      }),
    }),
  }),
});

export const {
  usePlansQuery,
  useSubscribeMutation,
  useGetSubscriptionsDataQuery,
  useGetPaymentMethodsQuery,
  useGetInvoicesQuery,
  useDeleteSubscriptionMutation,
}: any = Billing;
