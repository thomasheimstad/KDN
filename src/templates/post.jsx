import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Seo from "../components/modules/Seo";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";
import Img from 'gatsby-image';

export default class PostTemplate extends React.Component {
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
      <Layout location={this.props.location}>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          {/*<Seo postPath={slug} postNode={postNode} postSEO />*/}
          <div>
            <h1>{post.title}</h1>
            <Img fluid={post.img.childImageSharp.fluid} />
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <UserInfo config={config} />
          </div>
        </div>
      </Layout>
    );
  }
}

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
              fluid(maxWidth: 1920, quality: 50) {
                ...GatsbyImageSharpFluid
            }
          }
        }
        date
        category
      }
      fields {
        slug
        date
      }
    }
  }
`;
