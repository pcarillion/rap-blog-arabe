import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import img from '../images/contact2.jpg'
import Img from 'gatsby-image'

// these are only code snippets and tries with Gatsby image plugin

const getImages = graphql`
    query Images {
        fixed:file(relativePath:{eq:"dXVM3aecef38-0d78-11e8-9bc2-6afb2a70ff2c.webp"}){
          childImageSharp{
            fixed(width: 300,height:400, grayscale:true){
              ...GatsbyImageSharpFixed
            }
          }
        }
        fluid:file(relativePath:{eq:"XVM3aecef38-0d78-11e8-9bc2-6afb2a70ff2c.webp"}){
          childImageSharp{
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
`

const Images = () => {
    const data = useStaticQuery(getImages);
    return (
        <Wrapper>
            <article>
                <h3>
                    basic image
                </h3>
                <img src={img} className="basic"/>
            </article>
            <article>
                <h3>fixed image/blur</h3>
                <Img fixed={data.fixed.childImageSharp.fixed}/>
            </article>
            <article>
                <h3>fluid image/svg</h3>
                <Img fluid={data.fluid.childImageSharp.fluid}/>
            </article>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    text-align: center;
    text-transform: capitalize;
    width: 80%;
    margin: 0 auto 10rem auto;
    article{
        border: 0.5px solid black;
        padding: 1rem 0;
    }
    .basic{
        width: 100%;
    }
    @media (min-width:992px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 1rem;
    }
`

export default Images