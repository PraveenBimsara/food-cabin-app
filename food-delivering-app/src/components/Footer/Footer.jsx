import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className="nav-logo">FoodCabin</h1>
          <p>
            Your go-to app for delicious meals delivered right to your door.
            Whether you're craving a quick snack or a gourmet feast, FoodCabin
            connects you with the best local restaurants and eateries. Fresh,
            fast, and flavorful – let us bring the joy of dining to you. Follow
            us on social media for updates and special offers!
          </p>
          <div className="footer-social-icons">
          <img src={assets.facebook_icon} alt="" />
           <img src={assets.twitter_icon} alt="" />
           <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+94 78 5890 185</li>
            <li>praveenbimsara99@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ FoodCabin - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
