"use client";
import Link from 'next/link';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";


export default function SliderAutresObjectifs() {
    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);
    const [isHovering4, setIsHovering4] = useState(false);
    const [isHovering5, setIsHovering5] = useState(false);
    const [isHovering6, setIsHovering6] = useState(false);

    return (
        <Swiper
            slidesPerView={3}
            navigation={true}
            loop={true}
            modules={[Navigation]}
            style={{ height: "100%" }}
        >
            <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                <Link href={"/constituerPatrimoine"} className="relative flex justify-center items-center" onMouseEnter={() => setIsHovering1(true)} onMouseLeave={() => setIsHovering1(false)}>
                    <img src="/assets/icone/icone_arc.svg" alt="image neovestis" width="300px" className={`absolute transition-opacity duration-300 ${isHovering1 ? 'opacity-100' : 'opacity-0'}`} />
                    <img src="/assets/images/Groupe-2.jpg" alt="image neovestis" width="300px" className={`transition-opacity duration-300 ${isHovering1 ? 'opacity-0' : 'opacity-100'}`} />
                    {!isHovering1 && <span className="text-white uppercase text-center absolute h-full w-full flex justify-center items-center bg-[rgba(75,85,99,0.5)]">Constituer et valoriser <br /> votre patrimoine</span>}
                </Link>
            </SwiperSlide>

            <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                <Link href={""} className="relative flex justify-center items-center" onMouseEnter={() => setIsHovering2(true)} onMouseLeave={() => setIsHovering2(false)}>
                    <img src="/assets/icone/icone_main.svg" alt="image neovestis" width="300px" className={`absolute transition-opacity duration-300 ${isHovering2 ? 'opacity-100' : 'opacity-0'}`} />
                    <img src="/assets/images/Groupe-8.jpg" alt="image neovestis" width="300px" className={`transition-opacity duration-300 ${isHovering2 ? 'opacity-0' : 'opacity-100'}`} />
                    {!isHovering2 && <span className="text-white uppercase text-center absolute h-full w-full flex justify-center items-center bg-[rgba(75,85,99,0.5)]">Optimiser <br /> votre fiscalité</span>}
                </Link>
            </SwiperSlide>

            <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                <Link href={""} className="relative flex justify-center items-center" onMouseEnter={() => setIsHovering3(true)} onMouseLeave={() => setIsHovering3(false)}>
                    <img src="/assets/icone/icone_monde.svg" alt="image neovestis" width="300px" className={`absolute transition-opacity duration-300 ${isHovering3 ? 'opacity-100' : 'opacity-0'}`} />
                    <img src="/assets/images/Groupe-9.jpg" alt="image neovestis" width="300px" className={`transition-opacity duration-300 ${isHovering3 ? 'opacity-0' : 'opacity-100'}`} />
                    {!isHovering3 && <span className="text-white uppercase text-center absolute h-full w-full flex justify-center items-center bg-[rgba(75,85,99,0.5)]">Sécurisé <br /> votre activité</span>}
                </Link>
            </SwiperSlide>

            <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>


                <Link href={""} className="relative flex justify-center items-center" onMouseEnter={() => setIsHovering4(true)} onMouseLeave={() => setIsHovering4(false)}>
                    <img src="/assets/icone/icone_feuille.svg" alt="image neovestis" width="300px" className={`absolute transition-opacity duration-300 ${isHovering4 ? 'opacity-100' : 'opacity-0'}`} />
                    <img src="/assets/images/Groupe-10.jpg" alt="image neovestis" width="300px" className={`transition-opacity duration-300 ${isHovering4 ? 'opacity-0' : 'opacity-100'}`} />
                    {!isHovering4 && <span className="text-white uppercase text-center absolute h-full w-full flex justify-center items-center bg-[rgba(75,85,99,0.5)]">Protéger <br /> vos proches</span>}
                </Link>
            </SwiperSlide>

            <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                <Link href={""} className="relative flex justify-center items-center" onMouseEnter={() => setIsHovering5(true)} onMouseLeave={() => setIsHovering5(false)}>
                    <img src="/assets/icone/icone_cochon.svg" alt="image neovestis" width="300px" className={`absolute transition-opacity duration-300 ${isHovering5 ? 'opacity-100' : 'opacity-0'}`} />
                    <img src="/assets/images/Groupe-11.jpg" alt="image neovestis" width="300px" className={`transition-opacity duration-300 ${isHovering5 ? 'opacity-0' : 'opacity-100'}`} />
                    {!isHovering5 && <span className="text-white uppercase text-center absolute h-full w-full flex justify-center items-center bg-[rgba(75,85,99,0.5)]">Préparer <br /> votre retraite</span>}
                </Link>
            </SwiperSlide>

            <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                <Link href={""} className="relative flex justify-center items-center" onMouseEnter={() => setIsHovering6(true)} onMouseLeave={() => setIsHovering6(false)}>
                    <img src="/assets/icone/icone_camember.svg" alt="image neovestis" width="300px" className={`absolute transition-opacity duration-300 ${isHovering6 ? 'opacity-100' : 'opacity-0'}`} />
                    <img src="/assets/images/Groupe-12.jpg" alt="image neovestis" width="300px" className={`transition-opacity duration-300 ${isHovering6 ? 'opacity-0' : 'opacity-100'}`} />
                    {!isHovering6 && <span className="text-white uppercase text-center absolute h-full w-full flex justify-center items-center bg-[rgba(75,85,99,0.5)]">Préparer <br /> votre retraite</span>}
                </Link>
            </SwiperSlide>
        </Swiper >
    );
};