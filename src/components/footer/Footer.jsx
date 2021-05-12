import React, { Component } from "react";
import Footernavlinks from '../nav/Footernavlinks';
import Sociallinks from '../modules/Sociallinks';
import config from "../../../data/Siteconfig";

const Footer = () => {
    return (
      <footer className="footer flex center column basePad">
        <div className="impressumAndNav flex row flexStart">
          <Footernavlinks/>

          <div className="impressum" >
            <p>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ${config.copyright}
            `}
            </p>
          </div>
        </div>
        <div className="footerSocialLinks">
          <Sociallinks />
        </div>
      </footer>
    );
  }

export default Footer;
