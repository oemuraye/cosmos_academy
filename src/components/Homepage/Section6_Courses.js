import { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import exploreIcon from '../../assets/icons/go-icon.png';
import externalGoLinkIcon from '../../assets/icons/externalGoLinkIcon.png';
import courseImage from '../../assets/images/cardImg.png';

import enrolledUsersImg1 from '../../assets/images/enrolled-users1.png';
import enrolledUsersImg2 from '../../assets/images/enrolled-users2.png';
import enrolledUsersImg3 from '../../assets/images/enrolled-users3.png';
import enrolledUsersImg4 from '../../assets/images/enrolled-users4.png';
import enrolledUsersImg5 from '../../assets/images/enrolled-users5.png';

import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

const courses = [
    {
      id: 1,
      title: "Introduction to Website </br> Development",
      instructor: "Cosmos",
      duration: "3 Weeks",
      startDate: "March 17, 2025",
      description: "Learn dynamic websites using HTML, CSS, JavaScript, and advanced frameworks like React.",
      enrolled: "1k",
      image: courseImage,
      pricing: "free",
      free: true
    },
    {
      id: 2,
      title: "Introduction to Artificial </br> Intelligence (AI)",
      instructor: "Cosmos",
      duration: "3 Weeks",
      startDate: "Coming Soon",
      description: "Gain a solid foundation in AI and machine learning. Learn data analysis, model building with Python.",
      enrolled: "0",
      image: courseImage,
      pricing: "March 25, 2025",
      free: false
    },
    {
        id: 3,
        title: "Introduction to Mobile </br> Development",
        instructor: "Cosmos",
        duration: "3 Weeks",
        startDate: "Coming Soon",
        description: "Build scalable full-stack applications using Node.js, Express, MongoDB, and React.",
        enrolled: "0",
        image: courseImage,
        pricing: "₦70,000",
        free: false,
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
  
    return (
        <section className='course-section container my-5 padding_y-spacing'>
            <section className="section_headingWithBtn mb-5">
                <h2>Empower your future with technological skills</h2>
                <p className='my-3'>Unlock the knowledge and tools needed to thrive in the digital world. From web and mobile development to AI and digital innovation, Cosmos Academy offers expert-led courses designed to transform your skills into real-world impact.</p>
                <div className="btn-action_div my-4">
                    <button className="customBtn">
                        <span>Explore Courses</span> <img src={exploreIcon} alt="icon" />
                    </button>
                </div>
            </section>
  
            <div className="courses-display-section my-5">
    
                <div className="courses-display" ref={sliderRef}>
                    {courses.map((course) => (
                        <div key={course.id} className="course-card">
                            <div className="course-card-image">
                                <img src={course.image} alt={course.title} height='283px' />
                                {course.free && <span className="badge">Free</span>}
                            </div>


                            <div className="course-card-body mt-3">
                                <h4 dangerouslySetInnerHTML={{ __html: course.title }}></h4>
                                <p className="course-meta"> <span>By</span> <strong>{course.instructor}</strong> | {course.duration}</p>
                                
                                <hr />
                                    <div className={`training-date ${course.free ? 'free' : ''}`}>
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
                                            {userEnrolledImages.map((userEnrolled, index) => (
                                                <img key={index} src={userEnrolled} alt="Enrolled users" className='img-fluid' />
                                            ))}
                                        </div>
                                        <span>{course.enrolled} enrolled</span>
                                    </div>
                                    <Link href="#" className="learn-more">Learn More <img src={externalGoLinkIcon} className='ms-2' alt="icon" width='10px' height='10px' /></Link>
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
    
      </section>
    );
};
  
export default CourseSection;