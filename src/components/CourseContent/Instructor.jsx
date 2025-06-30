import React from 'react';

const Instructor = ({ course }) => {
    return (
        <div className="container my-5 instructor-section">
            <h2 className="fw-bold">Course Instructor &amp; Mentor</h2>

            <div className='instructor-content'>
                <p className="mt-3 text">About Instructors</p>
                <div className="row py-3">
                    <div className="col-auto">
                        <img
                            src={course.instructor.image}
                            alt="Instructor"
                            className='instructor-img'
                            style={{
                                borderRadius: '50%',
                                objectFit: 'cover',
                            }}
                        />
                    </div>

                    <div className="col">
                        <h5 className="instructor-course mb-1">
                            {course.title}
                        </h5>
                        <p className="mb-2 instructor">
                            <small>with</small> {course.instructor.name}
                        </p>
                        <p className="mb-2 instructor-bio">
                            {course.instructor.bio}
                        </p>
                    </div>

                    {/* <div className="col-md-auto col-sm-12 mt-3 mt-md-0 text-end">
                        <h6 className="text text-reg seats"><strong>{course.availableSeats}</strong> Seats Available</h6>
                    </div> */}
                </div>
                <p className="mb-0 text text-small">
                    If you have any questions, please contact us or call us
                    <br />
                    <strong>{course.contactInfo}</strong>
                </p>
            </div>
        </div>
    );
};

export default Instructor;
