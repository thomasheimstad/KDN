import React from 'react';
import {Link} from 'gatsby';
import { useWindowDimensions } from '../context/WindowDimensionsProvider';
import {animated, useTransition, config} from 'react-spring';
import {FaFacebook, FaPhone, FaInstagram} from 'react-icons/fa';
import {IoMdMail} from 'react-icons/io';

let data = [
    {
      name: '+47 977 88 645',
      link: 'tel:+4797788645'
    },
    {
      name: 'kari.dahl.nielsen@gmail.com',
      link: 'mailto:kari.dahl.nielsen@gmail.com'
    },
    {
      name: 'facebook.com/karidahlnielsen',
      link: 'https://www.facebook.com/karidahlnielsen'
    },
    {
      name: 'instagram.com/karidahlnielsen',
      link: 'https://www.instagram.com/karidahlnielsen'
    }
]
const ContactInfo = () => {
  const { windowHeight, footerHeight } = useWindowDimensions();
  const transitions = useTransition(data, item => item.name, {
    unique: true,
    trail: 1200 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })
  let buttonChooser = (x) => {
    if(x==="+47 977 88 645"){
      return (<FaPhone size={24} />)
    }
    else if(x==="kari.dahl.nielsen@gmail.com"){
      return (<IoMdMail size={24} />)
    }
    else if(x==="facebook.com/karidahlnielsen"){
      return (<FaFacebook size={24} />)
    }
    else {
      return (<FaInstagram size={24} />)
    }
  }
  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  return(
   <div className="contactInfo flex center column basePad">
      <div className="contactInfoWrapper flex center column">
      {transitions.map(({item, props, key }, index) => (
       <animated.div
            key={data[index].name}
            className="trails-text"
            style={{ props }}>
            <animated.div style={ props }>
              {
                data[index].name.includes("facebook") || data[index].name.includes("instagram") || data[index].name.includes("gmail") || data[index].name.includes("977") ?
                <a href={data[index].link} className="contactRow flex center row" target="_blank">
                  {buttonChooser(data[index].name)}<h3>{data[index].name}</h3>
                </a> :
                  <h3>{data[index].name}</h3>
              }
            </animated.div>
        </animated.div>
      ))}
    </div>
  </div>
)
}

export default ContactInfo;
