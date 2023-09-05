import { SkillContent } from '../components'

export interface SkillBackendProps {}

export function SkillBackend(props: SkillBackendProps) {
    return (
        <div className="w-full grid justify-center gap-4 flex-wrap">
            <div>
                <SkillContent
                    title="Back End"
                    languageList={['JavaScript']}
                    frameworkList={['NodeJS', 'ExpressJS', 'NestJS']}
                />
            </div>
        </div>
    )
}
