import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Imageinfo from "../components/modules/Imageinfo";
import Seo from "../components/modules/Seo";
import config from "../../data/SiteConfig";
const _ = require("lodash");

const Imagetemplate = (props) => {
  const { slug } = props.pageContext;
  const postNode = props.data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }
  if (!post.category_id) {
    post.category_id = config.postDefaultCategoryID;
  }
  return (
    <Layout location={props.location}>
      <Seo postPath={slug} postNode={postNode} postSEO />
      <Helmet>
        <title>{`${_.upperFirst(post.title)} | ${config.siteTitle}`}</title>
      </Helmet>
      <Imageinfo post={post} />
    </Layout>
  );
}
export default Imagetemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ImagePostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        photo
        category
        img {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, quality: 80)

          }
        }
      }
    }
  }
`;
