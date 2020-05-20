import React from 'react'
import ArtistList from './ArtistList'

import {useStaticQuery, graphql} from 'gatsby'

const getArtists = graphql`
query {
    artists:allContentfulArtist{
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

const Artists = () => {

    const {artists} = useStaticQuery(getArtists);


    return (
            <ArtistList artists={artists}/>
    )
}

export default Artists
