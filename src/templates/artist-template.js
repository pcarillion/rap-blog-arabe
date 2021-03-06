import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Layout from "../components/Layout"
import StyledHero from '../components/StyledHero'
import styles from "../css/template.module.css"
import Img from 'gatsby-image'
import Song from '../components/SingleArtist/Song'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SEO from '../components/SEO'


const ArtistTemplate = ({data}) => {

    const {title, description:{description}, country, images, songs, source, sourceUrl} = data.artist

    const [mainImage, ...artistImages] = images

    return (
        <Layout>
        <SEO title={title}/>
            <StyledHero img={mainImage.fluid}></StyledHero>
            <section className={styles.template}>
                <div className={styles.center}>
                    <div className={styles.images}>
                        {artistImages.map((item, i) => {
                            return <Img key={i} fluid={item.fluid} alt="sing artist"/>
                        })}
                    </div>
                    
                    <h2>{title}</h2>
                    <div className={styles.info}>
                        <p>{country}</p>
                    </div>
                    <p className={styles.desc}>{description}</p>
                    {source && <p className={styles.source}>Source: <a href={sourceUrl}>{source}</a></p>}
                    <h2>Morceaux</h2>
                    <div className={styles.journey}>
                        {songs.map((item, i) => {
                            return  <Song key={i} song={item.song} url={item.url}/>
                        })}
                    </div>
                    <div className={styles.btnDiv}>
                        <AniLink fade to="/artists" className="btn-primary margin-auto">
                            Retour aux artistes
                        </AniLink>
                    </div>
                    
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
query($slug:String!) {
    artist: contentfulArtist(slug:{eq:$slug}){
      title
      images{
        fluid{
            ...GatsbyContentfulFluid
        }
      }
      description{
        description
      }
      country
      source
      sourceUrl
      songs{
        url
        song
      }
    }
  }
`

export default ArtistTemplate
