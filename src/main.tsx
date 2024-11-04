import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Auth0Provider } from "@auth0/auth0-react";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Auth0Provider domain={'dev-awinirczu4pbzi71.us.auth0.com'} clientId={'wcHOAr6bVvKV9iEVvCkZOjjMwRmzXuQl'}  authorizationParams={{
          redirect_uri: window.location.origin
      }}>
        <App />
      </Auth0Provider>,
  </StrictMode>,
)
