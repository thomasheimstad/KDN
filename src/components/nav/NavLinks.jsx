import React, {Fragment} from 'react';
import {Link} from 'gatsby';
import {FaHome, FaInfo, FaCameraRetro, FaPhone, FaTheaterMasks} from 'react-icons/fa';
import {IoMdCalendar} from 'react-icons/io';

const NavLinks = () => {
  return (
    <ul className="flex basePad">
      <li>
        <Link exact='true' to="/" activeClassName="activeNav">
          <FaHome size={34} />
        </Link>
      </li>

      <li>
        <Link to="/bio" activeClassName="activeNav">
          <FaInfo size={34} />
        </Link>
      </li>
      <li>
        <Link to="/roles" activeClassName="activeNav">
          <FaTheaterMasks size={34} />
        </Link>
      </li>
      <li>
        <Link to="/gallery" activeClassName="activeNav">
          <FaCameraRetro size={34} />
        </Link>
      </li>
      <li>
        <Link to="/contact" activeClassName="activeNav">
          <FaPhone size={34} />
        </Link>
      </li>
    </ul>
  )
}
export default NavLinks;
