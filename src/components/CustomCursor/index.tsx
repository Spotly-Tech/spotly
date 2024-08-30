import { FC, MutableRefObject, useEffect, useState } from 'react'

import { motion, useMotionValue, useSpring } from 'framer-motion'

import styles from './CustomCursor.module.css'

interface ICustomCursorProps {
    stickyElement: MutableRefObject<HTMLElement | null>
}

const CustomCursor: FC<ICustomCursorProps> = ({ stickyElement }) => {
    const [isHovered, setIsHovered] = useState(false)

    const cursorSize = isHovered ? 90 : 40

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions),
    }

    const manageMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
        if (stickyElement.current) {
            const { left, top, width, height } =
                stickyElement.current.getBoundingClientRect()

            const center = { x: left + width / 2, y: top + height / 2 }
            const distance = { x: clientX - center.x, y: clientY - center.y }

            if (isHovered) {
                mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1)
                mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1)
            } else {
                mouse.x.set(clientX - cursorSize / 2)
                mouse.y.set(clientY - cursorSize / 2)
            }
        }
    }

    const manageMouseOver = () => {
        setIsHovered(true)
    }
    const manageMouseLeave = () => {
        setIsHovered(false)
    }

    useEffect(() => {
        const currentElement = stickyElement.current

        window.addEventListener('mousemove', manageMouseMove)

        currentElement?.addEventListener('mouseover', manageMouseOver)
        currentElement?.addEventListener('mouseleave', manageMouseLeave)
        return () => {
            window.removeEventListener('mousemove', manageMouseMove)

            currentElement?.removeEventListener('mouseover', manageMouseOver)
            currentElement?.removeEventListener('mouseleave', manageMouseLeave)
        }
    })

    return (
        <motion.div
            className={styles.app_cursor}
            style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
                backgroundColor: isHovered ? 'black' : 'transparent',
            }}
            animate={{ width: cursorSize, height: cursorSize }}
        ></motion.div>
    )
}

export default CustomCursor
