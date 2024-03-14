import React from 'react'
import { Form } from 'react-bootstrap'

const ChangePasswordPage = () => {
    return (
        <div className='py-5 px-2 px-sm-5'>
            <h1 className="text-center">Change Password</h1>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Old Password</Form.Label>
                    <Form.Control type="password" placeholder="Old Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="New Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

            </Form>
            <button className="mt-2 btn btn-primary">
                Change Password
            </button>
        </div>
    )
}

export default ChangePasswordPage
