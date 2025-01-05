import App from '@/App'
import Tasks from '@/pages/tasks'
import Users from '@/pages/users'
import { createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: 'tasks',
        element: <Tasks />,
      },
      {
        path: 'users',
        element: <Users />,
      },
    ],
  },
  {
    path: '/login',
    element: <div>will add later</div>,
  },
])

export default routes
