import React from 'react'
import { Helmet } from 'react-helmet-async';

import './home.css';
import HeroSection from '../../components/Homepage/HeroSection';
import InfoSection from '../../components/Homepage/Section2_InfoSection';
import WhySection from '../../components/Homepage/Section3_Why';
import TrainersSection from '../../components/Homepage/Section4_Trainers';
import TestimonySection from '../../components/Homepage/Section5_Testimonial';
import BrandLogos from '../../components/Homepage/Section6_BrandLogos';
import CourseSection from '../../components/Homepage/Section6_Courses';
import PricingPlansSection from '../../components/Homepage/Section7_PricingPlans';
import BlogSection from '../../components/Homepage/Section8_Blog';
import FaqSection from '../../components/Homepage/Section9_Faq';

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
            <TrainersSection />
            <TestimonySection />
            <BrandLogos />
            <CourseSection />
            <PricingPlansSection />
            <BlogSection />
            <FaqSection />
        </div>
        
    </>
  )
}

export default Home