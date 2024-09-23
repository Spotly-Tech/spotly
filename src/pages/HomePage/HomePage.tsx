import { FlipText } from '@/components/ui/Flip'
import RevealingText from '@/components/ui/RevealingText'

import styles from './HomePage.module.css'

const HomePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={`${styles.row} ${styles.row1}`}>
                    <div className={styles.column}>
                        <RevealingText
                            once
                            animation={{
                                hidden: {
                                    opacity: 0,
                                    y: 20,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                    },
                                },
                            }}
                            text='we are'
                            className={`${styles.text} ${styles.text_md} ${styles.uppercase}`}
                        />
                    </div>
                </div>
                <div className={`${styles.row} ${styles.row2}`}>
                    <div className={styles.column}>
                        <FlipText>SPOTLY</FlipText>
                    </div>
                </div>
                <div className={`${styles.row} ${styles.row3}`}>
                    <div className={styles.column}>
                        <RevealingText
                            once
                            text='The less time spent, the more gained'
                            animation={{
                                hidden: {
                                    opacity: 0,
                                    y: 0,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.05,
                                    },
                                },
                            }}
                            className={`${styles.text} ${styles.text_sm} ${styles.uppercase}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
