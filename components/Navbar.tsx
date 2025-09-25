import { ArrowBigRight, ArrowRight, Home, Phone, User } from "lucide-react";
import Link from "next/link";



const NavBar = () => {

    const NavItems = [
        {name: "Home", link: "/"},
        {name: "Listings", link: "/"},
        {name: "Members", link: "/"},
        {name: "Blog", link: "/"},
    ]

    return (
        <section className="flex justify-between w-[90%] mx-auto text-white pt-5 items-center">
            {/* left section */}
            <div className="flex gap-6">
                <div className="flex gap-1.5 items-center">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#EB6753]">
                    <Home size={15} />
                    </div>
                    <p className="text-[12px] font-semibold">Homez</p>
                </div>
                <nav className="flex gap-10 items-center">
                    {NavItems.map((items, key) => {
                        return (
                            <div key={key} className="flex gap-1 items-center">
                                <Link className="text-[11px] font-semibold" href={items.link}>{items.name}</Link>
                                <p className="font-black text-xl mb-0.5">-</p>
                            </div>
                        )
                    })}
                </nav>
            </div>
                {/* right section */}
            <div className="flex gap-3">
                <div className="flex gap-1.5 items-center">
                    <Phone size={14} />
                    <p className="text-[11px] font-semibold">+234 916 344 0787</p>
                </div>
                <div className="flex gap-1.5 items-center">
                    <User size={14} />
                    <p className="text-[11px] font-semibold">
                    Login/Register
                    </p>
                </div>
                <button className="flex font-semibold gap-1.5 items-center text-[12px] border-1 border-white h-7 w-27 justify-center rounded-full">
                    Add property
                    <ArrowRight size={14}/>
                </button>
            </div>
        </section>
    )
}

export default NavBar;