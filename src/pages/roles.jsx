import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import config from '../../data/SiteConfig';
import Layout from "../components/layout";
import Helmet from 'react-helmet';
import SEO from '../components/SEO/SEO';
import FrontRolesFullList from "../components/bio/FrontRolesFullList";
export default class Roles extends React.Component {
  state = {
    fullList: false
  }
  handleClick = () => {
    this.setState({
      fullList: !this.state.fullList
    })
  }
  render = () => {
    let props = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            file(relativePath: { regex: "/KariRightRight/" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 1920, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
       render={data => (
         <Layout location={props.location}>
           <Helmet>
             <title>{`ROLES | ${config.siteTitle}`}</title>
           </Helmet>
           <SEO />
           <div id="frontRoles" className="frontRoles flex center">
             <Img
               fluid={data.file.childImageSharp.fluid}
               style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                zIndex: "-1",
                background: 'black'
              }}
              imgStyle={{
                objectPosition: '80% 0',
                opacity: '1'
              }}
             />
             <FrontRolesFullList />
           </div>
         </Layout>
       )}
      />
    )
  }
}
