import { forwardRef, useState } from 'react'

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Link } from 'react-router-dom'

import NavMenu from '@/components/Navbar/NavMenu'
import Magnetic from '@/components/ui/Magnetic'

import logo from '@/assets/logo.svg'

import { background, opacity } from './anim'

import styles from './Navbar.module.css'

const Navbar = forwardRef<HTMLDivElement>(function NavbarComponent(_props, ref) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [isNavHidden, setIsNavHidden] = useState<boolean>(false)

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const prev = scrollY?.getPrevious() ?? 0
        if (latest > prev && latest > 150) {
            setIsNavHidden(true)
        } else {
            setIsNavHidden(false)
        }
    })

    return (
        <motion.div
            className={styles.container}
            variants={{
                visible: { y: 0 },
                hidden: { y: '-100%' },
            }}
            animate={isNavHidden ? 'hidden' : 'visible'}
            transition={{
                duration: 0.35,
                ease: 'easeInOut',
            }}
        >
            <div className={styles.wrapper}>
                <Magnetic>
                    <div
                        className={styles.menu}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div
                            className={`${styles.burger} ${
                                isMenuOpen ? styles.burgerActive : ''
                            }`}
                        />

                        <div className={styles.nav_item}>
                            <div className={styles.label}>
                                <motion.p
                                    variants={opacity}
                                    animate={!isMenuOpen ? 'open' : 'closed'}
                                >
                                    menu
                                </motion.p>
                                <motion.p
                                    variants={opacity}
                                    animate={isMenuOpen ? 'open' : 'closed'}
                                >
                                    close
                                </motion.p>
                                <div className={styles.bounds} ref={ref} />
                            </div>
                        </div>
                    </div>
                </Magnetic>

                <motion.div
                    variants={opacity}
                    animate={!isMenuOpen ? 'open' : 'closed'}
                    className={styles.logo}
                >
                    <Link to='/' className={styles.nav_item}>
                        <img src={logo} alt='SPOTLY' className={styles.logo_img} />
                    </Link>
                </motion.div>

                <motion.div
                    variants={opacity}
                    animate={!isMenuOpen ? 'open' : 'closed'}
                    className={styles.profile}
                >
                    <Link to='/profile' className={styles.nav_item}>
                        profile
                    </Link>
                </motion.div>
            </div>

            <motion.div
                variants={background}
                initial='initial'
                animate={isMenuOpen ? 'opened' : 'close'}
                className={styles.background}
            />

            <AnimatePresence>{isMenuOpen && <NavMenu />}</AnimatePresence>
        </motion.div>
    )
})

export default Navbar
