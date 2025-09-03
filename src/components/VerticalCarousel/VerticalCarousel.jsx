// VerticalCarousel.jsx
import React, { useState, useCallback } from "react";
import styles from "./VerticalCarousel.module.css";

export const VerticalCarousel = ({ images = [] }) => {
  if (!Array.isArray(images) || images.length === 0) {
    return null; // nothing to show
  }

  const [index, setIndex] = useState(0);
  const count = images.length;
  const visibleCount = Math.min(3, count);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowDown") {
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

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-label="Project screenshots"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <button
        onClick={prev}
        className={styles.arrow}
        aria-label="Previous screenshots"
        type="button"
      >
        ▲
      </button>

      <div className={styles.track}>
        {visible.map(({ src, idx }) => (
          <img
            key={idx}
            src={src}
            alt={`Screenshot ${idx + 1}`}
            loading="lazy"
            draggable="false"
          />
        ))}
      </div>

      <button
        onClick={next}
        className={styles.arrow}
        aria-label="Next screenshots"
        type="button"
      >
        ▼
      </button>
    </div>
  );
};