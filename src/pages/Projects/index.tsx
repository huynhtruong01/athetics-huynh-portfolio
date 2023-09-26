import { motion } from 'framer-motion'
import { projectList } from '@/data'
import { textVariants } from '@/motion'
import { ProjectList } from '@/pages/Projects/components'

export function Projects() {
    return (
        <section className="w-full">
            <div className="m-auto py-12 pb-16">
                <motion.div
                    className="text-center mb-10"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    variants={textVariants}
                >
                    <h3 className="text-[42px] font-bold text-darkLight dark:text-light">
                        Projects
                    </h3>
                    <p className="text-sm text-gray-500">Most recent work</p>
                </motion.div>
                <div className="w-full m-auto">
                    <ProjectList projectList={projectList} />
                </div>
            </div>
        </section>
    )
}
