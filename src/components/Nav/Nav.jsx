import React from 'react';
import {Link} from 'gatsby';

const Nav = (props) => {
  return(
    <div className={props.home ? "homeNav flex column" : "nav flex row spaceAround"}>
      {props.home ? null :
        <Link exact='true' to="/" activeClassName="activeNav">
        <h3>HOME</h3>
      </Link> }
      <Link to="bio" activeClassName="activeNav">
        <h3>BIO</h3>
      </Link>
      <Link to="roles" activeClassName="activeNav">
        <h3>ROLES</h3>
      </Link>
      <Link to="gallery" activeClassName="activeNav">
        <h3>PICTURES</h3>
      </Link>
      <Link to="contact" activeClassName="activeNav">
        <h3>CONTACT</h3>
      </Link>
    </div>

  )
}
export default Nav;
