import React, { useState } from 'react'
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from '@react-spring/web'

import {TechStack} from "../data/Blogs";
import styles from '../styles/TechStart.module.scss'

const StackChain = () => {
    const [open, set] = useState(false)

    const springApi = useSpringRef()
    const { size, ...rest } = useSpring({
        ref: springApi,
        config: config.stiff,
        from: { size: '20%', background: '#509BF5' },
        to: {
            size: open ? '100%' : '20%',
            background: open ? 'white' : '#509BF5',
        },
    })

    const transApi = useSpringRef()
    const transition = useTransition(open ? TechStack : [], {
        ref: transApi,
        trail: 400 / TechStack.length,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    })



    // This will orchestrate the two animations above, comment the last arg and it creates a sequence
    useChain(open ? [springApi, transApi] : [transApi, springApi], [
        0,
        open ? 0.1 : 0.6,
    ])

    return (
        <div className={styles.wrapper}>
            <animated.div
                style={{ ...rest, width: size, height: size }}
                className={styles.container}

                onClick={() => set(open => !open)}>
                {
                   !open &&
                        <div style={{
                        transition:'0.8s'
                        }}>

                            CLICK TO SEE
                        </div>

                }


                {transition((style, item) => (
                    <animated.div
                        className={styles.item}
                        style={{ ...style, background: item.color }}
                    >
                        {item.title}
                    </animated.div>
                ))}
            </animated.div>
        </div>
    )
}

export default StackChain
