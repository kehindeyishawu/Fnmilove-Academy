import Modal from 'react-bootstrap/Modal';
import { useRef, useState } from 'react';

const ContactDialog = ({showModal, setShowModal, setFadeNotification, setStaticNotification}) => {
    const handleClose = () => setShowModal(false);
    const [submiting, setSubmiting] = useState(false)
    let contactFormRef = useRef(null);

    const formSubmitLogic = async()=>{
        try {
            setSubmiting(true)
            let contactForm = contactFormRef.current
            let formData = new URLSearchParams(new FormData(contactForm));

            for (const element of contactForm.elements) {
                if (element.value === ""){
                    element.classList.add("is-invalid")
                    setSubmiting(false)
                    return
                }
            }
            
            let formRequest = await fetch("/api/contact", {
                method: "POST",
                body: formData,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            if (!formRequest.ok) {
                throw new Error(await formRequest.text())
            }

            setSubmiting(false)
            contactForm.reset()
            setFadeNotification({ message: "Message Sent", time: (new Date()).toString() })
            setShowModal(false)
        } catch (error) {
            setSubmiting(false)
            setStaticNotification({ message: error.message, time: (new Date()).toString() })
        }
    }
    const formSubmit = async(e) => {
        e.preventDefault()
        formSubmitLogic()
    }

    return (
        <>
            <Modal show={showModal} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Need Help or Want to Reach Us?</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-light'>
                    <form ref={contactFormRef} onSubmit={formSubmit}>
                        <div className='mb-3'>
                            <input type="text" disabled={submiting} name="fullname" className="form-control rounded-0" id="contact-fullname" placeholder="Full Name*" />
                            <div className="invalid-feedback">Kindly input your fullname</div>
                        </div>
                        <div className="mb-3">
                            <input type="email" disabled={submiting} name="email" className="form-control rounded-0" id="contact-email" placeholder="Email*" />
                            <div className="invalid-feedback">Kindly input your email</div>
                        </div>
                        <div className="mb-3">
                            <input type="number" disabled={submiting} name="phone" className="form-control rounded-0" id="contact-phone" placeholder="Phone Number*" />
                            <div className="form-text">Kindly include country code e.g +234, +1</div>
                            <div className="invalid-feedback">Kindly input your phone number</div>
                        </div>
                        <div className="mb-3">
                            <select disabled={submiting} className="form-select rounded-0" name='issue' aria-label="issues select">
                                <option value="">Help Us Understand What You Need Addressed</option>
                                <option value="1">Course-related</option>
                                <option value="2">Payment-related</option>
                                <option value="3">Others</option>
                            </select>
                            <div className="invalid-feedback">Help us understand the matter of your mail</div>
                        </div>
                        <div className="form-floating">
                            <textarea disabled={submiting} className='form-control rounded-0' name="message" id="contact-message" placeholder='testing' style={{height: "100px"}}></textarea>
                            <label htmlFor="contact-message">Tell Us More</label>
                            <div className="invalid-feedback">Kindly input your message</div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-dark rounded-0' onClick={handleClose}>
                        Close
                    </button>
                    <button className='btn btn-primary rounded-0' type='button' disabled={submiting} onClick={formSubmitLogic}>
                        {submiting ? <><span className="spinner-border spinner-border-sm me-1" aria-hidden="true"></span><span role="status">Sending...</span></> : "Send"}
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ContactDialog