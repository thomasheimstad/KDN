import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Postlisting from "../components/postlisting/Postlisting";
import config from "../../data/Siteconfig";
const _ = require("lodash");

const Categorytemplate = (props) => {
    const { category } = props.pageContext;
    const postEdges = props.data.allMarkdownRemark.edges;
    return (
      <Layout location={props.location}>
        <div className="category-container">
          <Helmet
            title={`${_.upperFirst(category)} | ${config.siteTitle}`}
          />
          <Postlisting postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
  export default Categorytemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark: allMarkdownRemark(
      limit: 1000,
      filter: { frontmatter: { category: { eq: $category } } }
      sort: {
          fields: [frontmatter___date]
          order: DESC
        }
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
            photo
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
