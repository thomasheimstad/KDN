import React from "react";
import Helmet from "react-helmet";
const _ = require("lodash");
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location}>
        <div className="category-container">
          <Helmet
            title={`${_.upperFirst(category)} | ${config.siteTitle}`}
          />
          <PostListing
            postEdges={postEdges}
            calendarView={this.props.data.calendarView.childImageSharp.fluid} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark: allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            category
            img {
              childImageSharp {
                fixed(width: 340, height: 250) {
                  ...GatsbyImageSharpFixed
                }
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date
          }
        }
      }
    }
    calendarView: file(relativePath: { eq: "kari.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
