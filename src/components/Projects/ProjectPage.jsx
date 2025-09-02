import React from "react";
import styles from "./ProjectPage.module.css";

// Pass images, title, description, and links as props
export const ProjectPage = ({ title, description, images = [], links = [] }) => {
  return (
    <section className={styles.container}>
      {/* Left Side - Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>

        {/* Links (optional, e.g., GitHub, Itch.io) */}
        <div className={styles.links}>
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactBtn}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right Side - Vertical Image List */}
      <div className={styles.imageList}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`${title} screenshot ${i + 1}`} />
        ))}
      </div>
    </section>
  );
};