import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

const LoadingDialog = ({ showLoading, setShowLoading }) => {
    const handleClose = () => setShowLoading(false);

    return (
        <Modal show={showLoading} onHide={handleClose} centered backdrop="static">
            <Modal.Header closeButton={false}>
                <Modal.Title>{showLoading}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-center'>
                <Spinner animation="border" style={{padding: "3rem", fontSize: "2rem"}} role="status" variant='primary'>
                    <span className="visually-hidden">{showLoading}</span>
                </Spinner>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    )
}

export default LoadingDialog