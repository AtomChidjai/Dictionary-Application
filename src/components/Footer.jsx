import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5 p-4">
            <Container>
                <Row>
                    <Col md="4">
                        <h5>About Us</h5>
                        <p>
                            I am a Comp Eng Student and this is my project for my web development learning ❤️. <br/>This is a dictionary website.
                        </p>
                    </Col>
                    <Col md="4">
                        <h5>Contact</h5>
                        <p>Email: example@gmail.com</p>
                        <p>Phone: 123 456 7890 </p>
                    </Col>
                    <Col md="4">
                        <h5>This is a Link</h5>
                        <p>
                            <a href="https://www.facebook.com" className="text-white me-2">
                                Facebook
                            </a>
                            <a href="https://www.twitter.com" className="text-white me-2">
                                Twitter
                            </a>
                            <a href="https://www.instagram.com" className="text-white">
                                Instagram
                            </a>
                        </p>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <p>&copy; {new Date().getFullYear()} Made by Atom</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;