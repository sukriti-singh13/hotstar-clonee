import React from "react";
import Logo from "../assets/logo.svg";
import SearchIcon from "../assets/search-icon.svg";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  const [mobileNavStatus, setMobileNavStatus] = useState(false);
  const navOpenRef = useRef();

  const openNavbar = () => {
    setMobileNavStatus(true);
  };
  const closeNavbar = () => {
    setMobileNavStatus(false);
  };
  return (
    <>
      <div
        id="mySidenav"
        className={mobileNavStatus ? "sidenav  navbar-open" : "navbar-close"}
      >
        <a href="javascript:void(0)" className="closebtn" onClick={closeNavbar}>
          &times;
        </a>
        <a href="#">Channels</a>
        <a href="#">Language</a>
        <a href="#">Generes</a>
      </div>
      <nav>
        <div className="left-container">
          <div className="hamMenu" ref={navOpenRef} onClick={openNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="nav-logo" onClick={navigate("/")}>
            <img src={Logo} alt="logo" />
          </div>
          <div className="more-options">
            <p>TV</p>
            <p>Movies</p>
            <p>Sports</p>
            <p>Disney+</p>
            <img src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg" />
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
    </>
  );
};

export default Navbar;
