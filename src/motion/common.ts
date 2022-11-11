import { Variants } from 'framer-motion'

export const textVariants: Variants = {
    offscreen: {
        x: -200,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            bounce: 0.2,
            duration: 1.2,
        },
    },
}

export const boxVariants: Variants = {
    offscreen: {
        scale: 0,
        opacity: 0,
    },
    onscreen: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring',
            bounce: 0.2,
            duration: 1.2,
        },
    },
}

export const imgRightVariants: Variants = {
    offscreen: {
        x: 200,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            bounce: 0.2,
            duration: 1.2,
        },
    },
}
