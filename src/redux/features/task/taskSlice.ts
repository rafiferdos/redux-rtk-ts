import { RootState } from '@/redux/store'
import { createSlice } from '@reduxjs/toolkit'

type Priority = 'low' | 'medium' | 'high'
type Filter = 'all' | 'high' | 'medium' | 'low'
interface Task {
  id: string
  title: string
  description: string
  dueDate: Date
  isCompleted: boolean
  priority: Priority
  filter: Filter
}

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    task: [] as Task[],
    filter: 'all' as Filter,
    priority: 'low' as Priority
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

export const selectTasks = (state: RootState) => state.tasks.task

export const selectFilter = (state: RootState) => state.tasks.filter

export default taskSlice.reducer
