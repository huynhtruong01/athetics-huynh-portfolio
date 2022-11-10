import { IconType } from 'react-icons'
import { Link } from 'react-router-dom'
import { LanguageProjectData, ProjectData } from '../../../../../models'

export interface ProjectItemProps {
    project: ProjectData
}

export function ProjectItem({ project }: ProjectItemProps) {
    return (
        <div className="project__item w-full rounded-xl overflow-hidden hover:scale-105 duration-300 ease-in-out">
            <a href={project.link} target="_blank">
                <div className="project__item--img h-52">
                    <img src={project.img} alt={project.title} />
                </div>
                <div className="project__item--content bg-white p-5">
                    <h4 className="text-[20px] font-bold text-gray-800 mt-1 mb-2">
                        {project.title}
                    </h4>
                    <div className="project__item--language-list flex flex-wrap items-center gap-2 my-3">
                        {project.languageList.map((language: LanguageProjectData) => {
                            const Icon: IconType = language.icon
                            return (
                                <span className="flex items-center text-sm gap-1 text-gray-800 font-semibold py-1.5 px-3.5 bg-[#BAD1C2] rounded">
                                    <Icon />
                                    {language.name}
                                </span>
                            )
                        })}
                    </div>
                    <p className="project__item--detail pb-10 text-gray-800">
                        {project.detail}
                    </p>
                </div>
            </a>
        </div>
    )
}
