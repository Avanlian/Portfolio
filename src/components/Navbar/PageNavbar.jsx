import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const PageNavbar = () => {
  return (
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          Portfolio
        </a>
        <div className={styles.menu}>
          <ul
            className={`${styles.menuItems}`}
          >
          </ul>
        </div>
      </nav>
  );
};
