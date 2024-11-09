import { BiSolidSchool } from "react-icons/bi";
import { FaPlay } from "react-icons/fa6";
import { setContainer3rdWidth } from "../utils/cloudinary";
import "./TrendingCourses.scss"

const TrendingCourses = () => {
    return (
        <>
            <small className="fw-bold text-primary fs-6 d-block text-center">
                <BiSolidSchool /> {""}
                Must See
            </small>
            <h1 className="text-center fw-bold">Trending Courses</h1>
            <p className="text-center text-light mb-4">Expolre our most popular courses and stay ahead in your career with the latest skills and knowledge</p>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 gy-4 row-cols-lg-3">
                    <div className="col">
                        <div className="card">
                            <img src={`https://res.cloudinary.com/kkenny/image/upload/${setContainer3rdWidth("ar_16:9,")}/v1731166999/Fnmilove%20Academy/cosmetics-makeup_yckopj.jpg`} className="card-img-top rounded-0" alt="..." />
                            <div className="card-body position-relative">
                                <small className="fw-bold">Top Rated</small>
                                <span className="card-play-icon bg-primary">
                                    <FaPlay />
                                </span>
                                <h2 className="card-title h6 fw-bold text-secondary">Advanced Bridal Makeup: Creating Stunning Wedding Looks</h2>
                                <p className="card-text mb-4 mt-3">Fnmilove Academy, Mr. Adams and ...</p>
                                <div className="hstack justify-content-between">
                                <a href="#" className="btn btn-primary rounded-0 fw-bold">BUY NOW</a>
                                <span className="fw-bold fs-4">$199</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={`https://res.cloudinary.com/kkenny/image/upload/${setContainer3rdWidth("ar_16:9,")}/v1731167976/Fnmilove%20Academy/content-marketing_ajukbi.jpg`} className="card-img-top rounded-0" alt="..." />
                            <div className="card-body position-relative">
                                <small className="fw-bold">Expert Recommended</small>
                                <span className="card-play-icon bg-secondary text-white">
                                    <FaPlay />
                                </span>
                                <h2 className="card-title h6 fw-bold text-secondary">Content Creation 101: Building Your Brand on Social Media</h2>
                                <p className="card-text mb-4 mt-3">Fnmilove Academy, Miss Kunle and Vincent</p>
                                <div className="hstack justify-content-between">
                                    <a href="#" className="btn btn-primary rounded-0 fw-bold">BUY NOW</a>
                                    <span className="fw-bold fs-4">$159</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={`https://res.cloudinary.com/kkenny/image/upload/${setContainer3rdWidth("ar_16:9,")}/v1731146322/Fnmilove%20Academy/group_ijbkzs.jpg`} className="card-img-top rounded-0" alt="..." />
                            <div className="card-body position-relative">
                                <small className="fw-bold">Most Popular</small>
                                <span className="card-play-icon bg-info text-white">
                                    <FaPlay />
                                </span>
                                <h2 className="card-title h6 fw-bold text-secondary">Introduction to Fashion Design: From Concept to Creation</h2>
                                <p className="card-text mb-4 mt-3">Fnmilove Academy, Mr Ajaiye and Mrs. Ron...</p>
                                <div className="hstack justify-content-between">
                                    <a href="#" className="btn btn-primary rounded-0 fw-bold">BUY NOW</a>
                                    <span className="fw-bold fs-4">$199</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingCourses