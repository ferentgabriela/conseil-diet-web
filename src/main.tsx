import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize i18n asynchronously to avoid blocking main thread
import('./i18n').then(() => {
  createRoot(document.getElementById("root")!).render(<App />);
});
