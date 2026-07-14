// VerticalCarousel.jsx
import React, { useState, useCallback } from "react";
import styles from "./VerticalCarousel.module.css";

export const VerticalCarousel = ({ images = [] }) => {
  if (!Array.isArray(images) || images.length === 0) {
    return null; // nothing to show
  }

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const count = images.length;
  const visibleCount = Math.min(3, count);

  const prev = useCallback(() => {
    setDirection("left");
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const next = useCallback(() => {
    setDirection("right");
    setIndex((i) => (i + 1) % count);
  }, [count]);

  const handleThumbnailClick = useCallback((idx) => {
    setIndex(idx);
  }, []);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    },
    [prev, next]
  );

  const visible = Array.from({ length: visibleCount }, (_, i) => {
    const idx = (index + i) % count;
    return { src: images[idx], idx };
  });

  const previewSrc = images[index];

  return (
    <section className={styles.container} id="about">
    <div
      className={styles.carousel}
      role="region"
      aria-label="Project screenshots"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div
        className={`${styles.preview} ${
          direction === "left"
            ? styles.slideLeft
            : direction === "right"
            ? styles.slideRight
            : ""
        }`}
        onAnimationEnd={() => setDirection(null)}
      >
        <img
          src={previewSrc}
          alt={`Preview screenshot ${index + 1}`}
          loading="lazy"
          draggable="false"
        />
      </div>

      <div className={styles.controls}>
        <button
          onClick={prev}
          className={styles.arrow}
          aria-label="Previous screenshots"
          type="button"
        >
          ◀
        </button>

        <div
          className={`${styles.track} ${
            direction === "left"
              ? styles.trackLeft
              : direction === "right"
              ? styles.trackRight
              : ""
          }`}
        >
          {visible.map(({ src, idx }) => (
            <img
              key={idx}
              src={src}
              alt={`Screenshot ${idx + 1}`}
              loading="lazy"
              draggable="false"
              className={`${styles.thumbnail} ${idx === index ? styles.activeThumbnail : ""}`}
              onClick={() => handleThumbnailClick(idx)}
            />
          ))}
        </div>

        <button
          onClick={next}
          className={styles.arrow}
          aria-label="Next screenshots"
          type="button"
        >
          ▶
        </button>
      </div>
    </div>
    </section>
  );
};