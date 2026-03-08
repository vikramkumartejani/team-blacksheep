import React from 'react';

import p1 from '../assets/product-1.png';
import p2 from '../assets/product-2.png';
import p3 from '../assets/product-3.png';
import p4 from '../assets/product-4.png';
import p5 from '../assets/product-5.png';

interface SearchResult {
    id: string;
    name: string;
    price: string;
    image: string;
}

const allProducts: SearchResult[] = [
    { id: '1', name: 'Oblivion frame', price: '$25', image: p5 },
    { id: '2', name: 'Oblivion fan', price: '$25', image: p2 },
    { id: '3', name: 'Oblivion propeller', price: '$25', image: p3 },
    { id: '4', name: 'Oblivion prop blast design', price: '$25', image: p4 },
    { id: '5', name: 'Oblivion camera mount', price: '$15', image: p1 },
    { id: '6', name: 'TBS Tango 2', price: '$159', image: p1 },
    { id: '7', name: 'Crossfire Micro TX V2', price: '$69', image: p2 },
    { id: '8', name: 'Source One V5 Frame', price: '$29', image: p5 },
];

interface SearchModalProps {
    searchQuery: string;
    onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ searchQuery, onClose }) => {
    if (!searchQuery) return null;

    // Simulate search logic (case-insensitive include)
    const filteredResults = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            {/* Transparent invisible backdrop to close when clicked outside */}
            <div
                className="fixed inset-0 z-40"
                onClick={onClose}
            />

            {/* Dropdown Results Box */}
            <div className="absolute top-[calc(100%+5px)] left-0 w-full bg-[#1F1E24] p-5 rounded-t-[4px] rounded-b-[10px] z-50 overflow-hidden border border-[#ffffff10] animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="max-h-[350px] overflow-y-auto no-scrollbar custom-scrollbar">
                    {filteredResults.length > 0 ? (
                        filteredResults.map((product) => (
                            <div
                                key={product.id}
                                className="flex items-center mb-2.5 last:mb-0 gap-2.5 cursor-pointer transition-colors"
                            >
                                {/* Product Image with White Background */}
                                <div className="w-12 h-12 bg-white rounded-[10px] flex items-center justify-center flex-shrink-0">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain mix-blend-multiply"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="flex flex-col flex-1 min-w-0 gap-[5px]">
                                    <h4 className="text-[#FFA234] text-[16px] leading-[19px] font-normal truncate">
                                        {product.name}
                                    </h4>
                                    <p className="text-white text-[16px] leading-[19px] font-normal">
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="px-[20px] py-[30px] text-center text-white/50">
                            No products found for "{searchQuery}"
                        </div>
                    )}
                </div>

                {/* Custom scrollbar styling scoped locally */}
                <style>{`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 4px;
                        background: #393942;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: #E1E1E6;
                        border-radius: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: #393942;
                        margin: 10px 0;
                    }
                `}</style>
            </div>
        </>
    );
};

export default SearchModal;
