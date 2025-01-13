import Carousel from 'react-bootstrap/Carousel';
import { setContainerHalfWidth } from "../utils/cloudinary";
import "./Testimonial.scss"
import { BiSolidSchool } from 'react-icons/bi';
import { cloudname } from '../utils/cloudinary';


const Testimonial = () => {

    return (
        <div className='testimonial-container'>
            <small className="z-1 position-relative fw-bold text-dark fs-6 d-block text-center">
                <BiSolidSchool /> {""}
                Student Success Stories
            </small>
            <h1 className='fw-bold text-center'>Testimonials</h1>
            <p className='z-1 position-relative fw-bold text-info'>Transforming Lives One Lesson at a Time</p>
            <Carousel fade>
                <Carousel.Item>
                    <img src={`${cloudname}/${setContainerHalfWidth("r_30,ar_3:2,c_fill,g_face,")}/Fnmilove%20Academy/student9`} className='' alt="Academy Student" />
                    <Carousel.Caption>
                        <h2>Caleb Okonkwo</h2>
                        <p><em>"It so easy getting myself back on track. <br /> I definitely recommend Fnmilove"</em></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={`${cloudname}/${setContainerHalfWidth("r_30,ar_3:2,c_fill,g_face,")}/Fnmilove%20Academy/face3`} className='' alt="Academy Student" />
                    <Carousel.Caption>
                        <h2>Eliza John</h2>
                        <p><em>"Thanks to Fnmilove Academy, I now have the <br /> skills and confidence to excel in my career"</em></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={`${cloudname}/${setContainerHalfWidth("r_30,ar_3:2,c_fill,g_face,")}/Fnmilove%20Academy/student10`} className='' alt="Academy Student" />
                    <Carousel.Caption>
                        <h2>Bright Ezekiel</h2>
                        <p>
                            <em>"The hands-on experience and supportive instructors made <br /> all the difference. Highly recommend!"</em>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Testimonial