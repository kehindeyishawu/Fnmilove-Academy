import {cloudname} from "../utils/cloudinary.js"
import { timeAgo } from "../utils/timeAgo.js"
import { FaCalendarAlt } from "react-icons/fa"
import { Link } from "react-router-dom"


export let fetchPosts = async(limit, skip, query)=>{
    try {
        let req = await fetch(`/api/post?limit=${limit || 4}&skip=${skip || 0}&${(new URLSearchParams(query)).toString()}`)
        if (!req.ok){
            throw new Error("Something went wrong. It might be network-related")
        }
        let res = await req.json()
        return(res)
    } catch (error) {
        throw error;
    }
}

const MiniCard = ({imgPublicID, title, applicationDeadline, description, updatedAt, slug, ID}) => {
    return (
        <>
            <div className="col">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-4">
                            <img src={`${cloudname}/w_150,c_fill,f_auto,q_auto,ar_7:16,dpr_${devicePixelRatio}/${imgPublicID}`} className="img-fluid rounded-start d-md-none" alt={title} />
                            <img src={`${cloudname}/w_250,c_fill,f_auto,q_auto,ar_1:1,dpr_${devicePixelRatio}/${imgPublicID}`} className="img-fluid rounded-start d-none d-md-block" alt={title} />
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title text-secondary h6 fw-bold"><a href={`/${applicationDeadline ? 'job':'article'}/${ID}/${slug}`} className="text-reset text-decoration-none truncate-line-2">{title}</a></h5>
                                <small className="fw-bold text-info">
                                    {applicationDeadline && <> <FaCalendarAlt /> {applicationDeadline} </>}
                                </small>
                                <p className={`card-text ${applicationDeadline ? 'truncate-line-2' : 'truncate-line-3'} mt-3`}><Link to={`/${applicationDeadline ? 'job' : 'article'}/${ID}/${slug}`} className="text-reset text-decoration-none">{description}</Link></p>
                                <p className="card-text"><small className="text-body-secondary">Last updated {timeAgo(updatedAt.toString())}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiniCard;