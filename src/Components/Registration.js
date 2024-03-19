import React, { useState } from 'react';
import Reg from "../Assets/Reg.png";
import Main from "../Assets/Main.gif";
import { Container, Form, Button, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        phoneNumber: '',
        password: '',
        role: 'owner' // Default role
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit registration data to backend API
        console.log(formData);
        // Reset form data
        setFormData({
            username: '',
            phoneNumber: '',
            password: '',
            role: 'owner' // Reset role to default
        });
    };

    return (
        <div >
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
            <Container className="reg-container" >
                <Row className="align-items-center justify-content-center">
                    <Col md={6} className=" mb-4 mb-md-0">
                        <div className="registration-box p-4 rounded bg-light border">
                            <h1 className="mb-4">Registration</h1>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-2 mb-md-4" controlId="username">
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-2 mb-md-4" controlId="phoneNumber">
                                    <Form.Control
                                        type="tel"
                                        placeholder="Phone Number"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-2 mb-md-4" controlId="password">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-2 mb-md-4" controlId="role">
                                    <Form.Select
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                    >
                                        <option value="owner">Register as Owner</option>
                                        <option value="worker">Register as Worker</option>
                                    </Form.Select>
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100">
                                    Sign Up
                                </Button>
                            </Form>
                            <Nav  style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Nav.Item>
                                    <Link to="/forgot-password" style={{textDecoration: 'none'}}>Forgot Password</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/login" style={{textDecoration: 'none'}}>Login</Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Col>
                    <Col md={6} className="text-center">
                        <img src={Reg} alt="Registration Image" className="registration-image img-fluid" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RegistrationPage;
