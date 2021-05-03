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
    let props = this.props;
    return (
      <Layout location={props.location}>
        <Helmet>
          <title>{`Bio | ${config.siteTitle}`}</title>
        </Helmet>
        <Seo />
        <div className="frontBio flex center column basePadFullMobile">
          <HeroImg fluid={this.props.data.file.childImageSharp.fluid} posY="50%" posX="30%" divider="1.66"/>
          <article className="flex center column basePad">
           <div className="flex column flexStart" style={{width: '100%', paddingBottom: '1rem'}}>
             <h1>KARI DAHL NIELSEN</h1>
             <h2>MEZZO SOPRANO</h2>
           </div>
           {this.state.lang === "eng" ? <EngBio /> : <NorBio/>}
           <div className="flex row" style={{width: '100%', textAlign: 'left', padding: '0'}}>
             <div className={"button activeButton"}>
             <p onClick={() => this.handleClick()}>
              {this.state.lang === "eng" ? "på norsk" : "in english"}
             </p></div>
           </div>
         </article>
       </div>
     </Layout>
    )
  }
}
export const query = graphql`
  query kariBioImageQuery {
    file(relativePath: { eq: "karicarmenpromo1.jpg" }) {
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
