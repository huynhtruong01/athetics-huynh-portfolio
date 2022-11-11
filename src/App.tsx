import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { About, Contact, Projects, Skill } from './components'
import { Footer, Header, Home } from './features'

function App() {
    const [theme, setTheme] = useState<string>(
        JSON.parse(localStorage.getItem('theme') || '{}')
    )

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    return (
        <div className="bg-[#EFF5F5] dark:bg-[#252525]">
            <Header theme={theme} setTheme={setTheme} />
            <main id="main" className="mt-[68px]">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skill" element={<Skill />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
