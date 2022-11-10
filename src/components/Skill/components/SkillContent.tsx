import * as React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'

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
        <div className="skill__content w-full text-center p-6 rounded-2xl bg-white">
            <h5 className="text-2xl font-bold text-[#393E46] mb-4">{title}</h5>
            <div className="skill__list">
                <table>
                    {toolList.length > 0 && (
                        <tr>
                            <td className="flex items-start py-2 pr-6 font-semibold">
                                Other skills
                            </td>
                            <td className="py-2 px-6">
                                {toolList?.map((tool: string) => (
                                    <span className="flex items-center gap-2 mb-3">
                                        <BsFillPatchCheckFill />
                                        {tool}
                                    </span>
                                ))}
                            </td>
                        </tr>
                    )}
                    {languageList.length > 0 && (
                        <tr>
                            <td className="flex items-start py-2 pr-6 font-semibold">
                                Languages
                            </td>
                            <td className="py-2 px-6">
                                {languageList?.map((language: string) => (
                                    <span className="flex items-center gap-2 mb-3">
                                        <BsFillPatchCheckFill />
                                        {language}
                                    </span>
                                ))}
                            </td>
                        </tr>
                    )}
                    {frameworkList.length > 0 && (
                        <tr className="mt-3">
                            <td className="flex items-start py-2 pr-6 font-semibold">
                                Frameworks
                            </td>
                            <td className="py-2 px-6">
                                {frameworkList.map((framework: string) => (
                                    <span className="flex items-center gap-2 mb-3">
                                        <BsFillPatchCheckFill />
                                        {framework}
                                    </span>
                                ))}
                            </td>
                        </tr>
                    )}
                </table>
            </div>
        </div>
    )
}
