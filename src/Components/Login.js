// LoginPage.jsx
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Nav } from 'react-bootstrap';
import Main from "../Assets/Main.gif";
import Reg from "../Assets/Reg.png";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit login data to backend API
        console.log(formData);
        // Reset form data
        setFormData({
            username: '',
            password: '',
        });
    };

    return (
        <div>
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
            <Container className="reg-container">
                <Row className="align-items-center justify-content-center">
                    
                    <Col md={6} className="mb-4 mb-md-0">
                        <div className="registration-box p-4 rounded bg-light border">
                            <h1 className="mb-4">Login</h1>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-2" controlId="username">
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="password">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100">
                                    Login
                                </Button>
                            </Form>
                            <Nav className="mt-3" style={{ justifyContent: 'center' }}>
                                <Nav.Item>
                                    <Nav.Link href="#">Forgot Password</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#">Register</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Col>
                    <Col md={6} className="text-center">
                        <img src={Reg} alt="Login Image" className="registration-image img-fluid" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginPage;
