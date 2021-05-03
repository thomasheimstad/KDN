import React from 'react';
import Img from "gatsby-image";
import { useWindowDimensions } from '../context/WindowDimensionsProvider';
import ContactInfo from './ContactInfo';


const ContactHero = (props) => {
  const {windowHeight} = useWindowDimensions();
  return(
    <div className="frontHero contact" style={{height: windowHeight, width: '100%'}}>
      <Img
       fluid={props.fluid}
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
          objectPosition: '50% 50%',
          opacity: '1'
        }}
       />
       <ContactInfo />
      </div>
  )
}
export default ContactHero;
