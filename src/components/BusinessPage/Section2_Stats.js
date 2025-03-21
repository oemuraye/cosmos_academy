import React, { useEffect, useRef, useState } from "react";

const statsData = [
  { value: 94, text: "of employees are more likely to stay with a company that invests in their career growth." },
  { value: 218, text: "of companies that invest in training programs see a 218% increase in income per employee." },
  { value: 48, text: "of working population would switch to a new job if it offered increased skills training." },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const statsRef = useRef(null);
  const animationStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationStarted.current) {
          animationStarted.current = true;
          startCounting();
        }
      },
      { threshold: 0.8 } // Trigger animation when 80% of section is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    statsData.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 5000; // 2 seconds
      const increment = end / (duration / 16); // Frames for 60fps
      let currentCount = start;

      const updateCounter = () => {
        currentCount += increment;
        if (currentCount < end) {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.floor(currentCount);
            return newCounts;
          });
          requestAnimationFrame(updateCounter);
        } else {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = end;
            return newCounts;
          });
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  return (
    <section className="stats-section padding_y-spacing container my-5" ref={statsRef}>
      <div className="d-flex gap-3 gap-md-5 flex-wrap align-items-center">
        {statsData.map((stat, index) => (
          <div className="stats-card" key={index}>
            <h1>{counts[index]}%</h1>
            <p>{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
