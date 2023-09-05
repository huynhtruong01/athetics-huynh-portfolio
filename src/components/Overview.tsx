import { motion } from 'framer-motion'
import { MdWavingHand } from 'react-icons/md'
import avatar from '../assets/images/me.jpg'
import { imgRightVariants, textVariants } from '../motion'
import { ButtonScrollDown } from './common'

export interface OverviewProps {}

export function Overview(props: OverviewProps) {
    return (
        <section
            id="overview"
            className="w-full h-[calc(100vh_-_68px)] py-10 pb-6 overflow-hidden"
        >
            <div className="m-auto h-full relative">
                <div className="h-full flex items-center justify-center gap-4">
                    <motion.div
                        className="w-1/2 ml-10"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={textVariants}
                    >
                        <h1 className="text-5xl font-bold text-gray-800 leading-15 mb-3 dark:text-white">
                            Hi <MdWavingHand className="inline-block text-yellow-400" />
                            <br />
                            I'm Huynh Phuoc Truong
                        </h1>
                        <p className="text-gray-800 mb-6 w-[500px] dark:text-white">
                            I'm{' '}
                            <span className="text-[#3F3B6C] font-bold dark:text-[#D6E4E5]">
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
                            <button className="flex items-center gap-2 bg-[#404258] text-white rounded-2xl font-medium py-3 px-4 hover:bg-[#393E46] dark:bg-[#3B3B3B] duration-300 ease-in-out">
                                My resume
                            </button>
                        </a>
                    </motion.div>
                    <motion.div
                        className="w-1/2"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={imgRightVariants}
                    >
                        <div className="w-[70%] rounded-xl overflow-hidden m-auto">
                            <img src={avatar} alt="Athetics Huynh" />
                        </div>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 w-full">
                    <ButtonScrollDown />
                </div>
            </div>
        </section>
    )
}
