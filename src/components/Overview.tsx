import { motion } from 'framer-motion'
import { MdWavingHand } from 'react-icons/md'
import avatar from '../assets/images/me.jpg'
import { imgRightVariants, textVariants } from '../motion'
import { ButtonScrollDown } from './common'

export interface OverviewProps {}

export function Overview() {
    return (
        <section
            id="overview"
            className="w-full md:h-[calc(100vh_-_68px)] sm:h-auto pt-10 pb-6 xs:pb-4"
        >
            <div className="m-auto h-full relative">
                <div className="flex items-center justify-center gap-4 md:flex-row sm:flex-col">
                    <motion.div
                        className="flex-1 xs:text-center"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={textVariants}
                    >
                        <h1 className="text-5xl font-bold text-gray-800 xs:text-2xl leading-15 mb-2.5 dark:text-white">
                            Hi <MdWavingHand className="inline-block text-yellow-400" />
                            <br />
                            I'm Huynh Phuoc Truong
                        </h1>
                        <p className="text-gray-800 mb-6 w-[80%] xs:w-auto dark:text-white">
                            I'm{' '}
                            <span className="text-[#3F3B6C] font-semibold dark:text-[#D6E4E5]">
                                Front End Developer
                            </span>
                            , I'm come from Vietnam. I'm very passionate and dedicated to
                            my work.
                        </p>

                        <a
                            className="inline-block"
                            href="https://github.com/huynhtruong01"
                            target="_blank"
                        >
                            <button className="flex items-center gap-2 bg-[#404258] text-white rounded-lg font-medium py-3 px-4 hover:bg-[#393E46] dark:bg-[#3B3B3B] duration-300 ease-in-out">
                                My resume
                            </button>
                        </a>
                    </motion.div>
                    <motion.div
                        className="flex-1 flex justify-end sm:hidden"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={imgRightVariants}
                    >
                        <div className="rounded-xl overflow-hidden md:w-[85%] xl:w-[65%]">
                            <img src={avatar} alt="Athetics Huynh" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
