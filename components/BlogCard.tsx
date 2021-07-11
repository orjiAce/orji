import React from 'react';
import styles from '../styles/card.module.scss'

interface post {
    title: string,
    image: any,
    link: string
}

const Card = ({title, image, link} : post) => {
    return (
        <div className={styles.card}>

            <section className={styles.innerWrap}>
                <div className={styles.cardImage}>

                </div>
                <div className={styles.cardTitle}>
                    {title}
                </div>
            </section>
        </div>
    );
};

export default Card;
