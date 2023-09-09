import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container } from '../components'
import { textVariants } from '../motion'

export function Footer() {
    const handleScrollTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <footer className="border-t bg-white dark:border-light">
            <Container>
                <motion.div
                    className="p-4 text-center flex items-center justify-between"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    variants={textVariants}
                >
                    <div
                        className="cursor-pointer md:block sm:hidden"
                        onClick={() => {
                            window.scrollTo(0, 0)
                        }}
                    >
                        <h2 className="text-2xl font-bold text-gray-800 md:text-xl dark:text-light">
                            Athetics
                        </h2>
                    </div>

                    <div className="sm:w-full">
                        <p className="text-gray-800 mb-2 text-center w-full dark:text-light">
                            Designed and made 😊 by{' '}
                            <span
                                className="font-semibold dark:text-light"
                                onClick={handleScrollTop}
                            >
                                Athetics Huynh
                            </span>
                        </p>
                    </div>

                    <div className="text-dark dark:text-light block sm:hidden">
                        Contact{' '}
                        <a
                            href="mailto:huynhphuoctruong01@gmail.com"
                            className="inline-block hover:underline"
                        >
                            @me
                        </a>
                    </div>
                </motion.div>
            </Container>
        </footer>
    )
}
