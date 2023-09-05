import { SkillContent } from '../components'

export interface SkillFrontendProps {}

export function SkillFrontend(props: SkillFrontendProps) {
    return (
        <div className="w-full grid justify-center gap-4 flex-wrap">
            <div>
                <SkillContent
                    title="Front End"
                    languageList={[
                        'HTML',
                        'CSS',
                        'SCSS/SASS',
                        'JavaScript',
                        'TypeScript',
                    ]}
                    frameworkList={['TailwindCSS', 'MUI', 'ReactJS', 'VueJS', 'NextJS']}
                />
            </div>
        </div>
    )
}
