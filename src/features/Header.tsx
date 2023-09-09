import { useState } from 'react'
import { HiBars3CenterLeft } from 'react-icons/hi2'
import { IoCloseSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Container } from '../components'

export interface HeaderProps {}

export function Header() {
    const [activeLink, setActiveLink] = useState<string>('')
    const [show, setShow] = useState<boolean>(false)

    const handleOpen = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
        <header className="fixed top-0 left-0 w-full shadow shadow-gray-100 bg-white z-50 dark:bg-dark dark:shadow-none dark:py-4">
            <Container>
                <div className="flex justify-between items-center py-4 dark:bg-darkLight dark:rounded-xl">
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
                        <div className="sm:block hidden" onClick={handleOpen}>
                            <HiBars3CenterLeft className="w-8 h-8" />
                        </div>
                        <nav className="flex items-center sm:hidden">
                            <ul className="flex gap-7">
                                {['About', 'Skills', 'Projects', 'Contact'].map(
                                    (x: string) => (
                                        <Link
                                            key={x}
                                            to={`/${x.toLowerCase()}`}
                                            className={`font-medium text-sm`}
                                        >
                                            <li
                                                className={`py-2.5 px-4 cursor-pointer rounded-3xl hover:bg-dark hover:text-light ${
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
            <div
                className={`fixed inset-0 w-full h-full z-50 ${
                    show ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
            >
                <div
                    className={`w-full h-full bg-black bg-opacity-50 ${
                        show ? 'opacity-100' : 'opacity-0'
                    } duration-200 ease-in-out`}
                ></div>
                <div
                    className={`absolute inset-0 w-10/12 h-full bg-white ${
                        show ? 'inset-0' : '-left-full'
                    } duration-200 ease-in-out`}
                >
                    <div className="flex justify-end px-6 py-4">
                        <IoCloseSharp className="w-8 h-8" onClick={handleClose} />
                    </div>
                    <nav className="w-full mt-4">
                        <ul className="flex flex-col items-center gap-7">
                            {['About', 'Skills', 'Projects', 'Contact'].map(
                                (x: string) => (
                                    <Link
                                        key={x}
                                        to={`/${x.toLowerCase()}`}
                                        className={`font-medium text-sm`}
                                        onClick={handleClose}
                                    >
                                        <li
                                            className={`py-2.5 px-4 cursor-pointer rounded-3xl text-2xl hover:bg-dark hover:text-light ${
                                                activeLink === x.toLowerCase()
                                                    ? 'bg-dark hover:bg-dark text-light'
                                                    : ''
                                            } dark:text-light duration-300 ease-in-out`}
                                            onClick={() => setActiveLink(x.toLowerCase())}
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
        </header>
    )
}
