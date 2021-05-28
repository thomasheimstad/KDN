import React from 'react';
import {FaFacebook, FaInstagram} from 'react-icons/fa';

const Sociallinks = () => {
  return(
    <ul className="buttons flex row center">
    <li>
      <a href="https://www.facebook.com/kari.d.nielsen" target="_blank" rel="noreferrer">
        <button><FaFacebook size={16} /></button>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/kari.dahl.nielsen" target="_blank" rel="noreferrer">
        <button><FaInstagram size={16} /></button>
      </a>
    </li>
    </ul>
  )
}
export default Sociallinks;
