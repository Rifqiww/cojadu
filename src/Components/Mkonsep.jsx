import React from 'react';
import { Link } from 'react-scroll';

const Mkonsep = () => {
    return (
        <section id="materi-konsep" className="bg-[var(--secondary-color)] text-white p-6 sm:p-10 md:p-16 w-full mx-auto flex flex-col justify-center text-left cursor-default">
            <h1 className='text-5xl font-jakarta font-bold mt-10 text-[var(--main-color)]'>Konsep Dasar Pemrograman</h1>
            <p className='mb-10 mt-2 font-lato font-semibold text-lg'>Konsep dasar pemrograman mencakup prinsip-prinsip fundamental yang menjadi dasar bagi setiap bahasa pemrograman dan teknik pengembangan perangkat lunak</p>

            {/* Bagian Variabel */}
            <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold font-jakarta mb-4 text-[var(--main2-color)]">Variabel</h1>
                    <p className="mb-6 text-sm md:text-base leading-relaxed">
                        Variabel adalah tempat penyimpanan data dalam program yang dapat berubah. Variabel dapat digunakan untuk menyimpan informasi yang dibutuhkan oleh program. Setiap variabel memiliki nama dan tipe, yang menentukan jenis data yang dapat disimpannya. Misalnya:
                    </p>
                    <div className="space-y-4">
                        <div>
                            <h2 className="font-semibold mb-2">Deklarasi Variabel:</h2>
                            <ul className="ml-4 list-disc space-y-2 text-sm md:text-base">
                                <li>
                                    Di JavaScript: <code className="bg-gray-700 px-2 py-1 rounded">let nama = "Yanto";</code>
                                </li>
                                <li>
                                    Di Python: <code className="bg-gray-700 px-2 py-1 rounded">nama = "Yanto"</code>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bagian Tipe Data */}
                <div className="flex-1 mt-10 md:mt-0 md:ml-10">
                    <h1 className="text-2xl md:text-3xl font-bold font-jakarta mb-4 text-[var(--main2-color)]">Tipe Data</h1>
                    <p className="mb-6 text-sm md:text-base leading-relaxed">
                        Tipe data adalah kategori yang menentukan jenis data yang dapat disimpan dalam variabel. Tipe data yang umum digunakan dalam pemrograman antara lain:
                    </p>
                    <div className="space-y-4">
                        <div>
                            <ul className="list-disc list-inside space-y-4">
                                <li>
                                    <span className="font-semibold">Integer:</span> Angka bulat, contoh:
                                    <code className="bg-gray-700 px-2 py-1 rounded ml-2">5</code>,
                                    <code className="bg-gray-700 px-2 py-1 rounded ml-2">-10</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Float:</span> Angka desimal, contoh:
                                    <code className="bg-gray-700 px-2 py-1 rounded ml-2">3.14</code>,
                                    <code className="bg-gray-700 px-2 py-1 rounded ml-2">-0.5</code>
                                </li>
                                <li>
                                    <span className="font-semibold">String:</span> Urutan karakter, contoh:
                                    <code className="bg-gray-700 px-2 py-1 rounded ml-2">"Halo Dunia!"</code>,
                                    <code className="bg-gray-700 px-2 py-1 rounded ml-2">"123"</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Boolean:</span> Nilai benar atau salah, contoh:
                                    <code className="bg-gray-700 px-2 py-1 rounded ml-2">true</code>,
                                    <code className="bg-gray-700 px-2 py-1 rounded ml-2">false</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Array:</span> Koleksi dari beberapa nilai, contoh:
                                    <code className="bg-gray-700 px-2 py-1 rounded ml-2">[1, 2, 3]</code>,
                                    <code className="bg-gray-700 px-2 py-1 rounded ml-2">["Apel", "Nanas"]</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Object:</span> Kumpulan pasangan key-value, contoh:
                                    <code className="bg-gray-700 px-2 py-1 rounded ml-2">{`{name: "Yanto", age: 30}`}</code>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bagian Algoritma */}
            <h1 className="text-2xl md:text-3xl font-bold font-jakarta mb-4 mt-10 text-[var(--main2-color)]">Algoritma</h1>
            <p className="mb-6 text-sm md:text-base leading-relaxed">
                Algoritma adalah urutan langkah-langkah logis yang diambil untuk menyelesaikan suatu masalah. Algoritma membantu programmer merancang solusi sebelum menulis kode. Contoh sederhana dari algoritma:
            </p>

            <div className="space-y-4">
                <div>
                    <ul className="list-inside">
                        <li className="font-semibold">Algoritma untuk Menjumlahkan Dua Angka:</li>
                        <ol className="list-decimal list-inside ml-6 mt-2 space-y-2">
                            <li>Ambil dua angka sebagai input</li>
                            <li>Tambahkan kedua angka tersebut</li>
                            <li>Tampilkan hasil penjumlahan</li>
                        </ol>
                    </ul>
                </div>
            </div>
            <div className='bg-[var(--main-color)] p-2 rounded-lg mt-10 text-center w-full'>
                <h1 className="text-2xl md:text-3xl font-bold mb-4 mt-2 font-jakarta">Mengapa konsep tersebut penting?</h1>
                <div className="flex justify-center items-center">
                    <p className="mb-6 font-semibold md:text-xl leading-relaxed w-4/5 text-center font-lato">
                        Konsep ini penting karena memahami konsep dasar seperti variabel, tipe data, dan algoritma adalah kunci untuk menjadi seorang programmer yang efektif. Dengan dasar yang kuat, Anda akan lebih mudah beradaptasi dengan berbagai bahasa pemrograman dan dapat menyelesaikan masalah secara efisien. Selain itu, pemahaman ini juga membantu dalam menulis kode yang bersih dan terstruktur.
                    </p>
                </div>
            </div>
            <Link
                to="materi" 
                smooth={true}
                duration={500}
                className="inline-block text-center bg-[var(--main-color)] text-white font-bold py-2 px-4 mt-5 rounded hover:bg-red-200 hover:text-black transition duration-300 cursor-pointer">
                Kembali
            </Link>

        </section>
    );
};

export default Mkonsep;
