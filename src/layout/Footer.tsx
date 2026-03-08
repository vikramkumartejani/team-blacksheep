import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../assets/footer-logo.svg';
import Twitter from '../assets/icons/twitter.svg';
import Instagram from '../assets/icons/instagram.svg';
import Facebook from '../assets/icons/facebook.svg';
import Youtube from '../assets/icons/youtube.svg';

interface FooterLink {
    label: string;
    href: string;
}

interface SocialLink extends FooterLink {
    icon: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[] | SocialLink[];
    type: 'grid' | 'social';
}

// Footer
const FOOTER_SECTIONS: FooterSection[] = [
    {
        title: "About",
        type: 'grid',
        links: [
            { label: "About Us", href: "#" },
            { label: "Manufacturing capabilities", href: "#" },
            { label: "Becoming a dealer", href: "#" },
            { label: "Events and news", href: "#" },
            { label: "Made to order", href: "#" },
            { label: "Careers", href: "#" },
        ]
    },
    {
        title: "Community",
        type: 'social',
        links: [
            { label: "X", href: "https://twitter.com/yourbrand", icon: "twitter" },
            { label: "Youtube", href: "https://youtube.com/yourbrand", icon: "youtube" },
            { label: "Instagram", href: "https://instagram.com/yourbrand", icon: "instagram" },
            { label: "Facebook", href: "https://facebook.com/yourbrand", icon: "facebook" },
        ] as SocialLink[]
    },
    {
        title: "Support",
        type: 'grid',
        links: [
            { label: "FAQs", href: "#" },
            { label: "Software update", href: "#" },
            { label: "Dealers' guide", href: "#" },
            { label: "Contact us", href: "#" },
            { label: "Beginners' guide", href: "#" },
        ]
    }
];

const Footer: React.FC = () => {
    return (
        <div className="w-full tracking-tight">
            {/* Upper Section */}
            <div className="bg-[#393942] py-5 sm:py-10 px-10">
                <div className="max-w-[1045px] mx-auto flex items-start gap-[60px]">
                    <div className="mx-auto sm:mr-0">
                        <img src={footerLogo} alt='logo' />
                    </div>

                    {/* Links Sections */}
                    <div className="max-w-[905px] flex-grow  hidden sm:flex items-start gap-[50px]">
                        {FOOTER_SECTIONS.map((section, sIdx) => (
                            <div key={sIdx}>
                                <h4 className="text-white text-[18px] leading-6 font-semibold mb-2.5">{section.title}</h4>

                                {section.type === 'grid' ? (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-[5px]">
                                        {section.links.map((link, lIdx) => (
                                            <a
                                                key={lIdx}
                                                href={link.href}
                                                className="text-white hover:text-white/80 transition-colors text-[14px] leading-[19px] p-[5px]"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-[5px] ">
                                        {(section.links as SocialLink[]).map((link, lIdx) => (
                                            <a
                                                key={lIdx}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-[10px] transition-all group"
                                            >
                                                <div className="w-6 h-6 rounded-full flex items-center justify-center transition-all">
                                                    {link.icon === 'twitter' && (
                                                        <img src={Twitter} alt="Twitter" width={24} height={24} />
                                                    )}
                                                    {link.icon === 'instagram' && (
                                                        <img src={Instagram} alt="Instagram" width={24} height={24} />
                                                    )}
                                                    {link.icon === 'facebook' && (
                                                        <img src={Facebook} alt="Facebook" width={24} height={24} />
                                                    )}
                                                    {link.icon === 'youtube' && (
                                                        <img src={Youtube} alt="Youtube" width={24} height={24} />
                                                    )}
                                                </div>
                                                <span className="text-white text-[14px] leading-[18px]">{link.label}</span>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="bg-black py-5 sm:py-10 px-10">
                <div className="max-w-[1045px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[10px] sm:gap-6">
                    <p className="text-[12px] leading-4.5 font-medium text-white/40 tracking-[0.24px] inter">
                        © 2020 Team Blacksheep. All right reserved.
                    </p>

                    <div className="flex items-center gap-8 text-[12px] text-white/40 inter">
                        <Link to="/privacy-policy" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-white/80 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
