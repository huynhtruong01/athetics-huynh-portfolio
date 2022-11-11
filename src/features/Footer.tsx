import { motion } from 'framer-motion'
import { BsGithub } from 'react-icons/bs'
import { ImFacebook2, ImLinkedin } from 'react-icons/im'
import { NavFooterData, SocialData } from '../models'
import { textVariants } from '../motion'

export interface FooterProps {}

export function Footer(props: FooterProps) {
    const navList: NavFooterData[] = [
        {
            name: 'About',
            link: '#about',
        },
        {
            name: 'Skill',
            link: '#skill',
        },
        {
            name: 'Projects',
            link: '#projects',
        },
        {
            name: 'Contact',
            link: '#contact',
        },
    ]

    const socialList: SocialData[] = [
        {
            link: 'https://github.com/huynhtruong01',
            icon: BsGithub,
        },
        {
            link: 'https://www.facebook.com/roller.jon',
            icon: ImFacebook2,
        },
        {
            link: 'https://www.linkedin.com/in/huynh-truong-28309422a',
            icon: ImLinkedin,
        },
    ]

    return (
        <footer id="footer">
            <motion.div
                className="container m-auto py-12 pb-8 text-center"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={textVariants}
            >
                <div
                    className="footer__logo mb-6 cursor-pointer"
                    onClick={() => {
                        window.scrollTo(0, 0)
                    }}
                >
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-[#D6E4E5]">
                        Athetics
                    </h2>
                </div>
                <div className="footer__main">
                    <nav className="mb-4">
                        <ul className="footer__nav--list flex justify-center items-center gap-6">
                            {navList.map((nav: NavFooterData) => (
                                <li className="footer__nav--item">
                                    <a
                                        href={nav.link}
                                        className="text-gray-800 font-medium dark:text-white"
                                    >
                                        {nav.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* <div className="footer__social--list flex justify-center items-center gap-6 mb-10">
                        {socialList.map((social: SocialData) => {
                            const Icon = social.icon
                            return (
                                <span>
                                    <a href={social.link} target="_blank">
                                        <Icon className="text-2xl text-[#393E46] hover:text-black duration-300 ease-in-out" />
                                    </a>
                                </span>
                            )
                        })}
                    </div> */}
                    <p className="text-gray-800 mb-2 dark:text-white">
                        Designed and made 😊 by{' '}
                        <span className="font-bold dark:text-[#D6E4E5]">
                            Athetics Huynh
                        </span>
                    </p>
                    <p className="text-gray-800 font-semibold dark:text-white">@2022</p>
                </div>
            </motion.div>
        </footer>
    )
}
