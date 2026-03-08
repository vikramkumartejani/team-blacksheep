import React, { useState } from 'react';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialMode?: 'signin' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'signin' }) => {
    const [mode, setMode] = useState<'signin' | 'signup' | 'signup_dealer' | 'signup_personal'>(initialMode);

    // Sync mode with prop if it changes and modal opens
    React.useEffect(() => {
        if (isOpen) {
            setMode(initialMode);
        }
    }, [isOpen, initialMode]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
            {/* Blurred Backdrop */}
            <div
                className="absolute inset-0 bg-[#00000066] backdrop-blur-[4px]"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="bg-[#292930] rounded-[24px] w-full max-w-[649px] relative z-10 animate-in fade-in zoom-in-95 duration-200">

                {/* Header (Tabs & Close) */}
                <div className='bg-[#1D1D1D80] px-5 pt-5 rounded-t-[24px] h-[71px] flex items-center justify-between relative'>
                    <div className="flex gap-[30px] h-[51px] items-end">
                        <button
                            onClick={() => setMode('signin')}
                            className={`text-[15px] font-medium leading-[18px] pb-[25px] relative transition-colors ${mode === 'signin' ? 'text-[#FFA234]' : 'text-white'}`}
                        >
                            Sign in
                            {mode === 'signin' && (
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFA234] rounded" />
                            )}
                        </button>
                        <button
                            onClick={() => setMode('signup')}
                            className={`text-[15px] font-medium leading-[18px] pb-[25px] relative transition-colors ${(mode === 'signup' || mode === 'signup_personal' || mode === 'signup_dealer') ? 'text-[#FFA234]' : 'text-white'}`}
                        >
                            Sign up
                            {(mode === 'signup' || mode === 'signup_personal' || mode === 'signup_dealer') && (
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFA234] rounded" />
                            )}
                        </button>
                    </div>

                    <button onClick={onClose} className='absolute top-4 right-5 text-white hover:text-white/80 bg-[#1F1E24B2] w-[42px] h-[42px] rounded-[10px] flex items-center justify-center'>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7602 1.23983C25.4449 1.92457 25.4449 3.03476 24.7602 3.7195L3.7195 24.7602C3.03476 25.4449 1.92457 25.4449 1.23983 24.7602C0.555093 24.0754 0.555092 22.9652 1.23983 22.2805L22.2805 1.23983C22.9652 0.555092 24.0754 0.555093 24.7602 1.23983Z" fill="currentColor" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.23983 1.23983C1.92457 0.555092 3.03476 0.555092 3.7195 1.23983L24.7602 22.2805C25.4449 22.9652 25.4449 24.0754 24.7602 24.7602C24.0754 25.4449 22.9652 25.4449 22.2805 24.7602L1.23983 3.7195C0.555092 3.03476 0.555092 1.92457 1.23983 1.23983Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>

                {/* Body Content */}
                <div className='px-5 pt-[30px] pb-5'>
                    {/* SIGN IN MODE */}
                    {mode === 'signin' && (
                        <div className="space-y-4">
                            <button className="w-full bg-[#6F6F7F] hover:bg-[#6F6F7F]/90 transition-colors text-white py-3 sm:py-4 rounded-[10px] text-[16px] leading-[19px] font-normal">
                                Sign in with Google
                            </button>
                            <button className="w-full bg-[#6F6F7F] hover:bg-[#6F6F7F]/90 transition-colors text-white py-3 sm:py-4 rounded-[10px] text-[16px] leading-[19px] font-normal">
                                Sign in with Facebook
                            </button>

                            <div className="w-full h-[2px] bg-white my-[30px]" />

                            <div className="space-y-0">
                                <div className="space-y-3 mb-3">
                                    <label className="text-white text-[16px] leading-[19px] font-normal">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email address..."
                                        className="w-full bg-[#1F1E24] text-white text-[14px] sm:text-[16px] font-light px-4 py-3 rounded-[10px] outline-none"
                                    />
                                </div>

                                <div className=" relative">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full bg-[#1F1E24] text-white text-[14px] sm:text-[16px] font-light px-4 py-3 rounded-[10px] outline-none pr-10"
                                    />
                                    {/* Eye Icon */}
                                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/80 mt-1">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    </button>
                                </div>

                                <div className="pt-2.5 pb-5">
                                    <a href="/forgot-password" className="text-white hover:text-[#FFA234] text-[14px] leading-4 underline transition-colors">
                                        Forgot your password?
                                    </a>
                                </div>

                                <button className="w-full bg-[#6F6F7F] hover:bg-[#6F6F7F]/90 transition-colors text-white py-3 sm:py-4 rounded-[10px] text-[16px] leading-[19px] font-normal">
                                    Continue
                                </button>
                            </div>
                        </div>
                    )}


                    {/* SIGN UP SELECTION MODE */}
                    {mode === 'signup' && (
                        <div className="space-y-4">
                            <button
                                onClick={() => setMode('signup_personal')}
                                className="w-full bg-[#6F6F7F] hover:bg-[#6F6F7F]/90 transition-colors text-white py-3 sm:py-4 rounded-[10px] text-[16px] leading-[19px] font-normal"
                            >
                                Sign up for personal account
                            </button>
                            <button
                                onClick={() => setMode('signup_dealer')}
                                className="w-full bg-[#6F6F7F] hover:bg-[#6F6F7F]/90 transition-colors text-white py-3 sm:py-4 rounded-[10px] text-[16px] leading-[19px] font-normal"
                            >
                                Sign up for a dealer account
                            </button>
                        </div>
                    )}

                    {/* SIGN UP NEXT STEP (Socials/Email) */}
                    {(mode === 'signup_personal' || mode === 'signup_dealer') && (
                        <div className="space-y-4">
                            <button className="w-full bg-[#6F6F7F] hover:bg-[#6F6F7F]/90 transition-colors text-white py-3 sm:py-4 rounded-[10px] text-[16px] leading-[19px] font-normal">
                                Sign in with Google
                            </button>
                            <button className="w-full bg-[#6F6F7F] hover:bg-[#6F6F7F]/90 transition-colors text-white py-3 sm:py-4 rounded-[10px] text-[16px] leading-[19px] font-normal">
                                Sign in with Facebook
                            </button>

                            <div className="w-full h-px bg-white/20 my-6" />

                            <button className="w-full bg-[#6F6F7F] hover:bg-[#6F6F7F]/90 transition-colors text-white py-3 sm:py-4 rounded-[10px] text-[16px] leading-[19px] font-normal">
                                Sign up with email
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
