import { FaPlay } from "react-icons/fa6"; 
import { cloudname, setContainer3rdWidth } from "../utils/cloudinary"
import { Link } from "react-router-dom"


export const fetchCourses = async(limit, skip, searchQuery, project)=>{
    try {
        let req = await fetch(`/api/courses?limit=${limit || 3}&skip=${skip || 0}&search=${searchQuery || ""}&project=${project || ""}`)
        if (!req.ok) {
            throw new Error("Something went wrong. It might be network-related")
        }
        let res = await req.json()
        return (res)
    } catch (error) {
        throw error;
    }
}

const CourseCard = ({ title, tutors, imgPublicID, tag, tipColor, slug, ID }) => {
    return (
        <>
            <div className="col">
                <div className="card rounded-top-0">
                    <img src={`${cloudname}/${setContainer3rdWidth("ar_16:9,c_fill,g_face,")}/${imgPublicID}`} className="card-img-top rounded-0" alt="..." />
                    <div className="card-body position-relative">
                        {tag && <small className="fw-bold">{tag}</small>}
                        <span className={`card-play-icon text-bg-${tipColor}`}>
                            <FaPlay />
                        </span>
                        <h2 className={`card-title h6 fw-bold text-secondary ${tag || " mt-3"} truncate-line-2`}><a href={`course/${ID}/${slug}`} className="text-reset text-decoration-none">{title}</a></h2>
                        <p className={`card-text mb-4 mt-3 ${tag ? 'truncate-line-1' : 'truncate-line-2' }`}>{tutors}</p>
                        <Link to={`/registration-form?courseid=${ID}`} className="btn btn-primary rounded-0 fw-bold">ENROLL NOW</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCard