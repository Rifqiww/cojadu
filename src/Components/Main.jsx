import React from "react";
import Cover from "../Assets/pattern-bg.png";

const Main = () => {
    return (
        <div id="home" className="relative h-screen overflow-hidden pt-16 bg-[var(--secondary-color)]">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${Cover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.5)',
                }}>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <h1 className="text-5xl text-stroke font-jakarta font-bold">Bergabunglah dan tingkatkan kemampuanmu!</h1>
                <button className="mt-6 px-6 py-3 text-lg font-semibold text-black bg-[var(--main2-color)] rounded-full transition-transform duration-300 font-jakarta"
                        style={{
                            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                        }}
                        onClick={() => alert("Anda berhasil bergabung bersama komunitas Cojadu")}
                        onMouseDown={(e) => {
                            e.currentTarget.style.transform = 'scale(0.95)'; // Press effect
                            e.currentTarget.style.boxShadow = 'none'; // Remove shadow on press
                        }}
                        onMouseUp={(e) => {
                            e.currentTarget.style.transform = 'scale(1)'; // Reset size on release
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.5)'; // White shadow on release
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.5)'; // White shadow on hover
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = 'none'; // Remove shadow on leave
                            e.currentTarget.style.transform = 'scale(1)'; // Reset size if mouse leaves
                        }}>
                    Gabung sekarang
                </button>
            </div>
        </div>
    );
}

export default Main;