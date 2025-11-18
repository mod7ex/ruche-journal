import { Link } from 'react-router';
import { Menu, X, Search } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { categories } from '~/lib';
import Logo from '/logo.png';

import { AuthBtn } from '~/components';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        // @ts-ignore
        const handleClickOutside = (event) => {
            if (
                // @ts-ignore
                mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-md'
                : 'bg-white/95 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex items-center justify-between h-16">
                    <Link
                        to="/"
                        className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
                    >
                        <img src={Logo} alt="La ruche Journal" width={120} />
                    </Link>

                    <nav className="hidden md:flex items-center space-x-8">
                        {categories.map((category) => (
                            <Link
                                key={category.slug}
                                to={`/category/${category.slug}`}
                                className="text-gray-700 hover:text-gray-900 font-medium transition-colors relative group"
                            >
                                {category.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <button
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                            aria-label="Search"
                        >
                            <Search className="w-5 h-5 text-gray-700" />
                        </button>

                        <AuthBtn />

                        <button
                            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-gray-700" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-700" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div ref={mobileMenuRef} className={`md:hidden border-t border-gray-200 bg-white overflow-hidden transition-[max-height] duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[500px]' : 'max-h-0'}`} >
                <nav className="px-4 py-4 space-y-2">
                    {categories.map((category) => (
                        <Link
                            key={category.slug}
                            to={`/category/${category.slug}`}
                            className="block py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {category.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
