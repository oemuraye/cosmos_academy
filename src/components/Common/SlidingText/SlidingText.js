import { useState, useEffect } from "react";
import "./slidingText.css";

const subscriptionTexts = [
  "Weekly Subscription",
  "Annual Subscription",
  "On-Demand Videos",
  "Live <br /> Training"
];

const SlidingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % subscriptionTexts.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sliding-text-container">
      <span
        key={index}
        className="sliding-text"
        dangerouslySetInnerHTML={{ __html: subscriptionTexts[index] }}
      />
    </div>
  );
};

export default SlidingText;
