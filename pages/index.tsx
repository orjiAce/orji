import React, {useState, useRef, useEffect} from 'react';
import Banner from "../components/Banner";
import styles from '../styles/Home.module.scss'
import {Blogs, Projects} from "../data/Blogs";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";

import TechStack from "../components/TechStack";
import {useSpring, animated, to} from '@react-spring/web'
import {useGesture} from 'react-use-gesture'
import {FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";


const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 20
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 20

const wheel = (y: number) => {
    const imgHeight = window.innerWidth * 0.3 - 20
    return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`
}


const Home = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [offsetY]);


    useEffect(() => {
        const preventDefault = (e: Event) => e.preventDefault()
        document.addEventListener('gesturestart', preventDefault)
        document.addEventListener('gesturechange', preventDefault)

        return () => {
            document.removeEventListener('gesturestart', preventDefault)
            document.removeEventListener('gesturechange', preventDefault)
        }

    }, [])


    const domTarget = useRef(null)
    const [{x, y, rotateX, rotateY, rotateZ, zoom, scale}, api] = useSpring(
        () => ({
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 1,
            zoom: 0,
            x: 0,
            y: 0,
            config: {mass: 5, tension: 350, friction: 40},
        })
    )

    const [{wheelY}, wheelApi] = useSpring(() => ({wheelY: 0}))
    useGesture(
        {
            onMove: ({xy: [px, py], dragging}) =>
                !dragging &&
                api({
                    rotateX: calcX(py, y.get()),
                    rotateY: calcY(px, x.get()),
                    scale: 1.1,
                }),
            onHover: ({hovering}) =>
                !hovering && api({rotateX: 0, rotateY: 0, scale: 1}),
            onWheel: ({event, offset: [, y]}) => {
                event.preventDefault()
                wheelApi.set({wheelY: y})
            },
        },
        {domTarget, eventOptions: {passive: false}}
    )


    return (
        <div className={styles.home}>

            <Banner offsetY={offsetY}/>


            <div className={styles.techStack} id='stack'>


                <div className={styles.titleWrap} style={{transform: `translateY(-${offsetY * 0.5}px)`, transition: '0.5s'}}>

                    “My Stack .”
                </div>

                <div className={styles.stack}
                     style={{transform: `translateY(-${offsetY * 0.5}px)`, transition: '0.5s'}}>

                    {/* array of JSX items */}
                    <TechStack/>

                </div>


            </div>
            <div className={styles.projectsContainer}
                 id='projects'
            >

                <section className={styles.pTitleWrap}>
                    Projects
                </section>

                <div className={styles.projectCardWrap}>
                    {
                        Projects.map((project, index) => (
                            <ProjectCard key={project.id} projectDetails={project}/>

                        ))
                    }
                </div>
            </div>


            <div className={styles.blogs} id='blogs'>
                <span>
                    Blogs
                </span>
                <div className={styles.bTitleWrap}

                >
                    “
                    Stories and practical guids written by me
                    ”
                </div>

                <div className={styles.blogCardWrap}>

                    {
                        Blogs.map((({title, id, image, link}) => (
<div className={styles.blogCard}>
                            <animated.div
                                key={id}
                                ref={domTarget}
                                className={styles.blogImg}
                                style={{
                                    transform: 'perspective(400px)',
                                    x,
                                    y,
                                    scale: to([scale, zoom], (s, z) => s + z),
                                    rotateX,
                                    rotateY,
                                    rotateZ,
                                }}>


                                <img src={image} className={styles.blogImg} alt={title}/>
                            </animated.div>
    <a href={link} target='_blank'>
    <div className={styles.blogTitle}>
                                   {title}
                                </div>
    </a>
                                <div className={styles.line}/>


                            </div>
                        )))
                    }

                </div>

            </div>

            <footer className={styles.footer}>
                <div className={styles.contactMe}>
                    <div className={styles.textWrap}>
    <span>
        Think we should work together?
    </span>
                    </div>
                    <div className={styles.wrap}>

                        <Button styles={styles.talkToMe}>
                            <a href='mailto:orjiace@gmail.com'>
                            <img src='./svg/mail.svg' alt='arrow'/> Talk to me
                            </a>
                        </Button>

                    </div>
                </div>
                <div className={styles.bottom}>

                    <div className={styles.socialButtons}>
                        <Button styles={styles.btns}>
                            <a href='https://twitter.com/orjiace_'>


<FaTwitter/>
                            </a>
                        </Button>
                        <Button styles={styles.btns}>
                            <a href='https://instagram.com/orjiace'>


                            <FaInstagram/>
                            </a>
                        </Button>

                        <Button styles={styles.btns}>
                            <a href='https://github.com/orjiace'>
                            <FaGithub/>
                            </a>
                        </Button>

                    </div>
                </div>
            </footer>


        </div>
    );
};

export default Home;
