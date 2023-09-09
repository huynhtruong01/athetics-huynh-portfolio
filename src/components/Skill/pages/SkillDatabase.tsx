import { SkillContainer, SkillContent } from '../components'

export interface SkillDatabaseProps {
    className?: string
}

export function SkillDatabase({ className = '' }: SkillDatabaseProps) {
    return (
        <SkillContainer className={className}>
            <SkillContent
                title="Database"
                languageList={['SQL Server', 'MySQL', 'MongoDB']}
            />
        </SkillContainer>
    )
}
