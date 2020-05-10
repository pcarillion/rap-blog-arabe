import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const getAbout = graphql`
query aboutImage{
    aboutImage:file(relativePath:{eq:"defaultBcg.jpeg"}){
      childImageSharp{
        fluid(maxWidth:600){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
    const {aboutImage} =  useStaticQuery(getAbout)
    return (
        <section className={styles.about}>
            <Title title="A" subtitle=" propos"></Title>
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        {/* <img src={img} alt="image"/> */}
                        <Img fluid={aboutImage.childImageSharp.fluid} alt="about image"/>
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
