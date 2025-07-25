import React from 'react'

import HeroSection from '../../components/AboutPage/HeroSection';
import CallToAction from '../../components/Common/CallToAction';

import './aboutPage.css';
import PersonCardList from '../../components/Common/PersonCardList';

import trustImage from "../../assets/images/trustImg.png";
import piusImage from "../../assets/images/piusImage.png";
import blessingImage from "../../assets/images/blessingImage.png";
import alexImage from "../../assets/images/alexImage.png";
import menaImage from "../../assets/images/menaImage.png";
import profImage from "../../assets/images/prof-img.png";
import hopeImage from "../../assets/images/deraImage.png";
import HeaderContent from '../../components/Common/HeaderContent';
import InfoCardList from '../../components/Common/InfoCardList';
import JoinOurTeam from '../../components/AboutPage/JoinOurTeam';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../../components/Common/ContactUsForm/ContactForm';
import ComingSoonPop from '../../components/Common/ComingSoonPop/ComingSoonPop';

const people = [
  {
    name: "Trust Oghale",
    role: "Lead Digital Innovations",
    image: trustImage,
  },
  {
    name: "Prof. Conrad Omonhinmin",
    role: "Chief Impact Assesor",
    image: profImage,
  },
  {
    name: "Okemena Agelebe",
    role: "Management/Marketing Lead",
    image: menaImage
  },
  {
    name: "Chidera Ignatius ",
    role: "Programs Manager",
    image: hopeImage
  },
  {
    name: "Pius Emuraye",
    role: "Lead Product Developer",
    image: piusImage
  },
  {
    name: "Alexander Ikani",
    role: "Lead Product Designer",
    image: alexImage
  },
  {
    name: "Blessing Chinazor",
    role: "Senior Product Designer",
    image: blessingImage
  }
];
const coreValues = [
  {
    title: "Impact-Driven",
    description: "We believe technology should create meaningful change. Our goal is to equip individuals with the skills and mindset to develop impactful solutions. <br />"
  },
  {
    title: "Innovation & Excellence",
    description: "We push boundaries by delivering world-class training and staying ahead of industry trends. We believe in fostering a culture of continuous learning and problem-solving."
  },
  {
    title: "Audacity to Lead",
    description: "We encourage bold thinking, risk-taking, and the courage to pioneer new ideas. Whether it's breaking into a new industry or building disruptive innovations."
  },
  {
    title: "Community & Collaboration",
    description: "Learning is more powerful when done together. We foster an environment where students, mentors, and industry professionals connect, share knowledge."
  }
];

const About = () => {
  return (
    <>
      <Helmet>
          <title>About - Cosmos Academy</title>
      </Helmet>
      <main className='pb-5'>
        <HeroSection />
        <div className="section-width">
          <CallToAction
            header='Meet the Team Driving Innovation at Cosmos'
            content={`Your organization's success depends on the strength of your team. At Cosmos Academy, whether you're preparing for digital transformation or strengthening your team's capabilities, we provide training that makes an immediate impact.`}
            cta='Join our Team' 
            modalId="comingSoonModal"
            modalContent={
              <ComingSoonPop title={'Join Our Team'} 
                text={'Sorry we are not currently recruiting new team members. Kindly check in next time.'}
              />
            }
          />
          <PersonCardList people={people} />
          <div className='d-flex gap-5 mt-5 pt-5 justify-content-between flex-column flex-md-row'>
            <HeaderContent header='Our Mission' content='We are dedicated to empowering individuals with cutting-edge technology skills, strategic insights, and innovative thinking to help them transform their lives, businesses, and communities.' />
            <HeaderContent header='Our Vision' content='To build a thriving community of technologists and innovators who leverage their skills to solve real-world problems, drive societal progress, and shape the future of technology.' />
          </div>
          <div className='py-5'>
            <h3 className='our-values-header px-3'>Our Values Keep us Together</h3>
            <div className="row">
              <div className="col-md-9 col-sm-12"><InfoCardList items={coreValues} useCol6={true} /></div>
            </div>
          </div>
          <JoinOurTeam />
        </div>
      </main>
    </>
  )
}

export default About;