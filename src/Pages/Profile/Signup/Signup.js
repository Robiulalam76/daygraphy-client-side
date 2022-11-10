import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import Swal from 'sweetalert2'
import useTitle from '../../../Hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';

const Signup = () => {
    const { loading, signupEmailAndPassword, updateUserProfile, signupWithGoogle, signupWithGithub } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    useTitle('Signup')

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photoURL = event.target.photoURL.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (password.length < 6) {
            setPasswordError('at least 6 characters.');
            event.target.password.value = ''
            return;
        }

        signupEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                updateProfile(name, photoURL)
                const currentUser = {
                    email: user?.email
                }
                // console.log(currentUser);
                fetch('https://daygraphy-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data.token)
                        localStorage.setItem('user-token', data.token)
                        navigate(from, { replace: true });
                        Swal.fire(
                            'Welcome To You!',
                            'Your Account Create Seccessfully.',
                            'success'
                        )
                    })
            })
            .catch(error => console.error(error))
    }

    // ----- Update Name and Photo-----
    const updateProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL }
        updateUserProfile(profile)
            .then(result => {
                const user = result.user
                // console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    // -----Signup With Google-----
    const handleSignupWithGoogle = () => {
        signupWithGoogle(googleProvider)
            .then(result => {
                const user = result.user
                const currentUser = {
                    email: user?.email
                }
                // console.log(currentUser);
                fetch('https://daygraphy-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data.token)
                        localStorage.setItem('user-token', data.token)
                        navigate(from, { replace: true });
                        Swal.fire(
                            'Welcome To You!',
                            'Your Account Create Seccessfully.',
                            'success'
                        )
                    })
            })
            .catch(error => console.error(error))
    }

    // ----- Signup With Github -----
    const handleSignupWithGithub = () => {
        signupWithGithub(githubProvider)
            .then(result => {
                const user = result.user
                const currentUser = {
                    email: user?.email
                }
                // console.log(currentUser);
                fetch('https://daygraphy-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data.token)
                        localStorage.setItem('user-token', data.token)
                        navigate(from, { replace: true });
                        Swal.fire(
                            'Welcome To You!',
                            'Your Account Create Seccessfully.',
                            'success'
                        )
                    })
            })
            .catch(error => console.error(error))
    }


    return (
        <div className="bg-blue-50 py-8 flex flex-col">
            {
                loading === true && <Loading></Loading>
            }
            <div className="container py-4 rounded shadow-lg p-6  bg-cyan-200 max-w-sm mx-auto flex-1 flex flex-col items-center justify-center">
                <h1 className="mb-8 text-3xl text-black font-bold text-center">Signup</h1>
                <form onSubmit={handleSubmit} className=" text-black w-full">
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
                    <div>
                        {
                            passwordError && <p className='text-left font-semibold text-red-600'>{passwordError}</p>
                        }
                    </div>

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded text-white font-bold bg-green-600 hover:bg-green-800 focus:outline-none my-1"
                    >Create Account</button>
                </form>
                <div>
                    <h1 className='text-center py-3'>Or Sign Up with</h1>
                    <div className='flex justify-center'>
                        <button onClick={() => handleSignupWithGoogle()} className='bg-blue-600 px-4 rounded-md flex justify-between items-center text-white font-bold mr-4 py-2'>
                            <img className='w-5 mr-3' src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="" />
                            <span>Google</span>
                        </button>
                        <button onClick={() => handleSignupWithGithub()} className='bg-cyan-600 px-4 rounded-md flex justify-between items-center text-white font-bold py-2'>
                            <img className='w-6 mr-3' src="https://img.icons8.com/glyph-neue/512/github.png" alt="" />
                            <span>Github</span>
                        </button>
                    </div>
                </div>
                <p className='text-center '>You have Already account? <Link to='/login' className='text-orange-600 font-bold hover:text-blue-600'>Login</Link></p>

            </div>
        </div>
    );
};

export default Signup;