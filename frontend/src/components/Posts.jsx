import { BiSolidSchool } from "react-icons/bi"
import Card from "./Card"
import { setContainer3rdWidth } from "../utils/cloudinary"
import { FaRegArrowAltCircleRight } from "react-icons/fa"


let postDB = [
    {
        title:  "Top 5 In-demand Vocational Skills in 2024",
        text:   "Discover the Top Vocational skills for 2024 and why they are in demand...",
        imgSrc: `https://res.cloudinary.com/kkenny/image/upload/${setContainer3rdWidth("ar_16:9,")}/v1731400547/Fnmilove%20Academy/Posts/man.jpg`
    },
    {
        title:  "How to Choose the Right Vocational Course for Your Career",
        text:   "Learn how to pick the perfect vocation course for your career path...",
        imgSrc: `https://res.cloudinary.com/kkenny/image/upload/${setContainer3rdWidth("ar_16:9,")}/v1731400547/Fnmilove%20Academy/Posts/laptop3.jpg`
    },
    {
        title:  "Success Stories: Graduates Who Excelled in Their Vocational Careers",
        text:   "Read about our graduates who turned their training into successful careers...",
        imgSrc: `https://res.cloudinary.com/kkenny/image/upload/${setContainer3rdWidth("ar_16:9,")}/v1731146323/Fnmilove%20Academy/Posts/student6.jpg`
    },
    {
        title:  "The Future of vocational Education: Trends to Watch",
        text:   "Explore the latest trends shaping the future of vocational education...",
        imgSrc: `https://res.cloudinary.com/kkenny/image/upload/${setContainer3rdWidth("ar_16:9,")}/v1731400548/Fnmilove%20Academy/Posts/skills.jpg`
    }
]

const Posts = () => {
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
                    {postDB.map((e)=>(
                        <div className="col">
                            <Card title={e.title} imgSrc={e.imgSrc} text={e.text} />
                        </div>
                    ))}
                    <div className="col text-center align-self-center">
                        <a href="" className="btn btn-outline-primary btn-lg rounded-0 fw-bold">See More <FaRegArrowAltCircleRight /> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts