import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Link from "next/link";





const Properties = () => {

    const properties = [
  {
    name: "Modern Downtown Loft",
    location: "Central Business District, Abuja",
    bedroom: 2,
    sqft: 1200,
    bathroom: 2,
    propertyImg: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=800&fit=crop&q=80"
  },
  {
    name: "Luxury Family Villa",
    location: "Asokoro District, Abuja",
    bedroom: 5,
    sqft: 3500,
    bathroom: 4,
    propertyImg: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=800&fit=crop&q=80"
  },
  {
    name: "Cozy Garden Apartment",
    location: "Wuse 2, Abuja",
    bedroom: 3,
    sqft: 1450,
    bathroom: 2,
    propertyImg: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=800&fit=crop&q=80"
  },
  {
    name: "Executive Penthouse",
    location: "Maitama, Abuja",
    bedroom: 4,
    sqft: 2800,
    bathroom: 3,
    propertyImg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=800&fit=crop&q=80"
  },
  {
    name: "Charming Bungalow",
    location: "Gwarinpa Estate, Abuja",
    bedroom: 3,
    sqft: 1600,
    bathroom: 2,
    propertyImg: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=800&fit=crop&q=80"
  },
  {
    name: "Contemporary Townhouse",
    location: "Jabi District, Abuja",
    bedroom: 4,
    sqft: 2200,
    bathroom: 3,
    propertyImg: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=800&fit=crop&q=80"
  },
  {
    name: "Spacious Duplex",
    location: "Garki Area, Abuja",
    bedroom: 5,
    sqft: 3000,
    bathroom: 4,
    propertyImg: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=800&fit=crop&q=80"
  },
  {
    name: "Minimalist Studio",
    location: "Utako, Abuja",
    bedroom: 1,
    sqft: 650,
    bathroom: 1,
    propertyImg: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=800&fit=crop&q=80"
  },
  {
    name: "Elegant Colonial Home",
    location: "Katampe Extension, Abuja",
    bedroom: 6,
    sqft: 4200,
    bathroom: 5,
    propertyImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop&q=80"
  },
  {
    name: "Smart City Apartment",
    location: "Life Camp, Abuja",
    bedroom: 2,
    sqft: 1100,
    bathroom: 2,
    propertyImg: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=800&fit=crop&q=80"
  },
  {
    name: "Riverside Retreat",
    location: "Lokogoma District, Abuja",
    bedroom: 4,
    sqft: 2600,
    bathroom: 3,
    propertyImg: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop&q=80"
  },
  {
    name: "Urban Chic Condo",
    location: "Wuye District, Abuja",
    bedroom: 3,
    sqft: 1800,
    bathroom: 2,
    propertyImg: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=800&fit=crop&q=80"
  },
  {
    name: "Mediterranean Estate",
    location: "Apo Legislative Quarters, Abuja",
    bedroom: 7,
    sqft: 5000,
    bathroom: 6,
    propertyImg: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=800&fit=crop&q=80"
  },
  {
    name: "Suburban Family Home",
    location: "Lugbe District, Abuja",
    bedroom: 4,
    sqft: 2400,
    bathroom: 3,
    propertyImg: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=800&fit=crop&q=80"
  },
  {
    name: "Designer Loft Space",
    location: "Gudu District, Abuja",
    bedroom: 2,
    sqft: 1350,
    bathroom: 2,
    propertyImg: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=800&fit=crop&q=80"
  }
];

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