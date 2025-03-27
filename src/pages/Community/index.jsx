import academyIcon1 from "../../assets/icons/date.png";
import academyIcon2 from "../../assets/icons/diamond.png";
import academyIcon3 from "../../assets/icons/plane.png";
import academyIcon4 from "../../assets/icons/Target2.png";
import sectionVideo from "../../assets/videos/cosmos-conference.mp4";
import Innovator2 from "../../assets/images/innovator2.png";
import Innovator3 from "../../assets/images/innovator3.png";
import Innovator4 from "../../assets/images/innovator4.png";
import Innovator5 from "../../assets/images/innovator5.png";
import Innovators from "../../assets/images/groupImages.png";
import plane from "../../assets/icons/plane.png";
import live from "../../assets/icons/live.png";
import success from "../../assets/icons/success.png";
import target from "../../assets/icons/target.png";
import { ReactComponent as StarIcon } from "../../assets/icons/star-rounded.svg";
// import { ReactComponent as StarIcon } from "../../assets/icons/star-rounded.svg";
import { FaStar } from "react-icons/fa6";
import exploreIcon from '../../assets/icons/btn-Icon.png';
import WebinarAnnouncement from "../../components/Community/WebinarAnnouncement";

import "./style.css";
import IconInfoCard from "../../components/Common/IconInfoCard";
import InfoCardList from "../../components/Common/InfoCardList";
import { Link } from "react-router-dom";

const infoCards = [
    {
        id: 1,
        icon: plane,
        title: "Collaborate & Grow",
        description:
            "Join forces with fellow learners and professionals on projects, discussions, and networking opportunities. Expand your knowledge and build meaningful connections that can shape your career.",
        backgroundColor: "#FFE6C3",
    },
    {
        id: 2,
        icon: target,
        title: "Mentorship & Guidance",
        description:
            "Get direct access to experienced mentors who will guide you through your learning journey, provide career advice, and help you navigate the tech industry.",
        backgroundColor: "#90B8F3",
    },
    {
        id: 3,
        icon: live,
        title: "Exclusive Live Events & Webinars",
        description:
            "Participate in live training, expert-led discussions, career workshops, and Q&A sessions designed to equip you with industry insights and practical knowledge.",
        backgroundColor: "#FFC3FF",
    },
    {
        id: 4,
        icon: success,
        title: "Access to Tech & Career Opportunities",
        description:
            "Stay informed about internships, job openings, hackathons, and startup opportunities from our network of industry partners.",
        backgroundColor: "#9981FF",
    },
];
const mentorshipPrograms = [
    {
        id: 1,
        title: "Personalized Career Guidance",
        description:
            "Get tailored advice to navigate your career path, whether you’re starting out or looking to level up.",
    },
    {
        id: 2,
        title: "Code and Project Reviews <br /> <br />",
        description:
            "Receive in-depth feedback on your code and projects to refine your skills and build high-quality work.",
    },
    {
        id: 3,
        title: "Business and Innovation Insights",
        description:
            "Gain valuable insights on entrepreneurship, innovation, and strategic growth to stay ahead in your industry.",
    },
    {
        id: 4,
        title: "Industry-Specific Advice",
        description:
            "Access expert guidance tailored to your field, helping you make informed decisions and stay competitive.",
    },
];
const academyCommunity = [
    {
        id: 1,
        title: "Live Events & Webinars",
        description:
            "Participate in live training, expert-led discussions, career workshops, and Q&A sessions designed to equip you with industry insights and practical knowledge.",
        icon: academyIcon1,
        },
    {
        id: 2,
        title: "Career Opportunities",
        description:
            "Participate in live training, expert-led discussions, career workshops, and Q&A sessions designed to equip you with industry insights and practical knowledge.",
        icon: academyIcon2,
        },
    {
        id: 3,
        title: "Collaborate & Grow",
        description:
            "Join forces with fellow learners and professionals on projects, discussions, and networking opportunities. Expand your knowledge and build meaningful connections that can shape your career.",
        icon: academyIcon3,
        },
    {
        id: 4,
        title: "Mentorship & Guidance",
        description:
            "Get direct access to experienced mentors who will guide you through your learning journey, provide career advice, and help you navigate the tech industry. </br> <br />",
        icon: academyIcon4,
        },
];
const steps = [
    {
      title: "Enroll in a Course",
      description:
        "Gain access to live sessions, mentorship, and exclusive content.",
    },
    {
      title: "Join the Community Group",
      description:
        "Receive updates, engage in discussions, and connect with others.",
    },
    {
      title: "Attend Events & Webinars",
      description:
        "Learn, collaborate, and grow with our expert-led sessions.",
    },
    {
      title: "Engage & Contribute",
      description:
        "Share insights, ask questions, and become an active part of the tech movement.",
    },
];

