import './App.scss'
import Headline from './components/Headline'
import HeadNav from './components/HeadNav'
import Slider from './components/Slider.jsx'
import IconWrapper from './components/IconWrapper.jsx'
import CourseCatalog from './components/CourseCatalog.jsx'

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
        <section className='mt-5'></section>
      </main>
      <footer></footer>
    </>
  )
}

export default App
