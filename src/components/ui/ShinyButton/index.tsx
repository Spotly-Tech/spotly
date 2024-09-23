import { ButtonHTMLAttributes, ReactNode } from 'react'

import { motion } from 'framer-motion'

import styles from './ShinyButton.module.css'

interface IShinyButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

function ShinyButton({ children, ...props }: IShinyButton) {
    return (
        <motion.button
            {...props}
            className={`${styles.btn} ${styles.radial_gradient}`}
            initial={{ '--x': '100%', scale: 1 }}
            animate={{ '--x': '-100%' }}
            whileTap={{ scale: 0.85 }}
            transition={{
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 1,
                type: 'spring',
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                    type: 'spring',
                    stiffness: 10,
                    damping: 5,
                    mass: 0.1,
                },
            }}
        >
            <span className={`${styles.btn_text} ${styles.linear_mask}`}>{children}</span>
            <span className={`${styles.overlay} ${styles.linear_overlay}`} />
        </motion.button>
    )
}

export default ShinyButton
