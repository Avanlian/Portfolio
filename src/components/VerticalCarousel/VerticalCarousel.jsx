import React, { useState } from "react";
import styles from "./VerticalCarousel.module.css";

export const VerticalCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  const visible = [
    images[index],
    images[(index + 1) % images.length],
    images[(index + 2) % images.length],
  ];

  return (
    <div className={styles.carousel}>
      <button onClick={prev} className={styles.arrow}>▲</button>
      <div className={styles.track}>
        {visible.map((src, i) => (
          <img key={i} src={src} alt={`screenshot ${i}`} />
        ))}
      </div>
      <button onClick={next} className={styles.arrow}>▼</button>
    </div>
  );
};