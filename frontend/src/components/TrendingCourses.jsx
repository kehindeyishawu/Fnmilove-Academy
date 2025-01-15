import { BiSolidSchool } from "react-icons/bi";
import "./TrendingCourses.scss"
import CourseCard, { fetchCourses } from "./CourseCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// let courseDB = [
//     {
//         img: "cosmetics-makeup_yckopj",
//         trend: "Top Rated",
//         tipColor: "primary",
//         title: "Diploma in Creative Makeup and Hairstyling",
//         tutors: "Fnmilove Academy, Mr. Adams",
//         url: "",
//         price: "350,000"
//     },
//     {
//         img: "content-marketing_ajukbi",
//         trend: "Expert Recommended",
//         tipColor: "secondary",
//         title: "Diploma in Creative Marketing (Photography/Content Creation etc)",
//         tutors: "Fnmilove Academy, Miss Kunle and Vincent",
//         url: "",
//         price: "159,000"
//     },
//     {
//         img: "fashion_mgoum2",
//         trend: "Most Popular",
//         tipColor: "info",
//         title: "Diploma in Fashion and Lifestyle",
//         tutors: "Fnmilove Academy, Mr Ajaiye and Mrs. Ronke, Dr. Adams & co.",
//         url: "",
//         price: "199,000"
//     },
// ]

const TrendingCourses = () => {
    const [courses, setCourses] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(()=>{
        let sideEffect = async()=>{
            let someCourses = await fetchCourses()
            setCourses(someCourses)
            setShowSpinner(false)
        }
        sideEffect()
    })


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
                    {showSpinner ?  <div className="spinner-border text-primary p-5 fs-3" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div> : courses.length === 0 ? <p>No Posts Found</p> : 
                    courses.map((e) => <CourseCard key={e._id} title={e.title} tutors={e.tutors} imgPublicID={e.featuredImg} price={e.price} tag={e.tag} tipColor={e.tipColor} slug={e.slug} ID={e._id} />)}
                    <div className="col text-center align-self-center">
                        <Link to="/courses" className="btn btn-outline-primary btn-lg rounded-0 fw-bold">Browse More</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingCourses