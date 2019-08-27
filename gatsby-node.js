const path = require("path")
const slash = require("slash")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")

  const res = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors)
      }
      res.data.allContentfulPost.edges.forEach(edge => {
        createPage({
          component: slash(blogTemplate),
          path: `/blog/${edge.node.slug}`,
          context: {
            id: edge.node.id,
            slug: edge.node.slug,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
