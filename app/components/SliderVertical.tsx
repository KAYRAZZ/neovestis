import { register } from 'swiper/element/bundle';

register();
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import { useState } from 'react';


export default function SliderVertical() {
    const [isHoverSavoirPlus1, setIsHoverSavoirPlus1] = useState(false);

    return (
        <Swiper
            direction='vertical'
            loop={true}
            modules={[Pagination]}
            pagination={{
                clickable: true,
            }}
            style={{ height: "480px", width: "100%" }}
        >
            <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src="/assets/images/Groupe-de-masques-1.jpg" alt="image groupe" className="z-0" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                <span className="bg-[rgba(0,0,0,0.4)] absolute top-0 z-1 w-full h-full"></span>
                <div className="absolute text-white top-1/3 container1 left-1/2 transform -translate-x-1/2 z-2">
                    <h1 className="uppercase font-NeoSansPro-Bold text-4xl">Prévoyance professionnelle</h1>
                    <div className="block w-1/3 mt-4 flex flex-col justify-center gap-4">
                        <span>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque minus quas velit esse voluptas praesentium eos fuga. Assumenda possimus perspiciatis rem architecto delectus excepturi doloribus aperiam, numquam tempora quidem voluptatum?
                        </span>
                        <a href="" className={`border-2 border-white rounded-full w-6 h-6 ml-auto flex items-center justify-center ${isHoverSavoirPlus1 && 'w-auto text-sm px-2 text-center'}`} onMouseEnter={() => setIsHoverSavoirPlus1(true)} onMouseLeave={() => setIsHoverSavoirPlus1(false)}>
                            {isHoverSavoirPlus1 && <span className="pr-1">Savoir</span>}
                            <img src="/assets/icone/icone_plus.svg" alt="icone plus" width="12px" />
                        </a>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src="/assets/images/Groupe-de-masques-1.jpg" alt="image groupe" className="z-0" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                <span className="bg-[rgba(0,0,0,0.4)] absolute top-0 z-1 w-full h-full"></span>
                <div className="absolute text-white top-1/3 container1 left-1/2 transform -translate-x-1/2 z-2">
                    <h1 className="uppercase font-NeoSansPro-Bold text-4xl">Prévoyance professionnelle</h1>
                    <div className="block w-1/3 mt-4 flex flex-col justify-center gap-4">
                        <span>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque minus quas velit esse voluptas praesentium eos fuga. Assumenda possimus perspiciatis rem architecto delectus excepturi doloribus aperiam, numquam tempora quidem voluptatum?
                        </span>
                        <a href="" className={`border-2 border-white rounded-full w-6 h-6 ml-auto flex items-center justify-center ${isHoverSavoirPlus1 && 'w-auto text-sm px-2 text-center'}`} onMouseEnter={() => setIsHoverSavoirPlus1(true)} onMouseLeave={() => setIsHoverSavoirPlus1(false)}>
                            {isHoverSavoirPlus1 && <span className="pr-1">Savoir</span>}
                            <img src="/assets/icone/icone_plus.svg" alt="icone plus" width="12px" />
                        </a>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};