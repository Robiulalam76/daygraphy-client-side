import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import Swal from 'sweetalert2'
import useTitle from '../../../Hooks/useTitle';

const Signup = () => {
    const { user, setLoading, signupEmailAndPassword, updateUserProfile, signupWithGoogle } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
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

        signupEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                navigate('/login')
                updateProfile(name, photoURL)
                console.log(user);
                Swal.fire(
                    'Welcome!',
                    'Your Account Create Successfully',
                    'success'
                )
            })
            .catch(error => console.error(error))

    }

    const updateProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL }
        updateUserProfile(profile)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => {
                console.error(error);
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
                navigate(from, { replace: true });
                Swal.fire(
                    'Welcome!',
                    'Your Account Create Successfully',
                    'success'
                )
                // console.log(user);
            })
            .catch(error => console.error(error))
            .finally(() => {
                setLoading(false)
            })
    }
    return (

        <div className="bg-blue-50 py-8 flex flex-col">
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
                        <button className='bg-cyan-600 px-4 rounded-md flex justify-between items-center text-white font-bold py-2'>
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