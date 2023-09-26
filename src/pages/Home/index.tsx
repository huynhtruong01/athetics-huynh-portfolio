import { About, Contact, Overview, Projects, Skill } from '@/pages'

export interface HomeProps {}

export function Home() {
    return (
        <section>
            <Overview />
            <About />
            <Skill />
            <Projects />
            <Contact />
        </section>
    )
}
