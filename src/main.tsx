import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = createRoot(document.getElementById("root")!);

// Initialize app immediately with minimal loading state
root.render(<App />);

// Initialize i18n in background without blocking main thread
import('./i18n').catch(console.error);
