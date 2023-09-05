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
        <section className="w-full bg-light dark:bg-darkLight rounded-xl mb-24 mt-16">
            <motion.div
                className="m-auto py-12 pb-16"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={textVariants}
            >
                <div className="contact__title text-center mb-6">
                    <h3 className="text-[42px] font-bold text-dark dark:text-light">
                        Contact
                    </h3>
                    <p className="text-sm text-gray-500">Get in Touch</p>
                </div>
                <div className="content__main text-center">
                    <p className="text-xl font-semibold text-dark mb-4 dark:text-light">
                        You can contact me through
                    </p>
                    <div className="contact__list flex justify-center items-center gap-8">
                        {socialList.map((social: SocialData, idx: number) => {
                            const Icon = social.icon

                            return (
                                <span key={`${social.link} ${idx}`}>
                                    <a href={social.link} target="_blank">
                                        <Icon className="text-2xl text-dark hover:text-black dark:text-white duration-300 ease-in-out" />
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
