import { Link, useLocation, useOutletContext } from "react-router-dom"
import { useState, useTransition } from "react"
import "./HeadNav.scss"
import Spinner from 'react-bootstrap/Spinner';

const EditNav = ({publishButton, saveButton}) => {
    const [isSaving, setIsSaving] = useState(false)
    let {pathname} = useLocation()
    const {setFadeNotification} = useOutletContext()
    let saving = async ()=>{
        console.log("Saving")
        setIsSaving(true)
        await saveButton();
        setIsSaving(false)
        setFadeNotification({ message: "Post saved successfully", time: (new Date()).getTime() })
    }
    return (
        <nav className='border-bottom shadow-sm py-2 bg-white'>
            <div className="hstack justify-content-between head-nav container">
                <Link to="/">
                    <img src="/fnmi-logo.png" className="fnmi-logo" alt="Fnmilove Generic Logo" />
                    <img src="/logo.png" className="academy-logo" alt="Fnmilove Academy Logo" />
                    {/* {" "} <h1 className="radley-font fs-4 text-dark d-inline border-start border-2 border-light ps-1 py-2 align-middle">Fnmilove Academy</h1> */}
                </Link>
                {pathname.includes("/edit") || <button onClick={saving} disabled={isSaving} className="btn btn-dark rounded-0 ms-auto me-3 fw-bold">{isSaving ? <><Spinner animation="grow" size='sm' /> Saving</> : "Save"}</button>}
                <button onClick={publishButton} className="btn btn-primary rounded-0 fw-bold">Publish</button>
            </div>
        </nav>
    )
}

export default EditNav