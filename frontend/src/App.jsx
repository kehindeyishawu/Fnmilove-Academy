import './App.scss'
import Headline from './components/Headline'
import HeadNav from './components/HeadNav'
import Slider from './components/Slider.jsx'
import IconWrapper from './components/IconWrapper.jsx'
import CourseCatalog from './components/CourseCatalog.jsx'
import WhyUs from './components/WhyUs.jsx'
import TrendingCourses from './components/TrendingCourses.jsx'
import Testimonial from './components/Testimonial.jsx'
import IframeVideo from './components/IframeVideo.jsx'
import Posts from './components/Posts.jsx'
import Team from './components/Team.jsx'
import FAQs from './components/FAQs.jsx'

function App() {


  return (
    <>
      <header>
        <Headline />
        <HeadNav />
      </header>
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
        <section className='top-spacing'>
          <FAQs />
        </section>
      </main>
      <footer></footer>
    </>
  )
}

export default App
