import { createSlice } from '@reduxjs/toolkit'

type Priority = 'low' | 'medium' | 'high'
interface Task {
  id: string
  title: string
  description: string
  dueDate: Date
  isCompleted: boolean
  priority: Priority
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
