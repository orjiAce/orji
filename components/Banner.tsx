import React from 'react';
import styles from '../styles/banner.module.scss'

import Image from 'next/image'
import Button from "./Button";

const myLoader = ({src, width, quality}) => {
    return `./${src}?w=${width}&q=${quality || 75}`
}

const Banner = () => {
    return (
        <section className={styles.banner}>
            <header className={styles.header}>
<div className={styles.userImage}>

</div>
                <nav className={styles.menu}>
                    <ul>
                        <li>
                            Stack
                        </li>
                        <li>
                            Project
                        </li><li>
                        Blogs
                        </li>
                    </ul>

<Button styles={styles.navBtn}>
    <img src='./svg/document.svg' alt='rocket'/>
    <span>
My Resume
    </span>
</Button>
                </nav>
            </header>
            <div className={styles.content}>
                <div className={styles.user}>
                    <div className={styles.userContent}>
                        <div className={styles.name}>
                            Orji joseph
                        </div>

                        <div className={styles.role}>
                            Front-End Engineer
                        </div>
                        <div className={styles.bio}>
                            We get it—product development is
                            often non-linear.
                            There is no single, perfect process.
                        </div>
                        <Button styles={styles.bannerBtn}>
                            <img src='./svg/rocket.svg'  alt='rocket'/>

                            <span>
                                        Let's work
                            </span>

                        </Button>
                    </div>


                </div>

                <div className={styles.shapeFill}>

                    {/* <img
                        className={styles.bannerMob}
                        alt="Mountains"
                        src='./phone-banner.png'
                    />*/}
                    <div>

<div  className={styles.bannerMob}>
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
        </section>
    );
};

export default Banner;
