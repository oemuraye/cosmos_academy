import React from 'react'

import './businessPage.css';
import HeroSection from '../../components/BusinessPage/HeroSection';
import StatsSection from '../../components/BusinessPage/Section2_Stats';
import TeamGrowthSection from '../../components/BusinessPage/Section3_Grow';
import LearningInfoSection from '../../components/BusinessPage/Section4_Learn';
import ContactTeamSection from '../../components/BusinessPage/Section5_Contact';

const Business = () => {
  return (
    <section className='business-page'>
        <HeroSection />
        <StatsSection />
        <TeamGrowthSection />
        <LearningInfoSection />
        <ContactTeamSection />
    </section>
  )
}

export default Business;