import { Outlet, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import { useEffect, useState } from 'react';
import ContactDialog from "./components/ContactDialog";
import Header from "./components/Header";
import Notification from "./components/Notification";
import LoadingDialog from "./components/LoadingDialog";
import useScrollToTop from "./useScrollToTop";

const Layout = () => {
    const [user, setUser] = useState(null);
    // contact Form Modal
    const [showModal, setShowModal] = useState(false);
    // Other Modals
    const [showLoading, setShowLoading] = useState(false);
    const [fadeNotification, setFadeNotification] = useState(false);
    const [staticNotification, setStaticNotification] = useState(false);
    let {pathname} = useLocation();
    let hideFromPages = ["/edit", "/new", "/login", "/signup", "/fla-admin", "/password-reset"]
    let hideHeaderAndFooter = hideFromPages.some(e => pathname.includes(e))

    useScrollToTop(); // Use the custom hook to scroll to top on route change

    useEffect(()=>{
        let sideEffect = async ()=>{
            try {
                let req = await fetch("/api/auth/isloggedin")
                if (!req.ok){
                    if(req.status === 401) setUser(null);
                    return
                }
                let currentUser = await req.json()
                setUser({...currentUser})
            } catch (error) {
                console.warn(error.message)
            }
        }
        sideEffect()
    }, [pathname])

    return (
        <>
            {hideHeaderAndFooter ? null : <Header setShowModal={setShowModal} setStaticNotification={setStaticNotification} setFadeNotification={setFadeNotification} user={user} setUser={setUser} />}
            <Outlet context={{setFadeNotification, setStaticNotification, setShowLoading, user, setUser}}/>
            <ContactDialog showModal={showModal} setShowModal={setShowModal} setFadeNotification={setFadeNotification} setStaticNotification={setStaticNotification} />
            {hideHeaderAndFooter ? null : <Footer setShowModal={setShowModal}/>}
            <Notification fadeNotification={fadeNotification} setFadeNotification={setFadeNotification} staticNotification={staticNotification} setStaticNotification={setStaticNotification}/>
            <LoadingDialog showLoading={showLoading} setShowLoading={setShowLoading}/>
        </>
    )
}

export default Layout