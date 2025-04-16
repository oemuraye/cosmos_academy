import { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import exploreIcon from '../../assets/icons/btn-Icon.png';
import externalGoLinkIcon from '../../assets/icons/externalGoLinkIcon.png';
import liveIcon from '../../assets/icons/record-icon.png';

import courseImage from '../../assets/images/cardImg.png';
import courseImage1 from '../../assets/images/courseImg1.png';
import courseImage2 from '../../assets/images/courseImg2.png';
import courseImage3 from '../../assets/images/courseImg3.png';
import courseSocialImage from '../../assets/images/courseMenaImg.png';

import enrolledUsersImg1 from '../../assets/images/enrolled-users1.png';
import enrolledUsersImg2 from '../../assets/images/enrolled-users2.png';
import enrolledUsersImg3 from '../../assets/images/enrolled-users3.png';
import enrolledUsersImg4 from '../../assets/images/enrolled-users4.png';
import enrolledUsersImg5 from '../../assets/images/enrolled-users5.png';
import stackedUsersImg from '../../assets/images/groupImages.png';

import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

import { CourseMap } from '../../data/courses';

const courses = [
    {
      id: 1,
      slug: 'introduction-to-web-dev',
      title: "Introduction to Website </br> Development",
      instructor: "Cosmos",
      duration: "3 Weeks",
      startDate: "March 17, 2025",
      description: "Learn dynamic websites using HTML, CSS, JavaScript, and advanced frameworks like React.",
      enrolled: "1k",
      image: courseImage1,
      pricing: "free",
      free: true
    },
    {
      id: 2,
      slug: 'introduction-to-web-dev',
      title: "Introduction to Artificial </br> Intelligence (AI)",
      instructor: "Ikponwomba Elotech",
      duration: "3 Weeks",
      startDate: "Coming Soon",
      description: "Gain a solid foundation in AI and machine learning. Learn data analysis, model building with Python.",
      enrolled: "0",
      image: courseSocialImage,
      pricing: "March 25, 2025",
      free: false
    },
    {
        id: 3,
        slug: 'introduction-to-web-dev',
        title: "Introduction to Mobile </br> Development",
        instructor: "Cosmos",
        duration: "3 Weeks",
        startDate: "Coming Soon",
        description: "Build scalable full-stack applications using Node.js, Express, MongoDB, and React.",
        enrolled: "0",
        image: courseImage3,
        pricing: "₦70,000",
        free: false,
    },
    {
        id: 4,
        slug: 'introduction-to-web-dev',
        title: "Advanced JavaScript </br> Mastery",
        instructor: "Cosmos",
        duration: "3 Weeks",
        startDate: "Coming Soon",
        description: "Build scalable full-stack applications using Node.js, Express, MongoDB, and React.",
        enrolled: "0",
        image: courseImage,
        pricing: "coming_soon",
        free: false,
    },
    // Add more courses here
];

const userEnrolledImages = [
    enrolledUsersImg1,
    enrolledUsersImg2,
    enrolledUsersImg3,
    enrolledUsersImg4,
    enrolledUsersImg5,
];



const CourseSection = () => {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(1);
      
    useEffect(() => {
      const updateVisibleItems = () => {
        const width = window.innerWidth;
        if (width >= 1024) setVisibleItems(3);
        else if (width >= 768) setVisibleItems(2);
        else setVisibleItems(1);
      };
      updateVisibleItems();
      window.addEventListener("resize", updateVisibleItems);
      return () => window.removeEventListener("resize", updateVisibleItems);
    }, []);
  
    const scrollAmount = 400;
  
    const nextSlide = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += scrollAmount;
        setCurrentIndex((prev) => Math.min(prev + 1, courses.length - visibleItems));
      }
    };
  
    const prevSlide = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft -= scrollAmount;
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    const goToSlide = (index) => {
        if (sliderRef.current) {
            const scrollWidth = sliderRef.current.scrollWidth;
            const containerWidth = sliderRef.current.clientWidth;
            const maxScrollLeft = scrollWidth - containerWidth;
            
            const newScrollLeft = (index / (courses.length - 1)) * maxScrollLeft;
            sliderRef.current.scrollLeft = newScrollLeft;
        }
        setCurrentIndex(index);
    };
    
    
    // useEffect(() => {
    //     const interval = setInterval(nextSlide, 5000); 
    //     return () => clearInterval(interval); 
    // }, []);

    const handleCourseClick = (courseSlug) => {
        window.location.href = `/course/${courseSlug}`;
    };
  
    return (
        <section className='course-section my-5 padding_y-spacing'>
            <div className="container">
                <section className="section_headingWithBtn mb-5">
                    <h2>Empower your future with technological skills</h2>
                    <p className='my-3'>Unlock the knowledge and tools needed to thrive in the digital world. From web and mobile development to AI and digital innovation, Cosmos Academy offers expert-led courses designed to transform your skills into real-world impact.</p>
                    <div className="btn-action_div my-4">
                        <Link to="/programs" className="customBtn">
                            <span>Explore Courses</span> <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
                        </Link>
                    </div>
                </section>
    
                <div className="cloud-overlay">
                    <div className="courses-display-section my-5">
                        <div className="courses-display px-3 px-md-5" ref={sliderRef}>
                            {/* {courses.map((course) => ( */}
                            {CourseMap.map((course) => (
                                <div key={course.id} className="course-card">
                                    <div className="course-card-image position-relative">
                                        <img src={course.image} alt={course.title} height='283px' className="course-image" />
                                        {course.free && 
                                            <div className="card-badge">
                                                <div className="d-flex align-items-center gap-2">
                                                    <img src={liveIcon} className="record-live_icon" alt="icon" width="13.56px" height="13.56px" />
                                                    <span>Free</span>
                                                </div> 
                                            </div>
                                        }
                                    </div>


                                    <div className="course-card-body">
                                        <h4 dangerouslySetInnerHTML={{ __html: course.title }}></h4>
                                        <p className="course-meta mb-0"> <span>By</span> <strong>{course.instructor.name}</strong> | {course.duration}</p>
                                        
                                        <hr />
                                            {/* <div className={`training-date my-0 ${course.free ? 'free' : ''}`} style={{ backgroundColor: course.colorBg || '' }}> */}
                                            <div className={`training-date my-0`} style={{ backgroundColor: course.colorBg || '' }}>
                                                <span>
                                                    <span className="me-1">Next training</span> 
                                                    <strong>
                                                        {course.startDate === "Coming Soon" ? "Coming Soon"
                                                            : new Date(course.startDate).toLocaleString("default", { month: "short", day: "numeric", year: "numeric",})
                                                        }
                                                    </strong>
                                                </span>
                                            </div>
                                            <p className="course-description my-2 mt-3">{course.description}</p>
                                        <hr />

                                        <div className="course-footer">
                                            <div className="enrolled">
                                                <div className="studentImages">
                                                    {/* {userEnrolledImages.map((userEnrolled, index) => (
                                                        <img key={index} src={userEnrolled} alt="Enrolled users" className='img-fluid' />
                                                    ))} */}
                                                    <img src={stackedUsersImg} alt="Enrolled users" className='img-fluid' width='55px' height='15px' />
                                                </div>
                                                <span>{course.enrolled} enrolled</span>
                                            </div>
                                            <Link to={`/course/${course.slug}`} className="learn-more">Learn More <img src={externalGoLinkIcon} className='ms-2' alt="icon" width='10px' height='10px' /></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>

                        <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
                            <button className="btn btn-outline-dark rounded-circle p-2" onClick={prevSlide} disabled={currentIndex === 0}>
                                <IoArrowBack size={24} />
                            </button>
                    
                            {/* Pagination Dots */}
                            <div className="d-flex gap-2">
                                {courses.map((_, index) => (
                                    <div role='button' key={index} onClick={() => goToSlide(index)} className={`dot ${currentIndex === index ? "active" : ""}`} />
                                ))}
                            </div>
                    
                            <button className="btn btn-outline-dark rounded-circle p-2" onClick={nextSlide} disabled={currentIndex >= courses.length - visibleItems}>
                                <IoMdArrowForward size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    
      </section>
    );
};
  
export default CourseSection;