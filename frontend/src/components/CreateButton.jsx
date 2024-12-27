import { useState } from "react"
import { FaPlus } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./CreateButton.scss"

const CreateButton = ({postType = "others"}) => {
    let [dropdown, setDropdown] = useState(true)
    let buttonStyle = {position: "sticky", left: "100vw", bottom:"5vh", translate: "-2.5rem"}
    let toggleDropdown = ()=>{
        setDropdown(!dropdown)
    }

    return (
        <div id="create-button">
            {postType === "course" ? <Link to="/" className="btn btn-dark btn-lg create-post"><FaPlus /></Link> : <button onClick={toggleDropdown} className="btn btn-dark btn-lg create-post"><FaPlus /></button>}
            <div hidden={dropdown} class="list-group text-start rounded-0 mt-1 fw-bold">
                <Link href="#" class="list-group-item list-group-item-action">Article</Link>
                <Link href="#" class="list-group-item list-group-item-action">Job</Link>
            </div>
        </div>
    )
}

export default CreateButton