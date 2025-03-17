import React from 'react';
import { faqData } from "../../data/faq"; // Corrected import
import FaqSection from '../../components/FaqPage/FaqSection';
import { Helmet } from 'react-helmet-async';

import './faqPage.css';

const FaqPage = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - Cosmos Academy</title>
      </Helmet>
      <main className="faq-page">
        <section className="faq-section container my-5">
            <div className="section-heading text-center">
            <h2 className="mb-3">Frequently Asked Questions</h2>
            <p>
            Got questions? We've got answers! Learn more about our courses, pricing, mentorship, and how Cosmos Academy helps you build skills for impact. If you need further assistance, feel free to reach out.
            </p>
            </div>
        </section>
        
        <section className="container padding_y-spacing my-5">
            {faqData.map((section, index) => (
                <FaqSection key={index} title={section.title} faqs={section.faqs} />
            ))}
        </section>
      </main>
    </>
  );
};

export default FaqPage;
