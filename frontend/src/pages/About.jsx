import { Link } from "react-router-dom"
import { BiSolidSchool } from "react-icons/bi";
import { PiHairDryerFill } from "react-icons/pi";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { GrLounge } from "react-icons/gr";
import { setContainerFullWidth, setContainerHalfWidth } from "../utils/cloudinary";
import Team from "../components/Team";
import "./About.scss"

const About = () => {
  return (
    <main id="about">
      <section className="vertical-padding rounded-bottom text-center banner">
        <h1 className="text-white fw-bold">About Us</h1>
        <div className="text-white"> <Link className="text-decoration-none" to="/">Home</Link> {'>>'} About </div>
      </section>
      <section className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <small className="fw-bold text-primary fs-6">
              <BiSolidSchool /> {""}
              About Us
            </small>
            <h2 className="fw-bold text-secondary h1">Welcome To The Fnmilove Company</h2>
          </div>
          <div className="col-md-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita enim repellendus tempore ratione facilis quia dolores fugiat commodi ab ad repudiandae amet, aperiam dolorum doloribus.
          </div>
          <div className="col-md-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quas sint non tempore necessitatibus quibusdam voluptatibus, maiores in quae repellendus vel iusto deleniti, hic natus.
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="hstack shadow-lg gap-2 px-2 pt-3 rounded-4">
              <div className="p-3 bg-primary text-white rounded-circle">
                <PiHairDryerFill className="fs-1"/>
              </div>
              <div className="text-justify">
                <h3 className="fs-6 fw-bold">Salon</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, ehgdi.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="hstack shadow-lg gap-2 px-2 pt-3 rounded-4">
              <div className="p-3 bg-dark text-white rounded-circle">
                <HiMiniAcademicCap className="fs-1" />
              </div>
              <div className="text-justify">
                <h3 className="fs-6 fw-bold">Academy</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sint?</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="hstack shadow-lg gap-2 px-2 pt-3 rounded-4">
              <div className="p-3 bg-primary text-white rounded-circle">
                <GrLounge className="fs-1" />
              </div>
              <div className="text-justify">
                <h3 className="fs-6 fw-bold">Lounge</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, ehgdi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <img className="img-fluid" src={`https://res.cloudinary.com/kkenny/image/upload/${setContainerFullWidth("ar_4:1,")}/v1731286967/Fnmilove%20Academy/books_emlaby.jpg`} alt="" />
          <div className="row justify-content-between mt-5">
            <div className="col-6">
              <img className="img-fluid" src={`https://res.cloudinary.com/kkenny/image/upload/${setContainerHalfWidth("ar_16:9,")}/v1731994991/Fnmilove%20Academy/image-placeholder_pve8bj.png`} alt="" />
            </div>
            <div className="col-6">
              <img className="img-fluid" src={`https://res.cloudinary.com/kkenny/image/upload/${setContainerHalfWidth("ar_16:9,")}/v1731994991/Fnmilove%20Academy/image-placeholder_pve8bj.png`} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="top-spacing">
        <Team present={"all"}/>
      </section>
      <section className="container mt-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum mollitia iusto sed, culpa eos, nemo necessitatibus veniam asperiores iure exercitationem vel facilis labore assumenda laborum consequatur unde, officiis natus aliquam obcaecati omnis deserunt quos. Esse vero perspiciatis accusamus et, excepturi nobis. Sint commodi pariatur, facilis magnam harum, at minima impedit odit quis aliquid sunt laboriosam ea tempora reprehenderit aperiam. Magnam hic molestias cumque blanditiis quam tenetur, itaque necessitatibus! Eligendi officia tempore doloribus cupiditate a delectus quidem et repellat impedit dolores temporibus quibusdam alias aperiam blanditiis cumque inventore voluptatem, eos, natus nemo in sint similique. Quisquam quo veritatis maxime deleniti at?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum mollitia iusto sed, culpa eos, nemo necessitatibus veniam asperiores iure exercitationem vel facilis labore assumenda laborum consequatur unde, officiis natus aliquam obcaecati omnis deserunt quos. Esse vero perspiciatis accusamus et, excepturi nobis. Sint commodi pariatur, facilis magnam harum, at minima impedit odit quis aliquid sunt laboriosam ea tempora reprehenderit aperiam. Magnam hic molestias cumque blanditiis quam tenetur, itaque necessitatibus! Eligendi officia tempore doloribus cupiditate a delectus quidem et repellat impedit dolores temporibus quibusdam alias aperiam blanditiis cumque inventore voluptatem, eos, natus nemo in sint similique. Quisquam quo veritatis maxime deleniti at?</p>
      </section>
    </main>
  )
}

export default About