import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const handleClick = () => {
    setScrolled(true);
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    const header = document.querySelector(".header");
    const fadeElems = document.querySelectorAll(".has-fade");

    if (open === false) {
      body.classList.remove("noscroll");
      header.classList.remove("open");
      fadeElems.forEach(function (element) {
        element.classList.remove("fade-in");
        element.classList.add("fade-out");
      });
    } else {
      body.classList.add("noscroll");
      header.classList.add("open");
      fadeElems.forEach(function (element) {
        element.classList.remove("fade-out");
        element.classList.add("fade-in");
      });
    }
  }, [open]);
  return (
    <header className="header">
      <div className="overlay has-fade"></div>
      <nav className={scrolled ? "scrolled" : ""}>
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" />
        </Link>
        <div
          id="btnHamburger"
          className="header__toggle hide-for-desktop"
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="header__links hide-for-mobile">
          <Link
            to="/"
            className={
              activeLink === "home" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("home")}
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className={
              activeLink === "blogs" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("blogs")}
          >
            Blogs
          </Link>
          <Link
            to="/about"
            onClick={() => onUpdateActiveLink("about")}
            className={
              activeLink === "about" ? "active navbar-link" : "navbar-link"
            }
          >
            About Us
          </Link>
          <Link to="/create" className="nav-btn">
            Create Post
          </Link>
        </div>
        <div className="header__menu has-fade">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/blogs" onClick={() => setOpen(false)}>
            Blogs
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About Us
          </Link>
          <Link to="/create" onClick={() => setOpen(false)} className="nav-btn">
            Create Post
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
