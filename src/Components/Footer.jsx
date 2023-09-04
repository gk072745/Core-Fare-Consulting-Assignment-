import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';


function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>

                    <Figure className="text-center">
                        <blockquote className="blockquote">
                            <p>CoreFares Consulting Private Limited</p>
                        </blockquote>
                    </Figure>

                </Row>
                <Row>
                    <Col lg={4} md={4} sm={12}>
                        <h3>Contact Us</h3>
                        <p>
                            Address: 123 street, rajasthan, india<br />
                            Phone: +91 123 456-7890 <br />
                            Email: CoreFares@example.com
                        </p>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <h3>Quick Links</h3>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                        </ul>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <h3>Copyright &copy; {new Date().getFullYear()}</h3>
                        <p>All rights reserved.</p>
                    </Col>
                </Row>

            </Container>
        </footer>
    );
}

export default Footer;


