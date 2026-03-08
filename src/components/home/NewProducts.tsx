import React, { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Heart, Plus, Minus } from 'lucide-react';
import LeftSmallArrow from '../../assets/icons/left-small-arrow.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Assets
import p1 from '../../assets/product-1.png';
import p2 from '../../assets/product-2.png';
import p3 from '../../assets/product-3.png';
import p4 from '../../assets/product-4.png';
import p5 from '../../assets/product-5.png';
import p6 from '../../assets/product-6.png';
import p7 from '../../assets/product-7.png';
import p8 from '../../assets/product-8.png';

interface Product {
    id: number;
    name: string;
    price: string;
    status: string;
    image: string;
}

const initialProducts: Product[] = [
    {
        id: 1,
        name: "TBS Crossfire Nano Rx - FPV long range drone receiver",
        price: "29.95 $",
        status: "In-stock",
        image: p1
    },
    {
        id: 2,
        name: "Lucid 4in1 3-8S ESC, 8-layer high current density board",
        price: "59.65$",
        status: "In-stock",
        image: p2
    },
    {
        id: 3,
        name: "TBS Tango 2 Pro - New generation controller",
        price: "250$",
        status: "In-stock",
        image: p3
    },
    {
        id: 4,
        name: "TBS Lucid H7 FC - The futur of flight controller",
        price: "160$",
        status: "Pre-order: 1 month",
        image: p4
    },
    {
        id: 5,
        name: "TBS Source One V5 - 5 inch freestyle frame",
        price: "29.95 $",
        status: "In-stock",
        image: p5
    },
    {
        id: 6,
        name: "TBS Ethix S3 Watermelon Propellers",
        price: "4.95$",
        status: "In-stock",
        image: p6
    },
    {
        id: 7,
        name: "TBS Fusion Receiver Module",
        price: "120$",
        status: "In-stock",
        image: p7
    },
    {
        id: 8,
        name: "TBS Unify Pro32 Nano 5G8",
        price: "29.95$",
        status: "In-stock",
        image: p8
    }
];

const NewProducts: React.FC = () => {
    const [quantities, setQuantities] = useState<Record<number, number>>(
        initialProducts.reduce((acc, p) => ({ ...acc, [p.id]: 1 }), {})
    );
    const [wishlist, setWishlist] = useState<number[]>([]);

    const toggleWishlist = (id: number) => {
        setWishlist(prev =>
            prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
        );
    };

    const updateQuantity = (id: number, delta: number) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max(1, prev[id] + delta)
        }));
    };

    return (
        <section className="bg-white overflow-hidden px-5 pb-[38px]">
            <div className="max-w-[1244px] mx-auto">
                {/* Header - Aligned with Cards */}
                <div className="pt-[30px] pb-[33px] flex items-end justify-between">
                    <h2 className="text-[34px] leading-11 font-semibold text-[#1D1D1D]">New Products</h2>
                    <a href="#" className="hidden sm:flex items-center gap-2.5 text-[16px] leading-[21px] font-semibold text-[#1D1D1D]">
                        All new Products
                        <img src={LeftSmallArrow} alt="Arrow" />
                    </a>
                </div>

                {/* Slider - Buttons are outside the 1244px alignment */}
                <div className="relative mt-2.5">
                    {/* Navigation Buttons - Always Visible */}
                    <button className="prev-btn absolute -left-[74px] top-[35%] -translate-y-1/2 z-10 w-[57px] h-[57px] bg-[#29292980] lg:flex items-center justify-center rounded-[14px] transition-all hidden">
                        <svg width="17" height="35" viewBox="0 0 17 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.2499 2.25C14.2499 2.25 2.25002 13.2973 2.25 17.2501C2.24997 21.2029 14.25 32.25 14.25 32.25" stroke="#0C1123" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                    <button className="next-btn absolute -right-[74px] top-[35%] -translate-y-1/2 z-10 w-[57px] h-[57px] bg-[#29292980] lg:flex items-center justify-center rounded-[10px] transition-all hidden">
                        <svg width="17" height="35" viewBox="0 0 17 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.25009 2.25C2.25009 2.25 14.25 13.2973 14.25 17.2501C14.25 21.2029 2.25 32.25 2.25 32.25" stroke="#0C1123" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.prev-btn',
                            nextEl: '.next-btn',
                            disabledClass: 'swiper-button-disabled'
                        }}
                        pagination={{
                            clickable: true,
                            el: '.custom-product-pagination',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1380: { slidesPerView: 4 },
                        }}
                    >
                        {initialProducts.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="bg-[#E1E1E6] rounded-[20px] p-5 h-full flex flex-col group/card transition-all duration-300">
                                    <div className="bg-white max-h-[225px] rounded-[10px] relative aspect-square flex items-center justify-center mb-2.5 overflow-hidden">
                                        <button
                                            onClick={() => toggleWishlist(product.id)}
                                            className="absolute top-2 right-2 p-2.5 bg-[#6F6F7F80] rounded-[10px] z-10 transition-all group/heart"
                                        >
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M24.3282 4.99269C20.9761 2.93654 18.0505 3.76514 16.2929 5.08502C15.5723 5.6262 15.212 5.89679 15 5.89679C14.788 5.89679 14.4277 5.6262 13.7071 5.08502C11.9495 3.76514 9.02386 2.93654 5.6718 4.99269C1.27259 7.69117 0.277151 16.5936 10.4244 24.1042C12.3571 25.5347 13.3235 26.25 15 26.25C16.6765 26.25 17.6429 25.5347 19.5756 24.1042C29.7229 16.5936 28.7274 7.69117 24.3282 4.99269Z"
                                                    fill={wishlist.includes(product.id) ? "#FF0000" : "#6F6F7F"}
                                                    fillOpacity={wishlist.includes(product.id) ? "1" : "0.7"}
                                                    stroke={wishlist.includes(product.id) ? "#FF0000" : "#292929"}
                                                    strokeWidth="1.125"
                                                    strokeLinecap="round"
                                                    className="transition-colors duration-300"
                                                />
                                            </svg>
                                        </button>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain pointer-events-none"
                                        />
                                    </div>

                                    <div className="flex-1 flex flex-col">
                                        <h3 className="text-[18px] font-semibold text-[#1D1D1D] leading-[23px] mb-[31px] min-h-[46px] line-clamp-2">
                                            {product.name}
                                        </h3>

                                        <div className="flex items-center justify-between mb-5">
                                            <span className="text-[18px] leading-[23px] font-semibold text-[#1D1D1D]">{product.price}</span>
                                            <span className="text-[14px] font-medium text-[#1D1D1D] leading-5 tracking-[0.1px]">
                                                {product.status}
                                            </span>
                                        </div>

                                        <div className="mt-auto flex items-center gap-5">
                                            <div className="flex items-center">
                                                <button
                                                    onClick={() => updateQuantity(product.id, -1)}
                                                    className="sm:m-1 w-[33.37px] h-[33.37px] flex items-center justify-center rounded-lg border-[1.5px] border-[#1D1D1D] hover:bg-white transition-colors text-[#292930]"
                                                >
                                                    <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.75 0.75L0.75 0.75" stroke="#1D1D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                                <span className="w-9 text-center font-semibold text-[18px] leading-[23px] text-[#1D1D1D]">
                                                    {quantities[product.id]}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(product.id, 1)}
                                                    className="sm:m-1 w-[33.37px] h-[33.37px] flex items-center justify-center rounded-lg border-[1.5px] border-[#1D1D1D] bg-[#0000004D] hover:bg-white transition-colors text-[#292930]"
                                                >
                                                    <svg width="16" height="16" className='mt-0.5' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.75 0.75V14.75M14.75 7.75L0.75 7.75" stroke="#1D1D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <button className="flex-1 text-nowrap bg-[#6F6F7F] hover:bg-[#1D1D1D] px-4 text-white h-[43px] rounded-[10px] text-[16px] leading-[19px] font-semibold transition-all">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination */}
                    <div className="custom-product-pagination flex justify-center items-center gap-[15px] mt-[37px] swiper-pagination-clickable swiper-pagination-bullets"></div>
                </div>
            </div>

            <style>{`
                .custom-product-pagination .swiper-pagination-bullet {
                    width: 14px;
                    min-width: 14px;
                    height: 14px;
                    background: #6F6F6F !important;
                    opacity: 1;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin: 0 !important;
                }
                .custom-product-pagination .swiper-pagination-bullet-active {
                    background: #FFA234 !important;
                    opacity: 1;
                }
                /* Swiper Disabled Button Styling */
                .prev-btn.swiper-button-disabled,
                .next-btn.swiper-button-disabled {
                    opacity: 0.4;
                    cursor: not-allowed !important;
                    pointer-events: auto !important;
                }
            `}</style>
        </section>
    );
};

export default NewProducts;
