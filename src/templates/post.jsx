import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/modules/Seo";
import config from "../../data/SiteConfig";

const Posttemplate = (props) => {
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
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <Seo postPath={slug} postNode={postNode} postSEO />
        <div>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </div>
      </div>
    </Layout>
  );
}
export default Posttemplate;
/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        img {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        date
        category
      }
      fields {
        slug
      }
    }
  }
`;
