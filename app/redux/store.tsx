import { configureStore } from '@reduxjs/toolkit'
import UserdataSlice from './UserdataSlice'
import TodoListSlice from './TodoListSlice'

export const store = configureStore({
  reducer: {
    userdata:UserdataSlice,
    todolistSlice:TodoListSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch