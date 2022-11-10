import * as React from 'react'
import { BsArrowDown, BsMouse } from 'react-icons/bs'

export interface ButtonScrollDownProps {}

export function ButtonScrollDown(props: ButtonScrollDownProps) {
    return (
        <div className="flex justify-center items-center p-8">
            <a href="#about">
                <button className="flex items-center gap-2">
                    <BsMouse className="text-3xl" />
                    <span className="text-gray-800 font-semibold text-sm flex items-center">
                        Scroll Down <BsArrowDown />
                    </span>
                </button>
            </a>
        </div>
    )
}
