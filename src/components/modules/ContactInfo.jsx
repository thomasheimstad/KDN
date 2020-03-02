import React from 'react';
import { useWindowDimensions } from '../context/WindowDimensionsProvider';
import {animated, useTransition, config} from 'react-spring';

let data = [
    {
      name: 'Contact',
    },
    {
      name: 'kari.dahl.nielsen@gmail.com'
    },
    {
      name: 'phone +47 977 88 645'
    },
    {
      name: 'www.facebook.com/karidahlnielsen'
    },
    {
      name: 'www.instagram.com/karidahlnielsen'
    }
]
const ContactInfo = () => {
  const { windowHeight, footerHeight } = useWindowDimensions();
  const transitions = useTransition(data, item => item.name, {
    unique: true,
    trail: 500 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  return(
     <div className="flex center column" style={{minHeight: windowHeight, zIndex: '1'}}>
       {transitions.map(({item, props, key }, index) => (
         <animated.div
              key={data[index].name}
              className="trails-text"
              style={{ props }}>
              <animated.div style={ props }>
                {
                  data[index].name.includes("facebook") || data[index].name.includes("instagram") ?
                  <a href={data[index].name}><h3>{data[index].name}</h3></a> :
                    <h3>{data[index].name}</h3>
                }
              </animated.div>
          </animated.div>
        ))}
  </div>
)
}

export default ContactInfo;
