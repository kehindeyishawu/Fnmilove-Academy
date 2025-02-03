import { Link, useOutletContext } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import CourseCard from "../components/CourseCard"
import { useEffect, useState } from "react"
import CreateButton from "../components/CreateButton"
import { fetchCourses } from "../components/CourseCard"


const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [courses, setCourses] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true)
  const courseLimit = 12
  const [courseSkip, setCourseSkip] = useState(0);
  const [buttonLoad, setButtonLoad] = useState(false);
  const [hideLoadButton, setHideLoadButton] = useState(false);
  const {setStaticNotification, user} = useOutletContext()

  useEffect(()=>{
    const sideEffect = async () => {
      try {
        let moreCourse = await fetchCourses(courseLimit, courseSkip, searchQuery);
        if (moreCourse.length !== 0) {
          setCourses(prevState => [...prevState, ...moreCourse])
          setHideLoadButton(false)
        } else {
          setHideLoadButton(true)
        }
        setButtonLoad(false)
        setShowSpinner(false)
      } catch (error) {
        setStaticNotification({ message: error.message, time: (new Date()).toString() })
        setShowSpinner(false)
      }
    }
    sideEffect()
  },[courseSkip])
    
  const formSubmit = (e)=>{
    e.preventDefault()
    setShowSpinner(true)
    setCourses([])
    setCourseSkip(prevState => prevState === 0 ? "" : 0)
  }
  const handleSearchForm = (e)=>{
    setSearchQuery(e.target.value)
  }
  const handleLoadMore = ()=>{
    setButtonLoad(true)
    setCourseSkip(prevState => prevState === "" ? courseLimit : prevState + courseLimit);
  }

  return (
    <main>
      <section className="vertical-padding rounded-bottom text-center banner bg-dark">
        <h1 className="text-white fw-bold">Courses</h1>
        <nav className="text-white fw-bold"> <Link className="text-decoration-none" to="/">Home</Link> {'>>'} Courses </nav>
      </section>
      <section className="container mt-5">
        <div className="row justify-content-end">
          <div className="col-md-6 col-lg-4">
            <form onSubmit={formSubmit} className="input-group search-form">
                <input type="text" value={searchQuery} onChange={handleSearchForm} className="form-control rounded-0" placeholder="Search Courses" aria-label="Search Courese Form" />
                <button className="btn btn-primary rounded-0" type="submit"><FaSearch/></button>
            </form>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div className="container">
          <p className="text-center" hidden={showSpinner || courses.length === 0}>Please note that before making any course payment, students must complete a registration form, which incurs a fee of ₦20,000.</p>
          <div className="row row-cols-1 row-cols-md-2 gy-4 row-cols-lg-3 justify-content-center">
            {showSpinner ? <div className="spinner-border text-primary p-5 fs-3" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div> : courses.length === 0 ? <p>No Courses Found</p> : 
                          courses.map((e) => <CourseCard key={e._id} title={e.title} tutors={e.tutors} imgPublicID={e.featuredImg} price={e.price} tag={e.tag} tipColor={e.tipColor} slug={e.slug} ID={e._id} />)
            }
            <div className="col text-center align-self-center" style={{ display: showSpinner || courses.length === 0 ? "none" : "block" }}>
              <p style={{ display: hideLoadButton ? "block" : "none" }}>No more Posts!!!</p>
              <button
                hidden={hideLoadButton}
                disabled={buttonLoad}
                onClick={handleLoadMore}
                className="btn btn-outline-primary btn-lg rounded-0 fw-bold">
                {buttonLoad ? <><div className="spinner-grow spinner-grow-sm" role="status"></div> Loading</> : 'Load More'}
              </button>
            </div>
          </div>
          {user && <CreateButton postType="course"/>}
        </div>
      </section>
    </main>
  )
}

export default Courses