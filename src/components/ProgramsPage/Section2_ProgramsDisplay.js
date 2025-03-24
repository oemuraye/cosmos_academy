import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import externalGoLinkIcon from '../../assets/icons/externalGoLinkIcon.png';
import recordIcon from '../../assets/icons/record-icon.png';

import courseImage from '../../assets/images/cardImg.png';
import courseImage1 from '../../assets/images/courseImg1.png';
import courseImage2 from '../../assets/images/courseImg2.png';
import courseImage3 from '../../assets/images/courseImg3.png';

import enrolledUsersImg1 from '../../assets/images/enrolled-users1.png';
import enrolledUsersImg2 from '../../assets/images/enrolled-users2.png';
import enrolledUsersImg3 from '../../assets/images/enrolled-users3.png';
import enrolledUsersImg4 from '../../assets/images/enrolled-users4.png';
import enrolledUsersImg5 from '../../assets/images/enrolled-users5.png';
import stackedUsersImg from '../../assets/images/groupImages.png';
import { Link, useNavigate, useNavigation } from "react-router-dom";

const tabsData = [
  { id: 1, name: "Web Development", description: "Master front-end and back-end development with modern frameworks and technologies like HTML, CSS, JavaScript, React, and Node.js. Build dynamic websites and scalable applications that power the digital economy." },
  { id: 2, name: "Social Management", description: "Learn how to effectively manage and grow social communities, engage audiences, and create impactful digital campaigns." },
  { id: 3, name: "Brand Development", description: "Develop skills in branding, storytelling, and identity creation to help businesses stand out in the market." },
  { id: 4, name: "Artificial Intelligence", description: "Understand AI concepts, machine learning, and automation to create smart solutions for real-world problems." },
  { id: 5, name: "Mobile Development", description: "Create powerful mobile applications using React Native, Flutter, and native technologies for iOS and Android." },
  { id: 6, name: "Digital Innovation", description: "Explore emerging technologies and digital transformation strategies that shape the future of industries." },
  { id: 7, name: "Embedded System/IoT", description: "Understand the principles of embedded systems and IoT technologies to build smart devices and systems that connect the physical world to the digital world." },
  { id: 8, name: "AR/VR Development", description: "Create immersive experiences using augmented reality (AR) and virtual reality (VR) technologies to enhance user interactions and engagement in digital environments." },
];

const courses = [
    {
      id: 1,
      title: "Introduction to Website </br> Development",
      instructor: "Cosmos",
      duration: "3 Weeks",
      startDate: "Mar 17, 2025",
      description: "Learn dynamic websites using HTML, CSS, JavaScript, and frameworks like React.",
      enrolled: "1k",
      image: courseImage1,
      pricing: "free",
      category: "Web Development",
      slug: 'introduction-to-web-dev'
    },
    {
      id: 2,
      title: "Introduction to Artificial </br> Intelligence (AI)",
      instructor: "Cosmos",
      duration: "3 Weeks",
      startDate: "Coming Soon",
      description: "Gain a solid foundation in AI and machine learning. Learn data analysis, model building with Python.",
      enrolled: "0",
      image: courseImage2,
      pricing: "coming_soon",
      category: "Artificial Intelligence",
      slug: 'introduction-to-artificial-intelligence'
    },
    {
      id: 3,
      title: "Introduction to Mobile </br> Development",
      instructor: "Cosmos",
      duration: "3 Weeks",
      startDate: "Coming Soon",
      description: "Build scalable full-stack applications using Node.js, Express, MongoDB, and React.",
      enrolled: "0",
      image: courseImage3,
      pricing: "coming_soon",
      category: "Web Development",
      slug: 'introduction-to-mobile-development'
    },
    {
      id: 4,
      title: "Advanced JavaScript </br> Mastery",
      instructor: "Cosmos",
      duration: "3 Weeks",
      startDate: "Coming Soon",
      description: "Build scalable full-stack applications using Node.js, Express, MongoDB, and React.",
      enrolled: "0",
      image: courseImage,
      pricing: "₦70,000",
      category: "Web Development",
      slug: 'advanced-javascript-mastery'
    },
];

