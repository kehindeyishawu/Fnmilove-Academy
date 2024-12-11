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
import JobDescription from './pages/JobDescription.jsx'
import PostEdit from './pages/PostEdit.jsx'

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
          path: "/job/:id",
          element: <JobDescription/>
        },
        {
          path: "/:posttype/edit",
          element: <PostEdit/>
        },
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
