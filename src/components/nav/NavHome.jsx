import React from 'react';
import {Link} from 'gatsby';
import NavLinks from './NavLinks';

const NavHome = () => {
  return(
    <div className="flex homeNav column">
      <Link to="/" activeClassName="activeNav">
        <h3>KARI</h3>
      </Link>
      <Link to="/bio" activeClassName="activeNav">
        <h3>ABOUT</h3>
      </Link>
      <Link to="/roles" activeClassName="activeNav">
        <h3>ROLES</h3>
      </Link>
      <Link to="/gallery" activeClassName="activeNav">
        <h3>IMAGES</h3>
      </Link>
    </div>
  )
}
export default NavHome;
