import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from './login.png'
import icon from './Google.png'
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';
import { OAuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { setJwtTokenApi } from '../../jwtTokenApi/JwtTokenApi';

const Login = () => {
    useTitle('Login')
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const googleProvider = new GoogleAuthProvider();

    /*--------------
     navigate user 
     ---------------*/
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    /* set context */
    const { loginWithEmail, setLoading, providerLogin, passwordReset } = useContext(OAuthContext);

    /* form submit */
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password)

        loginWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                // setJwtTokenApi(user)
                navigate(from, { replace: true })/* navigate user */
                setError('')
                event.target.reset()
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })

    }

    /*---------------------
     social media login 
     ----------------------*/
    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setJwtTokenApi(user)
                navigate(from, { replace: true })/* navigate user */
            })
            .catch(error => console.error(error))
    }

    /*----------------------------
     send forgot password link 
     ----------------------------*/
    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setUserEmail(email)
    }
    const handleForgotPassword = () => {
        if (!userEmail) {
            toast.error('Please enter your email address')
            return
        }
        passwordReset(userEmail)
            .then(() => {
                toast.success('Please check your email to reset password')
            })
            .catch(error => console.error(error))
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <form onSubmit={handleFormSubmit} className="card-body">
                        <h1 className="text-center text-3xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleEmailBlur} type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        {/*------------------- 
                        display error message 
                        ----------------------*/}
                        <div className='mt-3 text-red-700'>
                            {error}
                        </div>
                        <div className="form-control mt-4">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='flex-col text-center mb-4'>
                        <div>
                            <p onClick={handleForgotPassword} className="label-text-alt link link-hover text-base mb-1">Forgot password?</p>
                        </div>
                        <div>
                            <p>New to our website? Please <Link to='/register' className='text-blue-600'>Register</Link> here</p>
                        </div>
                    </div>

                    <div className='text-center mb-3'>
                        <p className='mb-2 text-xl'>Or Login with</p>
                        <button onClick={handleGoogleSignin}>
                            <img style={{ height: 45, width: 45 }} src={icon} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;