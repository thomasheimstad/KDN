import React from "react";
import Img from "gatsby-image";
import { useWindowDimensions } from '../context/WindowDimensionsProvider';
const Home = (props) => {
  const { windowHeight, windowWidth, footerHeight } = useWindowDimensions();
  let objectPos = () => {
    if(windowWidth < "768") {
      return "25% 0%"
    } else if(windowWidth < "999"){
      return "20% 0%"
    } else {
      return "80% 0"
    }
  }
  return (
    <div className="frontHero" style={{height: windowHeight}}>
      <Img
        fluid={props.firstImage}
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
         objectPosition: objectPos(),
         opacity: '1'
       }}
      />
    </div>
  )
}
export default Home;
