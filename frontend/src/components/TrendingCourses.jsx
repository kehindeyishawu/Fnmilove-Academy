import { BiSolidSchool } from "react-icons/bi";
import "./TrendingCourses.scss"
import CourseCard, { fetchCourses } from "./CourseCard";
import { Link, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";


const TrendingCourses = () => {
    const [courses, setCourses] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);
    const {setStaticNotification} = useOutletContext()

    useEffect(()=>{
        let sideEffect = async()=>{
            try {
                let someCourses = await fetchCourses()
                setCourses(someCourses)
            } catch (error) {
                setStaticNotification({ message: "Couldn't fetch posts/courses from server", time: (new Date()).toString() })
            }finally{
                setShowSpinner(false)
            }
        }
        sideEffect()
    }, [])


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
                    {showSpinner ?  <div className="spinner-border text-primary mt-5 p-5 fs-3" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div> : courses.length === 0 ? <p className="mt-5 text-center">No Courses Found</p> : 
                    courses.map((e) => <CourseCard key={e._id} title={e.title} tutors={e.tutors} imgPublicID={e.featuredImg} price={e.price} tag={e.tag} tipColor={e.tipColor} slug={e.slug} ID={e._id} />)}
                    <div className="col text-center align-self-center" hidden={courses.length===0}>
                        <Link to="/courses" className="btn btn-outline-primary btn-lg rounded-0 fw-bold">Browse More</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingCourses