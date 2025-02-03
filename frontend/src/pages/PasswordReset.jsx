import { useState } from "react"
import { setContainerHalfWidth } from "../utils/cloudinary"
import { FaArrowRightLong } from "react-icons/fa6"
import { Link, useSearchParams, useOutletContext, useNavigate } from "react-router-dom"
import { cloudname } from "../utils/cloudinary"
import { FaCheckCircle } from "react-icons/fa"

const PasswordReset = () => {
    const [formFields, setFormFields] = useState({ password: "", confirmPassword:   "" })
    const [passwordValidation, setPasswordValidation] = useState({
        minlength: true,
        hasUpperCase: true,
        hasLowerCase: true,
        hasNumber: true,
        hasSpecialChar: true, 
    })
    const [searchParams, setSearchParams] = useSearchParams();
    const {setFadeNotification, setStaticNotification} = useOutletContext()
    const [submiting, setSubmiting] = useState(false);
    const navigate = useNavigate();
    

    const validatePassword = (value) => {
        setPasswordValidation({
            minlength: value.length >= 8,
            hasUpperCase: /[A-Z]/.test(value),
            hasLowerCase: /[a-z]/.test(value),
            hasNumber: /[0-9]/.test(value),
            hasSpecialChar: /[!@#$%^&*]/.test(value)
        })
    }
    const passedPasswordValidation = ()=>{
        let validationValues = Object.values(passwordValidation)
        if (validationValues.every(e => e === true)) return true;
        return false
    }

    const formSubmit = async(e) => {
        try {
            e.preventDefault()
            // make sure password passes validation
            console.log(passedPasswordValidation())
            if (passedPasswordValidation()) {
                setSubmiting(true)
                //write the rest of your code in here
                console.log("submiting")
                let req = await fetch("/api/auth/password-reset", {
                    method: "PATCH",
                    body: JSON.stringify({ password: e.target.elements['password'].value, token: searchParams.get("token") }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (!req.ok){
                    throw new Error(await req.text())
                }
                setFadeNotification({ message: "Password reset successful. Login with your new password", time: (new Date()).toString() })
                setSubmiting(false)
                navigate("/fla-admin", {replace: true})
            }
        } catch (error) {
            setSubmiting(false)
            setStaticNotification({ message: error.message, time: (new Date()).toString() })
        }
    }
    const handleFormInput = (e) => {
        setFormFields((prevState) => {
            prevState[e.target.name] = e.target.value
            let newInputs = { ...prevState }
            return newInputs
        })
        if(e.target.name === "password"){
            validatePassword(e.target.value)
        }
    }
    const handlePasswordConfirmation = (e) =>{
        handleFormInput(e)
        e.target.classList.toggle("is-invalid", e.target.value !== formFields.password)
        e.target.classList.toggle("is-valid", e.target.value === formFields.password)
    }

    return (
        <main>
            <div className="container-fluid px-0">
                <div className="row g-0">
                    <div className="col-md-6 col-lg-4 d-none d-md-block">
                        <img className="img-fluid" src={`${cloudname}/${setContainerHalfWidth(`ar_${screen.width >= 1199 ? "1:2," : "1:3,"}`)}/cosmetics-1`} alt="" />
                    </div>
                    <div className="col-md-6 mx-auto">
                        <div className="container-fluid mt-4">
                            <div className="hstack justify-content-center gap-1 align-items-end">
                                <img src="/fnmi-logo.png" width={61} alt="" />
                                <img src="/logo.png" width={50} alt="" />
                            </div>
                            <h1 className="fw-bold text-center fs-2 mt-3">Create Your Account</h1>
                            <div className="row align-items-center fw-bold">
                                <div className="col">
                                    <hr />
                                </div>
                                <div className="col-auto">
                                    <span className="form-text">
                                        INPUT NEW PASSWORD
                                    </span>
                                </div>
                                <div className="col">
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <form onSubmit={formSubmit} className="mt-3 mt-lg-2 container-fluid">
                            <div className="row row-cols-1 gy-4 mb-3">
                                <div className="col">
                                    <div className="form-floating">
                                        <input disabled={submiting} type="password" name="password" onChange={handleFormInput} value={formFields.password} className="form-control rounded-0" id="floatingPassword" required placeholder="Password" />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="vstack my-2" hidden={passedPasswordValidation()}>
                                        <span className={passwordValidation.minlength ? 'text-success' : 'text-danger'}><FaCheckCircle /> At least 8 characters long</span>
                                        <span className={passwordValidation.hasUpperCase ? 'text-success' : 'text-danger'}><FaCheckCircle /> At least one uppercase letter</span>
                                        <span className={passwordValidation.hasLowerCase ? 'text-success' : 'text-danger'}><FaCheckCircle /> At least one lowercase letter</span>
                                        <span className={passwordValidation.hasNumber ? 'text-success' : 'text-danger'}><FaCheckCircle /> At least one number</span>
                                        <span className={passwordValidation.hasSpecialChar ? 'text-success' : 'text-danger'}><FaCheckCircle /> At least one special character</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-floating">
                                        <input disabled={submiting} type="password" name="confirmPassword" onChange={handlePasswordConfirmation} value={formFields.confirmPassword} className="form-control rounded-0" id="floatingPasswordConfirm" pattern={formFields.password} required placeholder="Password" />
                                        <label htmlFor="floatingPasswordConfirm">Confirm Password</label>
                                    </div>
                                </div>
                            </div>
                            <button disabled={submiting} className="btn btn-primary py-2 mt-4 fw-bold rounded-0 w-100 hstack">
                                {submiting ? <div className="mx-auto"><span className="spinner-grow spinner-grow-sm me-1" aria-hidden="true"></span><span role="status">Reseting...</span></div> : <><span className="mx-auto">Reset Password</span> <FaArrowRightLong /></>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PasswordReset