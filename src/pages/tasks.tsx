import { useAppSelector } from "@/redux/hook"

const Tasks = () => {
  const tasks = useAppSelector((state)=> state.tasks.task)
  return (
    <>
      <h1>Tasks</h1>

    </>
  )
}

export default Tasks
