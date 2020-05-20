import React from 'react'
import Layout from '../components/Layout'


import StyledHero from '../components/StyledHero'

import Artists from '../components/Artists/Artists'

import {graphql} from 'gatsby'

import SEO from '../components/SEO'


const artists = ({data}) => {
    return (
        <Layout>
        <SEO title="Artists" />
            <StyledHero img={data.blogBcg.childImageSharp.fluid} />
            <Artists/>
        </Layout>
    )
}

export const query = graphql `
 query {
    blogBcg:file(relativePath:{eq:"blogBcg.jpeg"}){
      childImageSharp{
        fluid(quality:90, maxWidth: 4160){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`


export default artists
