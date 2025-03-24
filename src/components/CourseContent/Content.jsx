import React from 'react';
import exploreIcon from '../../assets/icons/btn-Icon.png';
import { BsPlus } from 'react-icons/bs';
import { HiOutlineMinus } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";

const Content = ({ course }) => {
    return (
        <div className="container mt-5 cc px-3 px-md-5">
            <p className="sub">Course content</p>
            <h2 className="title">What you will learn on this course.</h2>

            <div className="d-flex fw-bold py-2 border-bottom">
                <div className="col-10">Lessons</div>
                <div className="col-1">Chapters</div>
                <div className="col-1 text-end" />
            </div>

            {course.lessons.map((lesson, index) => (
                <div
                    className="course-chapter d-flex align-items-center py-3 border-bottom"
                    key={index}
                >
                    <div className="col-10 d-flex align-items-center content-title">
                        <span
                            className="content-badge me-2 relative"
                        >
                            {lesson.week}
                        </span>
                        <span className='d-flex'>{lesson.title}</span>
                    </div>

                    <div className="col-1">{lesson.chapters}</div>

                    <div className="col-1 text-end">
                        <button className="btn btn-light">
                            <GoPlus size={25} />
                        </button>
                    </div>
                </div>
            ))}

            <div className="btn-action_div">
                <button className="customBtn">
                    <span>Enroll now</span> <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
                </button>
            </div>
        </div>
    );
};

export default Content;
