import React from 'react'

import './pricingPage.css';
import HeroSection from '../../components/PricingPage/HeroSection';
import PricingPlansSection from '../../components/Homepage/Section7_PricingPlans';
import FaqSection from '../../components/Homepage/Section9_Faq';

const Pricing = () => {
  return (
    <section className='pricing-page'>
        <HeroSection />
        <PricingPlansSection />
        <FaqSection />
    </section>
  )
}

export default Pricing