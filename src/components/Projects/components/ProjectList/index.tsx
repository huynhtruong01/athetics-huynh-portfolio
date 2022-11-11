import { ProjectData } from '../../../../models'
import { ProjectItem } from './components/ProjectItem'

export interface ProjectListProps {
    projectList: ProjectData[]
}

export function ProjectList({ projectList }: ProjectListProps) {
    return (
        <div className="project__list grid grid-cols-3 gap-10">
            {projectList.map((project: ProjectData, index: number) => (
                <ProjectItem project={project} index={index} />
            ))}
        </div>
    )
}
