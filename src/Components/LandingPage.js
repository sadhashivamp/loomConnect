import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import landingImage from "../Assets/Landing.png";
import Main from "../Assets/Main.gif";
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="hero-section d-flex justify-content-center align-items-center vh-100">
            {/* Background Image with Blur */}
            <div className="background-image" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${Main})`,
                backgroundSize: 'cover',
                backgroundSize: '100vw 100vh',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                filter: 'blur(4px)',
                zIndex: -1,
            }}></div>

            {/* Content */}
            <Container className="text-center">
                <Row className="justify-content-center">
                    <Col style={{
                        display: "flex",
                        justifyContent: "center", // horizontally center the content
                        alignItems: "center", // vertically center the content
                        flexDirection: "column"
                    }}>
                        <h1 className="display-4 mb-4" style={{ fontFamily: 'Impact', color: '#59B2F4' }}>Welcome to Handlooms</h1>

                        <div
                            className="mb-4"
                            style={{
                                border: '2px solid #EDFFFF',
                                width: '350px',
                                height: '350px',
                                background: "#EDFFFF",
                                borderRadius: "50%",
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "center", // horizontally center the content
                                alignItems: "center", // vertically center the content
                                flexDirection: "column"
                            }}
                        >
                            <img
                                src={landingImage}
                                alt="Handloom"
                                className="handloom-image img-fluid highlight-image"
                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                        </div>
                         <Link to="/selection">
                            <Button variant="primary" size="lg" role="button">Explore Now</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default LandingPage;
