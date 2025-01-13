import { Link } from "react-router-dom"
import { BiSolidSchool } from "react-icons/bi";
import { PiHairDryerFill } from "react-icons/pi";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { GrLounge } from "react-icons/gr";
import { setContainerFullWidth, setContainerHalfWidth, cloudname, setFullWidth } from "../utils/cloudinary";
import Team from "../components/Team";

const About = () => {

  let bannerStyles = {
    backgroundImage: `url('${cloudname}/${setFullWidth()}/Fnmilove%20Academy/about-banner')`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  }

  return (
    <main id="about">
      <section className="vertical-padding rounded-bottom text-center" style={bannerStyles}>
        <h1 className="text-white fw-bold">About Us</h1>
        <nav className="text-white fw-bold"> <Link className="text-decoration-none" to="/">Home</Link> {'>>'} About </nav>
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
            Discover excellence in beauty and lifestyle at FunmiLove Academy in vibrant Lekki, Lagos. We’re a premier Cosmetology and Vocational Academy, plus a Fashion and Lifestyle hub.
          </div>
          <div className="col-md-3">
            We create a nurturing and inclusive environment where students can thrive, grow, and become industry leaders. Join us and transform your passion into a successful and fulfilling career!
          </div>
        </div>
        <div className="row mt-5 gy-3">
          <div className="col-md-4">
            <div className="hstack shadow-lg gap-2 px-2 pt-3 rounded-4">
              <div className="p-3 bg-primary text-white rounded-circle">
                <PiHairDryerFill className="fs-1"/>
              </div>
              <div className="text-justify">
                <h3 className="fs-6 fw-bold">Salon</h3>
                <p>Top-notch hair, nail, and makeup services for a fabulous and confident look.</p>
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
                <p>Master beauty and creative skills to become industry leaders and entrepreneurs.</p>
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
                <p>Relax and rejuvenate with luxurious treatments in a serene, soothing setting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <img className="img-fluid" src={`${cloudname}/${setContainerFullWidth("ar_2:1,g_center,c_fill,")}/Fnmilove%20Academy/showcase_djvc2y`} alt="" />
          <div className="row justify-content-between g-0 mt-5">
            <div className="col-md-6">
              <img className="img-fluid" src={`${cloudname}/${setContainerHalfWidth("ar_4:3,c_fill,g_face,")}/v1731994991/Fnmilove%20Academy/fashion_mgoum2`} alt="" />
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src={`${cloudname}/${setContainerHalfWidth("ar_4:3,c_fill,g_center,")}/v1731994991/Fnmilove%20Academy/boy-display_mmnaux`} alt="" />
            </div>
          </div>
        </div>
      </section>
      <article className="container top-spacing">
        <div className="text-start">
          <small className="fw-bold text-primary fs-6 d-block text-center">
            <BiSolidSchool /> {""}
            This is Us
          </small>
          <h2 className="fw-bold text-center">EXECUTIVE SUMMARY</h2>
          <p>
            FunmiLove Academy is a leading Cosmetology and Vocational Academy, combined with a Fashion and Lifestyle house, situated in Lekki Peninsula Scheme II, Ajah, Lagos. Our academy is dedicated to equipping individuals with advanced skills in haircare (for both men and women), nail care, makeup artistry, massage therapy, gelé tying, content creation, photography, and fashion design, empowering them to excel in the beauty, creative, and lifestyle industries.
          </p>
          <p>
            At FunmiLove Academy, we go beyond technical education to foster well-rounded professionals. Our curriculum integrates essential skills in Customer Service, Marketing, Financial Literacy, and Managerial/Entrepreneurial Training alongside Positive Mindset Development to nurture socially responsible entrepreneurs.
          </p>
          <p>
            To further instill a sense of purpose and community spirit, all our students are required to complete a specific amount of community or charity work before receiving certification. This initiative ensures that our graduates not only excel professionally but also contribute positively to society.
          </p>
        </div>
        <div className="mt-5 text-start">
          <small className="fw-bold text-primary fs-6 d-block text-center">
            <BiSolidSchool /> {""}
            Inspiring Excellence
          </small>
          <h2 className="fw-bold text-center">OUR MISSION</h2>
          <p>
            Our mission is to provide a holistic and well-balanced learning experience that equips individuals with the skills, ethics, and mindset needed to succeed as morally upright and highly effective entrepreneurs in their chosen fields.
          </p>
        </div>
        <div className="mt-5 text-start">
          <small className="fw-bold text-primary fs-6 d-block text-center">
            <BiSolidSchool /> {""}
            Inspiring Innovation
          </small>
          <h2 className="fw-bold text-center">OUR VISION</h2>
          <p>
              We aspire to be a recognized leader in vocational and cosmetology education, producing highly skilled professionals and innovative social entrepreneurs who inspire positive change and make meaningful contributions to their communities. By staying ahead of industry trends, we are committed to meeting the growing demand for exceptional talent in the beauty, fashion, photography, and creative sectors.
          </p>
        </div>
        <div className="mt-5 text-start">
          <small className="fw-bold text-primary fs-6 d-block text-center">
            <BiSolidSchool /> {""}
            Empowering communities
          </small>
          <h2 className="fw-bold text-center">CORPORATE SOCIAL RESPONSIBILITY</h2>
          <p>
              FunmiLove Academy takes pride in its commitment to social impact. Through the FunmiLove Empowerment Foundation, we provide scholarships to passionate individuals who face financial challenges but demonstrate immense potential. Over the first three years, we will enroll 8 full-time scholarship students annually, prioritizing candidates from Lagos State while extending opportunities to students nationwide. This initiative ensures that talent and ambition are never hindered by financial limitations.
          </p>
        </div>
        <div className="mt-5 text-start">
          <small className="fw-bold text-primary fs-6 d-block text-center">
            <BiSolidSchool /> {""}
            Beauty Hub
          </small>
          <h2 className="fw-bold text-center">COMPANY DESCRIPTION</h2>
          <p>
            FunmiLove Academy was founded by [Funmilola Alabi], a seasoned expert in the hair and beauty industry with a deep passion for education and empowerment. With a clear vision to transform dreams into thriving careers, the academy delivers an unparalleled learning experience that emphasizes quality, creativity, and innovation.
          </p>
          <p>
          Our diverse programs are designed to empower students with practical expertise in haircare, beauty services (nails, massage, makeup, and gelé tying), photography, content creation, and fashion design while integrating vital skills in Customer Service, Marketing, and Business Management.
          </p>
          <p>
            At FunmiLove Academy, we provide more than education—we create a supportive, inclusive, and inspiring environment where students can thrive as professionals and leaders. We strive to mold individuals into not just skilled experts but also socially responsible and community-conscious entrepreneurs capable of dominating their industries.
          </p>
        </div>
      </article>
      <section className="top-spacing">
        <Team present={"all"} />
      </section>
    </main>
  )
}

export default About