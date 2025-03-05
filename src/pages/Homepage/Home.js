import React from 'react'
import { Helmet } from 'react-helmet-async';

import './home.css';
import HeroSection from '../../components/Homepage/HeroSection';
import InfoSection from '../../components/Homepage/Section2_InfoSection';
import WhySection from '../../components/Homepage/Section3_Why';
import TrainersSeection from '../../components/Homepage/Section4_Trainers';

const Home = () => {
  return (
    <>
        <Helmet>
            <title>Home - Cosmos Academy</title>
            <meta name="description" content="Welcome to Cosmos Academy" />
            <meta name="keywords" content="conference, cosmos, 2024" />
            <meta property="og:title" content="Cosmos Academy" />
            <meta property="og:description" content="Join us for Cosmos Academy!" />
            {/* <meta property="og:image" content="https://cosmosconference.org/" />
            <link rel="canonical" href="https://cosmosconference.org/" /> */}
        </Helmet>

        <div className="homepage-page">
            <HeroSection />
            <InfoSection />
            <WhySection />
            <TrainersSeection />
        </div>
        
    </>
  )
}

export default Home