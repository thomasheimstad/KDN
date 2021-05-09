import React from 'react';
import {Link} from 'gatsby';
import {FaHome, FaInfo, FaCameraRetro, FaPhone, FaTheaterMasks} from 'react-icons/fa';

const FooterNavLinks = () => {
  return (
    <ul className="flex column flexStart">
      <li>
        <Link exact='true' to="/" activeClassName="activeNav" className="flex row center">
          <FaHome size={18} />
          <h3 style={{paddingLeft: '1rem'}}>Home</h3>
        </Link>
      </li>

      <li>
        <Link to="/bio" activeClassName="activeNav" className="flex row center">
          <FaInfo size={18} />
          <h3 style={{paddingLeft: '1rem'}}>Bio</h3>
        </Link>
      </li>
      <li>
        <Link to="/roles" activeClassName="activeNav" className="flex row center">
          <FaTheaterMasks size={18} />
          <h3 style={{paddingLeft: '1rem'}}>Roles</h3>
        </Link>
      </li>
      <li>
        <Link to="/gallery" activeClassName="activeNav" className="flex row center">
          <FaCameraRetro size={18} />
          <h3 style={{paddingLeft: '1rem'}}>Gallery</h3>
        </Link>
      </li>
      <li>
        <Link to="/contact" activeClassName="activeNav" className="flex row center">
          <FaPhone size={18} />
          <h3 style={{paddingLeft: '1rem'}}>Contact</h3>
        </Link>
      </li>
    </ul>
  )
}
export default FooterNavLinks;
