import React from 'react';
import {Link} from 'gatsby';
import { useWindowDimensions } from '../context/WindowDimensionsProvider';
import {animated, useTransition, config} from 'react-spring'

let data = [
    {
      name: 'Bio',
      link: '/bio'
    },
    {
      name: 'Gallery',
      link: '/gallery'
    },
    {
      name: 'Calendar',
      link: '/calendar'
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
    trail: 1200 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: [
      { opacity: 0.5, transform: 'scale(1)' },
      { opacity: 1 }
    ],
    leave: { opacity: 0, transform: 'scale(0)' },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  return(
     <div className="welcome flex center">
       <div className="flex row">
         {transitions.map(({item, props, key }, index) => (
           <animated.div
                key={data[index].name}
                className="trails-text"
                style={{ props }}>
                <animated.div style={ props }>
                  <Link to={data[index].link}><h3>{data[index].name}</h3></Link>
                </animated.div>
            </animated.div>
          ))}
      </div>
  </div>
)
}

export default Welcome;
