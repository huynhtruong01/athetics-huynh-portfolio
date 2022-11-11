import { motion } from 'framer-motion'
import { BsGithub } from 'react-icons/bs'
import { ImFacebook2, ImLinkedin } from 'react-icons/im'
import { SocialData } from '../models'
import { textVariants } from '../motion'

export interface ContactProps {}

export function Contact(props: ContactProps) {
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
        <section id="contact" className="w-full bg-white dark:bg-[#3B3B3B]">
            <motion.div
                className="container m-auto py-12 pb-16"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={textVariants}
            >
                <div className="contact__title text-center mb-6">
                    <h3 className="text-[42px] font-bold text-[#393E46] dark:text-[#D6E4E5]">
                        Contact
                    </h3>
                    <p className="text-sm text-gray-500">Get in Touch</p>
                </div>
                <div className="content__main text-center">
                    <p className="text-xl font-semibold text-[#393E46] mb-4 dark:text-white">
                        You can contact me through
                    </p>
                    <div className="contact__list flex justify-center items-center gap-8">
                        {socialList.map((social: SocialData) => {
                            const Icon = social.icon
                            return (
                                <span>
                                    <a href={social.link} target="_blank">
                                        <Icon className="text-2xl text-[#393E46] hover:text-black dark:text-white duration-300 ease-in-out" />
                                    </a>
                                </span>
                            )
                        })}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
