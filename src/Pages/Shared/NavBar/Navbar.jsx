import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="flex justify-between navbar md:px-5 bg-base-300 h-20">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div tabIndex={0} className='md:space-x-8 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-28'>
                        <Link to='/'>Home</Link>
                        <Link to='/allToys'>All Toys</Link>
                        <Link to='/myToys'>My Toys</Link>
                        <Link to='/addToys'>Add A Toys</Link>
                        <Link to='/blog'>Blog</Link>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img className='hidden md:block md:w-28 -ml-5 md:-mr-5' src="https://i.ibb.co/HhcwTD4/logo.png" alt="logo" border="0" />
                    <p className='md:text-3xl text-lg font-bold'>Animagic Action Figure</p>
                </div>
            </div>
                <div className='md:space-x-8 font-bold hidden md:flex'>
                    <Link to='/'>Home</Link>
                    <Link to='/allToys'>All Toys</Link>
                    <Link to='/myToys'>My Toys</Link>
                    <Link to='/addToys'>Add A Toys</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
            <div className="">
                <Link to='/login'><button className='btn font-bold rounded-md'>Login</button></Link>
            </div>
        </div>
    );
};

export default NavBar;