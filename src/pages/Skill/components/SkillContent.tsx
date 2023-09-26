import { motion } from 'framer-motion'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { boxVariants } from '@/motion'

export interface SkillContentProps {
    title: string
    toolList?: string[]
    languageList?: string[]
    frameworkList?: string[]
}

export function SkillContent({
    title,
    toolList = [],
    languageList = [],
    frameworkList = [],
}: SkillContentProps) {
    return (
        <motion.div
            className="w-full text-center p-6 rounded-2xl bg-white dark:bg-[#3B3B3B]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={boxVariants}
        >
            <h5 className="text-2xl font-bold text-[#393E46] mb-4 dark:text-white">
                {title}
            </h5>
            <div>
                <table>
                    <tbody>
                        {toolList.length > 0 && (
                            <tr>
                                <td className="flex items-start py-2 pr-6 font-semibold dark:text-white">
                                    Other skills
                                </td>
                                <td className="py-2 px-6">
                                    {toolList?.map((tool: string) => (
                                        <span
                                            key={tool}
                                            className="flex items-center gap-2 mb-3 dark:text-white"
                                        >
                                            <BsFillPatchCheckFill />
                                            {tool}
                                        </span>
                                    ))}
                                </td>
                            </tr>
                        )}
                        {languageList.length > 0 && (
                            <tr>
                                <td className="flex items-start py-2 pr-6 font-semibold dark:text-white">
                                    Languages
                                </td>
                                <td className="py-2 px-6">
                                    {languageList?.map((language: string) => (
                                        <span
                                            key={language}
                                            className="flex items-center gap-2 mb-3 dark:text-white"
                                        >
                                            <BsFillPatchCheckFill />
                                            {language}
                                        </span>
                                    ))}
                                </td>
                            </tr>
                        )}
                        {frameworkList.length > 0 && (
                            <tr className="mt-3">
                                <td className="flex items-start py-2 pr-6 font-semibold dark:text-white">
                                    Frameworks
                                </td>
                                <td className="py-2 px-6">
                                    {frameworkList.map((framework: string) => (
                                        <span
                                            key={framework}
                                            className="flex items-center gap-2 mb-3 dark:text-white"
                                        >
                                            <BsFillPatchCheckFill />
                                            {framework}
                                        </span>
                                    ))}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </motion.div>
    )
}
