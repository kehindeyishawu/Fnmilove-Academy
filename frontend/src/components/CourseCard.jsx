import { FaPlay } from "react-icons/fa6"; 
import { cloudname, setContainer3rdWidth } from "../utils/cloudinary"
import { Link } from "react-router-dom"

const CourseCard = ({ img, trend, tipColor, title, tutors, url="#", price }) => {
    return (
        <>
            <div className="col">
                <div className="card rounded-top-0">
                    <img src={`https://res.cloudinary.com/${cloudname}/image/upload/${setContainer3rdWidth("ar_16:9,")}/Fnmilove%20Academy/${img}`} className="card-img-top rounded-0" alt="..." />
                    <div className="card-body position-relative">
                        {trend && <small className="fw-bold">{trend}</small>}
                        <span className={`card-play-icon text-bg-${tipColor}`}>
                            <FaPlay />
                        </span>
                        <h2 className={`card-title h6 fw-bold text-secondary ${trend || " mt-3"}`}>{title}</h2>
                        <p className="card-text mb-4 mt-3">{tutors}</p>
                        <div className="hstack justify-content-between">
                            <Link to={url} className="btn btn-primary rounded-0 fw-bold">BUY NOW</Link>
                            <span className="fw-bold fs-4">₦{price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCard