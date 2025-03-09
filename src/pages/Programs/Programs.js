import React from 'react'
import HeroSection from '../../components/ProgramsPage/HeroSection'
import ProgramsDisplay from '../../components/ProgramsPage/Section2_ProgramsDisplay'
import UpcomingSection from '../../components/ProgramsPage/Section3_Upcoming'
import ImpactAdSection from '../../components/ProgramsPage/Section4_Impact';

import './programPage.css';
import JoinUsAdSection from '../../components/ProgramsPage/Section5_JoinUsAd';

const Programs = () => {
  return (
    <section className='programs-page'>
        <HeroSection />
        <ProgramsDisplay />
        <UpcomingSection />
        <ImpactAdSection />
        <JoinUsAdSection />
    </section>
  )
}

export default Programs