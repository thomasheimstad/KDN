import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostListing from "../components/postlisting/PostListing";
import config from "../../data/SiteConfig";
const _ = require("lodash");

const CategoryTemplate = (props) => {
    const { category } = props.pageContext;
    const postEdges = props.data.allMarkdownRemark.edges;
    return (
      <Layout location={props.location}>
        <div className="category-container">
          <Helmet
            title={`${_.upperFirst(category)} | ${config.siteTitle}`}
          />
          <PostListing
            postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
  export default CategoryTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark: allMarkdownRemark(
      limit: 1000,
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            category
            date
            img {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, quality: 20)
              }
            }
          }
        }
      }
    }
  }
`;
