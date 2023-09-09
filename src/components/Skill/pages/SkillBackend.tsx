import { SkillContainer, SkillContent } from '../components'

export interface SkillBackendProps {
    className?: string
}

export function SkillBackend({ className = '' }: SkillBackendProps) {
    return (
        <SkillContainer className={className}>
            <SkillContent
                title="Back End"
                languageList={['JavaScript']}
                frameworkList={['NodeJS', 'ExpressJS', 'NestJS']}
            />
        </SkillContainer>
    )
}
