import { register } from 'swiper/element/bundle';

register();
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";


export default function SliderPartenaires() {

    return (
        <Swiper
            slidesPerView={4}
            navigation={true}
            loop={true}
            modules={[Navigation]}
            style={{ height: "100%" }}
        >
            <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className='flex items-center justify-center w-1/2 h-full'>
                    <img src="/assets/images/Groupe-18.jpg" alt="logo bpi france" style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                </div>
            </SwiperSlide>

            <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className='flex items-center justify-center w-1/2 h-full'>
                    <img src="/assets/images/Groupe-21.jpg" alt="logo AXA" style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                </div ></SwiperSlide>

            <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className='flex items-center justify-center w-1/2 h-full'>
                    <img src="/assets/images/Groupe-23.jpg" alt="logo FCN" style={{ height: "100%", width: "100%", objectFit: "contain" }}/>
                </div >
            </SwiperSlide>

            <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className='flex items-center justify-center w-1/2 h-full'>
                    <img src="/assets/images/Groupe-26.jpg" alt="logo AG2R Le Mondiale" style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                </div >
            </SwiperSlide>

            <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className='flex items-center justify-center w-1/2 h-full'>
                    <img src="/assets/images/Groupe-15.jpg" alt="logo CA Nord-Est" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};