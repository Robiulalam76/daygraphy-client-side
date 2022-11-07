import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { user, signupEmailAndPassword, signupWithGoogle,
        signupWithFacebook, signupWithGithub } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
    }

    const handleSignupWithGoogle = () => {

    }
    return (
        <div>
            <div className="bg-blue-50 min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleSubmit} className="bg-cyan-200 px-6 py-4 rounded shadow-lg text-black w-full">
                        <h1 className="mb-8 text-3xl font-bold text-center">Login</h1>
                        <input
                            type="email"
                            className="block bg-white border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" required />

                        <input
                            type="password"
                            className="block bg-white border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" required />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded text-white font-bold bg-green-600 hover:bg-green-800 focus:outline-none my-1"
                        >Create Account</button>
                        <div>
                            <h1 className='text-center py-3'>Or Sign Up with</h1>
                            <div className='flex justify-center'>
                                <img onClick={() => handleSignupWithGoogle()} className='w-8 mr-5 bg-gray-200 rounded-full p-1' src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="" />
                                <img className='w-8 mr-5 bg-gray-200 rounded-full p-1' src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" />
                                <img className='w-8 bg-gray-200 rounded-full p-1' src="https://cdn-icons-png.flaticon.com/512/2504/2504799.png" alt="" />
                            </div>
                        </div>
                        <p className='text-center '>You don't have an account? <Link to='/signup' className='text-orange-600 font-bold hover:text-blue-600'>Signup</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;