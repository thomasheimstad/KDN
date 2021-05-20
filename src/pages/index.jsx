import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import Welcome from "../components/modules/Welcome";
import Seo from "../components/modules/Seo";
import config from "../../data/Siteconfig";
import Home from '../components/frontpage/Home';

const Index = (props) => {
  return (
    <Layout location={props.location}>
      {/*<NavHome />*/}
      <Welcome />
      <Helmet title={config.siteTitle} />
      <Seo />
      <Home
      firstImage={props.data.file.childImageSharp.gatsbyImageData}
      />
    </Layout>
  )
}
export default Index;
export const query = graphql`
  query kariHomeImageQuery {
    file(relativePath: { eq: "karicarmenpromo1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 80)
      }
    }
  }
`;
