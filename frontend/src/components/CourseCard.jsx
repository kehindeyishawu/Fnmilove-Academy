import { setContainer3rdWidth } from "../utils/cloudinary"

const CourseCard = ({ img, trend = "", tipColor, title, tutors, url="#",  }) => {
    return (
        <>
            <div className="col">
                <div className="card rounded-top-0">
                    <img src={`https://res.cloudinary.com/kkenny/image/upload/${setContainer3rdWidth("ar_16:9,")}/v1731166999/Fnmilove%20Academy/${img}`} className="card-img-top rounded-0" alt="..." />
                    <div className="card-body position-relative">
                        {trend && <small className="fw-bold">{trend}</small>}
                        <span className="card-play-icon text-bg-primary">
                            <FaPlay />
                        </span>
                        <h2 className={`card-title h6 fw-bold text-bg-${tipColor} ${trend && " mt-3"}`}>{title}</h2>
                        <p className="card-text mb-4 mt-3">{tutors}</p>
                        <div className="hstack justify-content-between">
                            <a href={url} className="btn btn-primary rounded-0 fw-bold">BUY NOW</a>
                            <span className="fw-bold fs-4">$199</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCard