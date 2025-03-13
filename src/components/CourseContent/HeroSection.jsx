import IconLabel from '../../components/Common/IconLabel';

import { ReactComponent as UserCheck } from '../../assets/icons/user-check.svg'
import { ReactComponent as AccessTime } from '../../assets/icons/access-time.svg'
import { ReactComponent as Note } from '../../assets/icons/note.svg'
import { ReactComponent as ListMessage } from '../../assets/icons/list-message.svg'

const HeroSection = ({ course }) => {
    return (
        <>
            <section className="hero-section">
                <div className="container-fluid">
                    <div className="hero-content d-flex flex-md-row flex-column py-5">
                        <div className="col-md-6 col-12 order-1">
                            <h1 className="fw-bold mb-3 course-title">{course.title}</h1>

                            <div className="course-info">
                                <span>Course by </span> <span className="fw-bold"> {course.academy}</span>
                            </div>
                            <div className="course-info">
                                <span>Instructed by </span> <span className="fw-bold">{course.instructor.name}</span>
                            </div>

                            <div className="course-features width-full mt-3 pt-5 gap-3">
                                {course.features.map((feature, index) => (
                                    <IconLabel key={index} icon={
                                        index === 0 ? <UserCheck /> :
                                        index === 1 ? <ListMessage /> :
                                        index === 2 ? <AccessTime /> :
                                        index === 3 ? <Note /> :
                                        <AccessTime />
                                    }>
                                        <span className="fw-bold">{feature.label}:</span> <span>{feature.value}</span>
                                    </IconLabel>
                                ))}
                            </div>

                            <div className="mb-3 mt-5 course-info">
                                <span className="fw-bold">Starts on :</span> <span> {course.startDate}</span>
                            </div>
                        </div>
                        <div className='hero-image-container col-md-6 col-12 order-md-2 order-0'>
                            <img src={course.image} alt="Tech Insights" className="hero-image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HeroSection;