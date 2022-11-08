import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import Swal from 'sweetalert2'

const Signup = () => {
    const { user, signupEmailAndPassword, updateUserProfile, signupWithGoogle,
        signupWithFacebook, signupWithGithub } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photoURL = event.target.photoURL.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        signupEmailAndPassword(email, password)
            .then(result => {
                const user = result.user
                updateProfile(name, photoURL)
                navigate('/login')
                // console.log(user);
            })
            .catch(error => console.error(error))
    }

    const updateProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL }
        updateUserProfile(profile)
    }

    const handleSignupWithGoogle = () => {
        signupWithGoogle(googleProvider)
            .then(result => {
                const user = result.user
                navigate('/')
                Swal.fire(
                    'Welcome!',
                    'Your Account Create Successfully',
                    'success'
                )
                // console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="bg-blue-50 min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleSubmit} className="bg-cyan-200 px-6 py-4 rounded shadow-lg text-black w-full">
                        <h1 className="mb-8 text-3xl font-bold text-center">Signup</h1>
                        <input
                            type="text"
                            className="block bg-white border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            placeholder="Full Name" required />
                        <input
                            type="text"
                            className="block bg-white border border-grey-light w-full p-3 rounded mb-4"
                            name="photoURL"
                            placeholder="Your Photo URL" required />
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
                        <p className='text-center '>You have Already account? <Link to='/login' className='text-orange-600 font-bold hover:text-blue-600'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;