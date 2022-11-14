import React from 'react'
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className='w-full flex items-center space-x-2 justify-center absolute bottom-0 z-50 bg-black px-4 py-4 text-light-500'>
            <img className='w-5 h-5' src={logo} alt="Logo" />
            <h3 className='text-center'>Made by <span className='text-white font-semibold'>Shivang Mishra &#40;20I4056&#41;</span></h3>
        </footer>
    )
}

export default Footer