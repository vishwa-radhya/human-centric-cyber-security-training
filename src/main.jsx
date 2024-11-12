import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/auth-context.context.jsx'
import { FavProvider } from './contexts/fav-context.context.jsx'
import { UserVideosProvider } from './contexts/user-videos.context.jsx'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <FavProvider>
        <UserVideosProvider>
          <BrowserRouter>
            <StrictMode>
              <App />
            </StrictMode>
          </BrowserRouter>
        </UserVideosProvider>
      </FavProvider>
    </AuthProvider>,
)
