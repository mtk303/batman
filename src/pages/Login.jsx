import React from 'react'
import logo from '../assets/images/logo.png';
import { Form } from 'react-bootstrap';
const LoginPage = () => {
    return (
        <div className='mx-auto py-5 px-3 px-sm-5'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Phone..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password..." />
                </Form.Group>
            </Form>
            <div className="text-center">
                <button className="px-5 btn btn-primary">Login</button>
            </div>
        </div>
    )
}

export default LoginPage
