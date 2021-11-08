import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import Header from '../Header/Header';

const Login = () => {
    const {loginWithEmailAndPassword, signInUsingGoogle, setIsLoading} = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirectUrl)
        })
        .finally(()=>setIsLoading(false));
    }

    const handleRegistation = e => {
        e.preventDefault();
        loginEmailPassword();
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
        // console.log(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
        // console.log(e.target.value);
    }

    const loginEmailPassword = () =>{
        loginWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            history.push(redirectUrl);
            // ...
          })
          .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            setError(error.message);
          })
          .finally(()=>setIsLoading(false));
    }

    return (
        <div>
            <Header></Header>
            <div className='container mt-5 pt-5'>
            <div className="row">
                <div className="col-4 m-auto">
                    <h2>Please Login</h2>
                    <form onSubmit={handleRegistation}>
                        <input onBlur={handleEmailChange} className='form-control' type="email" placeholder='Your Email'/>
                        <br />
                        <input onBlur={handlePassword} className='form-control' type="password" placeholder='password' />
                        <br />
                        <p style={{color:'red'}}>{error}</p>
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