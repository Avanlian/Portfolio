import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

export const PageNavbar = () => {
  return (
    <section> 
      <nav className={styles.navbar} id="page">
        <Link className={styles.title} to="/">Portfolio</Link>
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
