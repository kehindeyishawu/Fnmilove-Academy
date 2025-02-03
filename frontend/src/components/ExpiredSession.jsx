import Modal from 'react-bootstrap/Modal';
import { useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const ExpiredSession = ({sessionExpired, setSessionExpired}) => {
    const handleClose = () => setSessionExpired(false);
    const [submiting, setSubmiting] = useState(false)
    let loginFormRef = useRef(null);
    const {setUser, setFadeNotification, setStaticNotification} = useOutletContext()

    const formSubmitLogic = async () => {
        try {
            setSubmiting(true)
            let loginForm = loginFormRef.current
            let formData = new URLSearchParams(new FormData(loginForm));

            for (const element of loginForm.elements) {
                if (element.value === "") {
                    element.classList.add("is-invalid")
                    setSubmiting(false)
                    return
                }
            }

            let formRequest = await fetch("/api/auth/login/password", {
                method: "POST",
                body: formData,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            if (!formRequest.ok) {
                throw new Error(await formRequest.text())
            }

            let currentUser = await formRequest.json();
            setUser({ ...currentUser });
            setSubmiting(false)
            loginForm.reset()
            setFadeNotification({ message: "Welcome Back", time: (new Date()).toString() })
            setSessionExpired(false)
        } catch (error) {
            setSubmiting(false)
            setStaticNotification({ message: error.message, time: (new Date()).toString() })
        }
    }
    const formSubmit = async (e) => {
        e.preventDefault()
        formSubmitLogic()
    }

    return (
        <Modal show={sessionExpired} onHide={handleClose} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Session Expired</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Your session has expired, kindly login to continue with your work.</p>
                <form ref={loginFormRef} onSubmit={formSubmit}>
                    <div className='mb-3 form-floating'>
                        <input type="text" disabled={submiting} name="username" className="form-control rounded-0" id="email" placeholder="email" />
                        <label htmlFor="email">Email</label>
                        <div className="invalid-feedback">Kindly input your email</div>
                    </div>
                    <div className="mb-3 form-floating">
                        <input type="password" disabled={submiting} name="password" className="form-control rounded-0" id="password" placeholder="password" />
                        <label htmlFor="password">Password</label>
                        <div className="invalid-feedback">Kindly input your password</div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-dark rounded-0' onClick={handleClose}>
                    Close
                </button>
                <button className='btn btn-primary rounded-0' type='button' disabled={submiting} onClick={formSubmitLogic}>
                    {submiting ? <><span className="spinner-border spinner-border-sm me-1" aria-hidden="true"></span><span role="status">Logging In...</span></> : "Login"}
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default ExpiredSession