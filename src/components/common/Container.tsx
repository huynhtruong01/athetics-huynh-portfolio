import { ReactNode } from 'react'

export interface IContainerProps {
    children: ReactNode
}

export function Container({ children }: IContainerProps) {
    return <div className="px-32">{children}</div>
}
