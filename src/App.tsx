import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header, Home } from './features'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="bg-[#EFF5F5]">
            <Header />
            <main id="main" className="mt-[68px]">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
