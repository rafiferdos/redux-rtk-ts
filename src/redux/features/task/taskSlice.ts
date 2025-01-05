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
    task: [] as Task[]
  },
  reducers: {
    addTask: (state, action) => {
      state.task.push(action.payload)
    },
    removeTask: (state, action) => {
      state.task = state.task.filter((task) => task.id !== action.payload)
    }
  }
})
