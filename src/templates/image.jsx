import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
const _ = require("lodash");
import ImageInfo from "../components/modules/ImageInfo";
import Seo from "../components/modules/Seo";
import config from "../../data/SiteConfig";

export default class ImageTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <Seo postPath={slug} postNode={postNode} postSEO />
        <Helmet>
          <title>{`${_.upperFirst(post.title)} | ${config.siteTitle}`}</title>
        </Helmet>
        <ImageInfo post={post} />
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ImagePostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        photo
        category
        img {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
            fixed(width: 6000, quality: 100) {
              src
            }
          }
        }
      }
      fields {
        slug
        date
      }
    }
  }
`;
