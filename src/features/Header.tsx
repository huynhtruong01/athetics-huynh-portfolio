import React, { useState } from 'react'
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs'
import { HiBars3CenterLeft } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

export interface HeaderProps {
    theme: string
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

export function Header({ theme, setTheme }: HeaderProps) {
    const [activeLink, setActiveLink] = useState<string>('')

    const handleDarkMode = () => {
        if (theme === 'dark') {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', JSON.stringify('light'))
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', JSON.stringify('dark'))
        }
        setTheme((prev) => {
            return prev === 'dark' ? 'light' : 'dark'
        })
    }

    return (
        <header
            id="header"
            className="fixed top-0 left-0 w-full shadow shadow-gray-100 bg-white z-50 dark:bg-[#252525] dark:shadow-none dark:py-4"
        >
            <div className="container header__container m-auto flex justify-between items-center p-4 dark:bg-[#3B3B3B] dark:rounded-xl">
                <Link
                    to="/"
                    className="font-semibold text-xl text-gray-800 dark:text-[#D6E4E5]"
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
                            {['About', 'Skills', 'Projects', 'Contact'].map(
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
                                            } dark:text-[#D6E4E5] duration-300 ease-in-out`}
                                            onClick={() => setActiveLink(x.toLowerCase())}
                                        >
                                            {x}
                                        </li>
                                    </Link>
                                )
                            )}
                        </ul>
                        <button
                            className="relative flex justify-center items-center w-8 h-8 bg-[#D6E4E5] p-2 text-white rounded-full overflow-hidden dark:bg-[#404258]"
                            onClick={handleDarkMode}
                        >
                            <span
                                className={`absolute text-white ${
                                    theme === 'light'
                                        ? 'left-[50%] translate-x-[-50%] opacity-100'
                                        : 'left-[-50px] opacity-0'
                                } duration-300 ease-in-out`}
                            >
                                <BsFillSunFill />
                            </span>
                            <span
                                className={`absolute text-indigo-500 ${
                                    theme === 'dark'
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
