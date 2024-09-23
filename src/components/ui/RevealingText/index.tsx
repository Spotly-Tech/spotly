import React, { useEffect, useRef } from 'react'

import { motion, useAnimation, useInView, Variant } from 'framer-motion'

import { defaultAnimation } from './anim'

import styles from './RevealingText.module.css'

interface IReavealingText {
    text: string | string[]
    el?: keyof React.JSX.IntrinsicElements
    className: string
    once?: boolean
    repeatDelay?: number
    animation?: {
        hidden: Variant
        visible: Variant
    }
}

const RevealingText = ({
    text,
    el: Wrapper = 'p',
    className,
    once,
    repeatDelay,
    animation = defaultAnimation,
}: IReavealingText) => {
    const controls = useAnimation()
    const textArray = Array.isArray(text) ? text : [text]
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.5, once })

    useEffect(() => {
        let timeout: NodeJS.Timeout
        const show = () => {
            controls.start('visible')
            if (repeatDelay) {
                timeout = setTimeout(async () => {
                    await controls.start('hidden')
                    controls.start('visible')
                }, repeatDelay)
            }
        }

        if (isInView) {
            show()
        } else {
            controls.start('hidden')
        }

        return () => clearTimeout(timeout)
    }, [isInView])

    return (
        <Wrapper className={className}>
            <span className={styles.sr_only}>{textArray.join(' ')}</span>
            <motion.span
                ref={ref}
                initial='hidden'
                animate={controls}
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                    hidden: {},
                }}
                aria-hidden
            >
                {textArray.map((line, lineIndex) => (
                    <span className={styles.block} key={`${line}-${lineIndex}`}>
                        {line.split(' ').map((word, wordIndex) => (
                            <span
                                className={styles.inline_block}
                                key={`${word}-${wordIndex}`}
                            >
                                {word.split('').map((char, charIndex) => (
                                    <motion.span
                                        className={styles.inline_block}
                                        key={`${char}-${charIndex}`}
                                        variants={animation}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                <span className='inline-block'>&nbsp;</span>
                            </span>
                        ))}
                    </span>
                ))}
            </motion.span>
        </Wrapper>
    )
}

export default RevealingText
