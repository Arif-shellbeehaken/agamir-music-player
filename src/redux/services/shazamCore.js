import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
    reducerPath: "shazamApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '3558ab9bd8msh64299fab6d1ea0dp1e8532jsn2008e64a34e6');
            headers.set('X-RapidAPI-Host','shazam.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => "/charts/track"}),
        getSongDetails: builder.query({query: ({songid}) => `/songs/get-details?key=${songid}`}),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
} = shazamApi;