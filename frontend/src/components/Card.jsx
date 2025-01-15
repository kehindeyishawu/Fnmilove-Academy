import { cloudname, setContainer3rdWidth } from "../utils/cloudinary"
import { timeAgo } from "../utils/timeAgo"


const Card = ({ title, imgPublicID, applicationDeadline, description, updatedAt, createdAt, ID, slug }) => {
    return (
        <div className="col">
            <div className="card rounded-top-0">
                <img src={`${cloudname}/${setContainer3rdWidth("ar_16:9,")}/${imgPublicID}`} className="card-img-top rounded-0" alt={title}/>
                <div className="card-body">
                    <h5 className="card-title h6 fw-bold text-secondary truncate-line-2">{title}</h5>
                    <p className="card-text truncate-line-2">{description}</p>
                    <p className="card-text"><small className="text-body-secondary"> {applicationDeadline ? `Job posted ${timeAgo(createdAt.toString())}` : `Last updated ${timeAgo(updatedAt.toString())}`} </small></p>
                    <a href={`/${applicationDeadline ? "job" : "article"}/${ID}/${slug}`} className="btn fw-bold btn-primary rounded-0">Read More...</a>
                </div>
            </div>
        </div>
    )
}

export default Card