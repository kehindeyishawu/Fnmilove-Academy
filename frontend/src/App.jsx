import './App.scss'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Courses from './pages/Courses.jsx'
import Blog from './pages/Blog.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

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
      ]
    },
    {
      path: "/login",
      element:  <Login/>
    },
    {
      path: "/signin",
      element:  <Signup/>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
