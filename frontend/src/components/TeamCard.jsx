import { setContainerQuarterWidth } from "../utils/cloudinary"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { cloudname } from "../utils/cloudinary";

const TeamCard = ({img, name, position, social }) => {
    return (
        <div className="col">
            <div className='position-relative'>
                <img src={`${cloudname}/${setContainerQuarterWidth("ar_4:5,")}/${img}`} alt="" className='img-fluid' />
                <div className="gap-3 d-flex justify-content-center bg-white social-icons">
                    <a href={social.fb} className="text-dark">
                        <FaFacebookF />
                    </a>
                    <a href={social.ig} className="text-dark">
                        <FaInstagram />
                    </a>
                    <a href={social.in} className="text-dark">
                        <FaLinkedinIn />
                    </a>
                    <a href={social.x} className="text-dark">
                        <FaXTwitter />
                    </a>
                </div>
            </div>
            <h2 className='text-center fw-bold h4 text-secondary mb-0'>{name}</h2>
            <p className='text-center'>{position}</p>
        </div>
    )
}

export default TeamCard;