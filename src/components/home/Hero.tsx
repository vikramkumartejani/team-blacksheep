import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import hero1 from '../../assets/hero-1.png';
import hero2 from '../../assets/hero-2.png';
import hero3 from '../../assets/hero-3.png';
import hero4 from '../../assets/hero-4.png';

interface HeroData {
    title: string;
    image: string;
}

const heroData: HeroData[] = [
    {
        title: "Mojito pro wing",
        image: hero1,
    },
    {
        title: "Source Two racing",
        image: hero2,
    },
    {
        title: "GEPRC Cinebot25",
        image: hero3,
    },
    {
        title: "Chupito Wing",
        image: hero4,
    },
];

const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-[704px] sm:h-[750px] bg-[#1a1a1c] overflow-hidden group">
            <Swiper
                modules={[Pagination, Autoplay, Navigation, EffectFade]}
                effect="fade"
                speed={100}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    renderBullet: (index: number, className: string) => {
                        return `<span class="${className} custom-bullet">
                                    <span class="progress-bar"></span>
                                </span>`;
                    },
                }}
                loop={true}
                className="w-full h-full hero-swiper"
            >
                {heroData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full flex justify-center pt-20 sm:pt-[90px]">
                            {/* Background Image */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="absolute inset-0 w-full h-full object-center object-cover"
                            />

                            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 39.9%)" }} />

                            <div className="relative z-30 flex flex-col items-center text-center animate-in fade-in zoom-in duration-700 h-full justify-between pb-[108px] md:pb-0 md:justify-start">
                                <h2 className="text-white text-3xl md:text-[48px] leading-[62px] font-semibold pb-[15px] tracking-[-1px]">
                                    {slide.title}
                                </h2>
                                <button className="bg-[#FFA234] hover:bg-[#E1E1E6] text-white hover:text-[#1D1D1D] transition-all duration-150 px-4 py-3.5 rounded-[10px] text-[18px] leading-[22px] tracking-[-0.1px] font-normal">
                                    Get yours
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Hero;
