import { BiSolidSchool } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { setContainerQuarterWidth } from "../utils/cloudinary";
import { cloudname } from "../utils/cloudinary";

const CourseCatalog = () => {
    return (
        <div className="container">
            <div className="row row-gap-3">
                <div className="col-md-6">
                    <small className="fw-bold text-primary fs-6">
                        <BiSolidSchool/> {""}
                        Course Catalog
                    </small>
                    <h1 className="fw-bold mb-lg-3">Explore Our Categories</h1>
                    <p className="mb-4 mb-lg-5">Discover a range of hands-on training programs designed to equip you with the skills needed for a successful career.</p>
                    <a href="" className="btn btn-primary btn-lg fw-bold rounded-0">All Courses <FaArrowRightLong/></a>
                </div>
                <div className="col-md-3">
                    <img src={`${cloudname}/${setContainerQuarterWidth()}/v1731024142/Fnmilove%20Academy/makeup31_n8e2we.png`} className="img-fluid" alt="Makeup Set" />
                    <div className="text-center fw-bold my-2">Skincare & Cosmetics</div>
                </div>
                <div className="col-md-3">
                    <img src={`${cloudname}/${setContainerQuarterWidth()}/v1731024141/Fnmilove%20Academy/Content81_utsreb.png`} className="img-fluid" alt="Content Creation" />
                    <div className="text-center fw-bold my-2">Content Creation</div>
                </div>
                <div className="col-md-3">
                    <img src={`${cloudname}/${setContainerQuarterWidth()}/v1731026125/Fnmilove%20Academy/fashion_vyb2oi.png`} className="img-fluid" alt="Fashion Design" />
                    <div className="text-center fw-bold my-2">Fashion Design</div>
                </div>
                <div className="col-md-3">
                    <img src={`${cloudname}/${setContainerQuarterWidth()}/v1731026126/Fnmilove%20Academy/salon_rrtwxr`} className="img-fluid" alt="Web Development" />
                    <div className="text-center fw-bold my-2">Hairdressing & Styling</div>
                </div>
                <div className="col-md-3">
                    <img src={`${cloudname}/${setContainerQuarterWidth()}/v1731026124/Fnmilove%20Academy/photography_moek2w.png`} className="img-fluid" alt="Photography" />
                    <div className="text-center fw-bold my-2">Photography</div>
                </div>
                <div className="col-md-3">
                    <img src={`${cloudname}/${setContainerQuarterWidth()}/v1731026124/Fnmilove%20Academy/graphic-designer1_i5uhsw.png`} className="img-fluid" alt="Graphics Design" />
                    <div className="text-center fw-bold my-2">Graphics Design</div>
                </div>
            </div>
        </div>
    )
}

export default CourseCatalog