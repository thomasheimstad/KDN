import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import Nav from "../components/Nav/Nav";
import SEO from "../components/seo/SEO";
import config from "../../data/SiteConfig";
import Home from '../components/FrontPage/Home';
import WindowDimensionsProvider from '../components/context/WindowDimensionsProvider';

class Index extends React.Component {
  render() {
    return (
      <>
        <Nav home/>
        <Helmet title={config.siteTitle} />
        <SEO />
        <WindowDimensionsProvider>
          <Home homeImage={this.props.data.file.childImageSharp.fluid}/>
        </WindowDimensionsProvider>
      </>
    );
  }
}
export default Index;
export const query = graphql`
  query kariHomeImageQuery {
    file(relativePath: { regex: "/kari/" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
