import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface CookiesModalProps {
    isVisible?: boolean;
    onAccept?: () => void;
    onReject?: () => void;
    onClose?: () => void;
}

const CookiesModal: React.FC<CookiesModalProps> = ({
    isVisible: propIsVisible,
    onAccept,
    onReject,
    onClose
}) => {
    const [internalIsVisible, setInternalIsVisible] = useState(true);
    const isVisible = propIsVisible !== undefined ? propIsVisible : internalIsVisible;

    const handleClose = () => {
        if (onClose) {
            onClose();
        } else {
            setInternalIsVisible(false);
        }
    };

    const handleAccept = () => {
        if (onAccept) {
            onAccept();
        }
        handleClose();
    };

    const handleReject = () => {
        if (onReject) {
            onReject();
        }
        handleClose();
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 md:px-5">
            <div className="absolute inset-0 bg-[#00000066] backdrop-blur-[4px]" onClick={handleClose} />

            <div className="bg-[#292930] rounded-[20px] w-full max-w-[649px] relative z-10 animate-in fade-in zoom-in-95 duration-200">
                <div className='bg-[#1D1D1D80] px-5 py-2.5 rounded-t-[20px] flex justify-end mb-2.5'>
                    <button onClick={handleClose} className='text-white hover:text-white/80 bg-[#1F1E24B2] w-[42px] h-[42px] rounded-[10px] flex items-center justify-center'>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7602 1.23983C25.4449 1.92457 25.4449 3.03476 24.7602 3.7195L3.7195 24.7602C3.03476 25.4449 1.92457 25.4449 1.23983 24.7602C0.555093 24.0754 0.555092 22.9652 1.23983 22.2805L22.2805 1.23983C22.9652 0.555092 24.0754 0.555093 24.7602 1.23983Z" fill="currentColor" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.23983 1.23983C1.92457 0.555092 3.03476 0.555092 3.7195 1.23983L24.7602 22.2805C25.4449 22.9652 25.4449 24.0754 24.7602 24.7602C24.0754 25.4449 22.9652 25.4449 22.2805 24.7602L1.23983 3.7195C0.555092 3.03476 0.555092 1.92457 1.23983 1.23983Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>

                <div className='p-5 space-y-[37px]'>
                    <div className="text-white text-[16px] leading-[19px] font-normal space-y-5 md:space-y-6">
                        <p>
                            This website uses cookies to improve your experience. This information helps us
                            improve the website and provide a better user experience. For more information you
                            can consult our: <Link to="/privacy-policy" className="text-[#FFA234] underline italic">Privacy policy</Link>
                        </p>
                        <p>
                            By clicking "Accept All," you agree to the use of all cookies. You can choose to "Reject
                            All" non-essential cookies.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <button
                            onClick={handleReject}
                            className="flex-1 w-full bg-[#6F6F7F] hover:bg-[#6F6F7F]/90 transition duration-300 text-white py-3.5 rounded-[10px] text-[18px] leading-[21px] font-normal"
                        >
                            Reject
                        </button>
                        <button
                            onClick={handleAccept}
                            className="flex-1 w-full bg-[#6F6F7F] hover:bg-[#6F6F7F]/90 transition duration-300 text-white py-3.5 rounded-[10px] text-[18px] leading-[21px] font-normal"
                        >
                            Accept all
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookiesModal;
