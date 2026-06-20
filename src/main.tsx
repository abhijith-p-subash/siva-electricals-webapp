import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')!

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// When the page was pre-rendered to static HTML (e.g. via react-snap / SSG),
// the #root already has markup — hydrate it instead of re-rendering from
// scratch so the prerendered content stays crawlable and there's no flash.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}

const bootLoader = document.getElementById("app-loading");
if (bootLoader) {
  requestAnimationFrame(() => {
    bootLoader.remove();
  });
}
