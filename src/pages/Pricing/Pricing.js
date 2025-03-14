import React from 'react'

import './pricingPage.css';
import HeroSection from '../../components/PricingPage/HeroSection';
import PricingPlansSection from '../../components/Homepage/Section7_PricingPlans';
import FaqSection from '../../components/Homepage/Section9_Faq';
import { Helmet } from 'react-helmet-async';

const Pricing = () => {
  return (
    <>
      <Helmet>
          <title>Pricing - Cosmos Academy</title>
      </Helmet>
      <main className='pricing-page'>
          <HeroSection />
          <PricingPlansSection />
          <FaqSection />
      </main>
    </>
  )
}

export default Pricing