import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import HeroImg from '../components/Modules/HeroImg';
import config from '../../data/SiteConfig';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import Seo from '../components/modules/Seo';
import RolesList from '../components/Bio/RolesList';
export default class Roles extends React.Component {
  render = () => {
    let props = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            file(relativePath: { regex: "/KariB.jpg/" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 1920, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
       render={data => (
         <Layout location={props.location}>
           <Helmet>
             <title>{`Roles | ${config.siteTitle}`}</title>
           </Helmet>
           <Seo />
           <div id="frontRoles" className="frontRoles flex center column basePadFullMobile">
             <HeroImg fluid={data.file.childImageSharp.fluid} posY="50%" posX='20%' divider="1.66"/>
             <RolesList />
           </div>
         </Layout>
       )}
      />
    )
  }
}
