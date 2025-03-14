import React from 'react'

import './businessPage.css';
import HeroSection from '../../components/BusinessPage/HeroSection';
import StatsSection from '../../components/BusinessPage/Section2_Stats';
import TeamGrowthSection from '../../components/BusinessPage/Section3_Grow';
import LearningInfoSection from '../../components/BusinessPage/Section4_Learn';
import ContactTeamSection from '../../components/BusinessPage/Section5_Contact';
import { Helmet } from 'react-helmet-async';

const Business = () => {
  return (
    <>
      <Helmet>
          <title>For Business - Cosmos Academy</title>
      </Helmet>
      <main className='business-page'>
          <HeroSection />
          <StatsSection />
          <TeamGrowthSection />
          <LearningInfoSection />
          <ContactTeamSection />
      </main>
    </>
  )
}

export default Business;