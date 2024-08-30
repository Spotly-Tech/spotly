import { useState } from 'react'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { blur, translate } from '@/components/Navbar/anim'

import { links } from '@/utils/NavLinks/navLinks'

import styles from './Body.module.css'

const Body = () => {
    const [selectedLink, setSelectedLink] = useState({ isHovered: false, index: 0 })

    const getChars = (word: string) => {
        return Array.from(word).map((char, i) => (
            <motion.span
                custom={[i * 0.02, (word.length - i) * 0.01]}
                variants={translate}
                initial='initial'
                animate='enter'
                exit='exit'
                key={char + i}
                style={{ display: 'inline-block' }}
            >
                {char === ' ' ? '\u00A0' : char}
            </motion.span>
        ))
    }

    return (
        <div className={styles.body}>
            {links.map((link, index) => {
                const { title, href } = link
                return (
                    <Link key={`l_${index}`} to={href}>
                        <motion.p
                            onMouseOver={() => {
                                setSelectedLink({ isHovered: true, index })
                            }}
                            onMouseLeave={() => {
                                setSelectedLink({ isHovered: false, index })
                            }}
                            variants={blur}
                            animate={
                                selectedLink.isHovered && selectedLink.index != index
                                    ? 'open'
                                    : 'closed'
                            }
                            className={styles.words}
                        >
                            {getChars(title)}
                        </motion.p>
                    </Link>
                )
            })}
        </div>
    )
}

export default Body
