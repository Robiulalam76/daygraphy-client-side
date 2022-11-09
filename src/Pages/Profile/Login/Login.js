import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import Swal from 'sweetalert2'
import useTitle from '../../../Hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const { user, logout, setLoading, loginWithEmailPassword, signupWithGoogle } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        loginWithEmailPassword(email, password)
        setLoading(true)
            .then((result) => {
                const user = result.user;
                const currentUser = {
                    email: user?.email
                }
                // console.log(currentUser);
                fetch('http://localhost:5000/jwt', {
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
                            'Your Account Login Seccessfully.',
                            'success'
                        )
                    })

            })
            .catch((error) => {
                // console.error(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const handleSignupWithGoogle = () => {
        signupWithGoogle(googleProvider)
        setLoading(true)
            .then(result => {
                const user = result.user
                const currentUser = {
                    email: user?.email
                }
                // console.log(currentUser);
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.token)
                        localStorage.setItem('user-token', data.token)
                        navigate(from, { replace: true });
                        Swal.fire(
                            'Welcome To You!',
                            'Your Account Login Seccessfully.',
                            'success'
                        )
                        setLoading(false)
                    })
            })
            .catch(error => console.error(error))
            .finally(() => {
                setLoading(false)
            })
    }
    return (

        <div className="bg-blue-50 py-8 flex flex-col">
            <div className="container bg-cyan-200 px-6 py-4 rounded shadow-lg max-w-sm mx-auto flex-1 flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit} className=" text-black w-full">
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
                    >LOGIN</button>
                </form>
                <div>
                    <h1 className='text-center py-3'>Or Sign Up with</h1>
                    <div className='flex justify-center'>
                        <button onClick={() => handleSignupWithGoogle()} className='bg-blue-600 px-4 rounded-md flex justify-between items-center text-white font-bold mr-4 py-2'>
                            <img className='w-5 mr-3' src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="" />
                            <span>Google</span>
                        </button>
                        <button className='bg-cyan-600 px-4 rounded-md flex justify-between items-center text-white font-bold py-2'>
                            <img className='w-6 mr-3' src="https://img.icons8.com/glyph-neue/512/github.png" alt="" />
                            <span>Github</span>
                        </button>
                    </div>
                </div>
                <p className='text-center '>You don't have an account? <Link to='/signup' className='text-orange-600 font-bold hover:text-blue-600'>Signup</Link></p>

            </div>
        </div>

    );
};

export default Login;