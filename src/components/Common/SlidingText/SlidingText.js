import { useState, useEffect } from "react";
import "./slidingText.css";

const SlidingText = ({ texts, interval = 2000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [texts, interval]);

  return (
    <span
      key={index}
      className="sliding-text"
      dangerouslySetInnerHTML={{ __html: texts[index] }}
    />
  );
};

export default SlidingText;

