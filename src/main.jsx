import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CollectedStonesProvider } from "./hooks/useCollectedStones.jsx";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <CollectedStonesProvider>
      <App />
    </CollectedStonesProvider>
  // </StrictMode>,
)
