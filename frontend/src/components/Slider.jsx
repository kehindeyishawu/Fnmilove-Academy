import "./Slider.scss"
import Carousel from 'react-bootstrap/Carousel';
import { setFullWidth } from "../utils/cloudinary";
import { Link } from "react-router-dom";

function Slider() {
    return (
        <div className="slider">
            <Carousel>
                <Carousel.Item>
                    <img src={`https://res.cloudinary.com/kkenny/image/upload/${setFullWidth()}/v1730967496/Fnmilove%20Academy/student8_afvvhj.png`} className='img-fluid' alt="Academy Student" />
                    <Carousel.Caption>
                        <h3 className='display-4 d-none d-md-block'>Hands-on Experience</h3>
                        <h3 className='fs-6 fw-bold d-md-none'>Hands-on Experience</h3>
                        <p className='w-75 my-md-4'>We believe in learning by doing. Our practical approach ensures that students gain real-world experience in their fields.</p>
                        <div className='gap-4 d-none d-md-flex'>
                            <Link to="/login" className="btn btn-primary rounded-0 fw-bold text-dark py-3 px-5">Apply Now</Link>
                            <a href="#home-why-us" className="btn btn-outline-light rounded-0 fw-bold text-white py-3 px-5">Learn More</a>
                        </div>
                        <div className='gap-4 d-flex d-md-none'>
                            <Link to="/login" className="btn btn-primary btn-sm rounded-0 fw-bold text-dark">Apply Now</Link>
                            <a href="#home-why-us" className="btn btn-outline-light btn-sm rounded-0 fw-bold text-white">Learn More</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={`https://res.cloudinary.com/kkenny/image/upload/${setFullWidth()}/v1730964829/Fnmilove%20Academy/tutorship_z4zccr.png`} className='img-fluid' alt="Tutoring" />
                    <Carousel.Caption>
                        <h3 className='display-4 d-none d-md-block'>Personalized Guidance</h3>
                        <h3 className='fs-6 fw-bold d-md-none'>Personalized Guidance</h3>
                        <p className='w-100 my-md-3'>Our dedicated tutors provide personalized support to help each student achieve their full potential. Experience the difference with our one-on-one mentoring.</p>
                        <div className='gap-4 d-none d-md-flex'>
                            <Link to="/login" className="btn btn-primary rounded-0 fw-bold text-dark py-3 px-5">Apply Now</Link>
                            <a href="#home-why-us" className="btn btn-outline-light rounded-0 fw-bold text-white py-3 px-5">Learn More</a>
                        </div>
                        <div className='gap-4 d-flex d-md-none'>
                            <Link to="/login" className="btn btn-primary btn-sm rounded-0 fw-bold text-dark">Apply Now</Link>
                            <a href="#home-why-us" className="btn btn-outline-light btn-sm rounded-0 fw-bold text-white">Learn More</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={`https://res.cloudinary.com/kkenny/image/upload/${setFullWidth()}/v1730967495/Fnmilove%20Academy/conversation_mnv9qv.png`} className='img-fluid' alt="Group Conversation" />
                    <Carousel.Caption>
                        <h3 className='display-4 d-none d-md-block'>Collaborative Learning</h3>
                        <h3 className='fs-6 fw-bold d-md-none'>Collaborative Learning</h3>
                        <p className='w-75 my-md-4'>Engage in dynamic discussions and collaborative projects. Our interactive classes foster teamwork and creativity.</p>
                        <div className='gap-4 d-none d-md-flex'>
                            <Link to="/login" className="btn btn-primary rounded-0 fw-bold text-dark py-3 px-5">Apply Now</Link>
                            <a href="#home-why-us" className="btn btn-outline-light rounded-0 fw-bold text-white py-3 px-5">Learn More</a>
                        </div>
                        <div className='gap-4 d-flex d-md-none'>
                            <Link to="/login" className="btn btn-primary btn-sm rounded-0 fw-bold text-dark">Apply Now</Link>
                            <a href="#home-why-us" className="btn btn-outline-light btn-sm rounded-0 fw-bold text-white">Learn More</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={`https://res.cloudinary.com/kkenny/image/upload/${setFullWidth()}/v1731022117/Fnmilove%20Academy/student_f31mbe.png`} className='img-fluid' alt="Happy Man" />
                    <Carousel.Caption>
                        <h3 className='display-4 d-none d-md-block'>Empowering Future Professionals</h3>
                        <h3 className='fs-6 fw-bold d-md-none'>Empowering Future Professionals</h3>
                        <p className='w-100 my-md-4'>Our student are equipped with the skills and knowledge to excel in their chosen vocations. Join us and start your journey to succes.</p>
                        <div className='gap-4 d-none d-md-flex'>
                            <Link href="/login" className="btn btn-primary rounded-0 fw-bold text-dark py-3 px-5">Apply Now</Link>
                            <a href="#home-why-us" className="btn btn-outline-light rounded-0 fw-bold text-white py-3 px-5">Learn More</a>
                        </div>
                        <div className='gap-4 d-flex d-md-none'>
                            <Link href="/login" className="btn btn-primary btn-sm rounded-0 fw-bold text-dark">Apply Now</Link>
                            <a href="#home-why-us" className="btn btn-outline-light btn-sm rounded-0 fw-bold text-white">Learn More</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;