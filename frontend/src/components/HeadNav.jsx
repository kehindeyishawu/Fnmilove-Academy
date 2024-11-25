import "./HeadNav.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import {HashLink} from "react-router-hash-link"

function HeadNav() {
    return (
        <div className="head-nav">
            <Navbar expand="lg" className="bg-body-white" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="/fnmi-logo.png" className="fnmi-logo" alt="Fnmilove Generic Logo" />
                        <img src="/logo.png" className="academy-logo" alt="Fnmilove Academy Logo" />
                        {" "} <h1 className="radley-font fs-4 text-dark d-inline border-start border-2 border-light ps-1 py-2 align-middle">Fnmilove Academy</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto fw-bold text-center">
                            <Nav.Link as={NavLink} to="/" className="">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/courses">Courses</Nav.Link>
                            <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={HashLink} to="/#FAQs">FAQs</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavLink to="/login" className="btn btn-primary rounded-0 fw-bold px-4">Join Us</NavLink>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default HeadNav;