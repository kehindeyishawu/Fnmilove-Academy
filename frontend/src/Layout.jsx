import { Outlet, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import { useState } from 'react';
import ContactDialog from "./components/ContactDialog";
import Header from "./components/Header";
import Notification from "./components/Notification";
import LoadingDialog from "./components/LoadingDialog";

const Layout = () => {
    // contact Form Modal
    const [showModal, setShowModal] = useState(false);
    // Other Modals
    const [showLoading, setShowLoading] = useState(false);
    const [fadeNotification, setFadeNotification] = useState(false);
    const [staticNotification, setStaticNotification] = useState(false);
    let {pathname} = useLocation();
    let postUpdate = pathname.includes("/edit") || pathname.includes("/new")
    return (
        <>
            {postUpdate || pathname==="/login" || pathname==="/signup"? null : <Header setShowModal={setShowModal} />}
            <Outlet context={{setFadeNotification, setStaticNotification, setShowLoading}}/>
            <ContactDialog showModal={showModal} setShowModal={setShowModal} setFadeNotification={setFadeNotification} setStaticNotification={setStaticNotification} />
            {postUpdate || pathname === "/login" || pathname === "/signup" ? null : <Footer setShowModal={setShowModal}/>}
            <Notification fadeNotification={fadeNotification} setFadeNotification={setFadeNotification} staticNotification={staticNotification} setStaticNotification={setStaticNotification}/>
            <LoadingDialog showLoading={showLoading} setShowLoading={setShowLoading}/>
        </>
    )
}

export default Layout