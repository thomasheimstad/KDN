import React, { Component } from "react";
import { Link } from "gatsby";
import NavLinks from '../nav/NavLinks';
import config from "../../../data/SiteConfig";

class Footer extends Component {
  render() {
    return (
      <footer className="footer flex center column basePad">
        <NavLinks/>
        <div className="flex column">
          <p>{config.siteDescription}</p>
          <p>{config.copyright}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
