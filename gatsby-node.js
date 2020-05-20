const path = require("path")

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions ;
    const { data } = await graphql(`
        query {
            artists: allContentfulArtist{
                edges{
                        node{
                                slug
                    }
                }
            }
            posts: allContentfulPost{
                edges{
                        node{
                                slug
                    }
                }
            }
        }
    `)



    data.artists.edges.forEach(({node}) =>{
        createPage({
            path: `artists/${node.slug}`,
            component: path.resolve("./src/templates/artist-template.js"),
            context:{
                slug: node.slug
            },
            
        })
    })

    data.posts.edges.forEach(({node}) => {
        createPage({
            path: `blog/${node.slug}`,
            component : path.resolve('./src/templates/blog-template.js'),
            context: {
                slug: node.slug
            }
        })
    })
}