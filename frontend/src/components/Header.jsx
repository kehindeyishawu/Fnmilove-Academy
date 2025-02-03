import Headline from "./Headline"
import HeadNav from "./HeadNav"

const Header = ({setShowModal, setStaticNotification, setFadeNotification, user, setUser}) => {
    return (
        <header>
            <Headline />
            <HeadNav setShowModal={setShowModal} setStaticNotification={setStaticNotification} setFadeNotification={setFadeNotification} user={user} setUser={setUser} />
        </header>
    )
}

export default Header