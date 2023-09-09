import { Route, Routes, useNavigate } from 'react-router-dom'
import { About, Contact, Container, Projects, Skill } from './components'
import { Footer, Header, Home } from './features'
import { useEffect } from 'react'

function App() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [navigate])

    return (
        <div className="bg-light dark:bg-dark flex flex-col min-h-screen overflow-hidden">
            <Header />
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