const Page = () => {
    return (
        <div className="community-page">
            <div className="hero-section">
                <section className="container-fluid text-center px-4">
                    <div className="section-width mt-4 mt-md-0">
                        <div className="container">
                            <div className="row mb-2">
                                <div className="col d-flex align-items-center flex-column">
                                    <h1 className="display-5 fw-bold header">
                                        A Hub for Learning, Mentorship &amp; Innovation
                                    </h1>
                                    <p className="lead mx-auto comm-text" style={{ maxWidth: "700px" }}>
                                        We don't just teach digital skills—we build a dynamic ecosystem where learners
                                        evolve into innovators, problem-solvers, and industry leaders. Our Community is
                                        the heart of this transformation, offering mentorship, live events, hands-on
                                        experiences, and a network that supports your journey from learning to impact.
                                    </p>
                                </div>
                            </div>

                            <div className="row justify-content-center align-items-center mb-3">
                                <div className="col-auto d-flex align-items-center">
                                    <div className="innovator-group">
                                        <img src={Innovators} alt="img" width='145.75px' height='43.93px' />
                                        {/* <img
                                            src={Innovator1}
                                            alt="Innovator 1"
                                            className="rounded-circle"
                                        />
                                        <img
                                            src={Innovator2}
                                            alt="Innovator 2"
                                            className="rounded-circle"
                                        />
                                        <img
                                            src={Innovator3}
                                            alt="Innovator 3"
                                            className="rounded-circle"
                                        />
                                        <img
                                            src={Innovator4}
                                            alt="Innovator 4"
                                            className="rounded-circle"
                                        />
                                        <img
                                            src={Innovator5}
                                            alt="Innovator 5"
                                            className="rounded-circle"
                                        /> */}
                                    </div>
                                    <span className="fw-semibold">100+ Innovators</span>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="col star-group">
                                    {Array.from({ length: 5 }).map((_, index) =>
                                        <div className="star-icon"><FaStar color="#101010" size={26} /></div>
                                    )}
                                </div>
                            </div>

                            <div className="btn-action_div mt-4">
                                <Link to='/community' className="customBtn">
                                    <span>Join Community</span> <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <section className="section-width">
                {/* <section className="container py-5 text-center">

                    <div className="info-list">
                        {infoCards.map((card) => (
                            <IconInfoCard
                                key={card.id}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                                backgroundColor={card.backgroundColor}
                            />
                        ))}
                    </div>

                </section> */}

                <div className="academy-community container">
                    <div className='mentorship py-5' style={{ maxWidth: '701px' }}>
                        <h3 >Why Join the Cosmos Academy Community?</h3>
                        <p>At Cosmos Academy, learning goes beyond the classroom—it’s a movement, a network, and a launchpad for your tech journey. By joining our community, you gain access to:</p>
                    </div>

                    <div className="row px-2 px-md-0">
                        <div className="col-md-8 col-sm-12 my-5 my-md-0"><InfoCardList items={academyCommunity} academyCard={true} /></div>
                        <div className="col-md-4 col-sm-12 my-5 my-md-0">
                            <div className="position-relative d-flex justify-content-center pb-0 pb-md-5">
                                <div className='position-absolute top-0 start-0 m-3 pt-3 d-flex align-items-center px-3 py-1'>
                                    <div className="community-stackImages">
                                        <div className="enrolled">
                                            <div className="studentImages">
                                                <img src={Innovators} alt="Enrolled users" className='img-fluid' width='63px' height='18px' />
                                            </div>
                                            <p className="mb-0">Events</p>
                                        </div>
                                    </div>
                                </div>
                                <video className="img-fluid mt-4" style={{ height: "549px", objectFit: "cover", borderRadius: '25.31px', width: '100%', maxWidth: '456px', margin: '0 auto' }} controls autoPlay loop muted playsInline>
                                    <source src={sectionVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='mentorship container py-5'>
                    <h3 >Mentorship Program</h3>
                    <InfoCardList items={mentorshipPrograms} />
                </div>

                <section className="events container my-5">
                    <h2 className="fw-bold mb-5">Upcoming Events...</h2>
                    <div className="row py-2 py-md-5 px-2 px-md-4 events-showcase" >
                        <div className="events-info col-md-5 col-sm-12 my-3 mb-5" style={{ flex: 1 }}>
                            <h3 className="mb-3">Tech Talks & Webinars</h3>
                            <p>
                                Join us for our <strong>Live Webinar</strong>{" "}
                                as we introduce our programs for the Cosmos Academy.
                            </p>
                            <button className="customBtn">
                                <span>Register</span> <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
                            </button>
                        </div>

                        <div className="announcement-container col-md-7 col-sm-12 ">
                            <WebinarAnnouncement />
                        </div>
                    </div>
                </section>

                <section className="join-steps">
                    <h2 >
                        How to Join the Cosmos Community
                    </h2>
                    <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                        {steps.map((step, index) => (
                            <li key={index} style={{ marginBottom: "12px" }}>
                                <span
                                >
                                    {index + 1}. {step.title}
                                </span>{" "}
                                – {step.description}
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
        </div>
    )
}

export default Page;