import { Helmet } from 'react-helmet-async'
import './partnerPage.css'
import HeroSection from '../../components/PartnerPage/HeroSection'
import MediaSection from '../../components/PartnerPage/Section2_Media'
import InfoCardList from '../../components/Common/InfoCardList';
import SupportSection from '../../components/PartnerPage/Section3_Support';
import ContactSection from '../../components/PartnerPage/Section4_Contact';

const mentorshipPrograms = [
    {
        id: 1,
        title: "Outreach Programs for Schools",
        description:
            "Bringing digital literacy and skills training to students who need it most. <br /> <br />",
    },
    {
        id: 2,
        title: "Webinars, Events & <br /> Podcasts",
        description:
            "Educating and inspiring the next generation of digital innovators. <br /> <br />",
    },
    {
        id: 3,
        title: "Cosmos Conference: The Gatekeepers of Innovation",
        description:
            "A global platform connecting industry leaders, professionals, and learners to foster tech-driven impact.",
    },
];

const Partner = () => {
  return (
    <>
        <Helmet>
            <title>Pricing - Cosmos Academy</title>
        </Helmet>
        <main className='partner-page'>
            <HeroSection />
            <div className="section-width">
                <MediaSection />
                <div className="container py-5">
                    <InfoCardList items={mentorshipPrograms} />
                </div>
                <SupportSection />
                <ContactSection />
            </div>
        </main>
    </>
  )
}

export default Partner