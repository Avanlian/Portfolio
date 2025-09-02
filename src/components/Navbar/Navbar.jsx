import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <HashLink smooth to="/#about">About</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#experience">Experience</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects">Projects</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact">Contact</HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
