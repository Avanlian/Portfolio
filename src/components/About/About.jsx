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
              <h3>Unity Developer</h3>
              <p>
                I’ve built multiple projects in Unity using C#, with a focus on writing scalable and maintainable code. My work includes designs for powerups, object pooling, and semi-procedural level generation, all made to encourage replayability and make future expansion easier.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/programIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Programmer</h3>
              <p>
                Background in algorithms, data structures, and object-oriented design, applied through both academic and personal projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/aiIcon.png")} alt="UI icon" />
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
