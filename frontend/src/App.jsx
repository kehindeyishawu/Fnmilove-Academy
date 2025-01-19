import './App.scss'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Courses from './pages/Courses.jsx'
import Blog from './pages/Blog.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import JobUpdate from './pages/JobUpdate.jsx'
import ArticleUpdate from './pages/ArticleUpdate.jsx'
import CourseUpdate from './pages/CourseUpdate.jsx'
import NotFound from './pages/NotFound.jsx'
import RegistrationForm from './pages/RegistrationForm.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Layout/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/courses",
          element: <Courses/>
        },
        {
          path: "/blog",
          element: <Blog/>
        },
        {
          path: "/privacy",
          element: <Privacy/>
        },
        {
          path: "/terms",
          element: <Terms/>
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <Signup />
        },
        {
          path: "/job/new",
          element: <JobUpdate/>
        },
        {
          path: "/edit/job/:id",
          element: <JobUpdate/>
        },
        {
          path: "/article/new",
          element: <ArticleUpdate/>
        },
        {
          path: "/edit/article/:id",
          element: <ArticleUpdate/>
        },
        {
          path: "/course/new",
          element: <CourseUpdate/>
        },
        {
          path: "/edit/course/:id",
          element: <CourseUpdate/>
        },
        {
          path: "/registration-form",
          element: <RegistrationForm/>
        },
      ]
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
