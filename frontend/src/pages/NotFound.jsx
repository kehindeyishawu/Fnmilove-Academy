import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div id='not-found' className='text-center mt-5'>
            <div className='mx-auto d-inline-block rounded border shadow p-4'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="13rem"
                    className='text-danger mb-3'
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                <h1 className='fs-2 fw-bold'>404 - Page Not Found</h1>
                <p className='fs-5'>Sorry, the page you are looking for does not exist.</p>
                <Link to="/" className='btn btn-outline-info mt-4 rounded-0'>Go to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;