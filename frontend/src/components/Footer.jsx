import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = ({ setShowModal }) => {
    return (
        <footer className="Footer bg-dark text-white py-5 top-spacing">
            <div className="container">
                <div className="hstack justify-content-center justify-content-md-between flex-wrap row-gap-5">
                    <div className="order-2 order-md-1">
                        <img src="/logo.png" width={50} className="academy-logo" alt="Fnmilove Academy Logo" />
                        {" "} <h1 className="radley-font fs-4 text-white d-inline border-start border-2 border-light ps-1 py-2 align-middle">Fnmilove Academy</h1>
                    </div>
                    <div className="order-1 order-md-2 gap-4 d-flex fs-3">
                        <a href="https://www.facebook.com/share/15rDVa32u6" className="text-white">
                        <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/flacademy.fl" className="text-white">
                        <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/funmilola-alabi-a911b366" className="text-white">
                        <FaLinkedinIn />
                        </a>
                        <a href="https://x.com/fnmiloveacademy" className="text-white">
                        <FaXTwitter />
                        </a>
                    </div>
                </div>
                <div>
                    <p className="my-4 text-center text-md-start fw-bold">
                        <span className="text-light">&copy; {new Date().getFullYear()} Fnmilove Academy. | All rights reserved. |</span> <Link className="text-decoration-none text-white" to="/blog?jobs">Job Opportunities</Link> | <Link className="text-decoration-none text-white" to="/privacy">Privacy Policy</Link> <br /> <Link className="text-decoration-none text-white" to="/terms">Terms and Conditions</Link> | <Link className="text-decoration-none text-white" onClick={() => setShowModal(true)} to="#">Contact Us</Link>
                    </p>
                    <small className="d-block">
                        Legal Disclaimer: The information provided on this website is for general informational purposes only. While we strive to keep the information up-to-date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                    </small>
                </div>
            </div>
        </footer>
    )
}

export default Footer