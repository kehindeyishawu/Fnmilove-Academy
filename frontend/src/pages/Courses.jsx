import { Link } from "react-router-dom"


const Courses = () => {
  return (
    <main>
      <section className="vertical-padding rounded-bottom text-center banner bg-dark">
        <h1 className="text-white fw-bold">Courses</h1>
        <div className="text-white"> <Link className="text-decoration-none" to="/">Home</Link> {'>>'} Courses </div>
      </section>  
    </main>
  )
}

export default Courses