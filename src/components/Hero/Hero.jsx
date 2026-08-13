import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anthony</h1>
        <p className={styles.description}>
          I’m a developer who enjoys creating useful and interactable technologies. My projects have taken me from game development and interactive systems to AI tools, automation, self-hosted applications, and full-stack web development. I’m always interested in learning new and emerging technologies when they can help bring an idea to life. 
        </p>
        <div className={styles.contactBtnContainer}>
          <a href="mailto:avanlian@umich.edu" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/profile-picture.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
