import React from 'react';

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.3617 5.03833L20.3617 1.705C20.1234 1.65332 19.8767 1.65332 19.6384 1.705L4.63837 5.03833C4.26799 5.12067 3.93679 5.32692 3.6995 5.62299C3.46222 5.91906 3.33306 6.28724 3.33337 6.66667V23.3333C3.33337 27.7536 5.08932 31.9928 8.21493 35.1184C11.3405 38.2441 15.5798 40 20 40C24.4203 40 28.6595 38.2441 31.7852 35.1184C34.9108 31.9928 36.6667 27.7536 36.6667 23.3333V6.66667C36.667 6.28724 36.5379 5.91906 36.3006 5.62299C36.0633 5.32692 35.7321 5.12067 35.3617 5.03833ZM28.3334 28.3333C28.3334 28.7754 28.1578 29.1993 27.8452 29.5118C27.5327 29.8244 27.1087 30 26.6667 30H13.3334C12.8913 30 12.4674 29.8244 12.1549 29.5118C11.8423 29.1993 11.6667 28.7754 11.6667 28.3333V20C11.6667 19.558 11.8423 19.134 12.1549 18.8215C12.4674 18.5089 12.8913 18.3333 13.3334 18.3333H15V15C15 13.6739 15.5268 12.4021 16.4645 11.4645C17.4022 10.5268 18.674 10 20 10C21.3261 10 22.5979 10.5268 23.5356 11.4645C24.4733 12.4021 25 13.6739 25 15V18.3333H26.6667C27.1087 18.3333 27.5327 18.5089 27.8452 18.8215C28.1578 19.134 28.3334 19.558 28.3334 20V28.3333Z" fill="#FFA234" />
                <path d="M20 13.3333C19.558 13.3333 19.1341 13.5089 18.8215 13.8215C18.509 14.134 18.3334 14.558 18.3334 15V18.3333H21.6667V15C21.6667 14.558 21.4911 14.134 21.1786 13.8215C20.866 13.5089 20.4421 13.3333 20 13.3333Z" fill="#FFA234" />
            </svg>
        ),
        title: "Payment Security",
        description: "So many options, so much flexibility,\nit will blow your mind"
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_3248)">
                    <path d="M15 1.66667H0V5H15V1.66667Z" fill="#FFA234" />
                    <path d="M15 8.33334H3.33337V11.6667H15V8.33334Z" fill="#FFA234" />
                    <path d="M15 15H6.66663V18.3333H15V15Z" fill="#FFA234" />
                    <path d="M15 21.6667H10V25H15V21.6667Z" fill="#FFA234" />
                    <path d="M39.0784 18.5083L33.0967 15.5183L31.6167 9.59667C31.4317 8.85334 30.765 8.33334 30 8.33334H27.2917H18.3334C18.3334 8.33334 18.3334 29.085 18.3334 30C18.3334 30.915 18.4184 31.6667 18.4184 31.6667C18.8384 35.4067 21.9834 38.3333 25.8334 38.3333C29.6834 38.3333 32.8284 35.4067 33.2484 31.6667H38.3334C39.2534 31.6667 40 30.92 40 30V20C40 19.3683 39.6434 18.7917 39.0784 18.5083ZM25.8334 35C23.5367 35 21.6667 33.1317 21.6667 30.8333C21.6667 28.535 23.5367 26.6667 25.8334 26.6667C28.13 26.6667 30 28.535 30 30.8333C30 33.1317 28.13 35 25.8334 35ZM21.6667 16.6667V11.6667H28.9067L30 16.6667H21.6667Z" fill="#FFA234" />
                </g>
                <defs>
                    <clipPath id="clip0_1_3248">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        title: "Fast and Convenient Logistics",
        description: "Create unlimited info blocks with\nicons or images"
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_3253)">
                    <path d="M26.6667 13.3333H13.3334V26.6667H26.6667V13.3333Z" fill="#FFA234" />
                    <path d="M40 15V11.6667H35V8.33333C35 7.44928 34.6488 6.60143 34.0237 5.97631C33.3986 5.35119 32.5507 5 31.6667 5H28.3333V0H25V5H21.6667V0H18.3333V5H15V0H11.6667V5H8.33333C7.44928 5 6.60143 5.35119 5.97631 5.97631C5.35119 6.60143 5 7.44928 5 8.33333V11.6667H0V15H5V18.3333H0V21.6667H5V25H0V28.3333H5V31.6667C5 32.5507 5.35119 33.3986 5.97631 34.0237C6.60143 34.6488 7.44928 35 8.33333 35H11.6667V40H15V35H18.3333V40H21.6667V35H25V40H28.3333V35H31.6667C32.5507 35 33.3986 34.6488 34.0237 34.0237C34.6488 33.3986 35 32.5507 35 31.6667V28.3333H40V25H35V21.6667H40V18.3333H35V15H40ZM30 30H10V10H30V30Z" fill="#FFA234" />
                </g>
                <defs>
                    <clipPath id="clip0_1_3253">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        title: "Professional Service and\nProduct Warranty",
        description: "The best multi-purpose modules\nalready built in"
    }
];

const Features: React.FC = () => {
    return (
        <section className="bg-[#121215] py-10 lg:py-[100px] px-10" style={{ boxShadow: "0px -1px 0px 0px #FFFFFF14 inset" }}>
            <div className="max-w-[1141px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[60px] md:gap-x-10 text-center">
                {features.map((feature, idx) => (
                    <div key={idx} className={`flex flex-col items-center ${idx === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                        <div className="flex items-center justify-center mb-[30px]">
                            {feature.icon}
                        </div>
                        <h3 className="text-white text-[18px] font-semibold leading-[23px] inter mb-[10px] whitespace-pre-line">
                            {feature.title}
                        </h3>
                        <p className="text-white/50 inter text-[16px] leading-[24px] max-w-[280px] whitespace-pre-line mx-auto font-medium">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
