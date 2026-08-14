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
                A lot of my experience comes from making games in Unity. I enjoy the combination of programming, design, and creative problem-solving that comes with game development. I’ve worked on everything from small prototypes and remakes to larger projects with more complex gameplay and technical challenges.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/programIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack</h3>
              <p>
                My experience with web development includes both client-side and server-side development. I’ve worked with React, JavaScript, HTML, CSS, and SQL, along with database design and management, REST APIs, data processing, networking, and concurrent programming.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/servers.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>AI & Automation</h3>
              <p>
                Hands-on experience with building AI-powered chatbots and automation pipelines, focusing on memory, adaptability, recall, and real-time user interaction.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/paintIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Designer and Builder</h3>
              <p>
                Passionate about creativity and software engineering, I design experiences that encourage experimentation, exploration, and play. I enjoy turning ideas into interactive games, approaching design as both a technical and creative challenge.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
