import React, {useState} from 'react';
import {Link} from 'gatsby';
import {useWindowDimensions } from '../context/WindowDimensionsProvider';
import {animated, useTransition, useSpring, config} from 'react-spring'
import {FaInfo, FaCameraRetro, FaPhone, FaTheaterMasks} from 'react-icons/fa';
import {FaRegCalendarAlt} from "react-icons/fa";

let data = [
    {
      name: 'Bio',
      link: '/bio'
    },
    {
      name: 'Roles',
      link: '/roles'
    },
    {
      name: 'Gallery',
      link: '/gallery'
    },
    {
      name: 'Contact',
      link: '/contact'
    },
]
const Welcome = () => {
  const { windowHeight } = useWindowDimensions();
  const transitions = useTransition(data, item => item.name, {
    unique: true,
    trail: 1000 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: [
      { opacity: 0.1, transform: 'scale(1)' },
      { opacity: 1 }
    ],
    leave: { opacity: 0, transform: 'scale(0)' },
  })
  let buttonChooser = (x) => {
    if(x==="Bio"){
      return (<FaInfo size={24} />)
    }
    else if(x==="Roles"){
      return (<FaTheaterMasks size={24} />)
    }
    else if(x==="Gallery"){
      return (<FaCameraRetro size={24} />)
    }
    else {
      return (<FaPhone size={24} />)
    }
  }
  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  return(
     <div className="welcome flex column spaceBetween basePad">
      <h1>KARI DAHL NIELSEN</h1>
       <div className="buttons flex row center">
         {transitions.map(({item, props, key }, index) => (
           <animated.div
                key={data[index].name}
                className="trails-text"
                style={{ props }}>
                <animated.div style={ props }>
                  <Link to={data[index].link}>
                    <button className="button">{buttonChooser(data[index].name)}</button>
                  </Link>
                </animated.div>
            </animated.div>
          ))}
      </div>
  </div>
)
}

export default Welcome;
