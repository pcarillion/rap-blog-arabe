import React from 'react'
import BlogCard from './BlogCard'
import Title from '../Title'
import {graphql, useStaticQuery} from 'gatsby'
import styles from '../../css/blog.module.css'

const getPosts = graphql`
query {
    posts:allContentfulPost(sort:{fields:dateOfPublication, order:DESC}){
      edges{ 
          node{ 
            title
          author
          source
          article{ 
            id
          }
          slug
          id: contentful_id
          images{
            fluid{
              ...GatsbyContentfulFluid
            }
          }
          dateOfPublication(formatString:"M Y D")
          createdAt(formatString:"LLLL")
        }
      }
    }
  }
`

const BlogList = () => {

    const {posts} = useStaticQuery(getPosts)

    console.log(posts)

    return (
        <section className={styles.blog}>
            <Title title="Le Blog" />
            <div className={styles.center}>
                {posts.edges.map(({node}) => {
                    return <BlogCard key={node.id} blog={node}/>
                })}
            </div>
            
        </section>
    )
}

export default BlogList
