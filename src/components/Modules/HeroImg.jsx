import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { useWindowDimensions } from '../context/WindowDimensionsProvider'

const HeroImg = (props) => {
  const { windowHeight } = useWindowDimensions();
    return (
      <div style={{position: 'relative', height: windowHeight/props.divider, width: '100%', borderRadius: '5%'}}>
        <GatsbyImage image={props.constrained} alt="" style={{
         position: 'absolute',
         left: 0,
         top: 0,
         width: "100%",
         height: "100%",
         zIndex: "-1"
       }}
       imgStyle={{
         objectPosition: `${props.posY} ${props.posX}`,
         opacity: '1'
       }} />
   </div>
    )
  }
export default HeroImg;
