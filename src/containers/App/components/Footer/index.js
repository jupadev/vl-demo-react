import React from 'react';



const Footer = () => {
  return (
    <footer className="mdl-mega-footer">
      <div className="mdl-mega-footer__middle-section">

        <div className="mdl-mega-footer__drop-down-section">
          <input className="mdl-mega-footer__heading-checkbox" type="checkbox" defaultChecked />
          <h1 className="mdl-mega-footer__heading">Features</h1>
          <ul className="mdl-mega-footer__link-list">
            <li><a href="#">About</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>

        <div className="mdl-mega-footer__drop-down-section">
          <input className="mdl-mega-footer__heading-checkbox" type="checkbox" defaultChecked />
          <h1 className="mdl-mega-footer__heading">Follow us</h1>
          <ul className="mdl-mega-footer__link-list">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>

        <div className="mdl-mega-footer__drop-down-section">
          <input className="mdl-mega-footer__heading-checkbox" type="checkbox" defaultChecked />
          <h1 className="mdl-mega-footer__heading">About us</h1>
          <ul className="mdl-mega-footer__link-list">
            <li><a href="#">How it works</a></li>
            <li><a href="#">Patterns</a></li>
            <li><a href="#">Usage</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contracts</a></li>
          </ul>
        </div>

        <div className="mdl-mega-footer__drop-down-section">
          <input className="mdl-mega-footer__heading-checkbox" type="checkbox" defaultChecked />
          <h1 className="mdl-mega-footer__heading">FAQ</h1>
          <ul className="mdl-mega-footer__link-list">
            <li><a href="#">Questions</a></li>
            <li><a href="#">Answers</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

      </div>

      <div className="mdl-mega-footer__bottom-section">
        <div className="mdl-logo">Viridis 2017</div>
        <ul className="mdl-mega-footer__link-list">
          <li><a href="#">Help</a></li>
          <li><a href="#">Privacy & Terms</a></li>
        </ul>
      </div>
    </footer>
  );
};
 
export default Footer;