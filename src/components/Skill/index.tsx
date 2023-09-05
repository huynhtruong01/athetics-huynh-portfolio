import { motion } from 'framer-motion'
import { useState } from 'react'
import { textVariants } from '../../motion'
import { SkillAll, SkillBackend, SkillDatabase, SkillFrontend, SkillOther } from './pages'

export interface SkillProps {}

export function Skill(props: SkillProps) {
    const [active, setActive] = useState('all')

    return (
        <section id="skill" className="w-full">
            <div className="m-auto pt-12 pb-16">
                <motion.div
                    className="skill__title text-center mb-10"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    variants={textVariants}
                >
                    <h3 className="text-[42px] font-bold text-darkLight dark:text-light">
                        Skills
                    </h3>
                    <p className="text-sm text-gray-500">My Technical level</p>
                </motion.div>
                <div className="skill__main">
                    <div className="skill__tap--list flex justify-center gap-4 mb-8">
                        {['All', 'Front End', 'Back End', 'Database', 'Other'].map(
                            (tab: string) => (
                                <button
                                    key={tab}
                                    className={`py-2.5 px-4 rounded-3xl font-semibold ${
                                        active === tab.toLowerCase()
                                            ? 'bg-darkLight text-light hover:bg-darkLight'
                                            : 'text-darkLight hover:text-light hover:bg-darkLight'
                                    } duration-300 ease-in-out`}
                                    onClick={() => setActive(tab.toLowerCase())}
                                >
                                    {tab}
                                </button>
                            )
                        )}
                    </div>
                    <div className="skill__content--list w-[90%] m-auto">
                        {active === 'all' && <SkillAll />}
                        {active === 'front end' && <SkillFrontend />}
                        {active === 'back end' && <SkillBackend />}
                        {active === 'database' && <SkillDatabase />}
                        {active === 'other' && <SkillOther />}
                    </div>
                </div>
            </div>
        </section>
    )
}
