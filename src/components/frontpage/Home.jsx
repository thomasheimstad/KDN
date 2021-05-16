import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useWindowDimensions } from '../context/WindowDimensionsProvider';
const Home = (props) => {
  const { windowHeight, windowWidth } = useWindowDimensions();
  let objectPos = () => {
    if(windowWidth < "768") {
      return "25% 0%"
    } else if(windowWidth < "999"){
      return "20% 50%"
    } else {
      return "100% 100%"
    }
  }
  return (
    <div className="frontHero" style={{height: '100%', width: '100%'}}>
      <GatsbyImage
        image={props.firstImage}
        alt=""
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: "100%",
          height: '100%',
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
