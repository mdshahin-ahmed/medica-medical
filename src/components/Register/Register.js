
import { useState } from 'react';
import { Link ,useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../context/useAuth';


const Register = () => {
    const {createAcountWithGoogle, updateName, signInUsingGoogle, setIsLoading} = useAuth();
    const [name, setName] = useState('');
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

    const handleRegistation = e =>{
        e.preventDefault();
        handleGoogleSignUp();
    }    

    const handleGetName = e => {
        setName(e.target.value);
    }
    const handleGetEmail = e => {
        setEmail(e.target.value);
    }
    const handleGetPassword = e => {
        setPassword(e.target.value);
    }    

    const handleGoogleSignUp = () => {
        createAcountWithGoogle(email, password)
        .then((userCredential) => {
            updateName(name);            // Signed in 
            const user = userCredential.user;
            history.push(redirectUrl)
            // ...
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // ..
            setError(error.message);
        })
        .finally(()=>setIsLoading(false));
    }

    return (
        <div className='container mt-5 pt-5'>
            <div className="row">
                <div className="col-4 m-auto">
                    <h2>Register</h2>
                    <form onSubmit={handleRegistation}>
                        <input onBlur={handleGetName} className='form-control' type="text" placeholder='Your Name'/>
                        <br />
                        <input onBlur={handleGetEmail} className='form-control' type="email" placeholder='Your Email'/>
                        <br />
                        <input onBlur={handleGetPassword} className='form-control' type="password" placeholder='password' />
                        <br />
                        <p style={{color:'red'}}>{error}</p>
                        <input className='btn btn-primary d-flex m-auto' type="submit" value='Submit' />
                    </form>
                    <div className="text-center">
                    <p>Already have an account?  <Link to='/login'>Login</Link></p>
            
                    <button onClick={handleGoogleLogin} className="btn btn-primary">Sing In With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;