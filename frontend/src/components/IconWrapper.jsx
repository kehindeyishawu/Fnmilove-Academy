import { FaBook, } from "react-icons/fa6";
import { FaTools, FaChalkboardTeacher } from "react-icons/fa";


const IconWrapper = () => {
    return (
        <div className="container-fluid">
            <div className='row justify-content-center'>
                <div className="col-md-6 col-lg-4 bg-light ps-3">
                    <div className="row align-items-center justify-content-between py-3">
                        <FaBook className="display-4 col-2" />
                        <div className="col-10">
                            <h4 className="fw-bold fs-5 text-secondary">Comprehensive Courses</h4>
                            <span>
                                Explore a wide range of courses with detailed descriptions, durations, prerequisites, and outcomes to suit your career goals.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 bg-primary ps-3">
                    <div className="row align-items-center justify-content-between py-3">
                        <FaChalkboardTeacher className="display-4 col-2" />
                        <div className="col-10">
                            <h4 className="fw-bold fs-5 text-secondary">Expert Instructors</h4>
                            <span>
                                Learn from the best! Meet our highly qualified instructors and gain from their extensive experience.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 bg-light ps-3">
                    <div className="row align-items-center justify-content-between py-3">
                        <FaTools className="display-4 col-2" />
                        <div className="col-10">
                            <h4 className="fw-bold fs-5 text-secondary">Interactive Learning Tools</h4>
                            <span>
                                Engage with quizzes, forums, and live chat to make your learning experience interactive and dynamic.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IconWrapper