import Carousel from 'react-bootstrap/Carousel';
import Student from '../assets/black student.jpg';
import Conversation from '../assets/coversation.jpg';
import Student8 from '../assets/student8.jpg';
import Tutors from '../assets/tutorship.jpg';
import "./Slider.scss"

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={Student8} className='carousel-img' alt="" />
                <Carousel.Caption>
                    <h3 className='display-4 d-none d-md-block'>First slide label</h3>
                    <h3 className='fs-6 fw-bold d-md-none'>First slide label</h3>
                    <p className='w-75'>Nulla vitae elit libero, a pharetra augue mollis interdum. Lore nobis solut labore quia.</p>
                    <div className='gap-4 d-none d-lg-flex'>
                        <a href="" className="btn btn-primary rounded-0 fw-bold text-dark py-3 px-5">Apply Now</a>
                        <a href="" className="btn btn-outline-light rounded-0 fw-bold text-white py-3 px-5">Learn More</a>
                    </div>
                    <div className='gap-4 d-flex d-md-none'>
                        <a href="" className="btn btn-primary btn-sm rounded-0 fw-bold text-dark">Apply Now</a>
                        <a href="" className="btn btn-outline-light btn-sm rounded-0 fw-bold text-white">Learn More</a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Tutors} className='carousel-img' alt="" />
                <Carousel.Caption>
                    <h3 className='display-4 d-none d-md-block'>Second slide label</h3>
                    <h3 className='fs-6 fw-bold d-md-none'>Second slide label</h3>
                    <p className='w-75'>Nulla vitae elit libero, a pharetra augue mollis interdum. Lore nobis solut labore quia.</p>
                    <div className='gap-4 d-none d-lg-flex'>
                        <a href="" className="btn btn-primary rounded-0 fw-bold text-dark py-3 px-5">Apply Now</a>
                        <a href="" className="btn btn-outline-light rounded-0 fw-bold text-white py-3 px-5">Learn More</a>
                    </div>
                    <div className='gap-4 d-flex d-md-none'>
                        <a href="" className="btn btn-primary btn-sm rounded-0 fw-bold text-dark">Apply Now</a>
                        <a href="" className="btn btn-outline-light btn-sm rounded-0 fw-bold text-white">Learn More</a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Conversation} className='carousel-img' alt="" />
                <Carousel.Caption>
                    <h3 className='display-4 d-none d-md-block'>Third slide label</h3>
                    <h3 className='fs-6 fw-bold d-md-none'>Third slide label</h3>
                    <p className='w-75'>Nulla vitae elit libero, a pharetra augue mollis interdum. Lore nobis solut labore quia.</p>
                    <div className='gap-4 d-none d-lg-flex'>
                        <a href="" className="btn btn-primary rounded-0 fw-bold text-dark py-3 px-5">Apply Now</a>
                        <a href="" className="btn btn-outline-light rounded-0 fw-bold text-white py-3 px-5">Learn More</a>
                    </div>
                    <div className='gap-4 d-flex d-md-none'>
                        <a href="" className="btn btn-primary btn-sm rounded-0 fw-bold text-dark">Apply Now</a>
                        <a href="" className="btn btn-outline-light btn-sm rounded-0 fw-bold text-white">Learn More</a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Student} className='carousel-img' alt="" />
                <Carousel.Caption>
                    <h3 className='display-4 d-none d-md-block'>Fourth slide label</h3>
                    <h3 className='fs-6 fw-bold d-md-none'>Fourth slide label</h3>
                    <p className='w-75'>Nulla vitae elit libero, a pharetra augue mollis interdum. Lore nobis solut labore quia.</p>
                    <div className='gap-4 d-none d-lg-flex'>
                        <a href="" className="btn btn-primary rounded-0 fw-bold text-dark py-3 px-5">Apply Now</a>
                        <a href="" className="btn btn-outline-light rounded-0 fw-bold text-white py-3 px-5">Learn More</a>
                    </div>
                    <div className='gap-4 d-flex d-md-none'>
                        <a href="" className="btn btn-primary btn-sm rounded-0 fw-bold text-dark">Apply Now</a>
                        <a href="" className="btn btn-outline-light btn-sm rounded-0 fw-bold text-white">Learn More</a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;