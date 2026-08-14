import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/controllerIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Unity Game Developer</h3>
              <p>
                A lot of my experience comes from making games in Unity. I’ve worked on everything from small prototypes and remakes to larger projects with more complex gameplay and technical challenges.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/programIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack</h3>
              <p>
                My experience with web development includes both client-side and server-side development. I’ve worked with React, JavaScript, HTML, CSS, and SQL, along with database design and management.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/servers.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Server and Networking</h3>
              <p>
                I’ve built and maintained a personal server, using Linux and Docker to host and manage a variety of services. I use open-source software extensively, and enjoy learning how to configure and maintain it.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/paintIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Creative</h3>
              <p>
                My experience extends beyond software development into a variety of creative fields. I’ve enjoyed working across both creative and technical disciplines, and I often find that the skills I develop in one influence how I approach the other.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
