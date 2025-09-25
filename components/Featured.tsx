



const FeaturedList = () => {
    return (
        <section className="w-[90%] md:w-[75%] flex flex-col gap-15 mx-auto my-10 md:my-20">
            <div className="flex items-end justify-between">
                <div className="gap-2 flex flex-col">
                    <p className="text-[14px] md:text-xl font-semibold">Discover Our Featured Listings</p>
                    <p className="text-gray-500 text-[10px] md:text-[12px] max-w-[200px] md:max-w-full">These are a list of all of the featured estate apartments</p>
                </div>
                <div className="flex items-center gap-3">
                    <p className="text-[10px] md:text-[12px] font-semibold">See all properties</p>
                    <img className="h-3 w-3" src="./more-arrow.svg" alt="more-arrow" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col overflow-hidden gap-2 border-1 border-gray-200 shadow-xl rounded-md">
                    <img src="./Hero.png" alt="" />
                    <div className="flex p-4 flex-col gap-1">
                        <p className="font-semibold">House on the hollywood</p>
                        <p className="text-gray-500 text-[12px]">374 Johnson Ave</p>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5">
                                <p className="text-[11px] text-gray-500 font-semibold">6 beds</p>
                                <img className="h-2 w-2 mt-0.5" src="./more-arrow.svg" alt="more-arrow" />
                            </div>
                            <div className="flex items-center gap-1.5">
                                <p className="text-[11px] text-gray-500 font-semibold">6 bathrooms</p>
                                <img className="h-2 w-2 mt-0.5" src="./more-arrow.svg" alt="more-arrow" />
                            </div>
                            <div className="flex items-center gap-1.5">
                                <p className="text-[11px] text-gray-500 font-semibold">200 sqft</p>
                                <img className="h-2 w-2 mt-0.5" src="./more-arrow.svg" alt="more-arrow" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden gap-2 border-1 border-gray-200 shadow-xl rounded-md">
                    <img src="./Hero.png" alt="" />
                    <div className="flex p-4 flex-col gap-1">
                        <p className="font-semibold">House on the hollywood</p>
                        <p className="text-gray-500 text-[12px]">374 Johnson Ave</p>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5">
                                <p className="text-[11px] text-gray-500 font-semibold">6 beds</p>
                                <img className="h-2 w-2 mt-0.5" src="./more-arrow.svg" alt="more-arrow" />
                            </div>
                            <div className="flex items-center gap-1.5">
                                <p className="text-[11px] text-gray-500 font-semibold">6 bathrooms</p>
                                <img className="h-2 w-2 mt-0.5" src="./more-arrow.svg" alt="more-arrow" />
                            </div>
                            <div className="flex items-center gap-1.5">
                                <p className="text-[11px] text-gray-500 font-semibold">200 sqft</p>
                                <img className="h-2 w-2 mt-0.5" src="./more-arrow.svg" alt="more-arrow" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden gap-2 border-1 border-gray-200 shadow-xl rounded-md">
                    <img src="./Hero.png" alt="" />
                    <div className="flex p-4 flex-col gap-1">
                        <p className="font-semibold">House on the hollywood</p>
                        <p className="text-gray-500 text-[12px]">374 Johnson Ave</p>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5">
                                <p className="text-[11px] text-gray-500 font-semibold">6 beds</p>
                                <img className="h-2 w-2 mt-0.5" src="./more-arrow.svg" alt="more-arrow" />
                            </div>
                            <div className="flex items-center gap-1.5">
                                <p className="text-[11px] text-gray-500 font-semibold">6 bathrooms</p>
                                <img className="h-2 w-2 mt-0.5" src="./more-arrow.svg" alt="more-arrow" />
                            </div>
                            <div className="flex items-center gap-1.5">
                                <p className="text-[11px] text-gray-500 font-semibold">200 sqft</p>
                                <img className="h-2 w-2 mt-0.5" src="./more-arrow.svg" alt="more-arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedList;