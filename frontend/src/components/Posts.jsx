import { BiSolidSchool } from "react-icons/bi"
import Card from "./Card"
import { FaRegArrowAltCircleRight } from "react-icons/fa"
import { useEffect, useState } from "react"
import { fetchPosts } from "./MiniCard"
import { Link } from "react-router-dom"


const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true)

    useEffect(()=>{
        let sideEffect = async()=>{
            let somePosts = await fetchPosts()
            setPosts(somePosts)
            setShowSpinner(false)
        }
        sideEffect()
    })


    return (
        <div>
            <small className="fw-bold text-primary fs-6 d-block text-center">
                <BiSolidSchool /> {""}
                What's New
            </small>
            <h1 className="fw-bold text-center">Recent Posts</h1>
            <p className="mb-4 text-light text-center">Catch up on our latest articles, news and students achievements</p>
            <div className="container">
                <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {showSpinner ?  <div className="spinner-border text-primary p-5 fs-3" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div> : posts.length === 0 ? <p>No Posts Found</p> :
                    posts.map((e)=>(
                            <Card key={e._id} title={e.title} imgPublicID={e.featuredImg || e.companyCoverImg} applicationDeadline={e.applicationDeadline} description={e.description} updatedAt={e.updatedAt} createdAt={e.createdAt} ID={e._id} slug={e.slug} />
                    ))}
                    <div className="col text-center align-self-center">
                        <Link to="/blog" className="btn btn-outline-primary btn-lg rounded-0 fw-bold">See More <FaRegArrowAltCircleRight /> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts