import React from 'react'
import Image from "gatsby-image"
import styles from '../../css/tour.module.css'
import {FaMap} from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"

const getImage = graphql`
query {
    file(relativePath:{eq:"defaultBcg.jpeg"}){ 
        childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Artist = ({artist}) => {

    const data = useStaticQuery(getImage)

    const defaultImg = data.file.childImageSharp.fluid

    const{title, country, slug, images} = artist

    // let mainImage 
    // if(images){
    //     mainImage = images[0].fluid 
    // } else {
    //     mainImage = defaultImg;
    // } 
    
    // or

    let mainImage = images? images[0].fluid : defaultImg;

    return (
        <article className={styles.tour}>
            <div className={styles.imgContainer}>
                <Image fluid={mainImage} className={styles.img} alt="artist"/>
                <AniLink fade to={`/artists/${slug}`} className={styles.link}>
                    détails
                </AniLink>
            </div>
            <div className={styles.footer}>
                <h3>{title}</h3>
                <div>
                    <h4 className={styles.info}>
                        {/* <FaMap className={styles.icons}/> */}
                        {country || "Rappeur"}
                    </h4>
                    <div>

                    </div>
                </div>
            </div>
        </article>
    )
}

Artist.propTypes = {
    artist:PropTypes.shape({
        title: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.Object).isRequired,
    })
}

export default Artist
