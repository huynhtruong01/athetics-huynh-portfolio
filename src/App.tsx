import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Contact, Container, Projects, Skill } from './components'
import { Footer, Header, Home } from './features'
import { THEME } from './consts'
import { Theme } from './enums'

function App() {
    const [theme, setTheme] = useState<string>('')

    useEffect(() => {
        // const initTheme = JSON.parse(localStorage.getItem(THEME) || '')
        // if (initTheme === Theme.DARK) {
        //     document.documentElement.classList.add(Theme.DARK)
        // } else {
        //     document.documentElement.classList.remove(Theme.LIGHT)
        // }
        // setTheme(initTheme)
    }, [])

    return (
        <div className="bg-light dark:bg-dark flex flex-col min-h-screen overflow-hidden">
            <Header theme={theme} setTheme={setTheme} />
            <main id="main" className="mt-[68px] flex-1">
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skill />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </div>
    )
}

export default App
