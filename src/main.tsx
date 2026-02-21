import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const bootLoader = document.getElementById("app-loading");
if (bootLoader) {
  requestAnimationFrame(() => {
    bootLoader.remove();
  });
}
