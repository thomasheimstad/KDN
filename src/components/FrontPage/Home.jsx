import React from "react";
import Img from "gatsby-image";
import { useWindowDimensions } from '../context/WindowDimensionsProvider';
const Home = (props) => {
  const { windowHeight, windowWidth, footerHeight } = useWindowDimensions();
  return (
    <div className="frontHero" style={{height: windowHeight}}>
      <Img
        fluid={props.homeImage}
        style={{
         position: 'absolute',
         left: 0,
         top: 0,
         width: "100%",
         height: windowHeight,
         zIndex: "-1",
         background: 'black'
       }}
       imgStyle={{
         objectPosition: '40% 40%',
         opacity: '1'
       }}
      />
    </div>
  )
}
export default Home;
