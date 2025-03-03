import React from 'react'
import { Helmet } from 'react-helmet-async';

import './home.css';
import HeroSection from '../../components/Homepage/HeroSection';

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
        </div>
        
    </>
  )
}

export default Home