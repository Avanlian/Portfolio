// ProjectPage.jsx
import React from "react";
import styles from "./ProjectPage.module.css";
import { VerticalCarousel } from "../VerticalCarousel/VerticalCarousel";
import ReactMarkdown from "react-markdown";

// Pass images, title, subTitle, description, and links as props
export const ProjectPage = ({ title, subTitle, description, images = [], links = [] }) => {
  const hasImages = Array.isArray(images) && images.length > 0;

  return (
    <section className={styles.container}>
      {/* Float-right sticky carousel first so text wraps beside it */}
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.subTitle}>
        <ReactMarkdown>{subTitle}</ReactMarkdown>
      </div>
      {hasImages && (
        <div className={styles.sticky}>
            <VerticalCarousel images={images} />
        </div>
      )}

      {/* Left Side - Content */}
      <div className={styles.content}>

        <div className={styles.description}>
          <ReactMarkdown
              components={{
                // Override the default image rendering to apply custom styles allows for images to be referenced in markdown
                //![Alt Text](public/assets/projects/img)
                  img: ({node, ...props}) => (
                      <div className={styles.mdImgContainer}>
                          <img
                              {...props}
                              className={styles.projectImage}
                          />
                      </div>
                  )
              }}
          >
              {description}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
};
