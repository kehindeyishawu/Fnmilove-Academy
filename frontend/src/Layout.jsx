import { Outlet, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import { useState } from 'react';
import ContactDialog from "./components/ContactDialog";
import Header from "./components/Header";
import Notification from "./components/Notification";

const Layout = () => {
    const [showModal, setShowModal] = useState(false);
    const [fadeNotification, setFadeNotification] = useState(true);
    const [staticNotification, setStaticNotification] = useState(true);
    let {pathname} = useLocation()
    let postUpdate = pathname.includes("/edit")
    return (
        <>
            {postUpdate || pathname==="/login" || pathname==="/signup"? null : <Header setShowModal={setShowModal} />}
            <Outlet/>
            <ContactDialog showModal={showModal} setShowModal={setShowModal}/>
            {postUpdate || pathname === "/login" || pathname === "/signup" ? null : <Footer setShowModal={setShowModal}/>}
            <Notification fadeNotification={fadeNotification} setFadeNotification={setFadeNotification} staticNotification={staticNotification} setStaticNotification={setStaticNotification}/>
        </>
    )
}

export default Layout