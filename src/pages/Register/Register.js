import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from './register.png'
import icon from './Google.png'
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';
import { OAuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { setJwtTokenApi } from '../../jwtTokenApi/JwtTokenApi';


const Register = () => {
    useTitle('Register')
    const [error, setError] = useState('')
    const [terms, setTerms] = useState(false)

    const { providerLogin, createUser, updateUserInfo, setLoading } = useContext(OAuthContext);

    /* navigate user */
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const googleProvider = new GoogleAuthProvider();

    /* social media login */
    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                // setJwtTokenApi(user)
                toast.success('Wooho!!! Registration Successful', { duration: 5000 })
                navigate(from, { replace: true })/* navigate user */
            })
            .catch(error => console.error(error))
    }

    /* handle form submit */
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const form = event.target

        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value

        if (!/(?=.*[a-z])/.test(password)) {
            setError('Please provide at least 1 lowercase letter')
            return
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please provide at least 1 uppercase letter')
            return
        }
        if (!/(?=.*[0-9])/.test(password)) {
            setError('Please provide at least 1 number')
            return
        }
        if (!/(?=.*[!@#$&*%])/.test(password)) {
            setError('Please provide at least 1 special charecter')
            return
        }
        if (!/.{8}/.test(password)) {
            setError('Password length must be at least 8 charecters')
            return
        }


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset()
                handleUpdateUserInfo(name, photoURL)
                // setJwtTokenApi(user)
                navigate(from, { replace: true })/* navigate user */
                toast.success('Wooho!!! Registration Successful', { duration: 5000 })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    /* update user info */
    const handleUpdateUserInfo = (name, photoURL) => {
        const info = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserInfo(info)
            .then(() => { })
            .catch(error => console.error(error))
    }

    /* handle terms and conditions */
    const handleTerms = (event) => {
        setTerms(event.target.checked)
    }

    return (
        <div className="hero mb-5">
            <div className="hero-content w-full flex-col md:flex-row">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleFormSubmit} className="card-body">
                        <h1 className="text-3xl font-bold text-center mb-3">Register Now</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your name"
                                name='name'
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="provide your photo url"
                                name='photoURL'
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                name='email'
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name='password' placeholder="password" className="input input-bordered" required />

                        </div>

                        {/*------------------- 
                        display error message 
                        ----------------------*/}
                        <div className='mt-3 text-red-700'>
                            {error}
                        </div>
                        {/* -------------------- */}

                        <div className='form-control'>
                            <div className='flex'>
                                <input onClick={handleTerms} type="checkbox" className="checkbox" />
                                <p className='ml-2'>Accept our <Link to='/terms' className='text-blue-700'>terms and conditions</Link></p>
                            </div>
                        </div>

                        <div className="form-control mt-3 mb-3">
                            <button type='submit' className="btn btn-primary" disabled={!terms}>Register</button>
                        </div>
                        <div>
                            <p>Already have an account? Please <Link to='/login' className='text-blue-600'>Login</Link> here</p>
                        </div>
                    </form>

                    {/*------------------------- 
                    Register with social media  
                    ----------------------------*/}
                    <div className='text-center mb-3'>
                        <p>Or Register with</p>
                        <button onClick={handleGoogleSignin}>
                            <img className='ml-3' style={{ height: 45, width: 45 }} src={icon} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;