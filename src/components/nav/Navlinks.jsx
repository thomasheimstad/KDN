import React from 'react';
import {Link} from 'gatsby';
import {FaHome, FaInfo, FaCameraRetro, FaPhone, FaTheaterMasks, FaRegCalendarAlt} from 'react-icons/fa';

const NavLinks = () => {
  return (
    <ul className="flex basePad">
      <li>
        <Link to="/bio/" activeClassName="activeNav">
          <FaInfo size={34} />
        </Link>
      </li>
      <li>
        <Link to="/calendar/" activeClassName="activeNav">
          <FaRegCalendarAlt size={34} />
        </Link>
      </li>
      <li>
        <Link to="/roles/" activeClassName="activeNav">
          <FaTheaterMasks size={34} />
        </Link>
      </li>
      <li>
        <Link to="/gallery/" activeClassName="activeNav">
          <FaCameraRetro size={34} />
        </Link>
      </li>
      <li>
        <Link to="/contact/" activeClassName="activeNav">
          <FaPhone size={34} />
        </Link>
      </li>
    </ul>
  )
}
export default NavLinks;
