// ProjectPage.jsx
import React from "react";
import styles from "./ProjectPage.module.css";
import { VerticalCarousel } from "../VerticalCarousel/VerticalCarousel";
import ReactMarkdown from "react-markdown";

// Pass images, title, description, and links as props
export const ProjectPage = ({ title, description, images = [], links = [] }) => {
  const hasImages = Array.isArray(images) && images.length > 0;

  return (
    <section className={styles.container}>
      {/* Float-right sticky carousel first so text wraps beside it */}
      <h1 className={styles.title}>{title}</h1>
      {hasImages && (
        <div className={styles.sticky}>
            <VerticalCarousel images={images} />
        </div>
      )}

      {/* Left Side - Content */}
      <div className={styles.content}>

        <div className={styles.description}>
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
};
