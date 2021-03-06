import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'

import styles from '../css/single-blog.module.css'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import SEO from '../components/SEO'


const BlogTemplate = ({data}) => {

    const {title, dateOfPublication, author, article:{json}, source, images, sourceUrl} = data.post

    const [mainImage, ...artistImages] = images

console.log(mainImage)


    // les images dans le texte enrichi

    const options = {
        renderNode : {
            "embedded-asset-block": node => {
                return <div>
                    {/* <img width="400" src={node.data.target.field.file[en-US].url}/> */}
                </div>
            }
        },
        // to embed another post (to be completed)
            "embedded-entry-block": node => {
                const {title, image, text} = node.data.target.fields
                return (
                    <div></div>
                )
            }
    }

    console.log(title)

    return (
        <Layout>
            <SEO title={title} />
            <section className={styles.blog}>
                <div className={styles.center}>
                    <h1>{title}</h1>
                    <h4>Publication : {dateOfPublication}</h4>
                    {source && <h5>Source: <a href={sourceUrl} target="_blank">{source}</a></h5>}
                    <div className={styles.imgDiv}>
                        <img src={mainImage.fluid.src} alt="main image"/>
                    </div>
                    <article className={styles.post}>
                        {documentToReactComponents(json, options)}
                    </article>
                    <AniLink fade to='/blog' className="btn-primary">
                        Retour
                    </AniLink>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query getPost($slug:String){
        post:contentfulPost(slug:{eq:$slug}){ 
        title
        dateOfPublication(formatString:"DD/MM/YYYY")
        author
        images{
            fluid{
                ...GatsbyContentfulFluid
            }
        }
        article{
            json
        }
        source
        sourceUrl
    }
}
`

export default BlogTemplate
