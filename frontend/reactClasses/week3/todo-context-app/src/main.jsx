import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from './App.jsx'
import TodoProvider from './context/TodoProvider.jsx'
import { ThemeProvider } from './context/ThemeProvider.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
     <TodoProvider>
      <App />
     </TodoProvider>
    </ThemeProvider>
    <ToastContainer />
  </StrictMode>,
)
