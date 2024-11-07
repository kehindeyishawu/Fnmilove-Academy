import { BiSolidSchool } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";


const CourseCatalog = () => {
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-6">
                    <small className="fw-bold text-primary fs-6">
                        <BiSolidSchool/> {""}
                        Course Catalog
                    </small>
                    <h1 className="fw-bold">Explore Our Categories</h1>
                    <p className="mb-4">Discover a range of hands-on training programs designed to equip you with the skills needed for a successful career.</p>
                    <a href="" className="btn btn-primary btn-lg fw-bold rounded-0">All Courses <FaArrowRightLong/></a>
                </div>
                <div className="col-md-3">
                    <div className="bg-light"></div>
                    <div className="text-center fw-bold my-2">Make-up</div>
                </div>
                <div className="col-md-3">
                    <div className="bg-info"></div>
                    <div className="text-center fw-bold my-2">Content Creation</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="bg-light h-100"></div>
                    <div className="fw-bold my-2">Fashion Design</div>
                </div>
                <div className="col-md-3">
                    <div className="bg-light h-100"></div>
                    <div className="fw-bold my-2">Photography</div>
                </div>
                <div className="col-md-3">
                    <div className="bg-light h-100"></div>
                    <span>Web Development</span>
                </div>
                <div className="col-md-3">
                    <div className="bg-light h-100"></div>
                    <span>Graphics Design</span>
                </div>
            </div>
        </div>
    )
}

export default CourseCatalog