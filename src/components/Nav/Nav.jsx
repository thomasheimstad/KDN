import React from 'react';
import {Link} from 'gatsby';

const Nav = (props) => {
  return(
    <div className={props.home ? "homeNav flex column" : "nav flex row center"}>
      <Link exact='true' to="/" activeClassName="activeNav">
        <h3>KARI</h3>
      </Link>
      <Link to="bio" activeClassName="activeNav">
        <h3>ABOUT</h3>
      </Link>
      <Link to="roles" activeClassName="activeNav">
        <h3>ROLES</h3>
      </Link>
      <Link to="gallery" activeClassName="activeNav">
        <h3>IMAGES</h3>
      </Link>
      {props.home ?
        <p>kari.dahl.nielsen@gmail.com</p>
      : null
      }
    </div>

  )
}
export default Nav;
