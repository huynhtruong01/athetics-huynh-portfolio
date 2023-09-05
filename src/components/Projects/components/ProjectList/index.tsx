import { ProjectData } from '../../../../models'
import { ProjectItem } from './components/ProjectItem'

export interface ProjectListProps {
    projectList: ProjectData[]
}

export function ProjectList({ projectList }: ProjectListProps) {
    return (
        <div className="grid grid-cols-12 gap-8">
            {projectList.map((project: ProjectData, idx: number) => (
                <ProjectItem key={project.title} project={project} />
            ))}
        </div>
    )
}
