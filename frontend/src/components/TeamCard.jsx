import { setContainerQuarterWidth } from "../utils/cloudinary"

const TeamCard = ({img, name, position }) => {
    return (
        <div className="col">
            <div className='position-relative'>
                <img src={`https://res.cloudinary.com/kkenny/image/upload/${setContainerQuarterWidth("ar_3:4,")}/Fnmilove%20Academy/${img}`} alt="" className='img-fluid' />
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
            <h2 className='text-center fw-bold h4 text-secondary mb-0'>{name}</h2>
            <p className='text-center'>{position}</p>
        </div>
    )
}

export default TeamCard