import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import { useState } from "react"
import { FaCalendarAlt } from "react-icons/fa"


const Blog = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const formSubmit = (e) => {
        e.preventDefault()
    }
    const handleSearchInput = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <main>
            <section className="vertical-padding rounded-bottom text-center banner bg-dark">
                <h1 className="text-white fw-bold">Blog</h1>
                <div className="text-white"> <Link className="text-decoration-none" to="/">Home</Link> {'>>'} Blog </div>
            </section>
            <section className="container mt-5">
                <div className="row justify-content-between gy-3">
                    <div className="col-auto">
                        <select className="form-select rounded-0" aria-label="Default select example">
                            <option selected>Filter</option>
                            <option value="1">Jobs</option>
                            <option value="2">Articles</option>
                        </select>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <form onSubmit={formSubmit} className="input-group search-form">
                            <input type="text" value={searchQuery} onChange={handleSearchInput} className="form-control rounded-0" placeholder="Search Posts" aria-label="Search Blog Form" />
                            <button className="btn btn-primary rounded-0" type="button"><FaSearch /></button>
                        </form>
                    </div>
                    <section className="mt-4">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-2 gy-4 justify-content-center">
                                <div className="col">
                                    <div className="card">
                                        <div className="row g-0">
                                            <div className="col-4">
                                                <img src={`https://res.cloudinary.com/kkenny/image/upload/c_fill,f_auto,q_auto,ar_1:1,dpr_${devicePixelRatio}/v1731400547/Fnmilove%20Academy/Posts/man.jpg`} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-8">
                                                <div className="card-body">
                                                    <h5 className="card-title text-secondary h6 fw-bold">Card title Lorem, ipsum.</h5>
                                                    <small className="fw-bold text-info">
                                                        <FaCalendarAlt /> Application Deadline: 25/06/25
                                                    </small>
                                                    <p className="card-text">This is a wider card with supporting text Lorem ipsum dolor sit amet. </p>
                                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="row g-0">
                                            <div className="col-4">
                                                <img src={`https://res.cloudinary.com/kkenny/image/upload/c_fill,f_auto,q_auto,ar_1:1,dpr_${devicePixelRatio}/v1731400547/Fnmilove%20Academy/Posts/man.jpg`} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-8">
                                                <div className="card-body">
                                                    <h5 className="card-title text-secondary h6 fw-bold">Card title Lorem, ipsum.</h5>
                                                    <p className="card-text">This is a wider card with supporting text Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. </p>
                                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="row g-0">
                                            <div className="col-4">
                                                <img src={`https://res.cloudinary.com/kkenny/image/upload/c_fill,f_auto,q_auto,ar_1:1,dpr_${devicePixelRatio}/v1731400547/Fnmilove%20Academy/Posts/man.jpg`} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-8">
                                                <div className="card-body">
                                                    <h5 className="card-title text-secondary h6 fw-bold">Card title Lorem, ipsum.</h5>
                                                    <p className="card-text">This is a wider card with supporting text Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. </p>
                                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="row g-0">
                                            <div className="col-4">
                                                <img src={`https://res.cloudinary.com/kkenny/image/upload/c_fill,f_auto,q_auto,ar_1:1,dpr_${devicePixelRatio}/v1731400547/Fnmilove%20Academy/Posts/man.jpg`} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-8">
                                                <div className="card-body">
                                                    <h5 className="card-title text-secondary h6 fw-bold">Card title Lorem, ipsum.</h5>
                                                    <small className="fw-bold text-info">
                                                        <FaCalendarAlt /> Application Deadline: 25/06/25
                                                    </small>
                                                    <p className="card-text">This is a wider card with supporting text Lorem ipsum dolor sit amet. </p>
                                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col text-center align-self-center">
                                    <a href="" className="btn btn-outline-primary btn-lg rounded-0 fw-bold">Load More</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    )
}

export default Blog