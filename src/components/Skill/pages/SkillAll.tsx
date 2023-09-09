import { SkillContent } from '../components'

export interface SkillAllProps {}

export function SkillAll() {
    return (
        <div className="w-full grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 justify-center gap-6 flex-wrap">
            <SkillContent
                title="Front End"
                languageList={['HTML', 'CSS', 'SCSS/SASS', 'JavaScript', 'TypeScript']}
                frameworkList={['TailwindCSS', 'MUI', 'ReactJS', 'VueJS', 'NextJS']}
            />
            <SkillContent
                title="Back End"
                languageList={['JavaScript']}
                frameworkList={['NodeJS', 'ExpressJS', 'NestJS']}
            />
            <SkillContent
                title="Database"
                languageList={['SQL Server', 'MySQL', 'MongoDB']}
            />
            <SkillContent
                title="Other"
                toolList={['Git/Github', 'Figma', 'Photoshop (PS)']}
            />
        </div>
    )
}
