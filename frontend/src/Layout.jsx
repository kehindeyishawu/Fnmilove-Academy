import { Outlet } from "react-router-dom"
import Headline from "./components/Headline"
import HeadNav from "./components/HeadNav"
import Footer from "./components/Footer"
import { useState } from 'react';
import ContactDialog from "./components/ContactDialog";

const Layout = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <header>
                <Headline />
                <HeadNav setShowModal={setShowModal}/>
            </header>
            <Outlet/>
            <ContactDialog showModal={showModal} setShowModal={setShowModal}/>
            <footer className="top-spacing">
                <Footer setShowModal={setShowModal}/>
            </footer>
        </>
    )
}

export default Layout