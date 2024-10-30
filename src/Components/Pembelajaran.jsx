import React from 'react';

const Belajar = () => {
    const scrollToContent = () => {
        const contentSection = document.getElementById('materi');
        contentSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div id='pembelajaran' className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[var(--main-text)] to-[var(--main2-color)] text-black px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-jakarta text-center mb-6 animate-pulse cursor-default">
                Apa saja yang harus dipelajari sebelum memulai mengcoding?
            </h1>
            <button
                onClick={scrollToContent}
                className="mt-6 bg-white text-blue-800 px-10 py-3 rounded-full shadow-lg font-bold font-lato text-1xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105" >
                Pelajari Sekarang
            </button>
        </div>
    );
};

export default Belajar;

