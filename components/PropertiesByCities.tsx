



const PropertiesByCities = () => {

    const cityProperties = [
        {place: "New York", numOfProperties: 10, img: "/PropCities.jpg"},
        {place: "California", numOfProperties: 5, img: "/PropCities.jpg"},
        {place: "Los Vegas", numOfProperties: 8, img: "/PropCities.jpg"},
        {place: "Amsterdam", numOfProperties: 2, img: "/PropCities.jpg"},
        {place: "Texas", numOfProperties: 9, img: "/PropCities.jpg"},
        {place: "Massachessets", numOfProperties: 6, img: "/PropCities.jpg"},
    ]
    
    return (
        <section className="flex flex-col my-20 w-[90%] md:w-[75%] mx-auto gap-20">
            <div className="flex items-end justify-between">
                <div className="gap-2 flex flex-col">
                    <p className="text-xl font-semibold">Discover Our Featured Listings</p>
                    <p className="text-gray-500 text-[12px]">These are a list of all of the featured estate apartments</p>
                </div>
                <div className="flex items-center gap-3">
                    <p className="text-[12px] font-semibold">See all properties</p>
                    <img className="h-3 w-3" src="./more-arrow.svg" alt="more-arrow" />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cityProperties.map((items, index) => {
                        return (
                            <div key={index} className="flex items-center gap-3">
                                <img className="h-17 w-17" src={items.img} alt="" />
                                <div>
                                    <p className="text-[13px] font-semibold">{items.place}</p>
                                    <p className="text-[12px] text-gray-600">{items.numOfProperties} properties</p>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </section>
    )
}

export default PropertiesByCities;