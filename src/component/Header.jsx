import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <div className=' flex justify-around m-5'>
                <div className=' flex '>
                    <a className='' href='./'><img src='https://flowbite.com/docs/images/logo.svg'/></a>
                    <h2 className=' text-2xl font-serif px-2'>GeekFoods</h2>
                </div>
                <div>
                    <ul className=' flex  justify-around'>
                        <li className='px-2 cursor-pointer  font-semibold'> <Link to={"/"}>Home</Link></li>
                        <li className='px-2 cursor-pointer  font-semibold'><Link to={"/Qoute"}>Quotes</Link></li>
                        <li className='px-2 cursor-pointer  font-semibold'><Link to={"/restorent"}>Resturants</Link></li>
                        <li className='px-2 cursor-pointer  font-semibold'>Foods</li>
                        <li className='px-2 cursor-pointer  font-semibold'>Contact</li>
                    </ul>
                </div>
                <div>
                    <button className=' bg-blue-800 text-whir  font-semibold rounded-md text-white w-120 h-10  text-center'>Get Started</button>
                </div>
            </div>
        </>
    );
}

export default Header;
