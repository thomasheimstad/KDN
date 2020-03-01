import React from 'react';
import NavLinks from "./NavLinks";

const Nav = (props) => {
  return(
    <div className={props.home ? "homeNav flex column" : "nav flex row center"}>
      <NavLinks />
    </div>

  )
}
export default Nav;
