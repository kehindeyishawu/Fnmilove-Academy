import { BiSolidSchool } from 'react-icons/bi';
import { setContainerQuarterWidth } from '../utils/cloudinary';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import "./Team.scss"

let style = {
    marginTop:  "-2rem",
    zIndex: "5"
}

const Team = () => {
    return (
        <div className="team-container">
            <small className="fw-bold text-primary fs-6 d-block text-center">
                <BiSolidSchool /> {""}
                Our Experts
            </small>
            <h1 className='fw-bold text-center'>Meat Our Team</h1>
            <p className='text-center text-light mb-4'>The Brains Behind the Operation: Dedicated to Your Success and Growth</p>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    <div className="col">
                        <div className='position-relative'>
                            <img src={`https://res.cloudinary.com/kkenny/image/upload/${setContainerQuarterWidth("ar_9:10,")}/v1731513489/Fnmilove%20Academy/face1_rl3dax.png`} alt="" className='img-fluid' />
                            <div className="gap-3 d-flex justify-content-center bg-white social-icons">
                                <a href="" className="text-dark">
                                    <FaFacebookF />
                                </a>
                                <a href="" className="text-dark">
                                    <FaInstagram />
                                </a>
                                <a href="" className="text-dark">
                                    <FaLinkedinIn />
                                </a>
                                <a href="" className="text-dark">
                                    <FaXTwitter />
                                </a>
                            </div>
                        </div>
                        <h2 className='text-center fw-bold h4 text-secondary mb-0'>Vincent Henry</h2>
                        <p className='text-center'>Cinematographer</p>
                    </div>
                    <div className="col">
                        <div className='position-relative'>
                            <img src={`https://res.cloudinary.com/kkenny/image/upload/${setContainerQuarterWidth("ar_9:10,")}/v1731513489/Fnmilove%20Academy/face2_tpasfv.png`} alt="" className='img-fluid' />
                            <div className="gap-3 d-flex justify-content-center bg-white social-icons">
                                <a href="" className="text-dark">
                                    <FaFacebookF />
                                </a>
                                <a href="" className="text-dark">
                                    <FaInstagram />
                                </a>
                                <a href="" className="text-dark">
                                    <FaLinkedinIn />
                                </a>
                                <a href="" className="text-dark">
                                    <FaXTwitter />
                                </a>
                            </div>
                        </div>
                        <h2 className='text-center fw-bold h4 text-secondary mb-0'>Princess Okafor</h2>
                        <p className='text-center'>Hair Stylist</p>
                    </div>
                    <div className="col">
                        <div className='position-relative'>
                            <img src={`https://res.cloudinary.com/kkenny/image/upload/${setContainerQuarterWidth("ar_9:10,")}/v1731513489/Fnmilove%20Academy/face3_af6epz.png`} alt="" className='img-fluid' />
                            <div className="gap-3 d-flex justify-content-center bg-white social-icons">
                                <a href="" className="text-dark">
                                    <FaFacebookF />
                                </a>
                                <a href="" className="text-dark">
                                    <FaInstagram />
                                </a>
                                <a href="" className="text-dark">
                                    <FaLinkedinIn />
                                </a>
                                <a href="" className="text-dark">
                                    <FaXTwitter />
                                </a>
                            </div>
                        </div>
                        <h2 className='text-center fw-bold h4 text-secondary mb-0'>Fatima Abdullahi</h2>
                        <p className='text-center'>Fashion Designer</p>
                    </div>
                    <div className="col">
                        <div className='position-relative'>
                            <img src={`https://res.cloudinary.com/kkenny/image/upload/${setContainerQuarterWidth("ar_9:10,")}/v1731513489/Fnmilove%20Academy/face4_z4aeir.png`} alt="" className='img-fluid' />
                            <div className="gap-3 d-flex justify-content-center bg-white social-icons">
                                <a href="" className="text-dark">
                                    <FaFacebookF />
                                </a>
                                <a href="" className="text-dark">
                                    <FaInstagram />
                                </a>
                                <a href="" className="text-dark">
                                    <FaLinkedinIn />
                                </a>
                                <a href="" className="text-dark">
                                    <FaXTwitter />
                                </a>
                            </div>
                        </div>
                        <h2 className='text-center fw-bold h4 text-secondary mb-0'>Emeka Nwosu</h2>
                        <p className='text-center'>Photographer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team