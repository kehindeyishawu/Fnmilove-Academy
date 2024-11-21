import { BiSolidSchool } from "react-icons/bi";
import "./TrendingCourses.scss"
import CourseCard from "./CourseCard";

let courseDB = [
    {
        img: "cosmetics-makeup_yckopj",
        trend: "Top Rated",
        tipColor: "primary",
        title: "Advanced Bridal Makeup: Creating Stunning Wedding Looks",
        tutors: "Fnmilove Academy, Mr. Adams and ...",
        url: "",
        price: "199"
    },
    {
        img: "content-marketing_ajukbi",
        trend: "Expert Recommended",
        tipColor: "secondary",
        title: "Content Creation 101: Building Your Brand on Social Media",
        tutors: "Fnmilove Academy, Miss Kunle and Vincent",
        url: "",
        price: "159"
    },
    {
        img: "group_ijbkzs",
        trend: "Most Popular",
        tipColor: "info",
        title: "Introduction to Fashion Design: From Concept to Creation",
        tutors: "Fnmilove Academy, Mr Ajaiye and Mrs. Ron...",
        url: "",
        price: "199"
    },
]

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
                <div className="row row-cols-1 row-cols-md-2 gy-4 row-cols-lg-3 justify-content-center">
                    {courseDB.map((e)=> <CourseCard img={e.img} trend={e.trend} tipColor={e.tipColor} title={e.title} tutors={e.tutors} price={e.price} />)}
                    <div className="col text-center align-self-center">
                        <a href="" className="btn btn-outline-primary btn-lg rounded-0 fw-bold">Browse More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingCourses