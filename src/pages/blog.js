import React, { Component } from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import Images from '../examples/images'



import StyledHero from '../components/StyledHero'

import {graphql} from 'gatsby'



export default class blog extends Component {
    render() {
        return (
            <Layout>
                <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid}/>
            </Layout>
        )
    }
}

export const query = graphql`
query {
    defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
      childImageSharp{
        fluid(quality:90, maxWidth: 4160){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
