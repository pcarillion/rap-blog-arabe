import React from 'react'
import {Helmet} from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'


const getData = graphql`
query{
    site{
      siteMetadata{
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
        twitterUsername
      }
    }
  }
`

const SEO = ({title, description}) => {

    const {site} = useStaticQuery(getData);

    const {siteDesc, siteTitle, siteUrl, image, twitterUsename} = site.siteMetadata

    return (
        <Helmet title={ `${title} | ${siteTitle}`} htmlAttributes={{lang:"eng"}}>
            <meta name="description" content={description || siteDesc}/>
            {/* <meta name="image" content={image}/> */}
        </Helmet>
    )
}

export default SEO
