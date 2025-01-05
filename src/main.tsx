import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './providers/theme-provider.tsx'
import routes from './routes/route.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <Provider store={''}> */}
      <RouterProvider router={routes} />
      {/* </Provider> */}
    </ThemeProvider>
  </StrictMode>
)
