import React from 'react'
import Artist from '../Artists/Artist'
import {graphql,useStaticQuery} from 'gatsby'
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const  getArtists = graphql`
query {
    artistsRev:allContentfulArtist(filter:{revolutionnaire:{eq:true}}){
      edges{
        node{
          title
          country
          slug
          contentful_id
          images{
            fluid{
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
` 

const ArtistsRev = () => {

    const response = useStaticQuery(getArtists);

    const artists = response.artistsRev.edges

    return (
        <section className={styles.tours}>
            <Title title="Quelques" subtitle="artistes"/>
            <div className={styles.center}>
                {artists.map(({node}) => {
                    return (
                        <Artist key={node.contentful_id} artist={node} >
                        </Artist>
                    )
                })}
            </div>
            <AniLink fade to='/artists' className="btn-primary">
                Tous les artistes
            </AniLink>


        </section>
    )
}

export default ArtistsRev
