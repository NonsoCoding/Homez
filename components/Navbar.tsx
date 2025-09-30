"use client";
import { ArrowRight, Home, Phone, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface INavBarProps {
    className: string
}

const NavBar = ({
    className
}: INavBarProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const NavItems = [
        {name: "Home", link: "/"},
        {name: "Listings", link: "/listings"},
        {name: "Members", link: "/members"},
        {name: "Blog", link: "/blog"},
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div className={className}>
            <section style={{
            }} className="flex justify-between w-[95%] mx-auto text-white pt-2 items-center relative">
                {/* Left section - Logo */}
                <div className="flex gap-6">
                    <div className="flex gap-1.5 items-center">
                        <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#EB6753]">
                            <Home size={15} />
                        </div>
                        <p className="text-[12px] font-semibold">Homez</p>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex gap-10 items-center">
                        {NavItems.map((items, key) => (
                            <div key={key} className="flex gap-1 items-center">
                                <Link className="text-[11px] font-semibold hover:text-[#EB6753] transition-colors" href={items.link}>
                                    {items.name}
                                </Link>
                                <p className="font-black text-xl mb-0.5">-</p>
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Desktop Right section */}
                <div className="hidden md:flex gap-3">
                    <div className="flex gap-1.5 items-center">
                        <Phone size={14} />
                        <p className="text-[11px] font-semibold">+234 916 344 0787</p>
                    </div>
                    <div className="flex gap-1.5 items-center">
                        <User size={14} />
                        <p className="text-[11px] font-semibold">Login/Register</p>
                    </div>
                    <button className="flex font-semibold gap-1.5 items-center text-[12px] border border-white h-7 px-4 justify-center rounded-full hover:bg-white hover:text-black transition-colors">
                        Add property
                        <ArrowRight size={14}/>
                    </button>
                </div>

                {/* Mobile menu button */}
                <button 
                    className="md:hidden p-2"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </section>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/70 bg-opacity-50 z-40 md:hidden"
                    onClick={closeMobileMenu}
                />
            )}

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="p-6">
                    {/* Close button */}
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex gap-1.5 items-center">
                            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#EB6753]">
                                <Home size={15} />
                            </div>
                            <p className="text-[14px] font-semibold">Homez</p>
                        </div>
                        <button 
                            onClick={closeMobileMenu}
                            className="p-2"
                            aria-label="Close mobile menu"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <nav className="space-y-6 mb-8">
                        {NavItems.map((item, key) => (
                            <Link 
                                key={key}
                                className="block text-[16px] font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-[#EB6753] transition-colors" 
                                href={item.link}
                                onClick={closeMobileMenu}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Contact Info */}
                    <div className="space-y-4 mb-8">
                        <div className="flex gap-2 items-center p-4 rounded-lg bg-gray-800">
                            <Phone size={16} />
                            <p className="text-[13px] font-semibold">+234 916 344 0787</p>
                        </div>
                        <div className="flex gap-2 items-center p-4 rounded-lg bg-gray-800">
                            <User size={16} />
                            <p className="text-[13px] font-semibold">Login/Register</p>
                        </div>
                    </div>

                    {/* Mobile Add Property Button */}
                    <button className="w-full flex font-semibold gap-2 items-center text-[14px] border border-white h-12 justify-center rounded-lg hover:bg-white hover:text-black transition-colors">
                        Add property
                        <ArrowRight size={16}/>
                    </button>
                </div>
            </div>
            </div>
        </>
    );
};

export default NavBar;