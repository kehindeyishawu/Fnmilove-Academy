import "./HeadNav.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from "react-router-dom";
import {HashLink} from "react-router-hash-link"
import Button from "react-bootstrap/esm/Button";

function HeadNav({ setShowModal, setStaticNotification, setFadeNotification, user, setUser }) {

    let handleLogout = async()=>{
        try {
            let req = await fetch("/api/auth/logout", {
                method: "POST"
            })
            if(!req.ok){
                throw new Error(await req.text())
            }
            setUser(null);
            setFadeNotification({ message: "Successfully logged out", time: (new Date()).toString() })
        } catch (error) {
            setStaticNotification({ message: error.message, time: (new Date()).toString() })
        }
    }

    return (
        <div className="head-nav">
            <Navbar collapseOnSelect expand="lg" className="bg-body-white border-bottom shadow-sm" data-bs-theme="light">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">
                        <img src="/fnmi-logo.png" className="fnmi-logo" alt="Fnmilove Generic Logo" />
                        <img src="/logo.png" className="academy-logo" alt="Fnmilove Academy Logo" />
                        {" "} <h1 className="radley-font fs-4 text-dark d-inline border-start border-2 border-light ps-1 py-2 align-middle">Fnmilove Academy</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto fw-bold text-center">
                            <Nav.Link eventKey="1" as={NavLink} to="/" className="">Home</Nav.Link>
                            <Nav.Link eventKey="2" as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link eventKey="3" as={NavLink} to="/courses">Courses</Nav.Link>
                            <Nav.Link eventKey="4" as={NavLink} to="/blog">Blog</Nav.Link>
                            <Nav.Link eventKey="5" as={HashLink} to="/#FAQs">FAQs</Nav.Link>
                            <Nav.Link eventKey="6" onClick={()=> setShowModal(true)}>Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavLink eventKey="7" to="/registration-form" className="btn btn-primary rounded-0 fw-bold px-4">Enroll</NavLink>
                            {user && 
                                <NavDropdown eventKey="8" className="text-center" title="Admin" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/course/new">Create Course</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/article/new">
                                        Create Article
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/job/new">Create Job</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Button} onClick={handleLogout}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default HeadNav;