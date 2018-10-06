import React from "react";
import config from '../../data/SiteConfig';
import {graphql} from 'gatsby';
import Img from "gatsby-image";

import Layout from "../components/layout";
import Helmet from 'react-helmet';
import SEO from '../components/SEO/SEO';
import EngBio from "../components/bio/EngBio";
import NorBio from "../components/bio/NorBio";

export default class Bio extends React.Component {
  state = {
    lang: 'eng',
    windowHeight: '',
    windowWidth: '',
  }
  handleClick = (ref) => {
    this.setState({
      lang: ref
    })
  }
  handleResize = () => {
    let w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;
        this.setState({
          windowWidth: x,
          windowHeight: y
        })
  }
  componentDidMount = () => {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleResize);
  }
  render = () => {
    return (
      <Layout location={this.props.location}>
        <Helmet>
          <title>{`BIO | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO />
        <article className="frontBio flex center column basePadFullMobile">
          <div style={{position: 'relative', height: this.state.windowHeight/1.66, width: '100%'}}>
            <Img fluid={this.props.data.file.childImageSharp.fluid} style={{
             position: 'absolute',
             left: 0,
             top: 0,
             width: "100%",
             height: "100%",
             zIndex: "-1",
           }}
           imgStyle={{
             objectPosition: '25% 0',
             opacity: '1'
           }} />
         </div>
         <div className="flex column center basePad" style={{width: '100%', paddingBottom: '0'}}>
           <h1>KARI DAHL NIELSEN</h1>
           <h2>mezzo soprano</h2>
         </div>
         {this.state.lang === "eng" ? <EngBio fluid={this.props.data.file.childImageSharp.fluid}/> : <NorBio/>}
         <div className="flex center">
           <div className={this.state.lang === "eng" ? "button activeButton" : "button"} onClick={() => this.handleClick('eng')}><h4>english</h4></div>
           <div className={this.state.lang === "nor" ? "button activeButton" : "button"} onClick={() => this.handleClick('nor')}><h4>norwegian</h4></div>
         </div>
       </article>
     </Layout>
    )
  }
}
export const query = graphql`
  query kariBioImageQuery {
    file(relativePath: { regex: "/KariLeft/" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