const userEnrolledImages = [
    enrolledUsersImg1,
    enrolledUsersImg2,
    enrolledUsersImg3,
    enrolledUsersImg4,
    enrolledUsersImg5,
];


const ProgramsDisplay = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const nav = useNavigate()
  const tabsContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (tabsContainerRef.current) {
      const scrollAmount = 200;
      tabsContainerRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  const handleLinkClick = (slug) => (e) => {
    e.preventDefault();
    nav(`/course/${slug}`);
  }

  const activeTabName = tabsData.find(tab => tab.id === activeTab)?.name;

  const filteredCourses = courses.filter(course => course.category === activeTabName);
  

  return (
    <section className="programs-section container padding_y-spacing py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">Explore Programs</h4>
        <div className="d-flex gap-3 align-items-center">
            <span role='button' className="nav-btn left-btn" onClick={() => handleScroll("left")}>
                <FaArrowLeft color="#FDFCFD" />
            </span>
            <span role='button' className="nav-btn right-btn" onClick={() => handleScroll("right")}>
                <FaArrowRight color="#FDFCFD" />
            </span>
        </div>
      </div>

      <div className="d-flex align-items-center position-relative">
        {/* Tabs */}
        <section className="tabs-section overflow-auto ms-0 ms-md-5 mb-3" ref={tabsContainerRef}>
            <div className="custom-tabs d-flex align-items-center gap-2">
                {tabsData.map((tab) => (
                    <span
                        key={tab.id} role='button'
                        className={`tab-item ${activeTab === tab.id ? "custom-tabActive" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.name}
                    </span>
                ))}
            </div>
        </section>
      </div>


      {/* Courses Display */}
      <div className="courses-display row px-4">
        {/* Tab Description */}
        <div className="tab-description container">
          <p className="mt-3 tab-heading text-center">
              {tabsData.find((tab) => tab.id === activeTab)?.description}
          </p>

        </div>

        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id} className="col-md-4 col-sm-12 my-3 ">
              <div className="course-card">

                  <div className="course-card-image">
                      <img src={course.image} alt={course.title} height='283px' />
                      {course.pricing === "free" && 
                          <span className="badge d-flex gap-2 align-items-center"> 
                              <img src={recordIcon} alt="icon" className="record-live_icon" width='14px' height='14px' /> Free
                          </span>
                      }
                      {course.pricing === "coming_soon" && <span className="badge">Coming Soon</span>}
                      {course.pricing !== "free" && course.pricing !== "coming_soon" && (
                          <span className="badge">{course.pricing}</span>
                      )}
                  </div>

                  <div className="course-card-body mt-3">
                      <h4 dangerouslySetInnerHTML={{ __html: course.title }}></h4>
                      <p className="course-meta"> <span>By</span> <strong>{course.instructor}</strong> | {course.duration}</p>
                      
                      <hr />
                      <div className={`training-date ${course.pricing === "free" ? 'free' : 'coming_soon'}`}>
                          <span>
                            <span className="me-1">Next training</span> 
                              <strong>
                                {course.startDate === "Coming Soon" ? "Coming Soon"
                                    : new Date(course.startDate).toLocaleString("default", { month: "short", day: "numeric", year: "numeric",})
                                }
                              </strong>
                          </span>
                      </div>
                      <p className="course-description my-4">{course.description}</p>
                      <hr />

                      <div className="course-footer">
                        <div className="enrolled">
                            <div className="studentImages">
                                  {/* {userEnrolledImages.map((userEnrolled, index) => (
                                      <img key={index} src={userEnrolled} alt="Enrolled users" className='img-fluid' />
                                  ))} */}
                                  <img src={stackedUsersImg} alt="Enrolled users" className='img-fluid' width='63px' height='18px' />
                              </div>
                            <span>{course.enrolled} enrolled</span>
                        </div>

                        <Link onClick={handleLinkClick(course.slug)} href={`/course/${course.slug}`} className="learn-more">Learn More<img src={externalGoLinkIcon} className='ms-2' alt="icon" width='10px' height='10px' /></Link>
                        </div>
                    </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No courses available for this category.</p>
        )}
      </div>
    </section>
  );
};

export default ProgramsDisplay;
