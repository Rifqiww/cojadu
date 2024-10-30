import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }

        // setIsMenuOpen(false);
    };

    return (
        <nav className="bg-black text-white p-4 fixed w-full top-0 z-20 shadow-lg">
            <div className="mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-3xl font-oswald cursor-default">
                    Cojadu
                </h1>

                {/* Hamburger Button */}
                <button className="text-white md:hidden focus:outline-none" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMenuOpen ? (
                            <>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5L19 19" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19L19 5" />
                            </>
                        ) : (
                            <>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h12" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h12" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 18h12" />
                            </>
                        )}
                    </svg>
                </button>

                <div
                    className={`fixed top-0 right-0 h-full w-1/3 bg-black text-white transform transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:static md:flex md:translate-x-0 md:bg-transparent md:w-auto`}
                >
                    {isMenuOpen && (
                        <div className="flex justify-end p-4">
                            <button
                                className="text-white focus:outline-none"
                                onClick={toggleMenu}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    )}

                    <ul className={`flex flex-col px-8 md:flex-row font-lato font-semibold ${isMenuOpen ? 'space-y-4 text-right' : 'md:space-x-6 text-left'}`}>
                        <li>
                            <a
                                href="#home"
                                className="relative text-[var(--main2-color)] hover:text-white transition duration-300 group"
                                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                            >
                                Beranda
                                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#info"
                                className="relative text-[var(--main2-color)] hover:text-white transition duration-300 group"
                                onClick={(e) => { e.preventDefault(); scrollToSection('info'); }}
                            >
                                Tentang Kami
                                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#rating"
                                className="relative text-[var(--main2-color)] hover:text-white transition duration-300 group"
                                onClick={(e) => { e.preventDefault(); scrollToSection('rating'); }}
                            >
                                Review
                                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Belajar"
                                className="relative text-[var(--main2-color)] hover:text-white transition duration-300 group"
                                onClick={(e) => { e.preventDefault(); scrollToSection('pembelajaran'); }}
                            >
                                Belajar
                                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
