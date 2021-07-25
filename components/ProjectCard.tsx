import React from 'react';
import styles from '../styles/ProjectCard.module.scss'
import Image from "next/image";


interface project {
    projectDetails: {
        id: string,
        image: string,
        projectName: string,
        shortDescription: string,
        link: string
    }

}


const myLoader = ({src, width, quality}) => {
    return `./${src}?w=${width}&q=${quality || 75}`
}


const ProjectCard = ({projectDetails}: project) => {
    const {image, link, projectName, shortDescription} = projectDetails

    return (

        <div className={styles.projectCard}>

            <div className={styles.projectImage}>
                <img src={image} alt={projectName}/>
               {/* <Image
                    className={styles.image}
                    loader={myLoader}
                    src={image}
                    quality={75}
                    alt="Picture of the author"
                    width={600}
                    height={400}
                />*/}
            </div>

            <a href={link} target='_blank' className={styles.projectTitle}>

                {projectName}

            </a>

            <div className={styles.projectDescription}>
                <p>
                    {shortDescription}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;
