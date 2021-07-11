import React from 'react';
import styles from '../styles/ProjectCard.module.scss'


interface project{
    projectDetails:{
        id:string,
        image:string,
        projectName:string,
        shortDescription:string,
        link?:string
    }

}

const ProjectCard = ({projectDetails}: project) => {
    const {image,link,projectName,shortDescription} = projectDetails

    return (
        <div className={styles.projectCard}>
            <div className={styles.projectImage}>

            </div>
<div className={styles.projectTitle}>
    {projectName}
</div>
            <div className={styles.projectDescription}>
                <p>
                    {shortDescription}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;
