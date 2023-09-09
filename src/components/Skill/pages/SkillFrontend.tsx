import { SkillContainer, SkillContent } from '../components'

export interface SkillFrontendProps {
    className?: string
}

export function SkillFrontend({ className = '' }: SkillFrontendProps) {
    return (
        <SkillContainer className={className}>
            <SkillContent
                title="Front End"
                languageList={['HTML', 'CSS', 'SCSS/SASS', 'JavaScript', 'TypeScript']}
                frameworkList={['TailwindCSS', 'MUI', 'ReactJS', 'VueJS', 'NextJS']}
            />
        </SkillContainer>
    )
}
