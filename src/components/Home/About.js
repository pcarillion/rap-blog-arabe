import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
// import img from '../../images/defaultBcg.jpeg'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const getAbout = graphql`
query aboutImage{
    aboutImage:file(relativePath:{eq:"sh2.jpg"}){
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
                        Un blog sur le rap arabe...
                    </h4>
                    <p>
                        Dans les pays francophones, on parle beaucoup du rap français ou du rap US, mais assez peu
                        du rap des pays arabes. Pourtant, les difficultés économiques et politiques qui touchent
                        une population jeune forment un terrain propice au développement d'une culture hip-hop.
                    </p>
                    <p>
                        Les révoltes et révolutions qui ont eu lieu dans de nombreux pays arabes depuis 2011 ont
                        à la fois révélé et propulsé de nombreux artistes sur le devant de la scène et méritent 
                        d'être connus en France. Ce petit site propose de présenter ces artistes et leur musique, 
                        ainsi que de relayer des articles sur le rap dans le monde arabe. 
                    </p>
                </article>
            </div>
        </section>
    )
}

export default About
