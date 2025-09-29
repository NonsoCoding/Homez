import { Apple, AppleIcon, Facebook, Home, Instagram, Linkedin, PlaySquare, Twitter } from "lucide-react";



const Footer = () => {
    return (
        <section className="w-[90%] md:w-[75%] mx-auto flex flex-col py-5 md:py-15">
            <div className="flex flex-col gap-5 md:gap-10">
                <div className="flex gap-2 justify-between items-center">
                    <div className="flex gap-2 items-center">
                     <div className="h-7 w-7 rounded-full flex items-center justify-center bg-[#181A20]">
                            <Home color="white" size={14} />
                        </div>
                        <p className="text-[13px] font-bold">Homez</p>
                    </div>
                    <div className="flex gap-4">                               
                        <p className="text-[13px] font-semibold"> Follow  Us</p>
                        <div className="flex gap-2 items-center">
                            <Facebook size={13}/>
                            <Twitter size={13}/>
                            <Instagram size={13}/>
                            <Linkedin size={13} />
                        </div>
                    </div>
                </div>
                <div className="border-b-1 border-gray-500"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="flex flex-col gap-3 text-xs">
                        <p className="font-bold">Popular Search</p>
                        <p>Apartment for Rent</p>
                        <p>Apartment for Sale</p>
                        <p>Office for Sale</p>
                        <p>Office for Rent</p>
                    </div>
                    <div className="flex flex-col gap-3 text-xs">
                        <p className="font-bold">Popular Search</p>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>Pricing Plans</p>
                        <p>Our Services</p>
                        <p>Contact</p>
                        <p>Careers</p>
                        <p>FAQs</p>
                    </div>
                    <div className="flex flex-col gap-3 text-xs">
                        <p className="font-bold">Popular Search</p>
                        <p>Chicago</p>
                        <p>Los Angeles</p>
                        <p>New Jersey</p>
                        <p>New York</p>
                        <p>California</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="flex flex-col gap-2">
                                <p className="text-[10px] text-gray-600">Customer Care</p>
                                <p className="text-xs font-semibold">+(088) 123 456 789</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-[10px] text-gray-600">Live Support?</p>
                                <p className="text-xs font-semibold">hi@homez.com</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Keep Yourself Up to Date</p>
                        </div>
                        <div className="flex flex-col gap-3 max-w-[170px]">
                            <p className="text-sm font-bold">Apps</p>
                            <div className="flex gap-3 items-center bg-[#181A20] p-3 text-white rounded-md">
                                <AppleIcon />
                                <div className="flex flex-col">
                                    <p className="text-xs">Download on the</p>
                                    <p className="font-bold text-sm">Apple Store</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center bg-[#181A20] p-3 text-white rounded-md">
                                <PlaySquare />
                                <div className="flex flex-col">
                                    <p className="text-xs">Download on the</p>
                                    <p className="font-bold text-sm">Playstore</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;