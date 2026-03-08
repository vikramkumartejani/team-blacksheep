import React from 'react';

import p5 from '../../assets/frames.jpg'; 
import p4 from '../../assets/electronics.png'; 
import p7 from '../../assets/fpv-equipment.jpg';
import p3 from '../../assets/radio-controls.png';
import p6 from '../../assets/propellers.png'; 
import p2 from '../../assets/motors.png'; 
import p8 from '../../assets/hardware-tools.jpg'; 
import p1 from '../../assets/software.png'; 

interface EquipmentCategory {
    title: string;
    image: string;
}

const equipmentCategories: EquipmentCategory[] = [
    { title: "Frames", image: p5 },
    { title: "Electronics", image: p4 },
    { title: "FPV Equipment", image: p7 },
    { title: "Radio Controls", image: p3, },
    { title: "Propellers", image: p6 },
    { title: "Motors", image: p2 },
    { title: "Hardware, Tools", image: p8 },
    { title: "Software", image: p1 }
];

const BestEquipment: React.FC = () => {
    return (
        <section className="py-10 md:py-20 px-10">
            <div className="max-w-[1262px] mx-auto">
                <h2 className="text-[#1D1D1D] text-[28px] sm:text-[34px] leading-[36px] sm:leading-11 font-semibold text-center mb-10 md:mb-[88px]">
                    The best equipment
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-x-10 gap-y-10 md:gap-y-20">
                    {equipmentCategories.map((category, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-[5px] sm:gap-2.5 group cursor-pointer text-center w-full">
                            <div className="h-[110px] w-full md:h-[220px] flex flex-col items-center justify-center">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <h3 className='text-[#1D1D1D] group-hover:text-[#FFA234] text-[16px] md:text-[22px] leading-[21px] md:leading-[29px] font-semibold transition duration-300'>
                                {category.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestEquipment;
