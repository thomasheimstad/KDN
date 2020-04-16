import React from 'react';
import config from '../../data/SiteConfig';
import {graphql} from 'gatsby';
import HeroImg from '../components/modules/HeroImg';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import Seo from '../components/modules/Seo';
import EngBio from '../components/bio/EngBio';
import NorBio from '../components/bio/NorBio';

export default class Bio extends React.Component {
  state = {
    lang: 'eng'
  }
  handleClick = () => {
    if(this.state.lang === "eng"){
      this.setState({
        lang: "nor"
      })
    } else {
      this.setState({
        lang: "eng"
      })
    }
  }
  render = () => {
    return (
      <Layout location={location}>
        <Helmet>
          <title>{`Bio | ${config.siteTitle}`}</title>
        </Helmet>
        <Seo />
        <div className="frontBio flex center column basePadFullMobile">
          <HeroImg fluid={this.props.data.file.childImageSharp.fluid} posY="50%" posX="30%" divider="1.66"/>
          <article className="flex center column basePad">
           <div className="flex column center" style={{width: '100%', paddingBottom: '2.5rem'}}>
             <h1>KARI DAHL NIELSEN</h1>
             <h2>MEZZO SOPRANO</h2>
           </div>
           {this.state.lang === "eng" ? <EngBio /> : <NorBio/>}
           <div className="flex center">
             <div className={"button activeButton"}><h3 onClick={() => this.handleClick()} >{this.state.lang === "eng" ? "på norsk" : "in english"}</h3></div>
           </div>
         </article>
       </div>
     </Layout>
    )
  }
}
export const query = graphql`
  query kariBioImageQuery {
    file(relativePath: { eq: "KariCherubino.jpg" }) {
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
