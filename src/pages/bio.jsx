import React from 'react';
import config from '../../data/SiteConfig';
import {graphql} from 'gatsby';
import HeroImg from '../components/modules/HeroImg';
import {FaInstagram, FaFacebookSquare} from 'react-icons/fa';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import SEO from '../components/SEO/SEO';
import EngBio from '../components/bio/EngBio';
import NorBio from '../components/bio/NorBio';

export default class Bio extends React.Component {
  state = {
    lang: 'eng'
  }
  handleClick = (ref) => {
    this.setState({
      lang: ref
    })
  }
  render = () => {
    return (
      <Layout location={this.props.location}>
        <Helmet>
          <title>{`BIO | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO />
        <article className="frontBio flex center column basePadFullMobile">
          <HeroImg fluid={this.props.data.file.childImageSharp.fluid} posY="25%" posX="10%" divider="1.66"/>
         <div className="flex column center basePad" style={{width: '100%', paddingBottom: '0'}}>
           <h1>KARI DAHL NIELSEN</h1>
           <h2>mezzo soprano</h2>
           <h2><a href="#"><FaInstagram /></a> <a href="#"><FaFacebookSquare /></a></h2>
         </div>
         {this.state.lang === "eng" ? <EngBio fluid={this.props.data.file.childImageSharp.fluid}/> : <NorBio/>}
         <div className="flex center">
           <div className={this.state.lang === "eng" ? "button activeButton" : "button"} onClick={() => this.handleClick('eng')}><h3>english</h3></div>
           <div className={this.state.lang === "nor" ? "button activeButton" : "button"} onClick={() => this.handleClick('nor')}><h3>norwegian</h3></div>
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
