import React from 'react';
import config from '../../data/SiteConfig';
import {graphql} from 'gatsby';
import HeroImg from '../components/Modules/HeroImg';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import SEO from '../components/SEO/SEO';
import EngBio from '../components/Bio/EngBio';
import NorBio from '../components/Bio/NorBio';

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
        <div className="frontBio flex center column basePadFullMobile">
          <HeroImg fluid={this.props.data.file.childImageSharp.fluid} posY="50%" posX="10%" divider="1.66"/>
          <article className="flex center column">
           <div className="flex column center basePad" style={{width: '100%', paddingBottom: '0'}}>
             <h1>KARI DAHL NIELSEN</h1>
             <h2>MEZZO SOPRANO</h2>
           </div>
           {this.state.lang === "eng" ? <EngBio fluid={this.props.data.file.childImageSharp.fluid}/> : <NorBio/>}
           <div className="flex center">
             <div className={this.state.lang === "eng" ? "button activeButton" : "button"} onClick={() => this.handleClick('eng')}><h3>english</h3></div>
             <div className={this.state.lang === "nor" ? "button activeButton" : "button"} onClick={() => this.handleClick('nor')}><h3>norwegian</h3></div>
           </div>
         </article>
       </div>
     </Layout>
    )
  }
}
export const query = graphql`
  query kariBioImageQuery {
    file(relativePath: { regex: "/KariCentered/" }) {
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
