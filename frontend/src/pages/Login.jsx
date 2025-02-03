import { useEffect, useState } from "react"
import { setContainerFullWidth, cloudname } from "../utils/cloudinary"
import { FaArrowRightLong } from "react-icons/fa6"
import { Link, useOutletContext, useNavigate, useLocation} from "react-router-dom"


const Login = () => {
    const [formFields, setFormFields] = useState({username: "", password: "", keepMeSignedIn: false});
    const {setStaticNotification, setFadeNotification, setUser, user} = useOutletContext()
    const navigate = useNavigate()
    const [submiting, setSubmiting] = useState(false)
    const [passwordReset, setPasswordReset] = useState(false);
    const {state} = useLocation();

    
    useEffect(()=>{
        if (user) {
            navigate("/");
        }
    }, [user, navigate])
    
    const handleLogin = async(e) => {
        try {
            e.preventDefault();
            setSubmiting(true)
            let req = await fetch("/api/auth/login/password", {
                method: "POST",
                body: JSON.stringify(formFields),
                headers: {
                    'Content-Type': "application/json"
                }
            })
            if(!req.ok){
                throw Error(await req.text())
            }
            let currentUser = await req.json();
            setUser({...currentUser});
            setFadeNotification({ message: "Successfully Logged In, Welcome", time: (new Date()).toString() })
            navigate(state?.from || "/", {replace: true})
        } catch (error) {
            setSubmiting(false)
            setStaticNotification({ message: error.message, time: (new Date()).toString() })
        }
    }
    const handleFormInput = (e) => {
        const { name, value, type, checked } = e.target;
        setFormFields(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }))
    }
    const handlePasswordReset = async(e)=>{
        e.preventDefault()
        try {
            setSubmiting(true);
            let req = await fetch("/api/auth/password-reset", {
                method: "POST",
                body: JSON.stringify({email: e.target.elements['email'].value}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (!req.ok) {
                throw Error(await req.text())
            }
            setStaticNotification({ message: "A reset token has been sent to your email", time: (new Date()).toString() })
            setSubmiting(false)
        } catch (error) {
            setSubmiting(false)
            setStaticNotification({ message: error.message, time: (new Date()).toString() })
        }
    }

    return (
        <main>
            <div className="container-fluid px-0">
                <div className="row g-0">
                    <div className="col-md-6 col-lg-4">
                        <div className="container-fluid mt-5">
                            <div className="hstack justify-content-center gap-1 align-items-end">
                                <img src="/fnmi-logo.png" width={61} alt="" />
                                <img src="/logo.png" width={50} alt="" />
                            </div>
                            <h1 className="fw-bold fs-2 mt-3 text-center">Welcome Back</h1>
                            {/* <a href="" className="btn btn-white my-4 border hstack rounded-0 shadow-sm"> 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32px" height="32px"><path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg> 
                                <span className="mx-auto fw-bold">
                                    Log in with Google
                                </span>
                            </a> */}
                            <div className="row align-items-center fw-bold">
                                <div className="col">
                                    <hr />
                                </div>
                                <div className="col-auto">    
                                    <span className="form-text">
                                        {passwordReset ? "INPUT ACCOUNT EMAIL" : "LOGIN WITH EMAIL"}
                                    </span>
                                </div>
                                <div className="col">
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <form hidden={passwordReset} onSubmit={handleLogin} className="mt-3 container-fluid">
                            <div className="form-floating mb-3">
                                <input disabled={submiting} type="email" name="username" onChange={handleFormInput} value={formFields.username} className="form-control rounded-0" id="floatingInput" required placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input disabled={submiting} type="password" name="password" onChange={handleFormInput} value={formFields.password} className="form-control rounded-0" id="floatingPassword" required placeholder="Password"/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="hstack justify-content-between mb-4">
                                <div className="form-check">
                                    <input disabled={submiting} type="checkbox" name="keepMeSignedIn" onChange={handleFormInput} checked={formFields.keepMeSignedIn} className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Keep me logged in</label>
                                </div>
                                <button onClick={() => setPasswordReset(true)} className="btn btn-link link-dark">Forgot password</button>
                            </div>
                            <button disabled={submiting} className="btn btn-primary py-2 mb-4 fw-bold rounded-0 w-100 hstack">
                                {submiting ? <div className="mx-auto"><span className="spinner-grow spinner-grow-sm me-1" aria-hidden="true"></span><span role="status">Logging In...</span></div> : <><span className="mx-auto">Log in</span> <FaArrowRightLong /></>}
                            </button>
                            {/* <div className="text-center form-text">Don't have an account yet? <Link to="/signup" className="link-info">Sign Up</Link></div> */}
                        </form>
                        {/* Password Reset Form */}
                        <form onSubmit={handlePasswordReset} hidden={!passwordReset} className="mt-3 container-fluid">
                            <div className="form-floating mb-3">
                                <input disabled={submiting} type="email" name="email" className="form-control rounded-0" id="emailpassword" required placeholder="name@example.com" />
                                <label htmlFor="emailpassword">Email address</label>
                            </div>
                            <button disabled={submiting} className="btn btn-primary py-2 mb-4 fw-bold rounded-0 w-100 hstack">
                                {submiting ? <div className="mx-auto"><span className="spinner-grow spinner-grow-sm me-1" aria-hidden="true"></span><span role="status">Sending...</span></div> : <><span className="mx-auto">Send Token</span> <FaArrowRightLong /></>}
                            </button>
                        </form>
                    </div>
                    <div className="col-md-6 col-lg-8 d-none d-md-block">
                        <img className="img-fluid" src={`${cloudname}/${setContainerFullWidth(`ar_${screen.width >= 1199? "1:1," : "1:2,"}g_face,c_fill,`)}/salon-sat`} alt="" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login