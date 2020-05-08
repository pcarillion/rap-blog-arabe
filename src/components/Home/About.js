import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'

const About = () => {
    return (
        <section className={styles.about}>
            <Title title="A" subtitle=" propos"></Title>
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="image"/>
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>
                        explore the difference
                    </h4>
                    <p>
                        premier paragraphe
                    </p>
                    <p>
                        second paragraphe
                    </p>
                    <button type='button' className='btn-primary'>
                        En savoir plus
                    </button>
                </article>
            </div>
        </section>
    )
}

export default About
