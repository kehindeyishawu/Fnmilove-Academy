import { Outlet } from "react-router-dom"
import Headline from "./components/Headline"
import HeadNav from "./components/HeadNav"
import Footer from "./components/Footer"

const Layout = () => {
    return (
        <>
            <header>
                <Headline />
                <HeadNav />
            </header>
            <Outlet/>
            <footer className="top-spacing">
                <Footer/>
            </footer>
        </>
    )
}

export default Layout