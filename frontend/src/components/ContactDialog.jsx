import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ContactDialog = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formFields, setFormFields] = useState({ firstname: "", lastname: "", email: "", password: "", confirmPassword: "" })
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
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            
            <Modal show={show} onHide={handleClose} centered backdrop="static" >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={formSubmit}>
                        <div className="form-floating">
                            <input type="text" name="firstname" onChange={handleFormInput} value={formFields.firstname} className="form-control form-control-sm rounded-0" id="floating-firstname" required placeholder="name@example.com" />
                            <label for="floating-firstname">First Name</label>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ContactDialog