// Or from '@reduxjs/toolkit/query/react'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://64d9d74fe947d30a260a5c76.mockapi.io/products/' }),
    tagTypes: ['product'],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (name) => `products/`,
            providesTags: ['product'],
        }),
        deleteProducts: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['product'],
        }),
        updateProducts:builder.mutation({
            query: ({id}) => ({
                url: `products/${id}`,
                method: 'PATCH',
              }),
              invalidatesTags: ['product'],
        }),
    }),
})

export const { useGetAllProductsQuery, useDeleteProductsMutation,useUpdateProductsMutation } = productApi;