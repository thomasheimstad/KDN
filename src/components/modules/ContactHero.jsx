import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { useWindowDimensions } from '../context/WindowDimensionsProvider';
import ContactInfo from './ContactInfo';


const ContactHero = (props) => {
  const {windowHeight} = useWindowDimensions();
  return(
    <div className="frontHero contact" style={{height: windowHeight, width: '100%'}}>
      <GatsbyImage
       image={props.constrained}
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
          objectPosition: '50% 50%',
          opacity: '1'
        }}
       />
       <ContactInfo />
      </div>
  )
}
export default ContactHero;
