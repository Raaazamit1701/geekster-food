import React from 'react';

const Header = () => {
    return (
        <>
            <h1 className="text-red-800 font-bold text-4xl text-left ml-10">Family Wellness</h1>
            <h3 className="text-left ml-10 mt-6">MESSAGE THERAPY</h3>
            <div className="bg-gray-600">
                <ul className="flex justify-between m-10 my-5">
                    <li className=" bg-red-400 px-5 py-3 ">HOME</li>
                    <li className=" bg-red-400 px-5 py-3">ABOUT</li>
                    <li className=" bg-red-400 px-5 py-3">SERVICE</li>
                    <li className=" bg-red-400 px-5 py-3">FAQ</li>
                    <li className=" bg-red-400 px-5 py-3">CONTACT</li>
                </ul>
            </div>
        </>
    );
}

export default Header;
