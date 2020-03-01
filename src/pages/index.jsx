import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import Nav from "../components/nav/Nav";
import NavHome from "../components/nav/NavHome";
import Seo from "../components/modules/Seo";
import config from "../../data/SiteConfig";
import Home from '../components/frontpage/Home';

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <NavHome />
        <Helmet title={config.siteTitle} />
        <Seo />
        <Home homeImage={this.props.data.file.childImageSharp.fluid}/>
      </Layout>
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
