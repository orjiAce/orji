import React from 'react';
import Banner from "../components/Banner";
import styles from '../styles/Home.module.scss'
import {Projects} from "../data/Blogs";
import ProjectCard from "../components/ProjectCard";


const Home = () => {
    return (
        <div className={styles.home}>
            <Banner/>

            <div className={styles.techStack}>
                <div className={styles.titleWrap}>
                    Tech Stack
                </div>

                <div className={styles.stack}>
                    {/* array of JSX items */}


                </div>


            </div>

            <div className={styles.projectsContainer}>
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
            <div className={styles.blogs}>



            </div>
            <footer className={styles.footer}>
<div className={styles.contactMe}>

</div>
            </footer>
        </div>
    );
};

export default Home;
