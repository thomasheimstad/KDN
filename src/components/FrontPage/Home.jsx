import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
const Home = (props) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { regex: "/kari/" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
   render={data => (
     <div className="frontHero" style={{height: '100%'}}>
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
          objectPosition: '40% 40%',
          opacity: '1'
        }}
       />
     </div>
   )}
 />
)
export default Home;
