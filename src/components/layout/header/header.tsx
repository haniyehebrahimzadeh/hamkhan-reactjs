// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link className="text-2xl font-bold text-gray-800" href="/">

                </Link>
                <nav className="space-x-6">
                    <Link href="#features" className="text-gray-600 hover:text-gray-900">ویژگی‌ها</Link>
                    <Link href="/about-us" className="text-gray-600 hover:text-gray-900">درباره ما</Link>

                </nav>
            </div>
        </header>
    );
};

export default Header;
