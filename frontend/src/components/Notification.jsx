import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { timeAgo } from '../utils/timeAgo';

function Notification({fadeNotification, setFadeNotification, staticNotification, setStaticNotification}) {
    let closeFadeNotification = ()=>{
        setFadeNotification(false)
    }
    let closeStaticNotification = ()=>{
        setStaticNotification(false)
    }
    return (
        <ToastContainer
            className="position-fixed bottom-0 start-0 p-3"
        >
            <Toast show={fadeNotification} onClose={closeFadeNotification} delay={5000} autohide={true}>
                <Toast.Header>
                    <img src="/logo.png" width={30} className="rounded me-2" alt="" />
                    <strong className="me-auto">Fnmilove</strong>
                    <small>{fadeNotification && timeAgo(fadeNotification.time)}</small>
                </Toast.Header>
                <Toast.Body>{fadeNotification.message}</Toast.Body>
            </Toast>
            <Toast show={staticNotification} onClose={closeStaticNotification}>
                <Toast.Header>
                    <img src="/logo.png" width={30} className="rounded me-2" alt="" />
                    <strong className="me-auto">Fnmilove</strong>
                    <small>{staticNotification.time && timeAgo(staticNotification.time)}</small>
                </Toast.Header>
                <Toast.Body>{staticNotification.message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default Notification;