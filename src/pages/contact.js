import React from 'react'
import Layout from '../components/Layout'

import StyledHero from '../components/StyledHero'

import {graphql} from 'gatsby'

import Contact from '../components/Contact/Contact'
import SEO from '../components/SEO'


const contact = ({data}) => {
    return (
        <Layout>
            <SEO title="Contact" />
            <StyledHero img={data.contactBcg.childImageSharp.fluid} />
            <Contact/>
        </Layout>
    )
}

export const query = graphql`
query {
    contactBcg:file(relativePath:{eq:"contact2.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth: 4160){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default contact

