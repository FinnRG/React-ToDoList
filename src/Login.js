import { Alert, Button, Col, Form, Row } from 'react-bootstrap';

const Login = (props) => {

    const handleSubmit = (event) => {
        if (event.target.signup.checked) {
            props.signupCallback(event);
        } else {
            props.loginCallback(event);
        }
    }

    return (
        <Form onSubmit={(event) => handleSubmit(event)} >
            {props.failed && <Alert variant='danger' className='mt-3'>Die Eingabedaten sind nicht korrekt!</Alert>}
            <Row className='mt-3 mb-3'>
                <Col>
                    <Form.Control type='text' name='name' placeholder='Enter name' />
                </Col>
                <Col>
                    <Form.Control type='password' name='password' placeholder='Enter password' />
                </Col>
                <Col xs={2} className='d-flex align-items-center'>
                    <Form.Check type='checkbox' name='signup' label='Sign Up' />
                </Col>
                <Col>
                    <Button type='submit' variant='primary'>Login!</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Login;
