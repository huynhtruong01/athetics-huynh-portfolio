import React, { useState } from 'react'
import { HiBars3CenterLeft } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { Container } from '../components'
import { THEME } from '../consts'
import { Theme } from '../enums'

export interface HeaderProps {
    theme: string
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

export function Header({ theme, setTheme }: HeaderProps) {
    const [activeLink, setActiveLink] = useState<string>('')

    const handleDarkMode = () => {
        if (theme === Theme.DARK) {
            document.documentElement.classList.remove(Theme.DARK)
            localStorage.setItem(THEME, JSON.stringify(Theme.LIGHT))
        } else {
            document.documentElement.classList.add(Theme.DARK)
            localStorage.setItem(THEME, JSON.stringify(Theme.DARK))
        }
        setTheme((prev) => {
            return prev === Theme.DARK ? Theme.LIGHT : Theme.DARK
        })
    }

    return (
        <header className="fixed top-0 left-0 w-full shadow shadow-gray-100 bg-white z-50 dark:bg-dark dark:shadow-none dark:py-4">
            <Container>
                <div className="container m-auto flex justify-between items-center py-4 px-10 dark:bg-darkLight dark:rounded-xl">
                    <Link
                        to={'/'}
                        className="font-semibold text-xl text-gray-800 dark:text-light"
                        onClick={() => {
                            window.scrollTo(0, 0)
                            setActiveLink('')
                        }}
                    >
                        Athetics
                    </Link>
                    <div>
                        <button className="btn-bar hidden">
                            <HiBars3CenterLeft />
                        </button>
                        <nav className="flex items-center">
                            <ul className="flex gap-7 mr-12">
                                {['About', 'Skills', 'Projects', 'Contact'].map(
                                    (x: string) => (
                                        <Link
                                            key={x}
                                            to={`/${x.toLowerCase()}`}
                                            className={`font-medium text-sm`}
                                        >
                                            <li
                                                className={`nav-item py-2.5 px-4 cursor-pointer rounded-3xl hover:bg-dark hover:text-light ${
                                                    activeLink === x.toLowerCase()
                                                        ? 'bg-dark hover:bg-dark text-light'
                                                        : ''
                                                } dark:text-light duration-300 ease-in-out`}
                                                onClick={() =>
                                                    setActiveLink(x.toLowerCase())
                                                }
                                            >
                                                {x}
                                            </li>
                                        </Link>
                                    )
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </Container>
        </header>
    )
}
