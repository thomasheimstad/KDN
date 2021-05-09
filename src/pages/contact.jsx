import React from 'react';
import { graphql } from "gatsby";
import config from '../../data/Siteconfig';
import Layout from "../components/layout";
import Helmet from 'react-helmet';
import Seo from '../components/modules/Seo';
import Contacthero from "../components/modules/Contacthero";

const Contact = (props) => {
  return (
    <Layout location={props.location}>
      <Helmet>
        <title>{`CONTACT | ${config.siteTitle}`}</title>
      </Helmet>
      <Seo />

        <Contacthero constrained={props.data.file.childImageSharp.gatsbyImageData} />
     </Layout>
   )
 }
export default Contact;
export const query = graphql`
  query kariContactImageQuery {
    file(relativePath: { eq: "KariF.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
