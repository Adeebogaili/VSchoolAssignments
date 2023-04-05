import React, { useState } from 'react';
import '../styles/login.css';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    pssword: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className='login__container d-flex justify-content-between'>
              <div className='login__img'>
                <img src={loginImg} alt='' />
              </div>
              <div className='login__form'>
                <div className='user'>
                  <img src={userIcon} alt='user-icon' />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleSubmit}>
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
                    Log in
                  </Button>
                </Form>
                <p>
                  Don't have a Vaction Spots account yet? <br/> No worries.<Link to='/register'>joining</Link> is easy.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;