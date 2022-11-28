import React from "react";
import Logo from "../assets/logo.svg";
import SearchIcon from "../assets/search-icon.svg";
const Navbar = () => {
  return (
    <nav>
      <div className="left-container">
        <div className="hamMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="nav-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="more-options">
          <p>TV</p>
          <p>Movies</p>
          <p>Sports</p>
          <p>Disney+</p>
     <img src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg"/>
        </div>
      </div>
      <div className="right-container">
        <div className="search-box">
          <input placeholder="Search" />
          <img src={SearchIcon} alt="search-icon" />
        </div>
        <button className="subscribe">Subscribe</button>
        <p className="login">LOGIN</p>
      </div>
    </nav>
  );
};

export default Navbar;
