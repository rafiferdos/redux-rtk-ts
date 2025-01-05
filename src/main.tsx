import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/route.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Provider store={''}> */}
      <RouterProvider router={routes} />
    {/* </Provider> */}
  </StrictMode>
)
