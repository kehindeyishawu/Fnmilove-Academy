import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { FaShareAlt } from 'react-icons/fa';
import { FaBusinessTime, FaCalendarDays, FaLocationDot } from 'react-icons/fa6';


const JobDescription = () => {
    const {id} = useParams();
    let bannerLogoStyles = {
        position: "absolute",
        padding: "10px",
        backgroundColor: "red",
        borderRadius: "15px",
        bottom: "0",
        transform: "translate(50%, 50%)"
    }
    return (
        <main id='job-description'>
            <div className="vertical-padding bg-dark position-relative">
                <span style={bannerLogoStyles}>
                    <img src="/logo.png" width={80} alt="" />
                </span>
            </div>
            <section className='top-spacing'>
                <div className='container'>
                    <div className="row gy-4">
                        <div className="col-lg-7">
                            <span className='fs-5'>Crew.work</span>
                            <h1 className='fw-bold my-3'>Product Manager</h1>
                            <div className='hstack gap-4'>
                                <small className='fw-bold'>
                                    <FaCalendarDays /> Full-Time
                                </small>
                                <small className='fw-bold'>
                                    <FaLocationDot /> Remote
                                </small>
                                <small>
                                    <FaBusinessTime /> Deadline:
                                </small>
                                <small>
                                    <Link className='fw-bold text-decoration-none link-dark'>
                                        <FaShareAlt /> Share this job
                                    </Link>
                                </small>
                            </div>
                            <div className='mt-5'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab explicabo cupiditate iusto aut ducimus illum possimus nostrum eum, quaerat, eos eveniet deserunt mollitia aperiam consequuntur sapiente saepe commodi natus provident. Labore perferendis ab magni aliquam blanditiis earum repellat asperiores, optio libero perspiciatis ipsam in eius dignissimos culpa architecto voluptatum doloribus.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab explicabo cupiditate iusto aut ducimus illum possimus nostrum eum, quaerat, eos eveniet deserunt mollitia aperiam consequuntur sapiente saepe commodi natus provident. Labore perferendis ab magni aliquam blanditiis earum repellat asperiores, optio libero perspiciatis ipsam in eius dignissimos culpa architecto voluptatum doloribus.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <form className='border p-4 row gy-3'>
                                <h2 className='fw-bold fs-5'>Application</h2>
                                <div className='col-lg-6'>
                                    <label htmlFor="firstname" className='form-label'>First name <span className='text-danger'>*</span></label>
                                    <input type="text" className='form-control rounded-0' id='firstname' placeholder='First name' required/>
                                </div>
                                <div className='col-lg-6'>
                                    <label htmlFor="lastname" className='form-label'>Last name <span className='text-danger'>*</span></label>
                                    <input type="text" className='form-control rounded-0' id='lastname' placeholder='Last name' required/>
                                </div>
                                <div className='col-lg-6'>
                                    <label htmlFor="email" className='form-label'>Email <span className='text-danger'>*</span></label>
                                    <input type="text" className='form-control rounded-0' id='email' placeholder='Email' required/>
                                </div>
                                <div className='col-lg-6'>
                                    <label htmlFor="phome" className='form-label'>Phone number</label>
                                    <input type="number" className='form-control rounded-0' id='phone' placeholder='Phone number' required/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default JobDescription