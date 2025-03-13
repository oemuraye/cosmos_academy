const Overview = ({ course }) => {
    return (
        <section className="d-flex justify-content-center align-items-center">
            <section className="container py-5 course-overview">
                <div className="mb-3">Overview</div>
                <h2 className="fw-bold mb-3">{course.title}</h2>
                {course.overview.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </section>
        </section>
    )
}

export default Overview;