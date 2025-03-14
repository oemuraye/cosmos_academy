import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
    { id: 1, question: "Who is this for?", answer: "This is for anyone looking to learn and grow." },
    { id: 2, question: "What will I learn from the courses?", answer: "You will gain industry-relevant skills and knowledge." },
    { id: 3, question: "How much does it cost for a course?", answer: "The pricing varies depending on the course you choose." },
    { id: 4, question: "How much does it cost for a course?", answer: "Check our website for the latest pricing details." },
  ];

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    <section className='faq-section container my-5 padding_y-spacing'>
        <div className="section-heading text-center">
            <h2 className='mb-3'>Frequently Asked Questions</h2>
            <p>Got questions? We've got answers! Learn more about our courses, pricing, mentorship, and how Cosmos Academy helps you build skills for impact. If you need further assistance, feel free to reach out.</p>
        </div>

        <div className="faq-container my-5">
            {faqs.map((faq, index) => (
                <div key={faq.id} className="faq-item mb-4 p-2">
                    <button className="faq-question w-100 d-flex justify-content-between border-0 bg-white align-items-center "
                        onClick={() => toggleAccordion(index)}
                        >
                        <p className="mb-0">{faq.question}</p>
                        <span className='faq-icon'>{activeIndex === index ? <FaMinus size={16} /> : <FaPlus size={16} />}</span>
                    </button>

                    <div className={`faq-answer px-3 pt-3 ${activeIndex === index ? "open" : "closed"}`}>
                        <p className="text-muted">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default FaqSection