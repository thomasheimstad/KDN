import React from 'react';
import {Link} from 'gatsby';
import {FaInfo, FaCameraRetro, FaPhone, FaTheaterMasks} from 'react-icons/fa';

const Welcome = () => {
  let data = [
      {
        name: 'Bio',
        link: '/bio/'
      },
      {
        name: 'Roles',
        link: '/roles/',
      },
      {
        name: 'Gallery',
        link: '/gallery/',
      },
      {
        name: 'Contact',
        link: '/contact/',
      },
  ]
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
         <Link to={data[0].link}>
           <button className="button">{buttonChooser(data[0].name)}</button>
         </Link>
         <Link to={data[1].link}>
           <button className="button">{buttonChooser(data[1].name)}</button>
         </Link>
         <Link to={data[2].link}>
           <button className="button">{buttonChooser(data[2].name)}</button>
         </Link>
         <Link to={data[3].link}>
           <button className="button">{buttonChooser(data[3].name)}</button>
         </Link>
       </div>
    </div>
  )
}

export default Welcome;
