import { ProjectData } from '../../../../models'
import { ProjectItem } from './components/ProjectItem'

export interface ProjectListProps {
    projectList: ProjectData[]
}

export function ProjectList({ projectList }: ProjectListProps) {
    return (
        <div className="project__list grid grid-cols-3 gap-6">
            {projectList.map((project: ProjectData) => (
                <ProjectItem project={project} />
            ))}
        </div>
    )
}
