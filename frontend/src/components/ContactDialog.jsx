import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const ContactDialog = ({showModal, setShowModal}) => {
    const handleClose = () => setShowModal(false);

    const [formFields, setFormFields] = useState({ fullname: "", email: "", phone: "", issue: "", message: "" })
    const formSubmit = (e) => {
        e.preventDefault()
    }
    const handleFormInput = (e) => {
        setFormFields((prevState) => {
            prevState[e.target.name] = e.target.value
            let newInputs = { ...prevState }
            return newInputs
        })
    }
    return (
        <>
            <Modal show={showModal} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Need Help or Want to Reach Us?</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-light'>
                    <form onSubmit={formSubmit}>
                        <input type="text" name="fullname" onChange={handleFormInput} value={formFields.fullname} className="form-control rounded-0 mb-3" id="contact-fullname" required placeholder="Full Name*" />
                        <input type="email" name="email" onChange={handleFormInput} value={formFields.email} className="form-control rounded-0 mb-3" id="contact-email" required placeholder="Email*" />
                        <input type="number" name="phone" onChange={handleFormInput} value={formFields.phone} className="form-control rounded-0" id="contact-phone" required placeholder="Phone Number*" />
                        <div className="form-text">Kindly include country code e.g +234, +1</div>
                        <select class="form-select rounded-0 mt-2" name='issue' onChange={handleFormInput} value={formFields.issue} aria-label="issues select">
                            <option selected>Help Us Understand What You Need Addressed</option>
                            <option value="1">Course-related</option>
                            <option value="2">Payment-related</option>
                            <option value="3">Others</option>
                        </select>
                        <div className="form-floating">
                            <textarea className='mt-3 form-control rounded-0' name="message" onChange={handleFormInput} value={formFields.message} id="contact-message" placeholder='testing' style={{height: "100px"}}>
                                
                            </textarea>
                            <label htmlFor="contact-message">Tell Us More</label>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-dark rounded-0' onClick={handleClose}>
                        Close
                    </button>
                    <button className='btn btn-primary rounded-0' onClick={handleClose}>
                        Send
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ContactDialog