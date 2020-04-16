import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import Nav from "../components/nav/Nav";
import Welcome from "../components/modules/Welcome";
import NavHome from "../components/nav/NavHome";
import Seo from "../components/modules/Seo";
import config from "../../data/SiteConfig";
import Home from '../components/frontpage/Home';
import Footer from '../components/footer/Footer';

const Index = (props) => {
  return (
    <Layout location={location}>
      {/*<NavHome />*/}
      <Welcome />
      <Helmet title={config.siteTitle} />
      <Seo />
      <Home
      firstImage={props.data.firstImage.childImageSharp.fluid}
      />
    </Layout>
  )
}
export default Index;
export const query = graphql`
  query kariHomeImageQuery {
    firstImage: file(relativePath: { eq: "karicarmenpromo1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
