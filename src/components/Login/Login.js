import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import Header from '../Header/Header';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <Header></Header>
            <div className='container mt-5 pt-5'>
            <div className="row">
                <div className="col-4 m-auto">
                    <h2>Please Login</h2>
                    <form>
                        <input className='form-control' type="email" placeholder='Your Email'/>
                        <br />
                        <input className='form-control' type="password" placeholder='password' />
                        <br />
                        <input className='btn btn-primary d-flex m-auto' type="submit" value='Submit' />
                    </form>
                    <div className="text-center">
                    <p>New user?  <Link to='/register'>Create Account</Link></p>
            
                    <button onClick={signInUsingGoogle} className="btn btn-primary">Sing In With Google</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;