import { motion } from 'framer-motion'

import { height } from '../anim'
import Body from './Body'
import Footer from './Footer'

import styles from './NavMenu.module.css'

const NavMenu = () => {
    return (
        <motion.div
            variants={height}
            initial='initial'
            animate='enter'
            exit='exit'
            className={styles.nav}
        >
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Body />
                    <Footer />
                </div>
            </div>
        </motion.div>
    )
}
export default NavMenu
