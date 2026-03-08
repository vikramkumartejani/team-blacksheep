import React from 'react';
import BeginnerDrone from '../../assets/beginner-drone.jpg';
import IntermediateDrone from '../../assets/intermediate-drone.png';
import ProfessionalDrone from '../../assets/professional-drone.jpg';

interface Level {
    title: string;
    description: string;
    image: string;
    buttonText: string;
}

const levels: Level[] = [
    {
        title: "Beginner",
        description: "Eu nisi sint dolore tempor veniam proident exercitation proident dolore laborum aute. Ut sint voluptate ea nostrud. Incididunt laborum elit officia ipsum est Lorem non.",
        image: BeginnerDrone,
        buttonText: "Beginner drones"
    },
    {
        title: "Intermediate",
        description: "Eu nisi sint dolore tempor veniam proident exercitation proident dolore laborum aute. Ut sint voluptate ea nostrud. Incididunt laborum elit officia ipsum est Lorem non.",
        image: IntermediateDrone,
        buttonText: "Intermediate drones"
    },
    {
        title: "Professional",
        description: "Eu nisi sint dolore tempor veniam proident exercitation proident dolore laborum aute. Ut sint voluptate ea nostrud. Incididunt laborum elit officia ipsum est Lorem non.",
        image: ProfessionalDrone,
        buttonText: "Professional drones"
    }
];

const LevelSelection: React.FC = () => {
    return (
        <section className="bg-[#121215] py-10 md:py-20 xl:py-[140px] xl:pb-[172px] px-6">
            <div className="max-w-[1127px] mx-auto text-center">
                <h2 className="text-white text-[28px] sm:text-[34px] leading-[36px] sm:leading-[44px] font-semibold mb-10 sm:mb-[60px] lg:mb-[108px]">
                    We have something for every level
                </h2>

                <div className="flex flex-wrap justify-center gap-10 md:grid md:grid-cols-3 md:gap-5 lg:gap-10">
                    {levels.map((level, idx) => (
                        <div key={idx} className="w-[calc(50%-20px)] md:w-full max-w-[307px] flex flex-col items-center group">
                            <div className="w-[130px] h-[130px] bg-white rounded-full flex items-center justify-center mb-[30px] overflow-hidden shrink-0">
                                <img
                                    src={level.image}
                                    alt={level.title}
                                    className="bject-contain"
                                />
                            </div>

                            <h3 className="hidden md:block text-[#FFA234] text-[22px] leading-[29px] font-semibold tracking-[0.22px] mb-5">
                                {level.title}
                            </h3>

                            <div className="hidden md:flex flex-grow flex-col items-center">
                                <p className="text-white/50 text-[16px] leading-[24px] inter font-medium mb-[30px]">
                                    {level.description}
                                </p>
                            </div>

                            <div className="mt-auto">
                                <button className="bg-[#FFA234] pt-2.5 px-3 py-2 rounded-[10px] text-[14px] leading-[14px] font-normal transition duration-300 hover:bg-[#E1E1E6] text-white hover:text-[#1D1D1D] whitespace-nowrap">
                                    {level.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LevelSelection;
