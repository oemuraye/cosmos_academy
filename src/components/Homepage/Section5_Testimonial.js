import React, { useEffect, useState } from 'react';
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { PiQuotesFill } from "react-icons/pi";

const testimonials = [
    {
      id: 1,
      quote: "Cosmos Academy didn't just teach me tech skills—it transformed how I think and solve problems. The mentorship and hands-on projects helped me land my first tech job within months. It's more than a course; it's a life-changing experience.",
      name: "Adaora Emmanuel",
      role: "Software Developer"
    },
    {
      id: 2,
      quote: "The practical approach at Cosmos Academy made all the difference. I went from struggling with coding concepts to building real applications with confidence. The community support was invaluable during my learning journey.",
      name: "Marcus Johnson",
      role: "Frontend Developer"
    },
    {
      id: 3,
      quote: "After trying multiple online platforms, Cosmos Academy was the only one that truly prepared me for the industry. The personalized feedback from mentors shaped my skills and gave me the confidence to pursue my dream career.",
      name: "Sarah Zhang",
      role: "Data Analyst"
    }
];


const TestimonySection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="testimony-section container d-flex flex-column align-items-center text-center p-4 my-5">
      <PiQuotesFill size={60} />

      <h5 className="my-4">{`"${testimonials[activeIndex].quote}"`}</h5>

      <h6 className="mb-0">{testimonials[activeIndex].name}</h6>
      <p className="author-title">{testimonials[activeIndex].role}</p>

      {/* Navigation */}
      <div className="d-flex align-items-center gap-3 mt-4">
        <button className="btn btn-outline-dark rounded-circle p-2" onClick={prevTestimonial}>
          <IoArrowBack size={24} />
        </button>

        {/* Pagination Dots */}
        <div className="d-flex gap-2">
          {testimonials.map((_, i) => (
            <div role='button' key={i} onClick={() => goToSlide(i)}
                className={`rounded-circle ${activeIndex === i ? "bg-dark" : "bg-secondary"} `}
                style={{ width: "7px", height: "7px" }}
            />
          ))}
        </div>

        <button className="btn btn-outline-dark rounded-circle p-2" onClick={nextTestimonial}>
          <IoMdArrowForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonySection