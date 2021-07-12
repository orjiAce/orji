import React, {useState, useRef, useEffect} from 'react';
import Banner from "../components/Banner";
import styles from '../styles/Home.module.scss'
import {Blogs, Projects} from "../data/Blogs";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";

import TechStack from "../components/TechStack";
import StackChain from "../components/StackChain";
import { useSpring, animated, to } from '@react-spring/web'
import { useGesture } from 'react-use-gesture'




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
        console.log(offsetY)
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
    const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
        () => ({
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 1,
            zoom: 0,
            x: 0,
            y: 0,
            config: { mass: 5, tension: 350, friction: 40 },
        })
    )

    const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }))
    useGesture(
        {
            onMove: ({ xy: [px, py], dragging }) =>
                !dragging &&
                api({
                    rotateX: calcX(py, y.get()),
                    rotateY: calcY(px, x.get()),
                    scale: 1.1,
                }),
            onHover: ({ hovering }) =>
                !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
            onWheel: ({ event, offset: [, y] }) => {
                event.preventDefault()
                wheelApi.set({ wheelY: y })
            },
        },
        { domTarget, eventOptions: { passive: false } }
    )




    return (
        <div className={styles.home}>

                <Banner offsetY={offsetY}/>


                <div className={styles.techStack}>


                <div className={styles.titleWrap}
                     style={{ transform: `translateY(-${offsetY * 0.5}px)`, transition:'0.5s' }}>

                    “Tech Stack .”
                </div>

                <div className={styles.stack}
                     style={{ transform: `translateY(-${offsetY * 0.5}px)`, transition:'0.5s' }}>

                    {/* array of JSX items */}
                <TechStack/>

                </div>




                </div>
                <div
                    className={styles.projectsContainer}
                >

                <section className={styles.pTitleWrap}>
                    Projects
                </section>

                <div className={styles.projectCardWrap} >
                    {
                        Projects.map((project, index) => (
                            <ProjectCard key={project.id} projectDetails={project}/>

                        ))
                    }
                </div>
                </div>




            <div className={styles.blogs}>
                <div>
                    Blogs
                </div>
                <div className={styles.bTitleWrap}

                >
                    “
                    Read my stories where i write my wrongs
                    ”
                </div>

                <div className={styles.blogCardWrap}>

                    {
                        Blogs.map((({title, id, image, link}) =>(

                            <animated.div
                                key={id}
                                ref={domTarget}
                                className={styles.blogCard}
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
                            <img src='./svg/mail.svg' alt='arrow'/> Talk to me
                        </Button>
                    </div>
                </div>
                <div className={styles.bottom}>

                    <div className={styles.socialButtons}>
                        <Button styles={styles.btns}>

                        </Button>
                        <Button styles={styles.btns}>

                        </Button>
                        <Button styles={styles.btns}>

                        </Button>
                    </div>
                </div>
            </footer>


        </div>
    );
};

export default Home;
