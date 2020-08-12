import React, { useState, useEffect } from 'react'
import { useSpring, useTrail, animated } from 'react-spring'
import SocialIcon from '../components/SocialIcon'

export default function MainPage() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => { setMounted(true) }, []);

    const socialIcons = [
        <SocialIcon icon='linkedin' href='https://www.linkedin.com/in/georg-schelkshorn-632655ba/' />,
        <SocialIcon icon='xing' href='https://www.xing.com/profile/Georg_Schelkshorn' />,
        <SocialIcon icon='facebook' href='http://facebook.com/georg.schelkshorn' />
    ]

    const springConfig = { mass: 1, tension: 280, friction: 60 }

    const wWidth = (process.browser) && window.innerWidth * 0.33
    const openAnimation = useSpring({ from: { width: 0 }, to: { width: wWidth || 0 }, delay: 500, config: springConfig })
    const { x: imageX } = useSpring({ from: { x: -400 }, to: { x: 0 }, delay: 750, config: springConfig })
    const textAnimation = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 750, config: { ...springConfig, duration: 1500 } })
    const socialAnimations = useTrail(3, { from: { y: -100 }, to: { y: 0 }, delay: 1000, config: springConfig })

    return (
        <div>
            <animated.div style={openAnimation} className='slant' />
            <animated.div style={{
                transform: imageX.interpolate((imageX) => `translate3d(${imageX}px, 0px, 0px)`),
            }} className='me-img' />
            <div className='content-container'>
                <animated.div style={textAnimation} className='content-text'>
                    <h1>Hi!<br />I'm Georg</h1>
                    <h2>Entrepreneur, Developer<br />
                        and Design Enthusiast
                        <br /><br />
                        Working <a href="https://tyl.at">@TouchLay</a>
                    </h2>
                </animated.div>
            </div>
            <div className='social-container'>
                {socialAnimations.map(({ y, ...rest }, index) => (
                <animated.div
                    key={index}
                    style={{ ...rest, transform: y.interpolate(y => `translate3d(0,${y}px,0)`) }}>
                        {socialIcons[index]}
                </animated.div>
                ))}
            </div>
        </div>
    )
}