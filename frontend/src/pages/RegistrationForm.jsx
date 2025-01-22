import { Link, useNavigate, useOutletContext, useSearchParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { fetchCourses } from "../components/CourseCard"


const RegistrationForm = () => {
    const [showSpinner, setShowspinner] = useState(true)
    const [courses, setCourses] = useState([])
    const navigate = useNavigate()
    const {setStaticNotification, setFadeNotification, setShowLoading} = useOutletContext()
    const [searchQuery, setSearchQuery] = useSearchParams();
    const [selectedCourse, setSelectedCourse] = useState("")
    const certRef = useRef(null);
    const certFeedback = useRef(null);
    const idRef = useRef(null);
    const idFeedback = useRef(null)
    const firstnameRef = useRef(null);
    const lastnameRef = useRef(null);
    


    useEffect(()=>{
        const sideEffect = async ()=>{
            let redirectToCourseID = searchQuery.get('courseid');
            let redirectToCourseSlug = searchQuery.get('courseslug');
            try {
                let allCourses = await fetchCourses('0',"","","title");
                setCourses(allCourses)
                let pickedCourse = allCourses.find(e => e._id === redirectToCourseID)
                pickedCourse && setSelectedCourse(pickedCourse.title)
                setShowspinner(false)
            } catch (error) {
                redirectToCourseSlug  ? location.href = `/course/${redirectToCourseID}/${redirectToCourseSlug}` : redirectToCourseID ? navigate("/courses") : navigate("/")
                setFadeNotification({ message: error.message, time: (new Date()).toString() })
            }
        }
        sideEffect()
    }, [])

    const handleCourseSelect = (e)=>{
        setSelectedCourse(e.target.value)
    }

    let handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setShowLoading(true)
            // media upload validation
            // for Ids
            if (idRef.current.files.length > 3) {
                idRef.current.value = ""
                idRef.current.classList.add("is-invalid")
                idFeedback.current.textContent = "Maximum number of file upload is 3"
                idRef.current.scrollIntoView({ block: "center" })
                setShowLoading(false)
                return
            } else {
                for (const file of idRef.current.files) {
                    if (file.size > 3145728) {
                        idRef.current.value = ""
                        idRef.current.classList.add("is-invalid")
                        certFeedback.current.textContent = "Maximum file size of 3MB per file"
                        idRef.current.scrollIntoView({ block: "center" })
                        setShowLoading(false)
                        return
                    }
                }
            }
            // certificates
            if(certRef.current.files.length>3){
                certRef.current.value = ""
                certRef.current.classList.add("is-invalid")
                certFeedback.current.textContent = "Maximum number of file upload is 3"
                certRef.current.scrollIntoView({block: "center"})
                setShowLoading(false)
                return
            }else{
                for (const file of certRef.current.files) {
                    if (file.size > 3145728){
                        certRef.current.value = ""
                        certRef.current.classList.add("is-invalid")
                        certFeedback.current.textContent = "Maximum file size of 3MB per file"
                        certRef.current.scrollIntoView({ block: "center" })
                        setShowLoading(false)
                        return
                    }
                }
            }
            

            // uploading files
            
            // for (const file of certRef.current.files) {
            //     let documents = new FormData()
            //     documents.append("upload_preset", "reg-form")
            //     documents.append("asset_folder", `applicants`)
            //     documents.append("file", file)
            //     let req = await fetch("https://api.cloudinary.com/v1_1/fnmilove/auto/upload", {
            //         method: "POST",
            //         body: documents
            //     })
            //     if (!req.ok) {
            //         throw new Error("An error occured while trying to upload your form file attachments")
            //     }
            //     let res = await req.json()
            //     console.log(res)
            // }

            // sending data
            // let formData = new FormData(e.target)
            // console.log(formData)
            // formData.delete("certificates[]")
            // formData.delete("ids[]")
            // fetch("/api/applicant", {
            //     method: "POST",
            //     body: formData
            // })
            setShowLoading(false);
        } catch (error) {
            setStaticNotification({ message: error.message, time: (new Date()).toString() })
        }finally{
            
            // setFadeNotification({ message: "Post saved successfully", time: (new Date()).getTime() })
        }
        // await saveButton();
    }
    return (
        showSpinner ?   <div className="text-center top-spacing"><div className="spinner-border text-primary p-5" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div></div> :
        <main id="registration-form">
            <h1 className="text-center fw-bold mt-5">Registration Form</h1>
            <small className="d-block text-center mb-4 px-2">Please note that before making any course payment, students must complete a registration form, which incurs a fee of ₦20,000.</small>
            <form onSubmit={handleSubmit} className="container" style={{maxWidth: 1000}} noValidate>
                <section id="personal-details">
                    {/* head */}
                    <div className="row">
                        <div className="col"><hr /></div>
                        <div className="col-auto"><h4 className="fw-bold">Personal Details</h4></div>
                        <div className="col"><hr /></div>
                    </div>
                    {/* body */}
                    <div className="row gy-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input ref={firstnameRef} type="text" className="form-control rounded-0" id="firstname" name="firstname" placeholder="Your first name" required/>
                                <label htmlFor="firstname">First Name<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input ref={lastnameRef} type="text" className="form-control rounded-0" id="lastname" name="lastname" placeholder="Your last name" required/>
                                <label htmlFor="lastname">Last Name<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <select className="form-select rounded-0" id="gender" name="gender" placeholder="Your Gender" required>
                                    <option value="">--Please select--</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="N/A">N/A</option>
                                </select>
                                <label htmlFor="gender">Gender<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="date" className="form-control rounded-0" name="dob" id="birth-date" placeholder="Your DOB" required />
                                <label htmlFor="birth-date">Date of Birth<span className="text-danger">*</span></label>
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
                                <input type="number" className="form-control rounded-0" name="postalCode" id="postal-code" placeholder="Your postal code" />
                                <label htmlFor="postal-code">Postal Code</label>
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
                                <select onChange={handleCourseSelect} value={selectedCourse} type="text" className="form-select rounded-0" id="course-title" name="courseTitle" placeholder="Your course title" required>
                                    <option value="">--Please select--</option>
                                    {courses.map(e => <option key={e._id} value={e.title}>{e.title}</option>)}
                                </select>
                                <label htmlFor="course-title">Course Title<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <select type="text" className="form-select rounded-0" id="course-type" name="courseType" placeholder="Your course type" required>
                                    <option value="">--Please select--</option>
                                    <option value="Crash Course">Crash Course</option>
                                    <option value="Full Course">Full Course</option>
                                    <option value="Crash Course with Accomodation">Crash Course with Accomodation</option>
                                    <option value="Full Course with Accomodation">Full Course with Accomodation</option>
                                </select>
                                <label htmlFor="course-type">Course Type<span className="text-danger">*</span></label>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5" id="identification">
                    {/* head */}
                    <div className="row">
                        <div className="col"><hr /></div>
                        <div className="col-auto"><h4 className="fw-bold">Identification</h4></div>
                        <div className="col"><hr /></div>
                    </div>
                    {/* body */}
                    <div>
                        <p>What Form of Identification document do you have? Select all that applies?<span className="text-danger">*</span></p>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" name="idCard" value="NIN" id="nin" required/>
                            <label className="form-check-label" htmlFor="nin">
                                NIN
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" name="idCard" value="International Passport" id="intl-passport" required/>
                            <label className="form-check-label" htmlFor="intl-passport">
                                International Passport
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" name="idCard" value="Driver's License" id="drivers-license" required/>
                            <label className="form-check-label" htmlFor="drivers-license">
                                Driver's License
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" name="idCard" value="Voter's Card" id="voters-card" required/>
                            <label className="form-check-label" htmlFor="voters-card">
                                Voter's Card
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" name="idCard" value="others" id="other-cards" required/>
                            <label className="form-check-label" htmlFor="other-cards">
                                Others
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" name="idCard" value="None" id="none-card" required/>
                            <label className="form-check-label" htmlFor="none-card">
                                None
                            </label>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="id-files">Upload Your Identification document (.pdf and .png only)<span className="text-danger">*</span></label>
                            <span className="form-text d-block mb-1">Max file size of 3MB per upload (you are allowed to upload up to 3 files)</span>
                            <input ref={idRef} type="file" accept=".pdf, .png" className="form-control form-control-lg rounded-0" name="ids[]" id="id-files" multiple required/>
                            <div ref={idFeedback} className="invalid-feedback"></div>
                        </div>
                    </div>
                </section>
                <section className="mt-5" id="consent">
                    {/* head */}
                    <div className="row">
                        <div className="col"><hr /></div>
                        <div className="col-auto"><h4 className="fw-bold">Parental Consent</h4></div>
                        <div className="col"><hr /></div>
                    </div>
                    {/* body */}
                    <div>
                        <p>Will you need parental consent to travel within or outside the country? (If under 18 years)<span className="text-danger">*</span></p>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" name="parentConsent" value="Yes" id="parent-consent1" required/>
                            <label className="form-check-label" htmlFor="parent-consent1">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" name="parentConsent" value="No" id="parent-consent2" required/>
                            <label className="form-check-label" htmlFor="parent-consent2">
                                No
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" name="parentConsent" value="Maybe" id="parent-consent3" required/>
                            <label className="form-check-label" htmlFor="parent-consent3">
                                Maybe
                            </label>
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
                    <div className="row gy-4">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control rounded-0" name="schoolName" id="school-name" placeholder="Your last school" />
                                <label htmlFor="school-name">Name of Last School Attended<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control rounded-0" name="graduationYear" id="graduation_year" placeholder="Your graduation year" />
                                <label htmlFor="school-name">Year of Graduation<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <select className="form-select rounded-0" id="highest-education" name="highestEducation" placeholder="Your highest education">
                                    <option value="">--Please select--</option>
                                    <option value="none">None</option>
                                    <option value="primary school">Primary School</option>
                                    <option value="secondary school certificate">Secondary School Certificate</option>
                                    <option value="vocational training">Vocational Training</option>
                                    <option value="HND">HND</option>
                                    <option value="OND">OND</option>
                                    <option value="Diploma">Diploma</option>
                                    <option value="undergraduate">Undergraduate Degree</option>
                                    <option value="postgraduate">Postgraduate Degree</option>  
                                </select>
                                <label htmlFor="highest-education">Highest Level of Education<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="cert-files">Upload Your Certificates<span className="text-danger">*</span> (.pdf and .png only)</label>
                            <span className="form-text d-block mb-1">Max file size of 3MB per upload (you are allowed to upload up to 3 files)</span>
                            <input ref={certRef} accept=".pdf, .png" type="file" className="form-control form-control-lg rounded-0" name="certificates[]" id="cert-files" multiple />
                            <div ref={certFeedback} className="invalid-feedback"></div>
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
                                <input type="text" className="form-control rounded-0" id="emergency-fullname" name="emergencyFullname" placeholder="Your emergency fullname" required/>
                                <label htmlFor="emergency-fullname">Full Name<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <select className="form-select rounded-0" id="emergency-relationship" name="emergencyRelationship" placeholder="Your emergency relationship" required>
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
                                <input type="number" className="form-control rounded-0" id="emergency-phone" name="emergencyPhone" placeholder="Your number" required/>
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
                            <input type="checkbox" className="form-check-input" name="regTerms" value="Yes" id="reg-terms" required/>
                            <label className="form-check-label" htmlFor="reg-terms">
                                I agree to the <Link to="/terms" target="_blank">terms and conditions</Link> and acknowledge that I am required to pay a fee of <strong>₦20,000</strong> for the processing of this form.
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" name="regPrivacy" value="Yes" id="reg-privacy" required/>
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