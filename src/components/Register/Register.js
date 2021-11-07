import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    const handleRegistation = e =>{
        e.preventDefault();
    }
    return (
        <div className='container mt-5 pt-5'>
            <div className="row">
                <div className="col-4 m-auto">
                    <h2>Register</h2>
                    <form onSubmit={handleRegistation}>
                        <input className='form-control' type="email" placeholder='Your Email'/>
                        <br />
                        <input className='form-control' type="password" placeholder='password' />
                        <br />
                        <input className='form-control' type="password" placeholder='Re-password' />
                        <br />
                        <input className='btn btn-primary d-flex m-auto' type="submit" value='Submit' />
                    </form>
                    <div className="text-center">
                    <p>Already have an account?  <Link to='/login'>Login</Link></p>
            
                    <button className="btn btn-primary">Sing In With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;