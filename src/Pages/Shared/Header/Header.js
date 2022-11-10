import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo/logo.jpg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    // console.log(user);

    const handleLogout = () => {
        logout()
    }
    return (
        <nav className="bg-gray-900 md:px-8 mb-6">
            <div className='flex justify-between items-center mx-4'>
                <div>
                    <Link to='/' className='block ml-0'>
                        <img className='w-20 md:hidden' src={logo} alt="brand logo" />
                    </Link>
                </div>
                <div onClick={() => setOpen(!open)} className="w-10 md:hidden ml-4 text-white">
                    {
                        open ? <span>
                            <svg className='w-10 mr-4 text-orange-600' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" ariaHidden="true" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg>
                        </span>
                            :
                            <span>
                                <svg className='w-6 ml-2' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
                            </span>
                    }
                </div>
            </div>
            <div className={`bg-gray-900 flex text-white z-50 flex-col items-start justify-start mt-none md:flex-row md:items-center h-full md:h-fit md:w-full md:flex md:justify-end absolute md:static duration-500 ease-in  
            ${open ? 'left-[0px] pl-8 pr-20 pt-5' : '-left-[300px] md:left-0'}`}>

                <Link to='/' className='text-blue-600 font-bold text-2xl md:grow' >
                    <img className='w-20 hidden md:block' src={logo} alt="brand logo" />
                </Link>

                <NavLink to='/profile'
                    onClick={() => setOpen(false)} className={({ isActive }) => isActive ?
                        'text-orange-600 mt-3 md:mt-0 md:hidden' : 'mt-3 md:mt-0 md:hidden'}>
                    <button className='btn btn-xs btn-primary py-0'>PROFILE</button>
                </NavLink>

                <NavLink to='/home'
                    onClick={() => setOpen(false)} className={({ isActive }) => isActive ?
                        'text-orange-600 mt-3 md:mt-0 mr-6' : 'mr-6 mt-3 md:mt-0'}>HOME</NavLink>
                <NavLink to='/services'
                    onClick={() => setOpen(false)} className={({ isActive }) => isActive ?
                        'text-orange-600 mt-3 md:mt-0 mr-6' : 'mr-6 mt-3 md:mt-0'} >SERVICES</NavLink>
                <NavLink to='/blogs'
                    onClick={() => setOpen(false)} className={({ isActive }) => isActive ?
                        'text-orange-600 mt-3 md:mt-0 mr-6' : 'mr-6 mt-3 md:mt-0'} >BLOGS</NavLink>

                {
                    user?.uid ? <>
                        <NavLink to='/my-review'
                            onClick={() => setOpen(false)} className={({ isActive }) => isActive ?
                                'text-orange-600 mt-3 md:mt-0 mr-6' : 'mr-6 mt-3 md:mt-0'} >MY REVIEWS</NavLink>

                        <NavLink to='/add-service'
                            onClick={() => setOpen(false)} className={({ isActive }) => isActive ?
                                'text-orange-600 mt-3 md:mt-0 mr-6' : 'mr-6 mt-3 md:mt-0'} >ADD SERVICE</NavLink>

                        <NavLink
                            onClick={() => setOpen(false)} className={({ isActive }) => isActive ?
                                'mt-3 md:mt-0 mr-6' : 'mr-6 mt-3 md:mt-0'} >
                            <button onClick={handleLogout} className='bg-blue-500 px-2 py-1 text-white rounded-md'>LOGOUT</button>
                        </NavLink>
                        <Link className='order-first md:order-none'>
                            <img className='w-10 rounded-full' src={user?.photoURL} alt="" />
                        </Link>
                    </>
                        :
                        <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active mt-3 md:mt-0' : 'mt-3 md:mt-0'} to='/login'>
                            <button className='btn btn-xs btn-secondary py-0'>LOGIN</button>
                        </NavLink>
                }
            </div>
        </nav>
    );
};

export default Header;