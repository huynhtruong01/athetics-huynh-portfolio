import { AnimatePresence } from 'framer-motion'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            {/* <AnimatePresence exitBeforeEnter initial={true}> */}
            <App />
            {/* </AnimatePresence> */}
        </BrowserRouter>
    </React.StrictMode>
)
