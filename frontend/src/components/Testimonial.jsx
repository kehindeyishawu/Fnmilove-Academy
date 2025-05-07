import Carousel from 'react-bootstrap/Carousel';
import { setContainerHalfWidth } from "../utils/cloudinary";
import "./Testimonial.scss"
import { BiSolidSchool } from 'react-icons/bi';
import { cloudname } from '../utils/cloudinary';


const Testimonial = () => {

    return (
        <div className='testimonial-container' style={{ backgroundImage: `url(${cloudname}/w_600,f_auto,q_auto/books_ex2k3c)` }}>
            <small className="z-1 position-relative fw-bold text-dark fs-6 d-block text-center">
                <BiSolidSchool /> {""}
                Student Success Stories
            </small>
            <h1 className='fw-bold text-center'>Testimonials</h1>
            <p className='z-1 position-relative fw-bold text-info'>Transforming Lives One Lesson at a Time</p>
            <Carousel fade>
                <Carousel.Item>
                    <img src={`${cloudname}/${setContainerHalfWidth("r_30,ar_3:2,c_fill,g_auto,")}/student2`} className='d-none d-lg-inline' alt="Academy Student" />
                    <img src={`${cloudname}/${setContainerHalfWidth("r_30,ar_4:3,c_fill,g_auto,")}/student2`} className='d-lg-none' alt="Academy Student" />
                    <Carousel.Caption>
                        <h2>Atara Akin</h2>
                        <p><em>"Highly recommended for personal <br /> and intellectual growth."</em></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={`${cloudname}/${setContainerHalfWidth("r_30,ar_3:2,c_fill,g_face,")}/student3`} className='d-none d-lg-inline' alt="Academy Student" />
                    <img src={`${cloudname}/${setContainerHalfWidth("r_30,ar_4:3,c_fill,g_face,")}/student3`} className='d-lg-none' alt="Academy Student" />
                    <Carousel.Caption>
                        <h2>Chioma</h2>
                        <p><em>"It’s a no judgment zone and you are free <br /> to make mistakes while you learn"</em></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={`${cloudname}/${setContainerHalfWidth("r_30,ar_3:2,c_fill,g_face,")}/student4`} className='d-none d-lg-inline' alt="Academy Student" />
                    <img src={`${cloudname}/${setContainerHalfWidth("r_30,ar_4:3,c_fill,g_face,")}/student4`} className='d-lg-none' alt="Academy Student" />
                    <Carousel.Caption>
                        <h2>Gbemisola Samuel</h2>
                        <p>
                            <em>"Practical skills I can use anywhere in the world to  <br /> earn a living and create opportunities for myself"</em>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Testimonial