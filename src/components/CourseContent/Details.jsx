const Details = ({ course }) => {
    return (
        <section className="course-details">
            <div className="container">
                <div className="row px-3 px-md-5">
                    <div className="col-md-4 mb-4">
                        <p className="m-0">Course Details</p>
                        <h2 className="fw-bold about">What the course is all about.</h2>
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
                            <ul className="d-flex flex-wrap gap-3 outcomes">
                                {course.learningOutcomes.map((outcome, index) => (
                                    <li key={index}>{outcome}</li>
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