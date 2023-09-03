import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormInputs';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../redux/usersApiSlice';
import { setCredentials } from '../redux/authSlice';
import google from '../images/google.png'
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success('Login Success')
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const googleAuthLogin = () =>{
    window.open("http://localhost:5000/auth/google", "_self")
  }
  return (
    <FormContainer>
      <h1>Login</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button
          disabled={isLoading}
          type='submit'
          variant='primary'
          className='mt-3 login_btn'
        >
          Log In
        </Button>
          
            <p className='or'>OR</p>
        <button
          onClick={googleAuthLogin}
          className='google_btn'
        >
          <img className='googleimg' src={google} alt="google" />
          SignIn with Google
        </button>
      </Form>

      {isLoading && <Loader />}

      <Row className='py-3'>
        <Col>
          Don't have an account? <Link to='/register'>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Login;