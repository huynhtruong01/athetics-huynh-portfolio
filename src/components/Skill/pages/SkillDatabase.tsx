import { SkillContent } from '../components'

export interface SkillDatabaseProps {}

export function SkillDatabase(props: SkillDatabaseProps) {
    return (
        <div className="w-full grid justify-center gap-4 flex-wrap">
            <div>
                <SkillContent
                    title="Database"
                    languageList={['SQL Server', 'MySQL', 'MongoDB']}
                />
            </div>
        </div>
    )
}
