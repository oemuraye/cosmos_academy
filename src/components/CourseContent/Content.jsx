import React, { useState } from 'react';
import exploreIcon from '../../assets/icons/btn-Icon.png';
import { BsPlus } from 'react-icons/bs';
import { HiOutlineMinus } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { Link } from 'react-router-dom';
import { CiLock } from "react-icons/ci";
import { IoPlayCircleOutline } from "react-icons/io5";

const Content = ({ course }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
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
                <div key={index} className="border-bottom">
                    <div role='button' onClick={() => toggleAccordion(index)} className="course-chapter d-flex align-items-center py-3">
                        <div className="col-10 d-flex align-items-center content-title">
                            <span className="content-badge me-2 relative">{lesson.week}</span>
                            <span className='d-flex'>{lesson.title}</span>
                        </div>
                        <div className="col-1">{lesson?.lessons?.length}</div>
                        <div className="col-1 text-end">
                            <button className="btn btn-light">
                                {activeIndex === index ? <HiOutlineMinus size={25} /> : <GoPlus size={25} />}
                            </button>
                        </div>
                    </div>
                    
                    <div className={`lesson-description px-3 pb-3 ${activeIndex === index ? "open" : "closed"}`}>
                        {/* {activeIndex === index && (<p className="text-muted">{lesson.description}</p>)} */}
                        {activeIndex === index && (
                            <div className="lesson-list">
                            {lesson.lessons.map((subLesson, idx) => (
                                <div key={idx} className="row justify-content-between align-items-center flex-wrap py-2">
                                    <div className='col-md-9 col-sm-12'>
                                        <p className='mb-0'>{subLesson.title}</p>
                                    </div>
                                    <div className="col-md-3 col-sm-12 d-flex gap-1 justify-content-between align-items-center">
                                        <div><p className="mb-0 me-3">{subLesson.duration}</p></div>
                                        {subLesson.locked ? <CiLock size={30} /> : (
                                            <>
                                                <div className="lesson-video" role='button' data-bs-toggle="modal" data-bs-target="#lessonVideoModal">
                                                    <IoPlayCircleOutline size={26} />
                                                </div>

                                                {/* <!-- Modal --> */}
                                                <section className="modal fade" id="lessonVideoModal" tabIndex="-1" aria-labelledby="lessonVideoModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content">
                                                            <div className="d-flex justify-content-end p-2">
                                                                <button type="button" className="btn-close" id='joinModalCloseBtn' data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="ratio ratio-16x9">
                                                                    <iframe
                                                                        src={subLesson.videoLink ? subLesson.videoLink : "https://www.youtube.com/embed/UrOvKF9QmPw?autoplay=1&mute=1&loop=1&playlist=UrOvKF9QmPw&rel=0"}
                                                                        title="Lesson Video"
                                                                        allow="autoplay; encrypted-media"
                                                                        allowFullScreen
                                                                        style={{ border: 'none', width: '100%', height: '100%' }}
                                                                    ></iframe>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}

            <div className="btn-action_div">
                <Link to='/welcome' className="customBtn">
                    <span>Enroll now</span> <span className="customBtn-icon"><img loading='lazy' src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
                </Link>
            </div>
        </div>
    );
};

export default Content;
