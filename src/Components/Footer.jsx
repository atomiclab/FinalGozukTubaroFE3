import React from 'react'
import { img } from '../Utils/constants';
import "../Styles/footer.css"

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <img src={img.logo} alt="DH-logo" className="logo" />
      <div className="social-icons">
        <img src={img.icofb} alt="FB" className="fIco" />
        <img src={img.icoig} alt="IG" className="fIco" />
        <img src={img.icotk} alt="TK" className="fIco" />
        <img src={img.icowp} alt="WP" className="fIco" />
      </div>
    </footer>
  );
};

export default Footer;
