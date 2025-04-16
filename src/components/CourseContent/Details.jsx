const Details = ({ course }) => {
    return (
        <section className="course-details">
            <div className="container" style={{ backgroundColor: course.colorBg || '' }}>
                <div className="row px-2">
                    <div className="col-md-4 mb-4">
                        <p className="m-0">Course Details</p>
                        <h2 className="mt-3 about">What the course is all about.</h2>
                    </div>

                    <div className="col-md-8">

                        <div className="row row-cols-2 row-cols-md-3 g-4">
                            {course.details.map((detail, index) => (
                                <div className="col item" key={index}>
                                    <h6 className="title">{detail.title}</h6>
                                    <p className="mb-0 content">{detail.content}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5">
                            <h5 className="fw-bold mb-3">Learning Outcome</h5>
                            <ul className="row justify-content-between outcomes">
                                {course.learningOutcomes.map((outcome, index) => (
                                    <li className="col-md-6 col-sm-12 mb-3" key={index}>{outcome}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details;