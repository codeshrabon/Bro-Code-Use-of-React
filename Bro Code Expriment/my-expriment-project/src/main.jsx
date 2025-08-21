import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Apps from './Apps.jsx'
import ClickEventApp from './ClickEventsApp.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <Apps /> */}
    {/* This is for click event category */}
    <ClickEventApp />
  </StrictMode>,
)
