import { useState } from "react"
import { setContainerFullWidth } from "../utils/cloudinary"
import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { cloudname } from "../utils/cloudinary"

const Login = () => {
    const [formFields, setFormFields] = useState({email: "", password:   ""})
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
                            <a href="" className="btn btn-white my-4 border hstack rounded-0 shadow-sm"> 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32px" height="32px"><path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg> 
                                <span className="mx-auto fw-bold">
                                    Log in with Google
                                </span>
                            </a>
                            <div className="row align-items-center fw-bold">
                                <div className="col">
                                    <hr />
                                </div>
                                <div className="col-auto">    
                                    <span className="form-text">
                                        OR LOGIN WITH EMAIL
                                    </span>
                                </div>
                                <div className="col">
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <form onSubmit={formSubmit} className="mt-3 container-fluid">
                            <div className="form-floating mb-3">
                                <input type="email" name="email" onChange={handleFormInput} value={formFields.email} className="form-control rounded-0" id="floatingInput" required placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" name="password" onChange={handleFormInput} value={formFields.password} className="form-control rounded-0" id="floatingPassword" required placeholder="Password"/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="hstack justify-content-between mb-4">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Keep me logged in</label>
                                </div>
                                <a href="" className="link-dark">Forgot password</a>
                            </div>
                            <button className="btn btn-primary py-2 mb-4 fw-bold rounded-0 w-100 hstack">
                                <span className="mx-auto">Log in</span> <FaArrowRightLong />
                            </button>
                            <div className="text-center form-text">Don't have an account yet? <Link to="/signup" className="link-info">Sign Up</Link></div>
                        </form>
                    </div>
                    <div className="col-md-6 col-lg-8 d-none d-md-block">
                        <img className="img-fluid" src={`${cloudname}/${setContainerFullWidth(`ar_${screen.width >= 1199? "4:3," : "1:2,"}g_face,c_fill,`)}/salon-sat`} alt="" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login