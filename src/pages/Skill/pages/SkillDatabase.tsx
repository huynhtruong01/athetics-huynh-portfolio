import { SkillContainer, SkillContent } from '@/pages/Skill/components'

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
