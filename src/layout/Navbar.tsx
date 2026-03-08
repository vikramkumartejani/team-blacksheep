import React, { useState } from 'react';
import { Search, ChevronRight, ChevronDown, User } from 'lucide-react';
import MobileLogo from '../assets/mobile-logo.svg';
import Logo from '../assets/logo.svg';
import Twitter from '../assets/icons/twitter.svg'
import Instagram from '../assets/icons/instagram.svg'
import Facebook from '../assets/icons/facebook.svg'
import Youtube from '../assets/icons/youtube.svg'
import Threads from '../assets/icons/threads.svg'
import ShoppingCart from '../assets/icons/shopping-cart.svg'
import SearchModal from './SearchModal';
import AuthModal from '../components/AuthModal';

interface SubCategory {
    label: string;
    children?: string[];
}

interface NavItem {
    label: string;
    href: string;
    type?: 'mega' | 'list' | 'icons';
    subItems?: (string | SubCategory)[];
}

const navItems: NavItem[] = [
    {
        label: "Product categories",
        href: "#",
        type: "mega",
        subItems: [
            { label: "New products" },
            { label: "Back in stock" },
            { label: "Pre-order" },
            { label: "divider" },
            {
                label: "Ready to fly",
                children: ["RTF Drones", "Bind-N-Fly", "Plug-N-Play", "Micro Drones", "Racing Drones"]
            },
            {
                label: "Frames",
                children: ["TBS Source One", "G5 Frames", "Micro Frames", "Spare Parts", "Camera Mounts"]
            },
            {
                label: "Propellers",
                children: ["Props sub 2\"", "Props 2.5\"", "Props 3\"", "Props 4\"", "Props 5\"", "Props 6\"", "Props 7\"", "Props 8\"", "Props 9\"", "Props 10\"", "Props 11\"", "Props 12\"", "Props 13\"", "Props 14\"", "Props 15\""]
            },
            {
                label: "Electronique",
                children: ["Flight Controllers", "ESCs", "Stacks", "VTX", "Antennas", "Receivers"]
            },
            {
                label: "Battery",
                children: ["LiPo Batteries", "Li-Ion Packs", "Chargers", "Field Charging", "Connectors"]
            },
            {
                label: "FPV equipment",
                children: ["Goggles", "Monitor", "HD Video", "Analog Video", "Modules"]
            },
            {
                label: "Motors",
                children: ["Micro Motors", "Long Range Motors", "Racing Motors", "Prop Adapters", "Spare Parts"]
            },
            {
                label: "Controllers",
                children: ["TBS Tango 2", "TBS Mambo", "Sticks & Ends", "Upgrades", "Cases"]
            },
            {
                label: "RC link",
                children: ["Crossfire", "Tracer", "Antennas", "Receivers", "Modules"]
            },
            { label: "divider" },
            { label: "Parts bundles" },
            { label: "Gears" },
            { label: "Software" },
        ]
    },
    {
        label: "About",
        href: "#",
        type: "list",
        subItems: ["About us", "Becoming a dealer", "Made to order", "Manufacturing capabilities", "Career"]
    },
    {
        label: "News and events",
        href: "#",
    },
    {
        label: "Community",
        href: "#",
        type: "icons",
        subItems: ["twitter", "instagram", "facebook", "youtube", "threads"]
    },
    {
        label: "Support",
        href: "#",
        type: "list",
        subItems: ["FAQs", "Dealers' guide", "Beginners' guide", "Software updates"]
    },
    {
        label: "Contact Us",
        href: "#",
    },
];

