import React, { Component } from "react";
import { Link } from "gatsby";
import FooterNavLinks from '../nav/FooterNavLinks';
import SocialLinks from '../modules/SocialLinks';
import config from "../../../data/SiteConfig";

class Footer extends Component {
  render() {
    return (
      <footer className="footer flex center column basePad">
        <div className="impressumAndNav flex row flexStart basePad">
          <FooterNavLinks/>

          <div className="impressum" >
            <p>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ${config.copyright}
            `}
            </p>
          </div>
        </div>
        <div className="footerSocialLinks">
          <SocialLinks />
        </div>
      </footer>
    );
  }
}

export default Footer;
