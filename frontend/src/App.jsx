import './App.scss'
import Headline from './components/Headline'
import HeadNav from './components/HeadNav'
import Slider from './components/Slider.jsx'
import IconWrapper from './components/IconWrapper.jsx'
import CourseCatalog from './components/CourseCatalog.jsx'
import WhyUs from './components/WhyUs.jsx'
import TrendingCourses from './components/TrendingCourses.jsx'

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
      </main>
      <footer></footer>
    </>
  )
}

export default App
