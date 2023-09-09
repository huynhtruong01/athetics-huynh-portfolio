import { ReactNode } from 'react'

export interface IContainerProps {
    children: ReactNode
}

export function Container({ children }: IContainerProps) {
    return <div className="max-w-[1150px] m-auto px-4">{children}</div>
}
