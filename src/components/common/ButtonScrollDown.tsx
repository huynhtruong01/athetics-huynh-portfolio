import * as React from 'react'
import { BsArrowDown, BsMouse } from 'react-icons/bs'

export interface ButtonScrollDownProps {
    className?: string
}

export function ButtonScrollDown({ className = '' }: ButtonScrollDownProps) {
    return (
        <div className={`flex justify-center items-center px-8 ${className}`}>
            <a href="#about">
                <button className="flex items-center gap-2 text-gray-800 dark:text-white">
                    <BsMouse className="w-7 h-7" />
                    <span className=" font-semibold text-sm flex items-center dark:text-white">
                        Scroll Down <BsArrowDown />
                    </span>
                </button>
            </a>
        </div>
    )
}
