import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from "./pages/App.tsx";
import { registerServiceWorker } from './utils/registerSW';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Register service worker for PWA
registerServiceWorker();
