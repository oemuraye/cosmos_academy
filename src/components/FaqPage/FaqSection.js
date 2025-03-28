import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";

const FaqSection = ({ title, faqs }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

  return (
    <div className="faq-section">
      <h2 className="faq-title text-center my-3 mt-5 pt-5">{title}</h2>
      <div className="faq-container">
            {faqs.map((faq, index) => (
                <div key={faq.id} className="faq-item mb-2 p-2">
                    <button className="faq-question w-100 d-flex justify-content-between border-0 bg-white align-items-center"
                        onClick={() => toggleAccordion(index)}
                    >
                        <p className="mb-0 text-start">{faq.question}</p>
                        <span className='faq-icon'>{activeIndex === index ? <HiOutlineMinus size={25} /> : <GoPlus size={25} />}</span>
                    </button>

                    <div className={`faq-answer px-3 pt-3 ${activeIndex === index ? "open" : "closed"}`}>
                        <p className="text-muted">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FaqSection