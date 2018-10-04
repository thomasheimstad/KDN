import React from "react";
import config from '../../data/SiteConfig';
import Layout from "../components/layout";
import Helmet from 'react-helmet';
import SEO from '../components/SEO/SEO';
import EngBio from "../components/bio/EngBio";
import NorBio from "../components/bio/NorBio";

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
        <article className="frontBio flex center column basePad" style={{background: 'linear-gradient(#3a4058,#353238)'}}>
          <h1 style={{textAlign: 'center', marginTop: '1rem', fontWeight: '100'}}>KARI DAHL NIELSEN</h1>
          <h3 className="hug" style={{color: 'grey'}}>mezzosoprano</h3>
          {this.state.lang === "eng" ? <EngBio/> : <NorBio/>}
          <div className="flex center">
            <div className={this.state.lang === "eng" ? "button activeButton" : "button"} onClick={() => this.handleClick('eng')}><h4>english</h4></div>
            <div className={this.state.lang === "nor" ? "button activeButton" : "button"} onClick={() => this.handleClick('nor')}><h4>norwegian</h4></div>
          </div>
        </article>
    </Layout>
    )
  }
}
