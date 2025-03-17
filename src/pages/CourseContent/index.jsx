import { useParams, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CourseMap } from '../../data/courses';
import './style.css'
import HeroSection from '../../components/CourseContent/HeroSection';
import Overview from '../../components/CourseContent/Overview';
import Details from '../../components/CourseContent/Details';
import Content from '../../components/CourseContent/Content';
import PricingPlans from '../../components/CourseContent/PricingPlans';
import Instructor from '../../components/CourseContent/Instructor';
import { Helmet } from 'react-helmet-async';


const CourseContentPage = () => {
  const { courseID } = useParams();
  const [isValid, setIsValid] = useState(null);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const checkCourseID = async () => {
      //TODO fetch real course
      if (CourseMap.hasOwnProperty(courseID)) {
        setIsValid(true);
        setCourse(CourseMap[courseID]);
      } else {
        setIsValid(false);
      }
    };

    if (courseID) {
      checkCourseID();
    } else {
      setIsValid(false);
    }
  }, [courseID]);

  if (isValid === null) {
    return null;
  }
  if (!isValid) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Helmet>
          <title>Course Content - Cosmos Academy</title>
      </Helmet>
      <main className="pb-5 course-content">
        <HeroSection course={course} />
        <div className="section-width">
          <Overview course={course} />
          <Details course={course} />
          <Content course={course} />
          <Instructor course={course} />
          <PricingPlans/>
        </div>
      </main>
    </>
  );
}
export default CourseContentPage;