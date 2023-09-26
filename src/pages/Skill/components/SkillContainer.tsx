import { ReactNode } from 'react'

export interface ISkillContainerProps {
    children: ReactNode
    className?: string
}

export function SkillContainer({ children, className = '' }: ISkillContainerProps) {
    return <div className={`${className} md:w-full`}>{children}</div>
}
