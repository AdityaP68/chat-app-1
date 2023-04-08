import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: [],
  endpoints: (build) => ({
    postAiText: build.mutation({
      query: (payload) => ({
        url: "openai/text",
        method: "POST",
        body: payload,
      }),
    }),
    // code-davinci-002 not working -- depriciated?
    postAiCode: build.mutation({
      query: (payload) => ({
        // url: "openai/code",
        url: "openai/text",
        method: "POST",
        body: payload,
      }),
    }),
    postAssistCode: build.mutation({
      query: (payload) => ({
        // url: "openai/code",
        url: "openai/assist",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  usePostAiTextMutation,
  usePostAiCodeMutation,
  usePostAssistCodeMutation,
} = api;
