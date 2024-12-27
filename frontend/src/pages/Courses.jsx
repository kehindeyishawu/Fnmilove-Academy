import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import CourseCard from "../components/CourseCard"
import { useState } from "react"
import CreateButton from "../components/createButton"

let courseDB = [
  {
    img: "cosmetics-makeup_yckopj",
    trend: "Top Rated",
    tipColor: "primary",
    title: "Advanced Bridal Makeup: Creating Stunning Wedding Looks",
    tutors: "Fnmilove Academy, Mr. Adams and ...",
    url: "",
    price: "350,000"
  },
  {
    img: "content-marketing_ajukbi",
    trend: "Expert Recommended",
    tipColor: "secondary",
    title: "Content Creation 101: Building Your Brand on Social Media",
    tutors: "Fnmilove Academy, Miss Kunle and Vincent",
    url: "",
    price: "159,000"
  },
  {
    img: "group_ijbkzs",
    trend: "Most Popular",
    tipColor: "info",
    title: "Introduction to Fashion Design: From Concept to Creation",
    tutors: "Fnmilove Academy, Mr Ajaiye and Mrs. Ron...",
    url: "",
    price: "199,000"
  },
]


const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const formSubmit = (e)=>{
    e.preventDefault()
  }
  const handleSearchForm = (e)=>{
    setSearchQuery(e.target.value)
  }

  return (
    <main>
      <section className="vertical-padding rounded-bottom text-center banner bg-dark">
        <h1 className="text-white fw-bold">Courses</h1>
        <nav className="text-white"> <Link className="text-decoration-none" to="/">Home</Link> {'>>'} Courses </nav>
      </section>
      <section className="container mt-5">
        <div className="row justify-content-end">
          <div className="col-md-6 col-lg-4">
            <form onSubmit={formSubmit} className="input-group search-form">
                <input type="text" value={searchQuery} onChange={handleSearchForm} className="form-control rounded-0" placeholder="Search Courses" aria-label="Search Courese Form" />
                <button className="btn btn-primary rounded-0" type="button"><FaSearch/></button>
            </form>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 gy-4 row-cols-lg-3 justify-content-center">
            {courseDB.map((e) => <CourseCard img={e.img} trend={e.trend} tipColor={e.tipColor} title={e.title} tutors={e.tutors} price={e.price} />)}
            <div className="col text-center align-self-center">
              <a href="" className="btn btn-outline-primary btn-lg rounded-0 fw-bold">Load More</a>
            </div>
          </div>
          <CreateButton postType="course"/>
        </div>
      </section>
    </main>
  )
}

export default Courses