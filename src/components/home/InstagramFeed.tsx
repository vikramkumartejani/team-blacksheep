import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import img1 from '../../assets/hero-1.png';
import img2 from '../../assets/hero-2.png';
import img3 from '../../assets/hero-3.png';
import img4 from '../../assets/hero-4.png';
import img5 from '../../assets/product-1.png';
import img6 from '../../assets/product-2.png';
import img7 from '../../assets/product-3.png';
import img8 from '../../assets/product-4.png';

const images: string[] = [img1, img2, img3, img4, img5, img6, img7, img8, img1, img2];

const InstagramFeed: React.FC = () => {
    return (
        <section className="py-10 md:py-20" style={{ background: "linear-gradient(0deg, rgba(0,0,0,1), rgba(0,0,0,1)),  #1D1D1D" }}>
            <div className="w-full max-w-[1360px] mx-auto">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={"auto"}
                    loop={true}
                    speed={3000}
                    allowTouchMove={false}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false
                    }}
                    className="feed-swiper"
                >
                    {images.map((src, idx) => (
                        <SwiperSlide key={idx} style={{ width: '202px' }}>
                            <div className="w-[202px] h-[202px] rounded-[10px] overflow-hidden bg-[#1A1A1A]">
                                <img src={src} alt="Instagram feed" className="w-full h-full object-cover hover:scale-110 transition-transform duration-[800ms] rounded cursor-pointer" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="mt-5 flex justify-center px-5">
                    <button className="bg-[#FFA234] hover:bg-[#E1E1E6] text-white hover:text-[#1D1D1D] transition-all duration-150 px-3 py-2 sm:px-4 sm:py-3.5 rounded-[10px] text-[14px] sm:text-[18px] leading-[16px] sm:leading-[22px] tracking-[-0.1px] font-normal">
                        Follow us on Instagram
                    </button>
                </div>
            </div>

            <style>{`
                .feed-swiper .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}</style>
        </section>
    );
};

export default InstagramFeed;
