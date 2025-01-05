import { createSlice } from '@reduxjs/toolkit'

interface Task {
  id: string
  title: string
}

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [] as Task[]
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload)
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    }
  }
})
