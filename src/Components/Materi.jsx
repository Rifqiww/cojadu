import React from "react";
import { Link } from "react-scroll";

const Materi = () => {
    return (
        <div id="materi" className="mx-auto py-10 px-4 bg-[var(--main2-color)]">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 mt-10">Dasar-dasar Sebelum Belajar Coding</h2>

            <div className="mt-8 cursor-default">
                <p className="text-black font-semibold font-jakarta text-center text-base md:text-lg px-4 py-6 bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,1)] max-w-8xl mx-auto">
                    Memahami dasar-dasar coding sangat penting karena memberikan pondasi yang kuat untuk konsep lanjutan dan membantu mengembangkan kemampuan pemecahan masalah yang efisien. Tanpa pemahaman ini, Anda mungkin akan mengalami kebingungan dan menghabiskan waktu berulang kali mempelajari ulang materi dasar.
                </p>
            </div>
            <div className="mt-8 cursor-default">
                <p className="text-white font-semibold font-jakarta text-center text-base md:text-lg px-4 py-6 bg-[var(--main-color)] rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(253,59,59,1)] max-w-8xl mx-auto">
                    Dengan pemahaman yang baik tentang variabel, tipe data, dan struktur kontrol, Anda dapat lebih mudah mengikuti alur program dan beradaptasi dengan bahasa pemrograman lain, karena prinsip dasar coding tetap sama meskipun sintaks berbeda.
                </p>
            </div>
            <div className="mt-8 cursor-default">
                <p className="text-black font-semibold font-jakarta text-center text-base md:text-lg px-4 py-6 bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,1)] max-w-8xl mx-auto">
                    Selain itu, dasar yang kuat juga meningkatkan kemandirian dalam belajar, memungkinkan Anda mencari solusi secara mandiri, memahami istilah teknis, serta menumbuhkan rasa percaya diri untuk bereksperimen dan menjelajahi aspek baru dalam dunia coding.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch mt-8">
                <div className="bg-blue-100 shadow-lg rounded-lg p-6 flex-1 hover:bg-blue-200 transition duration-300">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Memahami Konsep Dasar Pemrograman</h3>
                    <p className="text-gray-700">
                        Pelajari konsep dasar seperti variabel, tipe data, dan algoritma untuk memahami pondasi pemrograman.
                    </p>
                    <Link
                        to="materi-konsep"
                        smooth={true}
                        duration={500}
                        className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 mt-5 rounded hover:bg-blue-700 transition duration-300 cursor-pointer">
                        Pelajari
                    </Link>
                </div>

                <div className="bg-green-100 shadow-lg rounded-lg p-6 flex-1 hover:bg-green-200 transition duration-300">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Mengenal Logika dan Pemecahan Masalah</h3>
                    <p className="text-gray-700">
                        Kembangkan logika dan kemampuan berpikir analitis untuk memecahkan masalah dengan pendekatan yang efisien.
                    </p>
                    <Link
                        to="materi-logika"
                        smooth={true}
                        duration={500}
                        className="inline-block bg-green-600 text-white font-semibold py-2 px-4 mt-5 rounded hover:bg-green-700 transition duration-300 cursor-pointer">
                        Pelajari
                    </Link>
                </div>

                <div className="bg-purple-100 shadow-lg rounded-lg p-6 flex-1 hover:bg-purple-200 transition duration-300">
                    <h3 className="text-xl font-semibold text-purple-900 mb-4">Pengantar Algoritma dan Struktur Data</h3>
                    <p className="text-gray-700">
                        Pelajari algoritma dan struktur data dasar seperti array dan list untuk menyusun kode yang terstruktur.
                    </p>
                    <Link
                        to="materi-algoritma"
                        smooth={true}
                        duration={500}
                        className="inline-block bg-purple-600 text-white font-semibold py-2 px-4 mt-5 rounded hover:bg-purple-700 transition duration-300 cursor-pointer">
                        Pelajari
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Materi;
