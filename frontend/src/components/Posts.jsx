import { BiSolidSchool } from "react-icons/bi"
import Card from "./Card"
import { FaRegArrowAltCircleRight } from "react-icons/fa"
import { useEffect, useState } from "react"
import { fetchPosts } from "./MiniCard"
import { Link, useOutletContext } from "react-router-dom"


const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true)
    const {setStaticNotification} = useOutletContext()

    useEffect(()=>{
        let sideEffect = async()=>{
            try {
                let somePosts = await fetchPosts()
                setPosts(somePosts)
            } catch (error) {
                setStaticNotification({ message: "Couldn't fetch posts/courses from server", time: (new Date()).toString() })
            }finally{
                setShowSpinner(false)
            }
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
                    {showSpinner ?  <div className="spinner-border text-primary mt-5 mx-auto p-5 fs-3" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div> : posts.length === 0 ? <p className="mt-5 mx-auto text-center">No Posts Found</p> :
                    posts.map((e)=>(
                            <Card key={e._id} title={e.title} imgPublicID={e.featuredImg || e.companyCoverImg} applicationDeadline={e.applicationDeadline} description={e.description} updatedAt={e.updatedAt} createdAt={e.createdAt} ID={e._id} slug={e.slug} />
                    ))}
                    <div className="col text-center align-self-center" hidden={posts.length===0}>
                        <Link to="/blog" className="btn btn-outline-primary btn-lg rounded-0 fw-bold">See More <FaRegArrowAltCircleRight /> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts