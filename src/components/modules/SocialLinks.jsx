import React from 'react';
import {Link} from 'gatsby';
import {FaFacebook, FaInstagram} from 'react-icons/fa';

const Sociallinks = () => {
  return(
    <ul className="buttons flex row center">
    <li>
      <Link exact='true' to="/" >
        <button><FaFacebook size={16} /></button>
      </Link>
    </li>
    <li>
      <Link exact='true' to="/" >
        <button><FaInstagram size={16} /></button>
      </Link>
    </li>
    </ul>
  )
}
export default Sociallinks;
