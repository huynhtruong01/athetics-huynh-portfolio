import { About, Contact, Overview, Projects, Skill } from '../../components'

export interface HomeProps {}

export function Home(props: HomeProps) {
    return (
        <>
            <Overview />
            <About />
            <Skill />
            <Projects />
            <Contact />
        </>
    )
}
