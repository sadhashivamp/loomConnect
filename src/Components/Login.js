// LoginPage.jsx
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Nav } from 'react-bootstrap';
import Main from "../Assets/Main.gif";
import Reg from "../Assets/Reg.png";
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';


const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        phoneNumber: '',
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit login data to backend API
        const {username, phoneNumber} = formData;
        axios.post("http://localhost:3002/login", {
            username, phoneNumber
        }).then(result => {

            console.log("result", result)
            if (result.data == "Success") {
                navigate('/')
            }
        }).catch(err => console.log(err))
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
                        <div className="registration-box p-4 rounded  border">
                            <h1 className="mb-4"  style={{color: '#0d6efd'}}>Login</h1>
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
                                <Button variant="primary" type="submit" className="w-100">
                                    Login
                                </Button>
                            </Form>
                            <Nav className="mt-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Nav.Item style={{fontFamily: "initial"}}>
                                <Link to="/" style={{ textDecoration: 'none' , fontFamily: "initial" }}>Forgot Password</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/owner-registration" style={{ textDecoration: 'none' , fontFamily: "initial" }}>Register</Link>
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
