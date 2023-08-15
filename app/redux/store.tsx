import { configureStore } from '@reduxjs/toolkit'
import UserdataSlice from './UserdataSlice'
import TodoListSlice from './TodoListSlice'
import { productApi } from './apiServices/product'
import showTextSlice from './showTextSlice'

export const store = configureStore({
  reducer: {
    userdata:UserdataSlice,
    todolistSlice:TodoListSlice,
    showtext:showTextSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch