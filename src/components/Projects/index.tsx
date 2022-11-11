import { motion } from 'framer-motion'
import { FaNodeJs, FaSass } from 'react-icons/fa'
import { GrReactjs } from 'react-icons/gr'
import { SiFramer, SiMongodb, SiSocketdotio } from 'react-icons/si'
import { ProjectData } from '../../models'
import { textVariants } from '../../motion'
import { ProjectList } from './components'

export interface ProjectsProps {}

export function Projects(props: ProjectsProps) {
    const projectList: ProjectData[] = [
        {
            img: 'https://www.danieltruongg.com/_next/image?url=%2Fspotify_desktop.jpg&w=1920&q=75',
            title: 'Landing Page',
            languageList: [
                {
                    name: 'ReactJS',
                    icon: GrReactjs,
                },
                {
                    name: 'Sass',
                    icon: FaSass,
                },
                {
                    name: 'Framer Motion',
                    icon: SiFramer,
                },
            ],
            detail: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, doloribus voluptatum tempore fugit ea obcaecati nulla dignissimos rerum sed. Velit perspiciatis debitis vel? Enim esse inventore expedita, quia blanditiis commodi!',
            link: 'https://github.com/huynhtruong01/jackie_smith_fe_be',
        },
        {
            img: 'https://www.danieltruongg.com/_next/image?url=%2Fspotify_desktop.jpg&w=1920&q=75',
            title: 'Jackie Smith E-Commerce',
            languageList: [
                {
                    name: 'ReactJS',
                    icon: GrReactjs,
                },
                {
                    name: 'NodeJS',
                    icon: FaNodeJs,
                },
                {
                    name: 'MongoDB',
                    icon: SiMongodb,
                },
            ],
            detail: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, doloribus voluptatum tempore fugit ea obcaecati nulla dignissimos rerum sed. Velit perspiciatis debitis vel? Enim esse inventore expedita, quia blanditiis commodi!',
            link: 'https://github.com/huynhtruong01/jackie_smith_fe_be',
        },
        {
            img: 'https://www.danieltruongg.com/_next/image?url=%2Freddat_desktop.jpg&w=640&q=75',
            title: 'Blog',
            languageList: [
                {
                    name: 'ReactJS',
                    icon: GrReactjs,
                },
                {
                    name: 'NodeJS',
                    icon: FaNodeJs,
                },
                {
                    name: 'MongoDB',
                    icon: SiMongodb,
                },
                {
                    name: 'Socket.io',
                    icon: SiSocketdotio,
                },
            ],
            detail: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, doloribus voluptatum tempore fugit ea obcaecati nulla dignissimos rerum sed. Velit perspiciatis debitis vel? Enim esse inventore expedita, quia blanditiis commodi!',
            link: 'https://github.com/huynhtruong01/blog_project',
        },
        {
            img: 'https://www.danieltruongg.com/_next/image?url=%2Freddat_desktop.jpg&w=640&q=75',
            title: 'Blog',
            languageList: [
                {
                    name: 'ReactJS',
                    icon: GrReactjs,
                },
                {
                    name: 'NodeJS',
                    icon: FaNodeJs,
                },
                {
                    name: 'MongoDB',
                    icon: SiMongodb,
                },
                {
                    name: 'Socket.io',
                    icon: SiSocketdotio,
                },
            ],
            detail: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, doloribus voluptatum tempore fugit ea obcaecati nulla dignissimos rerum sed. Velit perspiciatis debitis vel? Enim esse inventore expedita, quia blanditiis commodi!',
            link: 'https://github.com/huynhtruong01/blog_project',
        },
    ]

    return (
        <section id="projects" className="w-full">
            <div className="container m-auto py-12 pb-16">
                <motion.div
                    className="project__title text-center mb-10"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    variants={textVariants}
                >
                    <h3 className="text-[42px] font-bold text-[#393E46]">Projects</h3>
                    <p className="text-sm text-gray-500">Most recent work</p>
                </motion.div>
                <div className="project__main w-[90%] m-auto">
                    <ProjectList projectList={projectList} />
                </div>
            </div>
        </section>
    )
}
