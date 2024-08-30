import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

import { blur } from '@/components/Navbar/anim'

import { socials } from '@/utils/NavSocials/navSocials'

import styles from './Footer.module.css'

const Footer = () => {
    const [selectedLink, setSelectedLink] = useState({ isHovered: false, index: 0 })
    const d = new Date()
    let year = d.getFullYear()
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socials}>
                    {socials.map((link, index) => {
                        const { href, icon } = link
                        return (
                            <a key={`s_${index}`} href={href} target='_blank'>
                                <motion.i
                                    onMouseOver={() => {
                                        setSelectedLink({ isHovered: true, index })
                                    }}
                                    onMouseLeave={() => {
                                        setSelectedLink({ isHovered: false, index })
                                    }}
                                    variants={blur}
                                    animate={
                                        selectedLink.isHovered &&
                                        selectedLink.index != index
                                            ? 'open'
                                            : 'closed'
                                    }
                                    style={{ paddingLeft: '5px' }}
                                >
                                    <FontAwesomeIcon
                                        icon={icon}
                                        style={{ fontSize: '1.5rem', color: '#282828' }}
                                    />
                                </motion.i>
                            </a>
                        )
                    })}
                </div>
                <p className={styles.rights}>© {year} Spotly, All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