const Navbar: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [activeSubCategory, setActiveSubCategory] = useState<string>("Propellers");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const renderMegaMenu = (item: NavItem) => {
        const categories = item.subItems || [];
        const activeSub = categories.find((sub): sub is SubCategory => typeof sub !== 'string' && sub.label === activeSubCategory);

        return (
            <div className="absolute top-full left-0 w-full min-h-[500px] z-50 transform-gpu animate-in fade-in duration-150 ease-out">
                {/* Backdrop - Matching Figma: #434349 at 50% opacity + 20px blur */}
                <div className="absolute inset-0 bg-[#43434980] backdrop-blur-[20px]" />

                <div className="max-w-[1440px] px-10 mx-auto flex h-full min-h-[500px] relative z-10">
                    {/* Left Sidebar - Categories */}
                    <div className="w-[221px] bg-[#7F7F8080] py-[15px] overflow-y-auto no-scrollbar relative z-20">
                        {categories.map((sub, idx) => {
                            if (typeof sub !== 'string' && sub.label === 'divider') {
                                return <div key={`divider-${idx}`} className="mx-[31.5px] my-[5px] border-t border-white" />;
                            }
                            const label = typeof sub === 'string' ? sub : sub.label;
                            const isActive = activeSubCategory === label;

                            return (
                                <div
                                    key={label}
                                    onMouseEnter={() => setActiveSubCategory(label)}
                                    className={`flex items-center justify-between px-5 my-[5px] py-2.5 text-[16x] leading-[19px] cursor-pointer transition duration-100 group/item ${isActive
                                        ? 'bg-white text-[#ff922d] font-extrabold'
                                        : ' text-white font-normal'
                                        }`}
                                >
                                    <span className="flex-1">{label}</span>

                                    <svg className={`transition-all duration-150 ${isActive ? 'opacity-100 text-[#ff922d]' : 'group-hover/item:opacity-100'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            );
                        })}
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 relative py-5 px-2.5 overflow-hidden bg-transparent">
                        <div className="relative z-10 h-full">
                            <div className="grid grid-cols-4 justify-items-center gap-y-2.5">
                                {activeSub?.children?.map((child: string) => (
                                    <div key={child} className="text-[16px] leading-[21px] font-semibold py-2.5 text-white hover:text-[#ff922d] cursor-pointer transition-colors duration-100 flex items-center gap-2 group/child">
                                        {child}
                                    </div>
                                ))}
                            </div>

                            {!activeSub?.children && (activeSubCategory !== "New products" && activeSubCategory !== "Back in stock" && activeSubCategory !== "Pre-order") && (
                                <div className="h-full flex items-center justify-center italic text-[16px] leading-[21px] font-semibold py-2.5 text-white hover:text-[#ff922d]">
                                    Browse the latest {activeSubCategory.toLowerCase()}...
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // ==========================================
    // ABOUT DROPDOWN CONTENT
    // ==========================================
    const renderAboutDropdown = (item: NavItem) => {
        return (
            <div className="absolute top-full left-0 w-full py-[30px] z-50 animate-in fade-in slide-in-from-top-1 duration-150 overflow-hidden">
                {/* Backdrop - Matching Figma: #434349 at 50% opacity + 20px blur */}
                <div className="absolute inset-0 bg-[#43434980] backdrop-blur-[20px]" />

                <div className="max-w-[1440px] px-10 mx-auto flex h-full items-center relative z-10">
                    <div className="flex items-center gap-[50px]">
                        {item.subItems?.map((sub: any) => {
                            const label = typeof sub === 'string' ? sub : sub.label;
                            return (
                                <div key={label} className="text-[16px] leading-[19px] font-normal text-white hover:text-[#FFA234] cursor-pointer transition duration-300">
                                    {label}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };

    // ==========================================
    // SUPPORT DROPDOWN CONTENT
    // ==========================================
    const renderSupportDropdown = (item: NavItem) => {
        return (
            <div className="absolute top-full left-0 w-full py-[30px] z-50 animate-in fade-in slide-in-from-top-1 duration-150 overflow-hidden">
                {/* Backdrop - Matching Figma: #434349 at 50% opacity + 20px blur */}
                <div className="absolute inset-0 bg-[#43434980] backdrop-blur-[20px]" />

                <div className="max-w-[1440px] px-10 mx-auto flex h-full items-center relative z-10">
                    <div className="flex items-center gap-[50px]">
                        {item.subItems?.map((sub: any) => {
                            const label = typeof sub === 'string' ? sub : sub.label;
                            return (
                                <div key={label} className="text-[16px] leading-[19px] font-normal text-white hover:text-[#FFA234] cursor-pointer transition duration-300">
                                    {label}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };

    // ==========================================
    // COMMUNITY DROPDOWN (ICONS) CONTENT
    // ==========================================
    const renderCommunityDropdown = (item: NavItem) => {
        return (
            <div className="absolute top-full left-0 w-full py-[30px] z-50 animate-in fade-in slide-in-from-top-1 duration-150 overflow-hidden">
                {/* Backdrop - Matching Figma: #434349 at 50% opacity + 20px blur */}
                <div className="absolute inset-0 bg-[#43434980] backdrop-blur-[20px]" />

                <div className="max-w-[1440px] px-10 mx-auto flex h-full items-center relative z-10">
                    <div className="flex items-center gap-[50px]">
                        {item.subItems?.map((sub: any) => {
                            const label = typeof sub === 'string' ? sub : sub.label;

                            return (
                                <div key={label} className="cursor-pointer transition-all hover:scale-110">
                                    {label === 'twitter' && (
                                        <img src={Twitter} alt="twitter" width={24} height={24} />
                                    )}
                                    {label === 'instagram' && (
                                        <img src={Instagram} alt="Instagram" width={24} height={24} />
                                    )}
                                    {label === 'facebook' && (
                                        <img src={Facebook} alt="Facebook" width={24} height={24} />
                                    )}
                                    {label === 'youtube' && (
                                        <img src={Youtube} alt="Youtube" width={24} height={24} />
                                    )}
                                    {label === 'threads' && (
                                        <img src={Threads} alt="Threads" width={24} height={24} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };

    const renderDropdownContent = (item: NavItem) => {
        if (item.label === 'Product categories') return renderMegaMenu(item);
        if (item.label === 'About') return renderAboutDropdown(item);
        if (item.label === 'Support') return renderSupportDropdown(item);
        if (item.label === 'Community') return renderCommunityDropdown(item);
        return null;
    };

    return (
        <div className='w-full bg-[#292930] sticky lg:static top-0 z-[100] shadow-xl'>
            <div className="text-white relative divide-y divide-[#ffffff10]">
                {/* Top Header Row */}
                <div className="max-w-[1440px] px-4 md:px-10 mx-auto h-[66px] lg:h-20 flex items-center justify-between gap-8 z-50 relative bg-[#292930]">
                    <a href="/">
                        <img src={Logo} alt='logo' className='w-[256px] md:block hidden' />
                        <img src={MobileLogo} alt='logo' className='w-[181px] block md:hidden' />
                    </a>

                    {/* Search Bar - Hidden on Mobile Header */}
                    <div className="flex-1 max-w-[600px] p-px pb-0.5 hidden lg:flex items-center rounded h-11 bg-[#1F1E24] shadow-[2px_2px_7px_0px_#0000001A_inset,1px_1px_4px_0px_#00000026_inset,0px_-1px_1px_0px_#FFFFFF24_inset] relative z-50">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setIsSearchFocused(true)}
                            className="flex-1 bg-transparent px-4 py-2 text-[16px] font-normal leading-[26px] outline-none placeholder:text-white/50"
                        />
                        <button className="w-[52px] h-full rounded-r flex items-center justify-center group bg-[#292930] shadow-[0px_0px_1px_0px_#0000000A,0px_0px_2px_0px_#0000000F,0px_4px_8px_0px_#0000000A,0px_-1px_2px_0px_#00000029_inset]">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.1258 15.2808L14.0633 11.2183C14.958 9.63552 15.2489 7.78217 14.8821 6.00143C14.5152 4.22068 13.5155 2.63319 12.0681 1.53294C10.6207 0.432686 8.82357 -0.105786 7.0096 0.0172419C5.19563 0.14027 3.48769 0.916463 2.20208 2.20208C0.916463 3.48769 0.14027 5.19563 0.0172419 7.0096C-0.105786 8.82357 0.432686 10.6207 1.53294 12.0681C2.63319 13.5155 4.22068 14.5152 6.00143 14.8821C7.78217 15.2489 9.63552 14.958 11.2183 14.0633L15.2808 18.1258C15.437 18.282 15.649 18.3697 15.8699 18.3697C16.0909 18.3697 16.3028 18.282 16.4591 18.1258L18.1258 16.4591C18.282 16.3028 18.3697 16.0909 18.3697 15.8699C18.3697 15.649 18.282 15.437 18.1258 15.2808ZM1.70326 7.53659C1.70326 6.38287 2.04538 5.25505 2.68635 4.29577C3.32733 3.33648 4.23837 2.58881 5.30427 2.1473C6.37018 1.70579 7.54306 1.59027 8.67462 1.81535C9.80618 2.04043 10.8456 2.596 11.6614 3.4118C12.4772 4.22761 13.0328 5.26701 13.2578 6.39857C13.4829 7.53012 13.3674 8.70301 12.9259 9.76891C12.4844 10.8348 11.7367 11.7459 10.7774 12.3868C9.81813 13.0278 8.69032 13.3699 7.53659 13.3699C5.99004 13.3682 4.50733 12.753 3.41375 11.6594C2.32017 10.5659 1.70502 9.08315 1.70326 7.53659Z" fill="#FFA234" />
                            </svg>
                        </button>

                        {/* Render Dropdown When Typing */}
                        {isSearchFocused && searchQuery && (
                            <SearchModal
                                searchQuery={searchQuery}
                                onClose={() => setIsSearchFocused(false)}
                            />
                        )}
                    </div>

                    {/* Auth & Cart */}
                    <div className="flex items-center gap-5 lg:gap-0">
                        <button
                            onClick={() => setIsAuthOpen(true)}
                            className="lg:block hidden text-[14px] leading-4 text-white bg-[#393942] px-4 py-[13px] rounded-[10px] transition-all hover:bg-white/10"
                        >
                            Sign up | sign in
                        </button>

                        <div className="lg:block hidden h-14 w-[2px] bg-[#FFFFFF33] mx-[22px]" />

                        <div className="relative cursor-pointer group">
                            <div className="p-[9px] bg-[#393942] rounded-[10px] hover:bg-white/10 transition-all">
                                <img src={ShoppingCart} alt='shopping-cart' />
                            </div>
                            <span className="absolute -top-[7px] -right-[7px] bg-[#E1E1E6] text-[#292929] text-[10px] sm:text-[12px] leading-3 w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] flex items-center justify-center rounded-full">
                                8
                            </span>
                        </div>

                        {/* Hamburger Menu btn */}
                        <button
                            className='block lg:hidden text-white'
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {isMobileMenuOpen ? (
                                    <>
                                        <line x1="10" y1="10" x2="32" y2="32" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <line x1="10" y1="32" x2="32" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </>
                                ) : (
                                    <>
                                        <rect x="4" y="12" width="34" height="2" rx="1" fill="white" />
                                        <rect x="4" y="20" width="34" height="2" rx="1" fill="white" />
                                        <rect x="4" y="28" width="34" height="2" rx="1" fill="white" />
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Drawer */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden fixed inset-0 top-[66px] z-[100] transform-gpu transition-all duration-300">
                        <div className="absolute inset-0 bg-[#43434980] backdrop-blur-[10px]" />

                        <div className="relative h-full flex flex-col overflow-y-auto no-scrollbar py-5">
                            {/* Menu Items */}
                            <div className="flex flex-col">
                                <a href="/" className="pt-5 pb-[23px] px-5 text-[18px] leading-[21px] font-semibold text-white mb-2.5">Home</a>

                                {navItems.map((item) => {
                                    const hasSubItems = item.subItems && item.subItems.length > 0;
                                    const isOpen = openMobileSub === item.label;

                                    if (item.label === "Contact Us") return null;

                                    return (
                                        <div key={item.label} className="mb-2.5">
                                            <div
                                                className="flex items-center px-5 pt-5 pb-[23px] justify-between cursor-pointer transition-colors"
                                                onClick={() => hasSubItems ? setOpenMobileSub(isOpen ? null : item.label) : null}
                                            >
                                                <span className={`text-[18px] leading-[21px] font-semibold ${isOpen ? '' : 'text-white'}`}>
                                                    {item.label === "Product categories" ? "Shop" : item.label}
                                                </span>
                                                {hasSubItems && (
                                                    <svg className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                )}
                                            </div>

                                            {/* Accordion Content */}
                                            {hasSubItems && isOpen && (
                                                <div className="bg-[#434349B2] backdrop-blur-[10px] py-2.5 animate-in slide-in-from-top-2 duration-200">
                                                    {item.label === "Community" ? (
                                                        <div className="flex flex-wrap gap-10 px-10">
                                                            {item.subItems?.map((sub: any) => {
                                                                const label = typeof sub === 'string' ? sub : sub.label;
                                                                return (
                                                                    <div key={label} className="cursor-pointer transition-all py-4">
                                                                        {label === 'twitter' && (
                                                                            <img src={Twitter} alt="twitter" width={24} height={24} />
                                                                        )}
                                                                        {label === 'instagram' && (
                                                                            <img src={Instagram} alt="Instagram" width={24} height={24} />
                                                                        )}
                                                                        {label === 'facebook' && (
                                                                            <img src={Facebook} alt="Facebook" width={24} height={24} />
                                                                        )}
                                                                        {label === 'youtube' && (
                                                                            <img src={Youtube} alt="Youtube" width={24} height={24} />
                                                                        )}
                                                                        {label === 'threads' && (
                                                                            <img src={Threads} alt="Threads" width={24} height={24} />
                                                                        )}
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    ) : (
                                                        <>
                                                            {item.subItems?.map((sub: any) => {
                                                                if (typeof sub !== 'string' && sub.label === 'divider') return null;
                                                                const label = typeof sub === 'string' ? sub : sub.label;
                                                                return (
                                                                    <div key={label} className="px-10 py-[11.5px] text-[16px] leading-[19px] font-normal text-white cursor-pointer">
                                                                        {label}
                                                                    </div>
                                                                );
                                                            })}
                                                        </>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}

                                <a href="#" className="px-5 pt-5 mb-2.5 pb-[23px] text-[18px] leading-[21px] font-semibold text-white">Contact Us</a>
                            </div>

                            {/* Bottom Auth Section */}
                            <div className="px-5 py-5 flex items-center justify-between" onClick={() => { setIsAuthOpen(true); setIsMobileMenuOpen(false); }}>
                                <div className="flex items-center gap-3">
                                    <span className="text-[18px] leading-[21px] font-semibold text-white">Sign up | sign in</span>
                                </div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="white" stroke-width="1.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}

                {/* Desktop Navigation Line Row */}
                <div className="h-[75px] relative lg:block hidden">
                    <div className="max-w-[1440px] px-10 mx-auto flex items-center gap-[30px] h-full">
                        {navItems.map((item) => (
                            <div
                                key={item.label}
                                className="h-full flex items-center group"
                                onMouseEnter={() => setActiveMenu(item.label)}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                <a
                                    href={item.href}
                                    className={`text-[16px] leading-6 font-medium transition-colors relative h-full flex items-center ${activeMenu === item.label ? 'text-[#FFA234]' : 'text-white'
                                        }`}
                                >
                                    {item.label}
                                    <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FFA234] transition-transform duration-300 origin-left ${activeMenu === item.label ? 'scale-x-100' : 'scale-x-0'
                                        }`} />
                                </a>

                                {/* Dropdown container */}
                                {activeMenu === item.label && item.subItems && (
                                    renderDropdownContent(item)
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Auth Modal Portal */}
            <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        </div>
    );
};

export default Navbar;
