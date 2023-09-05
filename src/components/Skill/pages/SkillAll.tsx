import { SkillContent } from '../components'

export interface SkillAllProps {}

export function SkillAll() {
    return (
        <div className="w-full grid grid-cols-3 justify-center gap-6 flex-wrap">
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
            <div>
                <SkillContent
                    title="Back End"
                    languageList={['JavaScript']}
                    frameworkList={['NodeJS', 'ExpressJS', 'NestJS']}
                />
            </div>
            <div>
                <SkillContent
                    title="Database"
                    languageList={['SQL Server', 'MySQL', 'MongoDB']}
                />
            </div>
            <div>
                <SkillContent
                    title="Other"
                    toolList={['Git/Github', 'Figma', 'Photoshop (PS)']}
                />
            </div>
        </div>
    )
}
