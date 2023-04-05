import React, {useState} from 'react';
import '../styles/login.css';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    pssword: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className='login__container d-flex justify-content-between'>
              <div className='login__img'>
                <img src={registerImg} alt='' />
              </div>
              <div className='login__form'>
                <div className='user'>
                  <img src={userIcon} alt='user-icon' />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <input
                      type='text'
                      placeholder='Username'
                      required
                      id='username'
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type='email'
                      placeholder='Email'
                      required
                      id='email'
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type='password'
                      placeholder='Password'
                      required
                      id='password'
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    className='btn secondary__btn auth__btn'
                    type='submit'
                    onClick={handleSubmit}
                  >
                    Sign up 
                  </Button>
                </Form>
                <p>
                  Already have a Vaction Spots account? <Link to='/login'>Log in.</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;