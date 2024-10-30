import React from 'react';
import 'tailwindcss/tailwind.css';
import PicOrang1 from '../Assets/PicOrang1.jpg';
import PicOrang2 from '../Assets/PicOrang2.jpg';
import PicOrang3 from '../Assets/PicOrang3.jpg';

const Rating = () => {
    return (
        <div id='rating' className="p-8 bg-[var(--main-text)]">
            <div className="flex flex-col items-center text-center mb-8 mt-10">
                <h1 className="text-4xl font-bold text-black font-jakarta">
                    Review dari para
                    <span className="relative inline-block ml-2">
                        <span className="relative z-10">Programmer</span>
                        <span className="absolute -bottom-1 left-0 w-full h-2 bg-[var(--main-color)] z-0 transform -rotate-1"></span>
                    </span>
                </h1>
                <p className="text-gray-600 max-w-4xl mt-4 text-lg font-lato ">
                    Kami juga sudah memiliki beberapa testinomi atau review dari para pengguna website kami, sudah siap menjadi salah satunya? lihat semua review dari para programmer ahli yang bergabung dengan komunitas kami
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-default">
                {[
                    {
                        imgSrc: PicOrang1,
                        title: "Saya menjadi miliarder setelah belajar di website Cojadu dan berhasil menjadi programmer ahli"
                    },
                    {
                        imgSrc: PicOrang2,
                        title: "Berawal dari belajar disini sekarang saya mengajar orang lain"
                    },
                    {
                        imgSrc: PicOrang3,
                        title: "Saya menjadi Programmer Internasional setelah mengenal website ini"
                    }
                ].map((item, index) => (
                    <div key={index} className="bg-white hover:bg-[var(--main2-color)] rounded-lg shadow-md p-4 transition-colors duration-300">
                        <img alt={item.title} className="rounded-t-lg w-full h-64 object-cover" src={item.imgSrc} />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rating;