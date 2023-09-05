import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container } from '../components'
import { textVariants } from '../motion'

export function Footer() {
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
                        className="cursor-pointer"
                        onClick={() => {
                            window.scrollTo(0, 0)
                        }}
                    >
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-light">
                            Athetics
                        </h2>
                    </div>

                    <div>
                        <p className="text-gray-800 mb-2 dark:text-light">
                            Designed and made 😊 by{' '}
                            <span className="font-bold dark:text-light">
                                Athetics Huynh
                            </span>
                        </p>
                    </div>

                    <div className="text-dark dark:text-light">
                        Contact{' '}
                        <Link to={'/'} className="inline-block hover:underline">
                            @me
                        </Link>
                    </div>
                </motion.div>
            </Container>
        </footer>
    )
}
