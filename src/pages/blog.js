import React, { Component } from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import Images from '../examples/images'



import StyledHero from '../components/StyledHero'

import {graphql} from 'gatsby'

import BlogList from '../components/Blog/BlogList'
import SEO from '../components/SEO'



export default class blog extends Component {
    render() {
        return (
            <Layout>
            <SEO title="Blog"/>
                <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid}/>
                <BlogList/>
            </Layout>
        )
    }
}

export const query = graphql`
query {
    defaultBcg:file(relativePath:{eq:"algerie.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth: 4160){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
