import React, { useState } from 'react'
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs'
import { HiBars3CenterLeft } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

export interface HeaderProps {}

export function Header(props: HeaderProps) {
    const [darkMode, setDarkMode] = useState<boolean>(false)
    const [activeLink, setActiveLink] = useState<string>('')

    const handleDarkMode = () => {
        setDarkMode((prev) => !prev)
    }

    return (
        <header
            id="header"
            className="fixed top-0 left-0 w-full shadow shadow-gray-100 bg-white z-50"
        >
            <div className="container header__container m-auto flex justify-between items-center p-4">
                <Link
                    to="/"
                    className="font-semibold text-xl text-gray-800"
                    onClick={() => {
                        window.scrollTo(0, 0)
                        setActiveLink('')
                    }}
                >
                    Athetics
                </Link>
                <div className="header__main">
                    <button className="btn-bar hidden">
                        <HiBars3CenterLeft />
                    </button>
                    <nav className="header__nav flex items-center">
                        <ul className="nav-list flex gap-7 mr-12">
                            {['About', 'Skill', 'Projects', 'Contact'].map(
                                (x: string) => (
                                    <Link
                                        to={`/${x.toLowerCase()}`}
                                        className={`font-medium text-sm`}
                                    >
                                        <li
                                            className={`nav-item py-2.5 px-4 cursor-pointer rounded-3xl hover:bg-[#6B728E] hover:text-white ${
                                                activeLink === x.toLowerCase()
                                                    ? 'bg-[#404258] hover:bg-[#404258] text-white'
                                                    : ''
                                            } duration-300 ease-in-out`}
                                            onClick={() => setActiveLink(x.toLowerCase())}
                                        >
                                            {x}
                                        </li>
                                    </Link>
                                )
                            )}
                        </ul>
                        <button
                            className="relative flex justify-center items-center w-8 h-8 bg-[#404258] p-2 text-white rounded-full overflow-hidden"
                            onClick={handleDarkMode}
                        >
                            <span
                                className={`absolute text-red-500 ${
                                    !darkMode
                                        ? 'left-[50%] translate-x-[-50%] opacity-100'
                                        : 'left-[-50px] opacity-0'
                                } duration-300 ease-in-out`}
                            >
                                <BsFillSunFill />
                            </span>
                            <span
                                className={`absolute text-indigo-500 ${
                                    darkMode
                                        ? 'left-[50%] translate-x-[-50%] opacity-100'
                                        : 'right-[100%] opacity-0'
                                } duration-300 ease-in-out`}
                            >
                                <BsMoonStarsFill />
                            </span>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}
