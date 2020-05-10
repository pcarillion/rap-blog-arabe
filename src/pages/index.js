import React from "react"
// import {Link} from 'gatsby'
import Layout from '../components/Layout'

// import SimpleHero from '../components/SimpleHero'
import StyledHero from '../components/StyledHero'

import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import {graphql} from 'gatsby'

export default ({data}) => (

        <Layout>
                {/* <SimpleHero> */}
                <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
                    <Banner title="Arabic rap blog" info="a blog about rap music in the arabic world">
                        <AniLink fade to='/blog' className='btn-white'>
                            See the articles
                        </AniLink>
                    </Banner>
                {/* </SimpleHero> */}
                </StyledHero>
                <About/>
                <Services/>
        </Layout>
)


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