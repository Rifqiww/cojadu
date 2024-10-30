import React from "react";
import { Link } from "react-scroll";

const Malgoritma = () => {
    return (
        <section id="materi-algoritma" className="bg-[var(--secondary-color)] text-left cursor-default p-6 sm:p-20 md:p-16 w-full mx-auto">
            <div className="flex flex-col text-gray-200 p-5 md:p-10">
                <h1 className="text-3xl md:text-4xl font-bold font-jakarta mb-4 text-[var(--main-color)]">
                    Pengantar Algoritma dan Struktur Data
                </h1>

                <h2 className="text-2xl md:text-3xl font-jakarta font-semibold mt-6 mb-4 text-[var(--main2-color)]">1. Apa itu Algoritma?</h2>

                <p className="mb-6 text-md md:text-xl leading-relaxed font-lato">
                    Algoritma adalah langkah-langkah logis yang dirancang untuk menyelesaikan suatu masalah atau menjalankan suatu tugas. Dalam pemrograman, algoritma membantu kita merancang solusi yang efisien untuk berbagai masalah, dengan langkah-langkah yang jelas dan berurutan.
                </p>

                <p className="text-md md:text-xl mb-4">Contoh sederhana algoritma untuk menambah dua angka:</p>
                <ol className="list-decimal list-inside ml-5 space-y-2 text-sm md:text-base">
                    <li>Terima dua angka sebagai input.</li>
                    <li>Tambahkan kedua angka tersebut.</li>
                    <li>Tampilkan hasil penjumlahan.</li>
                </ol>

                <p className="text-md md:text-xl mt-6">Algoritma yang baik harus memiliki karakteristik berikut:</p>
                <ul className="list-decimal list-inside ml-5 space-y-2 text-sm md:text-base mt-4">
                    <li><strong className="text-[var(--main-color)]">Efisien:</strong> Menggunakan waktu dan memori seminimal mungkin.</li>
                    <li><strong className="text-[var(--main-color)]">Jelas dan Terstruktur:</strong> Setiap langkah mudah diikuti dan tidak ambigu.</li>
                    <li><strong className="text-[var(--main-color)]">Aman dan Teruji:</strong> Memberikan hasil yang akurat untuk semua kasus.</li>
                </ul>
            </div>

            <div className="flex flex-col text-gray-200 p-5 md:p-10">
                <h2 className="text-xl md:text-3xl font-jakarta font-semibold mb-4 text-[var(--main2-color)]">2. Apa itu Struktur Data?</h2>

                <p className="mb-6 text-md md:text-xl leading-relaxed font-lato">
                    Struktur data adalah cara mengorganisasi, menyimpan, dan mengelola data dalam program agar dapat diakses dan dimodifikasi dengan cara yang efisien. Pemilihan struktur data yang tepat sangat penting untuk memaksimalkan performa dan efisiensi kode.
                </p>

                <p className="text-md md:text-xl">Beberapa struktur data dasar yang umum digunakan:</p>
                <ul className="list-disc list-inside ml-5 space-y-2 text-sm md:text-base mt-4">
                    <li><strong className="text-[var(--main-color)]">Array:</strong> Struktur data yang menyimpan elemen dalam urutan tertentu, memungkinkan akses data dengan indeks.</li>
                    <li><strong className="text-[var(--main-color)]">Linked List:</strong> Sekumpulan elemen yang terhubung secara berurutan, di mana setiap elemen menyimpan data dan alamat elemen berikutnya.</li>
                    <li><strong className="text-[var(--main-color)]">Stack:</strong> Struktur data berbasis LIFO (Last In, First Out), digunakan untuk kasus seperti pembatalan operasi atau panggilan fungsi rekursif.</li>
                    <li><strong className="text-[var(--main-color)]">Queue:</strong> Struktur data berbasis FIFO (First In, First Out), cocok untuk proses antrian atau penjadwalan.</li>
                    <li><strong className="text-[var(--main-color)]">Hash Table:</strong> Struktur yang menghubungkan kunci ke nilai tertentu, memungkinkan pencarian data yang sangat cepat.</li>
                    <li><strong className="text-[var(--main-color)]">Tree dan Graph</strong> Digunakan untuk representasi hubungan hierarkis atau jaringan antar node, berguna dalam algoritma pencarian atau representasi data kompleks.</li>
                </ul>
            </div>

            <div className='bg-[var(--main-color)] p-2 rounded-lg mt-10 text-center w-full'>
                <h1 className="text-2xl md:text-3xl text-white font-bold mb-4 mt-2 font-jakarta">Kesimpulan</h1>
                <div className="flex justify-center items-center">
                    <p className="mb-6 font-semibold text-white md:text-xl leading-relaxed w-4/5 text-center font-lato">
                        Pemahaman logika dan pemecahan masalah yang kuat memberikan pondasi bagi seorang programmer untuk menghadapi tantangan dalam pengembangan perangkat lunak. Dengan latihan yang berkelanjutan, keterampilan ini akan berkembang, memungkinkan Anda untuk menyusun solusi yang efisien dan dapat diandalkan.
                    </p>
                </div>
            </div>
            <Link
                to="materi"
                smooth={true}
                duration={500}
                className="inline-block text-center bg-[var(--main-color)] text-white font-bold py-2 px-4 mt-5 w-full rounded hover:bg-red-200 hover:text-black transition duration-300 cursor-pointer">
                Kembali
            </Link>
        </section>
    );
};

export default Malgoritma;