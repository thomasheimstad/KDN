import React, { Component } from "react";
import Footernavlinks from '../nav/Footernavlinks';
import Sociallinks from '../modules/Sociallinks';
import config from "../../../data/Siteconfig";

const Footer = () => {
    return (
      <footer className="footer flex center column basePad">
        <div className="impressumAndNav flex column center basePad">
          <Footernavlinks/>
        </div>
        <div className="footerSocialLinks">
          <Sociallinks />
        </div>
        <div className="impressum" >
        <p>
        {`${config.copyright}`}
        </p>
        </div>
      </footer>
    );
  }

export default Footer;
