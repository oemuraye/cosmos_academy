import React from 'react'

import HeroSection from '../../components/ResourcesPage/HeroSection';
import BlogSection from '../../components/ResourcesPage/Section2_Blog';

import './resourcesPage.css';
import ExplorerSection from '../../components/ResourcesPage/Section3_Explorer';
import JoinUsAdSection from '../../components/ProgramsPage/Section5_JoinUsAd';

const Resources = () => {
  return (
    <section className='resource-page'>
      <HeroSection />
      <BlogSection />
      <ExplorerSection />
      <JoinUsAdSection />
    </section>
  )
}

export default Resources;