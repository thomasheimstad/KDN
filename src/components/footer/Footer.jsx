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
            {`The Norwegian lyric mezzo soprano Kari Dahl Nielsen is perminent member of the soloist ensemble at The Royal Danish Opera (RDO) in Copenhagen. She is educated at the Royal Opera Academy with elite pedagogue Susanna Eken, Master of Music from The Royal Danish Academy of Music in Copenhagen, bachelor from the Grieg Academy in Bergen and Hochschule für Musik in Karlsruhe. Website: 
            ${config.copyright}
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
