import { ComponentType } from 'react'

import { motion } from 'framer-motion'

import styles from './SlideTransition.module.css'

const SlideTransition = (OgComponent: ComponentType) => {
    const WrappedComponent: React.FC = () => {
        return (
            <>
                <OgComponent />
                <motion.div
                    className={styles.slide_in}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.div
                    className={styles.slide_out}
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />
            </>
        )
    }
    return WrappedComponent
}

export default SlideTransition
