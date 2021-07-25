import React, {useState, useRef} from 'react';
import styles from '../styles/Banner.module.scss'


import Image from 'next/image'
import Button from "./Button";
import Trail from "../components/Trail";
import {useSpring} from "react-spring";
import {MenuFull} from "./MenuFull";
import {RiMenu5Line} from "react-icons/ri";


const myLoader = ({src, width, quality}) => {
    return `./${src}?w=${width}&q=${quality || 75}`
}


const Banner = ({offsetY}) => {

    const [rightMenuVisible, setRightMenuVisible] = useState(false);
    const [fullMenuVisible, setFullMenuVisible] = useState(false);

    const rightMenuAnimation = useSpring({
        opacity: rightMenuVisible ? 1 : 0,
        transform: rightMenuVisible ? `translateX(0)` : `translateX(100%)`
    });
    const fullMenuAnimation = useSpring({
        transform: fullMenuVisible ? `translateY(0)` : `translateY(-100%)`,
        opacity: fullMenuVisible ? 1 : 0
    });

    const toggleMenu = () => {
        setFullMenuVisible(!fullMenuVisible)
    }

    return (
        <>

            <section className={styles.bannerWrap}>
                <MenuFull style={fullMenuAnimation} toggleMenu={toggleMenu}/>
                <div className={styles.banner} style={{transform: `translateY(-${offsetY}px)`, transition: '0.5s'}}>


                    <header className={styles.header}>
                        <div className={styles.userImage}>
                            <a href=''>
                                <img src='./me.jpg' alt='me'/>
                            </a>
                        </div>
                        <nav className={styles.menu}>
                            <ul>
                                <li>
                                    Stack
                                </li>
                                <li>
                                    Project
                                </li>
                                <li>
                                    Blogs
                                </li>
                            </ul>

                            <Button styles={styles.navBtn}>
                                <a href='https://doc-10-24-docs.googleusercontent.com/docs/securesc/ka8qf4a82cgdr5lnaq5enh3j3qqbcq6q/92tl8lak5mvklmp5mi8vvtd3lpfqp5a0/1627157250000/12449996658645287156/12449996658645287156/1SbySBRhsJoHP-zR7pBFp-nH84hSn2RQf?e=download&authuser=0&nonce=efnjfkp7t1bfs&user=12449996658645287156&hash=19ik86algq233bhqtre8sb4uvaspcn4e' download>


                                <img src='./svg/document.svg' alt='rocket'/>

                                My Resume
                                </a>
                            </Button>
                        </nav>

                        <button
                            className="menu-button menu-button--full"
                            onClick={() => setFullMenuVisible(!fullMenuVisible)}
                        >
                            {fullMenuVisible ? "Close" : <RiMenu5Line/>}
                        </button>


                    </header>

                    <div className={styles.content}>
                        <div className={styles.user}
                             style={{transform: `translateY(${offsetY}px)`, transition: '0.7s'}}>
                            <div className={styles.userContent}>
                                <Trail open={true}>
                                    <div className={styles.name}>
                                        Orji joseph
                                    </div>

                                    <div className={styles.role}>
                                        Front-End Engineer
                                    </div>
                                    <div className={styles.bio}>
                                        Focused on usability and performance improvements. My goal has always been to
                                        build
                                        useful, efficient and scalable products.
                                    </div>

                                    <a href='mailto:orjiace@gmail.com' className={styles.bannerBtn}>




                                        <img src='./svg/rocket.svg' alt='rocket'/>

                                        <span>
                                        Let's work
                            </span>


                                    </a>
                                </Trail>

                            </div>


                        </div>

                        <div className={styles.shapeFill}>

                            {/* <img
                        className={styles.bannerMob}
                        alt="Mountains"
                        src='./phone-banner.png'
                    />*/}
                            <div>

                                <div className={styles.bannerMob}
                                     style={{transform: `translateY(${offsetY * 0.5}px)`, transition: '0.5s'}}>
                                    <Image
                                        className={styles.image}
                                        loader={myLoader}
                                        src='phone-banner.svg'
                                        quality={75}
                                        alt="Picture of the author"
                                        width={600}
                                        height={400}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
