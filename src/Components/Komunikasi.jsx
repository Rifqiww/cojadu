import React from 'react';
import '../App.css';

const Komunikasi = () => {
    return (
        <div className="flex items-center justify-center bg-[var(--secondary-color)] p-4"
                style={{
                    background: 'linear-gradient(to bottom, #3E3636, #705555, #B58D8D, #F5EDED)',
                }}>
            <div className="text-center mb-8">
                <div className="relative inline-block mb-8 cursor-default">
                    <h1 className="text-3xl sm:text-4xl font-bold font-jakarta text-[var(--main2-color)]">Kami terbuka untuk</h1>
                    <p className="text-xl sm:text-2xl italic font-dancing-script text-[var(--main2-color)]">berbicara bersama kalian</p>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-6 cursor-pointer justify-items-center mx-auto">
    <div className="flex flex-col items-center justify-center w-24 h-24 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-[var(--main-color)] rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
        <i className='bx bx-chat text-3xl sm:text-5xl lg:text-6xl'></i>
        <p className="mt-2 text-sm sm:text-lg lg:text-xl font-lato">Contact us</p>
    </div>
    <div className="flex flex-col items-center justify-center w-24 h-24 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-white rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
        <i className='bx bx-phone text-3xl sm:text-5xl lg:text-6xl'></i>
        <p className="mt-2 text-sm sm:text-lg lg:text-xl font-lato">Call us</p>
    </div>
    <div className="flex flex-col items-center justify-center w-24 h-24 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-[var(--main-color)] rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
        <i className='bx bx-video text-3xl sm:text-5xl lg:text-6xl'></i>
        <p className="mt-2 text-sm sm:text-lg lg:text-xl font-lato">Video call</p>
    </div>
</div>

            </div>
        </div>
    );
};

export default Komunikasi;