import React, {useEffect, useState} from 'react';
import Navlinks from "./Navlinks";

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
      <Navlinks />
    </div>

  )
}
export default Nav;
