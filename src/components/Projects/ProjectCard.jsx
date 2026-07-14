import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, linkRef },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <a href={linkRef}>
          <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.image}
            onClick={() => window.scrollTo(0, 0)}
          />
        </a>
        <div className={styles.copy}>
          <a href={linkRef} className={styles.title}>
            <h3 className={styles.title} onClick={() => window.scrollTo(0, 0)}>
                {title}
            </h3>
          </a>
          
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={linkRef} className={styles.link} onClick={() => window.scrollTo(0, 0)}>
          Read More
        </a>
      </div>
    </div>
  );
};
