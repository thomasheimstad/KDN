import React from 'react';
import { graphql } from 'gatsby';
import HeroImg from '../components/modules/HeroImg';
import config from '../../data/SiteConfig';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import Seo from '../components/modules/Seo';
import RolesList2 from '../components/bio/RolesList2';

const Roles = (props) => {
  return (
       <Layout location={props.location}>
         <Helmet>
           <title>{`Roles | ${config.siteTitle}`}</title>
         </Helmet>
         <Seo />
         <div className="frontRoles flex center column basePadFullMobile">
           <HeroImg constrained={props.data.file.childImageSharp.gatsbyImageData} posY="50%" posX='20%' divider="1.66"/>
           <RolesList2 />
         </div>
       </Layout>
     )
   }
export default Roles;
export const query = graphql`
  query kariRolesImageQuery {
    file(relativePath: { eq: "kariothello.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
