import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import Header from '../Header/Header';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirectUrl)
        })
    }
    const handleRegistation = e => {
        console.log(email, password);
        e.preventDefault();
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    // const processLogin = (email, password) => {

    // }
    return (
        <div>
            <Header></Header>
            <div className='container mt-5 pt-5'>
            <div className="row">
                <div className="col-4 m-auto">
                    <h2>Please Login</h2>
                    <form onBlur={handleRegistation}>
                        <input onChange={handleEmailChange} className='form-control' type="email" placeholder='Your Email'/>
                        <br />
                        <input onBlur={handlePassword} className='form-control' type="password" placeholder='password' />
                        <br />
                        <input className='btn btn-primary d-flex m-auto' type="submit" value='Submit' />
                    </form>
                    <div className="text-center">
                    <p>New user?  <Link to='/register'>Create Account</Link></p>
            
                    <button onClick={handleGoogleLogin} className="btn btn-primary">Sing In With Google</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;