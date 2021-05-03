import React, {useState, useEffect} from 'react';
import { graphql } from "gatsby";
import config from '../../data/SiteConfig';
import Layout from "../components/layout";
import Helmet from 'react-helmet';
import Seo from '../components/modules/Seo';
import ContactHero from "../components/modules/ContactHero";

const Contact = (props) => {
  const [scrollPosition, setScrollPosition] = useState();
  useEffect(() => {
  if (typeof window !== 'undefined' && window.scrollY !== 0) {
    setScrollPosition(window.scrollY);
  }
}, []);
  return (
    <Layout location={props.location}>
      <Helmet>
        <title>{`CONTACT | ${config.siteTitle}`}</title>
      </Helmet>
      <Seo />

        <ContactHero fluid={props.data.file.childImageSharp.fluid} />
     </Layout>
   )
 }
export default Contact;
export const query = graphql`
  query kariContactImageQuery {
    file(relativePath: { eq: "KariF.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
