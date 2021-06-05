import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Imageinfo from "../components/modules/Imageinfo";
import Seo from "../components/modules/Seo";
import config from "../../data/Siteconfig";
import {ModalRoutingContext} from 'gatsby-plugin-modal-routing-3';
import ConditionalLayout from '../components/conditionallayout';
const _ = require("lodash");

const Imagetemplate = (props) => {
  const {slug} = props.pageContext;
  const postNode = props.data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }
  if (!post.category_id) {
    post.category_id = config.postDefaultCategoryID;
  }

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <ConditionalLayout location={props.location}>
            <Seo postPath={slug} postNode={postNode} postSEO />
            <Helmet>
              <title>{`${_.upperFirst(post.title)} | ${config.siteTitle}`}</title>
            </Helmet>
            <Imageinfo post={post} location={props.location} pageContext={props.pageContext}/>
          </ConditionalLayout>
        )
      }
    </ModalRoutingContext.Consumer>
  )
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
        date
        photo
        category
        tags
        opera
        role
        house
        download
        img {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, quality: 70)

          }
        }
      }
    }
  }
`;
