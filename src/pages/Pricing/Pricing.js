import React from 'react'

import HeroSection from '../../components/PricingPage/HeroSection';
import PricingPlansSection from '../../components/Homepage/Section7_PricingPlans';
import FaqSection from '../../components/Homepage/Section9_Faq';
import { faqData } from "../../data/faq";
import { Helmet } from 'react-helmet-async';

import './pricingPage.css';

const Pricing = () => {
  const pricingFaqs = faqData.find((category) => category.title === "Payments & Pricing")?.faqs || [];

  return (
    <>
      <Helmet>
          <title>Pricing - Cosmos Academy</title>
      </Helmet>
      <main className='pricing-page'>
          <HeroSection />
          <div className="section-width">
            <PricingPlansSection />
            <FaqSection faqs={pricingFaqs} />
          </div>
      </main>
    </>
  )
}

export default Pricing