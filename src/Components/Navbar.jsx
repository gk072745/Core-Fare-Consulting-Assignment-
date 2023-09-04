import { Figure } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavigationBar() {
    return (
        <>
            <Navbar key={"md"} expand={"md"} className="bg-body-tertiary mb-3">
                <Container fluid>

                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                < Figure style={{ marginBottom: "-10px" }} >
                                    <Figure.Image
                                        width={50}
                                        alt="logo"
                                        src="/logo.png"
                                        className="rounded-circle p-1"
                                    />

                                </Figure>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-start fs-5 fw-bold flex-grow-1 pe-23">
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#">Services</Nav.Link>
                                <Nav.Link href="#">About</Nav.Link>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />

                    <Navbar.Brand href="#">
                        < Figure style={{ marginBottom: "-10px" }} >
                            <Figure.Image
                                width={50}
                                alt="logo"
                                src="/logo.png"
                                className="rounded-circle p-1"
                            />

                        </Figure>
                    </Navbar.Brand>
                </Container >
            </Navbar >
        </>
    );
}

export default NavigationBar;
