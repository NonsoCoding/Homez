




const HowCanWehelp = () => {

    const HowCanWehelp = [
        {
            helpBy: "Buy a property", helpInfo: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
            img: "/BuyProperty.svg", button: "Find a home", bgColor: "#FFFFFF", arrowImg: "/coral-more-arrow.svg", buttonTextColor: "#EB6753"
        },
        {
            helpBy: "Sell a property", helpInfo: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
            img: "/SellProperty.svg", button: "Place an ad", bgColor: "#EB6753", arrowImg: "/white-more-arrow.svg", buttonTextColor: "#FFFFFF"
        },
        {
            helpBy: "Rent a property", helpInfo: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
            img: "/RentProperty.svg", button: "Find a rental", bgColor: "#FFFFFF", arrowImg: "/coral-more-arrow.svg", buttonTextColor: "#EB6753"
        },
    ]

    return (
        <section className="w-[90%] md:w-[75%] mx-auto flex flex-col gap-15 my-10 md:my-20">
            <div className="flex flex-col items-center text-center">
                <p className="text-2xl font-semibold">See how Realtor can help</p>
                <p className="text-[12px] font-light">Aliquam lacinia diam quis lacus euismod</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {HowCanWehelp.map((items, index) => {
                    return (
                        <div key={index} className="flex flex-col gap-6 items-center border-1 p-8 border-gray-300 rounded-md shadow-xl">
                            <img className="h-20 w-20" src={items.img} alt="BuyImage" />
                            <div className="text-center items-center flex flex-col gap-3">
                                <p className="text-[14px] font-bold">{items.helpBy}</p>
                                <p className="text-[11px]">{items.helpInfo}</p>
                            </div>
                            <button style={{backgroundColor: items.bgColor}} className={`border-1 h-8 w-34 gap-1.5 border-[#EB6753] rounded-md items-center font-bold flex text-[12px] justify-center`}>
                                <p style={{color: items.buttonTextColor}} >{items.button}</p>
                                <img className="h-2 w-2 mt-1" src={items.arrowImg} alt="" />
                            </button>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default HowCanWehelp;