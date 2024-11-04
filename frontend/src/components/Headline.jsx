import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Headline = () => {
    return (
        <>
            <div className='bg-dark text-white fw-bold d-none d-md-flex'>
                <div className='flex-grow-1 px-5 d-flex'>
                    <div className='py-2 me-auto'>Welcome To Fnmilove Academy. <span className='text-primary'>Connect With Us</span></div>
                    <div className="align-items-center gap-4 d-flex">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaLinkedinIn />
                        <FaXTwitter />
                    </div>
                </div>
                <div className='py-2 px-5 bg-primary text-dark'>Phone: +234 7678 4879..</div>
            </div>
        </>
    )
}

export default Headline