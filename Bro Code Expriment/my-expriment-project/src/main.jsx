import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Apps from './Apps.jsx'
import ClickEventApp from './ClickEventsApp.jsx'
import UseHooksApp from './UseHooksApp.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <Apps /> */}
    {/* This is for click event category */}
    {/* <ClickEventApp /> */}

    {/* now we are trying to use React hooks */}

    <UseHooksApp />
  </StrictMode>,
)
