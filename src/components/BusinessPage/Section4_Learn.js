import React from 'react'
import { Link } from 'react-router-dom';
import externalGoLinkIcon from '../../assets/icons/externalGoLinkIcon.png';

const courses = [
    {
      id: 1,
      slug: 'introduction-to-web-dev',
      title: "Website Development",
      instructor: "Cosmos",
      duration: "3 Weeks",
      startDate: "March 17, 2025",
      description: "Learn dynamic websites using HTML, CSS, JavaScript, and advanced frameworks like React.",
    //   enrolled: "1k",
    //   image: courseImage,
        trainingDate_BgColor: '#FFC3FF',  
        pricing: "free",    },
    {
      id: 2,
      slug: 'introduction-to-web-dev',
      title: "Social Media Management",
      instructor: "Cosmos",
      duration: "3 Weeks",
      startDate: "March 25, 2025",
      description: "Gain a solid foundation in AI and machine learning. Learn data analysis, model building with Python.",
    //   enrolled: "0",
    //   image: courseImage,
        trainingDate_BgColor: '#90B8F3',  
        pricing: "₦70,000",    },
    {
        id: 3,
        slug: 'introduction-to-web-dev',
        title: "Digital Innovation",
        instructor: "Cosmos",
        duration: "3 Weeks",
        startDate: "Coming Soon",
        description: "Build scalable full-stack applications using Node.js, Express, MongoDB, and React.",
        // enrolled: "0",
        // image: courseImage,
        trainingDate_BgColor: '',
        pricing: "coming_soon",    },
    {
        id: 4,
        slug: 'introduction-to-web-dev',
        title: "Advanced JavaScript Mastery",
        instructor: "Cosmos",
        duration: "3 Weeks",
        startDate: "Coming Soon",
        description: "Build scalable full-stack applications using Node.js, Express, MongoDB, and React.",
        // enrolled: "0",
        // image: courseImage,
        trainingDate_BgColor: '',
        pricing: "coming_soon",    },
    // Add more courses here
];

const LearningInfoSection = () => {
  return (
    <section className='learning-info-section padding_y-spacing container my-5'>
        <section className="section-heading my-5">
          <h2>What Your Team Will Learn</h2>
          <p>
            Our expert-led training covers essential and advanced topics in Web Development, 
            AI, IoT, AR/VR, Mobile Development, Brand Development, and more.
          </p>
        </section>

        <div className="cloud-overlay">
            <div className="courses-display-section my-5">
                <div className="courses-display ps-3 ps-md-4">
                    {courses.map((course) => (
                        <div key={course.id} className="course-card">
                            {/* <div className="course-card-image">
                                <img src={course.image} alt={course.title} height='283px' />
                                {course.free && <span className="badge">Free</span>}
                            </div> */}


                            <div className="course-card-body mt-3">
                                <h4 dangerouslySetInnerHTML={{ __html: course.title }}></h4>
                                {/* <p className="course-meta"> <span>By</span> <strong>{course.instructor}</strong> | {course.duration}</p> */}
                                
                                <hr />
                                    <div className={`training-date ${course.pricing === "free" ? 'free' : course.pricing === 'coming_soon' ? 'coming_soon' : 'pricing'}`}>
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
                                    <Link href={`/course/${course.slug}`} className="learn-more">View Courses <img src={externalGoLinkIcon} className='ms-2' alt="icon" width='10px' height='10px' /></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default LearningInfoSection;