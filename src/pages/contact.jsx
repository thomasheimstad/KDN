import React from 'react';
import { graphql } from "gatsby";
import config from '../../data/SiteConfig';
import Layout from "../components/layout";
import Helmet from 'react-helmet';
import Seo from '../components/modules/Seo';
import ContactHero from "../components/modules/ContactHero";

const Contact = (props) => {
  return (
    <Layout location={props.location}>
      <Helmet>
        <title>{`CONTACT | ${config.siteTitle}`}</title>
      </Helmet>
      <Seo />

        <ContactHero constrained={props.data.file.childImageSharp.gatsbyImageData} />
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
