import React from 'react';
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import {IoMdMail} from 'react-icons/io';

let data = [
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
const Contactinfo = () => {
  let buttonChooser = (x) => {
    if(x==="kari.dahl.nielsen@gmail.com"){
      return (<IoMdMail size={24} />)
    }
    else if(x==="facebook.com/karidahlnielsen"){
      return (<FaFacebook size={24} />)
    }
    else {
      return (<FaInstagram size={24} />)
    }
  }
  return(
   <div className="contactInfo flex center column basePad">
      <div className="contactInfoWrapper flex center column">
        <a href={data[0].link} className="contactRow flex center row" target="_blank" rel="noreferrer">
          {buttonChooser(data[0].name)}<h3>{data[0].name}</h3>
        </a>
        <a href={data[1].link} className="contactRow flex center row" target="_blank" rel="noreferrer">
          {buttonChooser(data[1].name)}<h3>{data[1].name}</h3>
        </a>
        <a href={data[2].link} className="contactRow flex center row" target="_blank" rel="noreferrer">
          {buttonChooser(data[2].name)}<h3>{data[2].name}</h3>
        </a>
    </div>
  </div>
)
}

export default Contactinfo;
