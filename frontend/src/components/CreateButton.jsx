import { useState } from "react"
import { FaPlus } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./CreateButton.scss"

const CreateButton = ({postType = "others"}) => {
    let [dropdown, setDropdown] = useState(true)
    let toggleDropdown = ()=>{
        setDropdown(!dropdown)
    }

    return (
        <div id="create-button">
            {postType === "course" ? <Link title="Create new course" to="/course/new" className="btn btn-dark btn-lg create-post"><FaPlus /></Link> : <button title="Create new post" onClick={toggleDropdown} className="btn btn-dark btn-lg create-post"><FaPlus /></button>}
            <div hidden={dropdown} className="list-group text-start rounded-0 mt-1 fw-bold">
                <Link to="/article/new" className="list-group-item list-group-item-action">Article</Link>
                <Link to="/job/new" className="list-group-item list-group-item-action">Job</Link>
            </div>
        </div>
    )
}

export default CreateButton