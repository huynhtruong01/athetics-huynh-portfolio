import { motion } from 'framer-motion'
import avatar from '../assets/images/bg-human.jpg'
import { textVariants } from '../motion'

export interface AboutProps {}

export function About(props: AboutProps) {
    return (
        <motion.section id="about" className="w-full bg-white">
            <motion.div
                className="container m-auto py-12 pb-16"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={textVariants}
            >
                <div className="about__title text-center mb-6">
                    <h3 className="text-[42px] font-bold text-[#393E46]">About</h3>
                    <p className="text-sm text-gray-500">My Introduction</p>
                </div>
                <div className="about__main w-full flex justify-center items-center gap-10 py-6">
                    <div className="about__img w-[150px] h-[150px] rounded-full overflow-hidden">
                        <img src={avatar} alt="Athetics Huynh" />
                    </div>
                    <div className="about__content w-[65%]">
                        <p className="font-semibold text-[#393E46]">
                            I’m an international student from Vietnam who started
                            programming back in 2020 and turned it into a hobby.
                            <br />
                            <br />
                            My experience is mostly about full-stack development but I
                            also explore other fields like Data Science & Machine
                            Learning.
                            <br />
                            <br />
                            Besides from programming, I also do mobile/web design, listen
                            to music, go to the gym, and create content for my Youtube.
                            channel
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}
