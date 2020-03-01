import React, {Fragment} from 'react';
import {Link} from 'gatsby';

const NavLinks = () => {
  return (
    <ul>
      <li>
        <Link exact='true' to="/" activeClassName="activeNav">
          <h3>KARI</h3>
        </Link>
      </li>

      <li>
        <Link to="/bio" activeClassName="activeNav">
          <h3>ABOUT</h3>
        </Link>
      </li>
      <li>
        <Link to="/roles" activeClassName="activeNav">
          <h3>ROLES</h3>
        </Link>
      </li>
      <li>
        <Link to="/gallery" activeClassName="activeNav">
          <h3>IMAGES</h3>
        </Link>
      </li>
    </ul>
  )
}
export default NavLinks;
