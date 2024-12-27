import { Outlet, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import { useState } from 'react';
import ContactDialog from "./components/ContactDialog";
import Header from "./components/Header";

const Layout = () => {
    const [showModal, setShowModal] = useState(false);
    let {pathname} = useLocation()
    let postUpdate = pathname.includes("/edit")
    return (
        <>
            {postUpdate || pathname==="/login" || pathname==="/signup"? null : <Header setShowModal={setShowModal} />}
            <Outlet/>
            <ContactDialog showModal={showModal} setShowModal={setShowModal}/>
            {postUpdate || pathname === "/login" || pathname === "/signup" ? null : <Footer setShowModal={setShowModal}/>}
        </>
    )
}

export default Layout