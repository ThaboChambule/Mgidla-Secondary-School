import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./slideshow.module.css";

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/slideshow/mgidlaslide0.png",
    "/slideshow/mgidlaslide1.png",
    "/slideshow/mgidlaslide2.png",
    "/slideshow/mgidlaslide3.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const changeSlide = (direction) => {
    setCurrentSlide((prevSlide) => {
      const newSlide = prevSlide + direction;
      if (newSlide < 0) return slides.length - 1;
      if (newSlide >= slides.length) return 0;
      return newSlide;
    });
  };

  return (
    <div className={styles.slideshowContainer}>
      {slides.map((slide, index) => (
        <Image
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          width={1000}
          height={400}
          className={`${styles.slides} ${index === currentSlide ? styles.active : ""}`}
        />
      ))}
      <a className={styles.prev} onClick={() => changeSlide(-1)}>
        &#10094;
      </a>
      <a className={styles.next} onClick={() => changeSlide(1)}>
        &#10095;
      </a>
      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.active : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
