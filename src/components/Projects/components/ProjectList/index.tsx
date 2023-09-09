import { ProjectData } from '../../../../models'
import { ProjectItem } from './components/ProjectItem'

export interface ProjectListProps {
    projectList: ProjectData[]
}

export function ProjectList({ projectList }: ProjectListProps) {
    return (
        <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8">
            {projectList.map((project: ProjectData) => (
                <ProjectItem key={project.link} project={project} />
            ))}
        </div>
    )
}
