import { Link } from "react-router-dom"
import { useState } from "react"


const RegistrationForm = () => {
    const [submiting, setSubmiting] = useState(false)

    let handleSubmit = async (e) => {
        console.log("Saving")
        e.preventDefault();
        Array.from(e.target.elements).forEach(element => {
            element.disabled = true;
        });
        setSubmiting(true)
        // await saveButton();
        setSubmiting(false)
        // setFadeNotification({ message: "Post saved successfully", time: (new Date()).getTime() })
    }
    return (
        <main id="registration-form">
            <h1 className="text-center fw-bold mt-5">Registration Form</h1>
            <small className="d-block text-center mb-4 px-2">Please note that before making any course payment, students must complete a registration form, which incurs a fee of ₦20,000.</small>
            <form onSubmit={handleSubmit} className="container" style={{maxWidth: 1000}}>
                <section id="fullname">
                    {/* head */}
                    <div className="row">
                        <div className="col"><hr /></div>
                        <div className="col-auto"><h4 className="fw-bold">Full Name</h4></div>
                        <div className="col"><hr /></div>
                    </div>
                    {/* body */}
                    <div className="row gy-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control rounded-0" id="firstname" name="firstname" placeholder="Your first name" required/>
                                <label htmlFor="firstname">First Name<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control rounded-0" id="lastname" name="lastname" placeholder="Your last name" required/>
                                <label htnlFor="lastname">Last Name<span className="text-danger">*</span></label>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5" id="contact-info">
                    {/* head */}
                    <div className="row">
                        <div className="col"><hr /></div>
                        <div className="col-auto"><h4 className="fw-bold">Contact Information</h4></div>
                        <div className="col"><hr /></div>
                    </div>
                    {/* body */}
                    <div className="row gy-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="email" className="form-control rounded-0" id="email" name="email" placeholder="Your email" required/>
                                <label htmlFor="email">Email<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="number" className="form-control rounded-0" id="phone" name="phone" placeholder="Your number" required/>
                                <label htmlFor="phone">Phone Number<span className="text-danger">*</span></label>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5" id="address">
                    {/* head */}
                    <div className="row">
                        <div className="col"><hr /></div>
                        <div className="col-auto"><h4 className="fw-bold">Address</h4></div>
                        <div className="col"><hr /></div>
                    </div>
                    {/* body */}
                    <div className="row gy-3">
                        <div className="col-12">
                            <div className="form-floating">
                                <input type="text" className="form-control rounded-0" id="street" name="street" placeholder="Your street" required/>
                                <label htmlFor="street">Street Address<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-floating">
                                <input type="city" className="form-control rounded-0" id="city" name="city" placeholder="Your city" required/>
                                <label htmlFor="city">City<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-floating">
                                <select className="form-select rounded-0" id="state" name="state" placeholder="Your state" required>
                                    <option value="">--Please choose a state--</option>
                                    <option value="abia">Abia</option>
                                    <option value="adamawa">Adamawa</option>
                                    <option value="akwaibom">Akwa Ibom</option>
                                    <option value="anambra">Anambra</option>
                                    <option value="bajaj">Bauchi</option>
                                    <option value="bayelsa">Bayelsa</option>
                                    <option value="benue">Benue</option>
                                    <option value="borno">Borno</option>
                                    <option value="crossriver">Cross River</option>
                                    <option value="delta">Delta</option>
                                    <option value="ebonyi">Ebonyi</option>
                                    <option value="edo">Edo</option>
                                    <option value="ekiti">Ekiti</option>
                                    <option value="enugu">Enugu</option>
                                    <option value="gombe">Gombe</option>
                                    <option value="imo">Imo</option>
                                    <option value="jigawa">Jigawa</option>
                                    <option value="kaduna">Kaduna</option>
                                    <option value="kano">Kano</option>
                                    <option value="kogi">Kogi</option>
                                    <option value="kwara">Kwara</option>
                                    <option value="lagos">Lagos</option>
                                    <option value="nasarawa">Nasarawa</option>
                                    <option value="niger">Niger</option>
                                    <option value="ogun">Ogun</option>
                                    <option value="ondo">Ondo</option>
                                    <option value="osun">Osun</option>
                                    <option value="owerri">Oyo</option>
                                    <option value="plateau">Plateau</option>
                                    <option value="rivers">Rivers</option>
                                    <option value="sokoto">Sokoto</option>
                                    <option value="taraba">Taraba</option>
                                    <option value="yobe">Yobe</option>
                                    <option value="zamfara">Zamfara</option>
                                </select>
                                <label htmlFor="state">State<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-floating">
                                <input type="number" className="form-control rounded-0" name="postal-code" id="postal-code" placeholder="Your postal code" />
                                <label htmlFor="postal-code">Postal Code</label>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5" id="DOB">
                    {/* head */}
                    <div className="row">
                        <div className="col"><hr /></div>
                        <div className="col-auto"><h4 className="fw-bold">Date of Birth</h4></div>
                        <div className="col"><hr /></div>
                    </div>
                    {/* body */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="date" className="form-control rounded-0" name="dob" id="birth-date" placeholder="Your DOB" required/>
                                <label htmlFor="birth-date">Date of Birth<span className="text-danger">*</span></label>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5" id="education">
                    {/* head */}
                    <div className="row">
                        <div className="col"><hr /></div>
                        <div className="col-auto"><h4 className="fw-bold">Educational Background</h4></div>
                        <div className="col"><hr /></div>
                    </div>
                    {/* body */}
                    <div className="row gy-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control rounded-0" name="school-name" id="school-name" placeholder="Your last school" />
                                <label htmlFor="school-name">Name of Last School Attended</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control rounded-0" name="graduation_year" id="graduation_year" placeholder="Your graduation year" />
                                <label htmlFor="school-name">Year of Graduation</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <select className="form-select rounded-0" id="highest-education" name="highest-education" placeholder="Your highest education">
                                    <option value="">--Please select--</option>
                                    <option value="none">None</option>
                                    <option value="primary">Primary School</option>
                                    <option value="secondary">Secondary School</option>
                                    <option value="vocational">Vocational Training</option>
                                    <option value="undergraduate">Undergraduate Degree</option>
                                    <option value="postgraduate">Postgraduate Degree</option>  
                                </select>
                                <label htmlFor="highest-education">Highest Level of Education</label>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5" id="course">
                    {/* head */}
                    <div className="row">
                        <div className="col"><hr /></div>
                        <div className="col-auto"><h4 className="fw-bold">Course Selection</h4></div>
                        <div className="col"><hr /></div>
                    </div>
                    {/* body */}
                    <div className="row gy-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <select type="text" className="form-select rounded-0" id="course-title" name="course-title" placeholder="Your course title" required>
                                    <option value="">--Please select--</option>
                                </select>
                                <label htmlFor="course-title">Course Title<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <select type="text" className="form-select rounded-0" id="course-type" name="course-type" placeholder="Your course type" required>
                                    <option value="">--Please select--</option>
                                    <option value="Crash Course">Crash Course</option>
                                    <option value="Full Course">Full Course</option>
                                    <option value="Crash Course">Full Course with Accomodation</option>
                                </select>
                                <label htmlFor="course-type">Course Type<span className="text-danger">*</span></label>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5" id="emergency-contact">
                    {/* head */}
                    <div className="row">
                        <div className="col"><hr /></div>
                        <div className="col-auto"><h4 className="fw-bold">Emergency Contact</h4></div>
                        <div className="col"><hr /></div>
                    </div>
                    {/* body */}
                    <div className="row gy-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control rounded-0" id="emergency-fullname" name="emergency-fullname" placeholder="Your emergency fullname" required/>
                                <label htmlFor="emergency-fullname">Full Name<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <select className="form-select rounded-0" id="emergency-relationship" name="emergency-relationship" placeholder="Your emergency relationship" required>
                                    <option value="">--Please select--</option>
                                    <option value="Father">Father</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Sibling">Sibling</option>
                                    <option value="Wife">Wife</option>
                                    <option value="Child">Child</option>
                                    <option value="others">others</option>
                                </select>
                                <label htmlFor="emergency-relationship">Relationship<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="number" className="form-control rounded-0" id="emergency-phone" name="emergency-phone" placeholder="Your number" required/>
                                <label htmlFor="phone">Phone Number<span className="text-danger">*</span></label>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5" id="acknowledgement">
                    {/* head */}
                    <div className="row">
                        <div className="col"><hr /></div>
                        <div className="col-auto"><h4 className="fw-bold">Acknowledgement</h4></div>
                        <div className="col"><hr /></div>
                    </div>
                    {/* body */}
                    <div>
                        <p>Please read the following terms carefully</p>
                        <div className="form-check mb-3">
                            <input type="checkbox" className="form-check-input" name="reg-terms" id="reg-terms" required/>
                            <label className="form-check-label" htmlFor="reg-terms">
                                I agree to the <Link to="/terms" target="_blank">terms and conditions</Link> and acknowledge that I am required to pay a fee of <strong>₦20,000</strong> for the processing of this form.
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" name="reg-privacy" id="reg-privacy" required/>
                            <label className="form-check-label" htmlFor="reg-privacy">
                                I have read and agree to the <Link to="/privacy" target="_blank">privacy policy</Link> regarding the handling of my personal information.
                            </label>
                        </div>
                    </div>
                </section>
                <button type="submit" className="btn btn-lg btn-dark rounded-0 d-block w-75 mt-4 mx-auto">Submit</button>
            </form>
        </main>
    )
}

export default RegistrationForm