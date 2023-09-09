import { SkillContainer, SkillContent } from '../components'

export interface SkillOtherProps {
    className?: string
}

export function SkillOther({ className = '' }: SkillOtherProps) {
    return (
        <SkillContainer className={className}>
            <SkillContent
                title="Other"
                toolList={['Git/Github', 'Figma', 'Photoshop (PS)']}
            />
        </SkillContainer>
    )
}
