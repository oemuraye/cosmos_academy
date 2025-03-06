import { Link } from 'react-router-dom';
import exploreIcon from '../../assets/icons/go-icon.png';
import externalGoLinkIcon from '../../assets/icons/externalGoLinkIcon.png';
import courseImage from '../../assets/images/cardImg.png';

import enrolledUsersImg1 from '../../assets/images/enrolled-users1.png';
import enrolledUsersImg2 from '../../assets/images/enrolled-users2.png';
import enrolledUsersImg3 from '../../assets/images/enrolled-users3.png';
import enrolledUsersImg4 from '../../assets/images/enrolled-users4.png';
import enrolledUsersImg5 from '../../assets/images/enrolled-users5.png';

const courses = [
    {
      id: 1,
      title: "Introduction to Website Development",
      instructor: "Cosmos",
      duration: "3 Weeks",
      startDate: "Feb 24, 2025",
      description: "Learn dynamic websites using HTML, CSS, JavaScript, and advanced frameworks like React.",
      enrolled: "1k",
      image: courseImage,
      free: true
    },
    {
      id: 2,
      title: "Advanced JavaScript Mastery",
      instructor: "Cosmos",
      duration: "4 Weeks",
      startDate: "Mar 10, 2025",
      description: "Master JavaScript, ES6+, asynchronous programming, and build real-world applications.",
      enrolled: "750",
      image: courseImage,
      free: false
    }
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
  return (
    <section className='course-section container my-5 padding_y-spacing'>
        <section className="section_headingWithBtn">
            <h2>Empower your future with technological skills</h2>
            <p className='my-3'>Unlock the knowledge and tools needed to thrive in the digital world. From web and mobile development to AI and digital innovation, Cosmos Academy offers expert-led courses designed to transform your skills into real-world impact.</p>
            <div className="btn-action_div my-4">
                <button className="customBtn">
                    <span>Explore Courses</span> <img src={exploreIcon} alt="icon" />
                </button>
            </div>
        </section>

        <section className="courses-display">
        {courses.map((course) => (
            <div key={course.id} className="course-card">
            <div className="course-card-image">
                <img src={course.image} alt={course.title} />
                {course.free && <span className="badge">Free</span>}
            </div>


            <div className="course-card-body">
                <h3>{course.title}</h3>
                <p className="course-meta">By <strong>{course.instructor}</strong> | {course.duration}</p>
                
                <hr />

                <div className={`training-date ${course.free ? 'free' : ''}`}>
                    <span>Next training <strong>{new Date(course.startDate).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</strong></span>
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
        </section>

    </section>
  )
}

export default CourseSection;