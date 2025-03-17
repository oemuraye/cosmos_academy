import React from 'react'
import HeroSection from '../../components/ProgramsPage/HeroSection'
import ProgramsDisplay from '../../components/ProgramsPage/Section2_ProgramsDisplay'
import UpcomingSection from '../../components/ProgramsPage/Section3_Upcoming'
import ImpactAdSection from '../../components/ProgramsPage/Section4_Impact';

import './programPage.css';
import JoinUsAdSection from '../../components/ProgramsPage/Section5_JoinUsAd';
import { Helmet } from 'react-helmet-async';

const Programs = () => {
  return (
    <>
      <Helmet>
          <title>Programs - Cosmos Academy</title>
      </Helmet>
      <main className='programs-page'>
          <HeroSection />
          <section className="section-width">
            <ProgramsDisplay />
            <UpcomingSection />
            <ImpactAdSection />
            <JoinUsAdSection />
          </section>
      </main>
    </>
  )
}

export default Programs