import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import Nav from "../components/Nav/Nav";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Home from '../components/FrontPage/Home';

class Index extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
          <Helmet title={config.siteTitle} />
          <SEO />
          <Home parentState={this.props.state}/>
      </Layout>
    );
  }
}
export default Index;
