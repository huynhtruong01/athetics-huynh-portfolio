import { SkillContent } from '../components'

export interface SkillOtherProps {}

export function SkillOther() {
    return (
        <div className="w-full grid justify-center gap-4 flex-wrap">
            <div>
                <SkillContent
                    title="Other"
                    toolList={['Git/Github', 'Figma', 'Photoshop (PS)']}
                />
            </div>
        </div>
    )
}
