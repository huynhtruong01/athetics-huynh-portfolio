import { motion } from 'framer-motion'
import { useState } from 'react'
import { textVariants } from '@/motion'
import {
    SkillAll,
    SkillBackend,
    SkillDatabase,
    SkillFrontend,
    SkillOther,
} from '@/pages/Skill/pages'
import { ALL } from '@/constants'

export function Skill() {
    const [active, setActive] = useState(ALL)

    return (
        <section className="w-full">
            <div className="m-auto pt-12 pb-16">
                <motion.div
                    className="text-center mb-10"
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
                <div>
                    <div className="flex justify-center flex-wrap gap-4 mb-8">
                        {[ALL, 'Front End', 'Back End', 'Database', 'Other'].map(
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
                    <div>
                        {active === 'all' && <SkillAll />}
                        {active === 'front end' && (
                            <SkillFrontend className="w-1/2 m-auto" />
                        )}
                        {active === 'back end' && (
                            <SkillBackend className="w-1/2 m-auto" />
                        )}
                        {active === 'database' && (
                            <SkillDatabase className="w-1/2 m-auto" />
                        )}
                        {active === 'other' && <SkillOther className="w-1/2 m-auto" />}
                    </div>
                </div>
            </div>
        </section>
    )
}
