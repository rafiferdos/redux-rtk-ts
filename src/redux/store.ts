import { configureStore } from '@reduxjs/toolkit'
import { taskSlice } from './features/task/taskSlice'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    task: taskSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
