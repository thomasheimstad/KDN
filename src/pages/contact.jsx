import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import {FaInstagram} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import config from '../../data/SiteConfig';
import Layout from "../components/layout";
import Helmet from 'react-helmet';
import Seo from '../components/modules/Seo';

const Contact = (props) => (
  <StaticQuery
    query={graphql`
      query Img{
        file(relativePath: { regex: "/KariD/" }) {
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
         <title>{`CONTACT | ${config.siteTitle}`}</title>
       </Helmet>
       <Seo />
       <div id="frontContact" className="frontHero" style={{height: '400px'}}>
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
            objectPosition: '30% 40%',
            opacity: '1'
          }}
         />
         <div className="flex center column basePad" style={{height: '100%'}}>
           <div className="flex spaceBetween" style={{alignSelf: 'flex-end', width: '3rem'}}>
             <h5 style={{color: '#fefd', alignSelf: 'flex-end', fontFamily: 'Noto Sans'}}><FaInstagram /></h5>
             <h5 style={{color: '#fefd', alignSelf: 'flex-end', fontFamily: 'Noto Sans'}}><FaFacebook /></h5>
           </div>
          <h5 style={{color: '#fefd', alignSelf: 'flex-end', fontFamily: 'Noto Sans', fontSize: '70%'}}>kari.dahl.nielsen@gmail.com</h5>
         </div>
       </div>
     </Layout>
   )}
 />
)
export default Contact;
