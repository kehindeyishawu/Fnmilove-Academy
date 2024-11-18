import Slider from "../components/Slider"
import IconWrapper from "../components/IconWrapper"
import CourseCatalog from "../components/CourseCatalog"
import WhyUs from "../components/WhyUs"
import TrendingCourses from "../components/TrendingCourses"
import Testimonial from "../components/Testimonial"
import IframeVideo from "../components/IframeVideo"
import Posts from "../components/Posts"
import Team from "../components/Team"
import FAQs from "../components/FAQs"

const home = () => {
    return (
        <>
            <main>
                <section>
                    <Slider />
                    <IconWrapper/>
                </section>
                <section className='mt-5'>
                    <CourseCatalog/>
                </section>
                <section className='top-spacing'>
                    <WhyUs/>
                </section>
                <section className='top-spacing'>
                    <TrendingCourses/>
                </section>
                <section className='top-spacing'>
                    <Testimonial/>
                </section>
                <section className='top-spacing'>
                    <IframeVideo url="https://www.youtube.com/embed/U9Do9Wi10yM?si=GUDhtpSlax4j85oj?rel=0" />
                </section>
                <section className='top-spacing'>
                    <Posts/>
                </section>
                <section className='top-spacing'>
                    <Team />
                </section>
                <section className='top-spacing' id="FAQs">
                    <FAQs />
                </section>
            </main>
        </>
    )
}

export default home