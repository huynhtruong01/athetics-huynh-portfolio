import { motion } from 'framer-motion'
import avatar from '../assets/images/me_about.jpg'
import { textVariants } from '../motion'

export interface AboutProps {}

export function About() {
    return (
        <motion.section
            id="about"
            className="w-full bg-white dark:bg-darkLight rounded-xl my-6"
        >
            <motion.div
                className="m-auto py-12 pb-16"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={textVariants}
            >
                <div className="text-center mb-6">
                    <h3 className="text-[42px] font-bold text-dark dark:text-light">
                        About
                    </h3>
                    <p className="text-sm text-gray-500">My Introduction</p>
                </div>
                <div className="w-full flex justify-center items-center px-6 sm:flex-col md:flex-row gap-10 py-6">
                    <div className="w-[150px] h-[150px] ">
                        <img
                            src={avatar}
                            alt="Athetics Huynh"
                            className="object-cover w-full h-full rounded-full"
                        />
                    </div>
                    <div className="md:w-[65%] sm:w-full flex-1">
                        <p className="font-medium text-[#393E46] dark:text-light">
                            I’m an international student from University of Transport and
                            Communicate in campus HCM who started programming back in 2020
                            and turned it into a hobby.
                            <br />
                            <br />
                            My experience is mostly about full-stack development but I
                            also explore other fields like cloning application such us
                            YODY store, Dev.to, Netflix,...
                            <br />
                            <br />
                            Besides from programming, I also do mobile/web design, listen
                            to music, go to the gym, and learn English.
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}
