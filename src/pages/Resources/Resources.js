import React from 'react'

import HeroSection from '../../components/ResourcesPage/HeroSection';
import BlogSection from '../../components/ResourcesPage/Section2_Blog';

import './resourcesPage.css';
import ExplorerSection from '../../components/ResourcesPage/Section3_Explorer';
import JoinUsAdSection from '../../components/ProgramsPage/Section5_JoinUsAd';
import { Helmet } from 'react-helmet-async';

const Resources = () => {
  return (
    <>
      <Helmet>
          <title>Resources - Cosmos Academy</title>
      </Helmet>
      <section className='resource-page'>
        <HeroSection />
        <div className="section-width">
          <BlogSection />
          <ExplorerSection />
          <JoinUsAdSection />
        </div>
      </section>
    </>
  )
}

export default Resources;