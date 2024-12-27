import { setContainerHalfWidth } from "../utils/cloudinary"
import { BiSolidSchool } from "react-icons/bi";
import { FaRegCircleCheck, FaArrowRight } from "react-icons/fa6";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const WhyUs = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className="d-md-none">
                        <small className="fw-bold text-primary fs-6">
                            <BiSolidSchool /> {""}
                            Why Us
                        </small>
                        <h1 className="fw-bold mb-lg-3">Unlock Your Potential with Expert Coaching</h1>
                    </div>
                    <img src={`https://res.cloudinary.com/kkenny/image/upload/${setContainerHalfWidth()}/v1731030031/Fnmilove%20Academy/job-person_aypvcr.png`} className="img-fluid" alt="Man in Suit for Job Placement" />
                </div>
                <div className="col-md-6 align-self-center">
                    <div className="d-none d-md-block">
                        <small className="fw-bold text-primary fs-6">
                            <BiSolidSchool /> {""}
                            Why Us
                        </small>
                        <h1 className="fw-bold mb-lg-3">Unlock Your Potential with Expert Coaching</h1>
                    </div>
                    <p className="mt-4">
                        At our Vocational Academy, we are dedicated to providing exceptional coaching delivered by highly skilled and experienced advisors. Our goal is to empower you with the knowledge and practical skills
                        needed to excel in your chosen field. Whether you are just starting out or looking to advance your career, our tailored programs are designed to meet your unique needs and help you achieve your goals
                    </p>
                    <div className="row mt-5">
                        <div className="col-6 row justify-content-center">
                            <div className="col-1">
                                <FaRegCircleCheck className="fs-6 align-top"/>
                            </div>
                            <div className="col-10">
                                <div>
                                    <h2 className="fs-6 fw-bold">Personalized Learning</h2>
                                    <p>Tailored Plans to help you achieve your goals</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 row justify-content-center">
                            <div className="col-1">
                                <FaRegCircleCheck className="fs-6 align-top"/>
                            </div>
                            <div className="col-10">
                                <div>
                                    <h2 className="fs-6 fw-bold">Industry Expertise</h2>
                                    <p>Learn from seasoned professionals with real-world experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 row justify-content-center">
                            <div className="col-1">
                                <FaRegCircleCheck className="fs-6 align-top"/>
                            </div>
                            <div className="col-10">
                                <div>
                                    <h2 className="fs-6 fw-bold">Hands-on Training</h2>
                                    <p>Gain practical skills through hands-on training</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 row justify-content-center">
                            <div className="col-1">
                                <FaRegCircleCheck className="fs-6 align-top"/>
                            </div>
                            <div className="col-10">
                                <div>
                                    <h2 className="fs-6 fw-bold">Comprehensive Support</h2>
                                    <p>Benefit from career advice and job Placement assistance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HashLink to="/blog#" className="btn btn-lg btn-dark rounded-0 d-block p-md-3 mt-4">Job Postings <FaArrowRight/></HashLink>
                </div>
            </div>
        </div>
    )
}

export default WhyUs