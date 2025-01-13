import { BiSolidSchool } from "react-icons/bi";
import "./TrendingCourses.scss"
import CourseCard from "./CourseCard";

let courseDB = [
    {
        img: "cosmetics-makeup_yckopj",
        trend: "Top Rated",
        tipColor: "primary",
        title: "Diploma in Creative Makeup and Hairstyling",
        tutors: "Fnmilove Academy, Mr. Adams",
        url: "",
        price: "350,000"
    },
    {
        img: "content-marketing_ajukbi",
        trend: "Expert Recommended",
        tipColor: "secondary",
        title: "Diploma in Creative Marketing (Photography/Content Creation etc)",
        tutors: "Fnmilove Academy, Miss Kunle and Vincent",
        url: "",
        price: "159,000"
    },
    {
        img: "fashion_mgoum2",
        trend: "Most Popular",
        tipColor: "info",
        title: "Diploma in Fashion and Lifestyle",
        tutors: "Fnmilove Academy, Mr Ajaiye and Mrs. Ronke, Dr. Adams & co.",
        url: "",
        price: "199,000"
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