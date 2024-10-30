import React from "react";

const Information = () => {
    return (
        <section id="info" className="bg-[var(--secondary-color)] min-h-screen flex flex-col justify-center py-10 cursor-default">
            <div className="mx-auto px-6 sm:px-8 lg:px-12 flex flex-col">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl pt-6 mb-6 text-[var(--main2-color)] text-left font-oswald">
                    Apa itu Cojadu?
                </h2>
                <div className="flex flex-col items-start mb-6 w-full">
                    <p className="text-lg sm:text-2xl lg:text-3xl text-white mb-2 text-left w-full font-jakarta">
                        Cojadu adalah singkatan dari "Coding Aja Dulu". Website ini berisi beberapa pengenalan dasar mengenai dunia pemrograman.
                    </p>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl pt-6 mb-6 text-[var(--main2-color)] text-left font-oswald">
                    Apa tujuan dari website Cojadu?
                </h2>
                <div className="flex flex-col items-start mb-6 w-full">
                    <p className="text-base sm:text-lg lg:text-3xl text-white text-left w-full font-jakarta">
                        Melalui website ini, Anda akan diperkenalkan pada dasar-dasar pemrograman, algoritma dan struktur data, pemrograman berorientasi objek (OOP), serta pengembangan web (HTML, CSS, JavaScript).
                    </p>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl pt-10 mb-6 text-[var(--main2-color)] text-left font-oswald">
                    Mengapa memilih website Cojadu?
                </h2>
                <div className="flex flex-wrap gap-6 lg:gap-8 w-full font-lato">
                    <div className="flex-1 bg-[var(--main-text)] p-4 sm:p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-95 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)]">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--main-color)]">Accessible Learning Resources</h3>
                        <p className="text-[var(--secondary-color)] text-sm sm:text-base lg:text-lg mb-4">Situs web ini menyediakan materi yang mudah dipahami, memungkinkan pengguna dari berbagai latar belakang untuk belajar coding dengan fleksibilitas waktu.</p>
                    </div>
            
                    <div className="flex-1 bg-[var(--main-text)] p-4 sm:p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-95 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)]">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--main-color)]">Interactive Learning</h3>
                        <p className="text-[var(--secondary-color)] text-sm sm:text-base lg:text-lg mb-4">Dengan tantangan coding dan proyek praktis, pengguna dapat mengasah keterampilan mereka secara langsung, meningkatkan pemahaman konsep dengan cara yang menyenangkan.</p>
                    </div>
            
                    <div className="flex-1 bg-[var(--main-text)] p-4 sm:p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-95 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)]">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--main-color)]">Improve Skills</h3>
                        <p className="text-[var(--secondary-color)] text-sm sm:text-base lg:text-lg">Dengan pengetahuan coding yang diperoleh, pengguna dapat meningkatkan keterampilan mereka, membuka peluang untuk pengembangan diri dan kemampuan yang lebih baik dalam dunia digital yang terus berkembang.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Information;
