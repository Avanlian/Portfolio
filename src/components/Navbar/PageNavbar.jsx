import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const PageNavbar = () => {
  return (
    <section> 
      <nav className={styles.navbar} id="page">
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
    </section>
  );
};
