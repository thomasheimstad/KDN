import { useStaticQuery, graphql } from "gatsby";
export const usePostListingQuery = () => {
  const postListData = useStaticQuery(
    graphql`
      query postQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              category: {
                eq: "gallery"
              }
            }
          }
          sort: {
              fields: [frontmatter___date]
              order: DESC
            }
        ) {
          edges {
            node {
              frontmatter {
                category
                tags
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  return postListData
}
