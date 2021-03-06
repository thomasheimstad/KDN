import React, {useState} from 'react';
import config from '../../data/Siteconfig';
import {graphql} from 'gatsby';
import Heroimg from '../components/modules/Heroimg';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import Seo from '../components/modules/Seo';
import Engbio from '../components/bio/Engbio';
import Norbio from '../components/bio/Norbio';
import { Link, animateScroll as scroll } from "react-scroll";

const Bio = (props) => {
  const [stateLang, setStateLang] = useState('eng')
  let handleClick = () => {
    if(stateLang === "eng"){
      setStateLang("nor")
    } else {
      setStateLang("eng")
    }
  }
  return(
      <Layout location={props.location}>
        <Helmet>
          <title>{`Bio | ${config.siteTitle}`}</title>
        </Helmet>
        <Seo />
        <div className="frontBio flex center column basePadFullMobile">
          <Heroimg constrained={props.data.file.childImageSharp.gatsbyImageData} posY="50%" posX="30%" divider="1.66"/>
          <article className="biotext flex center column basePad">
           <div className="flex column flexStart" style={{width: '100%', paddingBottom: '1rem'}}>
             <h1>KARI DAHL NIELSEN</h1>
             <h2>MEZZO SOPRANO</h2>
           </div>
           {stateLang === "eng" ? <Engbio /> : <Norbio/>}
           <div className="flex row" style={{width: '100%', textAlign: 'left', padding: '0'}}>
             <div className={"button activeButton"}>
               <Link
                 to="biotext"
                 alt="To the top of the bio text article"
                 smooth={true}
                 duration={400}
                 style={{margin: 0, padding: 0}}
                 >
                  <p onClick={() => handleClick()}>{stateLang === "eng" ? "på norsk" : "in english"}</p>
                </Link>
              </div>
           </div>
         </article>
       </div>
     </Layout>
    )
  }
export default Bio;
export const query = graphql`
  query kariBioImageQuery {
    file(relativePath: { eq: "carmen3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
