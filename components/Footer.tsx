import { Apple, Facebook, Home, Instagram, Linkedin, PlaySquare, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="">
            <section className="w-[90%] md:w-[75%] mx-auto flex flex-col py-4 md:py-8">
                <div className="flex flex-col gap-4 md:gap-8">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row gap-5 md:gap-2 justify-between items-start md:items-center">
                        <div className="flex gap-3 items-center">
                            <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#181A20] to-[#2d3139] shadow-lg">
                                <Home color="white" size={20} />
                            </div>
                            <p className="text-xl font-bold bg-gradient-to-r from-[#181A20] to-[#4a4e57] bg-clip-text text-transparent">Homez</p>
                        </div>
                        <div className="flex gap-5 items-center">                               
                            <p className="text-sm font-semibold text-gray-700">Follow Us</p>
                            <div className="flex gap-3 items-center">
                                <a href="#" className="hover:scale-110 transition-transform duration-200 p-2 hover:bg-gray-100 rounded-full">
                                    <Facebook size={18} className="text-gray-600 hover:text-blue-600" />
                                </a>
                                <a href="#" className="hover:scale-110 transition-transform duration-200 p-2 hover:bg-gray-100 rounded-full">
                                    <Twitter size={18} className="text-gray-600 hover:text-blue-400" />
                                </a>
                                <a href="#" className="hover:scale-110 transition-transform duration-200 p-2 hover:bg-gray-100 rounded-full">
                                    <Instagram size={18} className="text-gray-600 hover:text-pink-600" />
                                </a>
                                <a href="#" className="hover:scale-110 transition-transform duration-200 p-2 hover:bg-gray-100 rounded-full">
                                    <Linkedin size={18} className="text-gray-600 hover:text-blue-700" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-300"></div>

                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
                        {/* Popular Search */}
                        <div className="flex flex-col gap-4">
                            <p className="font-bold text-base text-gray-900 mb-2">Popular Search</p>
                            <a href="#" className="text-sm text-gray-600 hover:text-[#181A20] hover:translate-x-1 transition-all duration-200">Apartment for Rent</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-[#181A20] hover:translate-x-1 transition-all duration-200">Apartment for Sale</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-[#181A20] hover:translate-x-1 transition-all duration-200">Office for Sale</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-[#181A20] hover:translate-x-1 transition-all duration-200">Office for Rent</a>
                        </div>

                        {/* Quick Links */}
                        <div className="flex flex-col gap-4">
                            <p className="font-bold text-base text-gray-900 mb-2">Quick Links</p>
                            <a href="#" className="text-sm text-gray-600 hover:text-[#181A20] hover:translate-x-1 transition-all duration-200">Terms of Use</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-[#181A20] hover:translate-x-1 transition-all duration-200">Privacy Policy</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-[#181A20] hover:translate-x-1 transition-all duration-200">Pricing Plans</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-[#181A20] hover:translate-x-1 transition-all duration-200">Our Services</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-[#181A20] hover:translate-x-1 transition-all duration-200">Contact</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-[#181A20] hover:translate-x-1 transition-all duration-200">Careers</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-[#181A20] hover:translate-x-1 transition-all duration-200">FAQs</a>
                        </div>

                        {/* Locations */}
                        <div className="flex flex-col gap-4">
                            <p className="font-bold text-base text-gray-900 mb-2">Popular Locations</p>
                            <a href="#" className="text-sm text-gray-600 hover:text-[#181A20] hover:translate-x-1 transition-all duration-200">Chicago</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-[#181A20] hover:translate-x-1 transition-all duration-200">Los Angeles</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-[#181A20] hover:translate-x-1 transition-all duration-200">New Jersey</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-[#181A20] hover:translate-x-1 transition-all duration-200">New York</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-[#181A20] hover:translate-x-1 transition-all duration-200">California</a>
                        </div>

                        {/* Contact & Apps */}
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Customer Care</p>
                                    <p className="text-sm font-semibold text-gray-900">+(088) 123 456 789</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Live Support</p>
                                    <a href="mailto:hi@homez.com" className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors">hi@homez.com</a>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                                <p className="text-sm font-bold text-gray-900 mb-4">Download Our App</p>
                                <div className="flex flex-col gap-3 max-w-[200px]">
                                    <a href="#" className="flex gap-3 items-center bg-[#181A20] hover:bg-[#2d3139] p-3 text-white rounded-lg transition-all duration-200 hover:scale-105 shadow-md">
                                        <Apple size={24} />
                                        <div className="flex flex-col">
                                            <p className="text-[10px] opacity-80">Download on the</p>
                                            <p className="font-bold text-sm">App Store</p>
                                        </div>
                                    </a>
                                    <a href="#" className="flex gap-3 items-center bg-[#181A20] hover:bg-[#2d3139] p-3 text-white rounded-lg transition-all duration-200 hover:scale-105 shadow-md">
                                        <PlaySquare size={24} />
                                        <div className="flex flex-col">
                                            <p className="text-[10px] opacity-80">Get it on</p>
                                            <p className="font-bold text-sm">Google Play</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Copyright */}
                    <div className="border-t border-gray-300 pt-6 mt-4">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                            <p>© 2025 Homez. All rights reserved.</p>
                            <div className="flex gap-6">
                                <a href="#" className="hover:text-[#181A20] transition-colors">Privacy</a>
                                <a href="#" className="hover:text-[#181A20] transition-colors">Terms</a>
                                <a href="#" className="hover:text-[#181A20] transition-colors">Sitemap</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;