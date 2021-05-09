import React from 'react';
import {FaInstagram, FaFacebookSquare, FaEnvelope} from 'react-icons/fa';
const Contactlist = () => (
  <div className="contactList flex center column">
    <div className="flex spaceAround row">
      <a href="#"><FaInstagram size={32} /></a>
      <a href="#"><FaFacebookSquare size={32}/></a>
    </div>
    <div>
      <h2>kari.dahl.nielsen@gmail.com</h2>
    </div>
  </div>
)
export default Contactlist;
