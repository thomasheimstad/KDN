import React, {useEffect, useState} from 'react';
import NavLinks from "./NavLinks";

const Nav = (props) => {
  const [scrolled, setScrolled] = useState(0);

  const listener = e => {
    setScrolled(window.pageYOffset)
  };

  useEffect(() => {

    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return(
    <div className={scrolled < 100 ? "nav" : 'nav navBackground'}>
      <NavLinks />
    </div>

  )
}
export default Nav;
