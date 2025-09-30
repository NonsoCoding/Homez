import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Link from "next/link";





const Properties = () => {

    const properties = [
        {name: "Hoouse of the neighborhood", location: "4th avenue southhampthon", bedroom: 6, sqft: 200, bathroom: 6, propertyImg: "./Hero.png"},
        {name: "Hoouse of the neighborhood", location: "4th avenue southhampthon", bedroom: 6, sqft: 200, bathroom: 6, propertyImg: "./Hero.png"},
        {name: "Hoouse of the neighborhood", location: "4th avenue southhampthon", bedroom: 6, sqft: 200, bathroom: 6, propertyImg: "./Hero.png"},
        {name: "Hoouse of the neighborhood", location: "4th avenue southhampthon", bedroom: 6, sqft: 200, bathroom: 6, propertyImg: "./Hero.png"},
        {name: "Hoouse of the neighborhood", location: "4th avenue southhampthon", bedroom: 6, sqft: 200, bathroom: 6, propertyImg: "./Hero.png"},
        {name: "Hoouse of the neighborhood", location: "4th avenue southhampthon", bedroom: 6, sqft: 200, bathroom: 6, propertyImg: "./Hero.png"},
        {name: "Hoouse of the neighborhood", location: "4th avenue southhampthon", bedroom: 6, sqft: 200, bathroom: 6, propertyImg: "./Hero.png"},
        {name: "Hoouse of the neighborhood", location: "4th avenue southhampthon", bedroom: 6, sqft: 200, bathroom: 6, propertyImg: "./Hero.png"},
        {name: "Hoouse of the neighborhood", location: "4th avenue southhampthon", bedroom: 6, sqft: 200, bathroom: 6, propertyImg: "./Hero.png"},
        {name: "Hoouse of the neighborhood", location: "4th avenue southhampthon", bedroom: 6, sqft: 200, bathroom: 6, propertyImg: "./Hero.png"},
        {name: "Hoouse of the neighborhood", location: "4th avenue southhampthon", bedroom: 6, sqft: 200, bathroom: 6, propertyImg: "./Hero.png"},
        {name: "Hoouse of the neighborhood", location: "4th avenue southhampthon", bedroom: 6, sqft: 200, bathroom: 6, propertyImg: "./Hero.png"},
        {name: "Hoouse of the neighborhood", location: "4th avenue southhampthon", bedroom: 6, sqft: 200, bathroom: 6, propertyImg: "./Hero.png"},
        {name: "Hoouse of the neighborhood", location: "4th avenue southhampthon", bedroom: 6, sqft: 200, bathroom: 6, propertyImg: "./Hero.png"},
        {name: "Hoouse of the neighborhood", location: "4th avenue southhampthon", bedroom: 6, sqft: 200, bathroom: 6, propertyImg: "./Hero.png"},
    ]

    return (
        <section className="w-full">
            <NavBar
                className="bg-[#181A20] w-[90%] mx-auto py-3 sticky inset-0 shadow"
            />
            <div className="flex w-[90%] flex-col md:w-[75%] gap-6 mt-6 mx-auto">
                <p className="text-lg font-bold">Select from our list of properties</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-4">
                    {properties.map((item, index) => {
                        return (
                              <div key={index} className="flex flex-col overflow-hidden gap-2 border-1 border-gray-200 shadow-xl rounded-md">
                    <img src={item.propertyImg} alt="" />
                    <div className="flex p-4 flex-col gap-1">
                        <p className="font-semibold">{item.name}</p>
                                    <p className="text-gray-500 text-[12px]">{item.location}</p>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5">
                                            <p className="text-[11px] text-gray-500 font-semibold">{item.bedroom}</p>
                                <img className="h-2 w-2 mt-0.5" src="./more-arrow.svg" alt="more-arrow" />
                            </div>
                            <div className="flex items-center gap-1.5">
                                            <p className="text-[11px] text-gray-500 font-semibold">{item.bathroom}</p>
                                <img className="h-2 w-2 mt-0.5" src="./more-arrow.svg" alt="more-arrow" />
                            </div>
                            <div className="flex items-center gap-1.5">
                                            <p className="text-[11px] text-gray-500 font-semibold">{ item.sqft}</p>
                                <img className="h-2 w-2 mt-0.5" src="./more-arrow.svg" alt="more-arrow" />
                            </div>
                        </div>
                    </div>
                </div>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default Properties;