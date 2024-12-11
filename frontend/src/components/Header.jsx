import Headline from "./Headline"
import HeadNav from "./HeadNav"

const Header = ({setShowModal}) => {
    return (
        <header>
            <Headline />
            <HeadNav setShowModal={setShowModal} />
        </header>
    )
}

export default Header