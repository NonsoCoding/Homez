import { CheckCheckIcon, CheckCircle, CheckCircle2Icon, CheckCircleIcon, LucideCheckCircle2 } from "lucide-react"





const MemberShip = () => {

    const MembershipPlans = [
        {
            memberShipPlan: "Professional", price: "$599.00",
            icon: "/professionIcon.svg", description: "Professional listing submission, active for 60 days",
            benefits: [
                {benefit1: "All Operating Supported"},
                {benefit2: "20 Property Listings"},
                {benefit3: "60 Days Availability"},
                {benefit4: "Feature Properties"},
                {benefit5: "24/7 Full support"}
            ],
            bgColor: "white", textColor: "#EB6753", moreArrow: "/coral-more-arrow.svg",
            borderColor: "#EB6753", buttonColor: "white", membershipTitleText: "black"
        },
        {
            memberShipPlan: "Professional", price: "$599.00",
            icon: "/intermediateIcon.svg", description: "Professional listing submission, active for 60 days",
            benefits: [
                {benefit1: "All Operating Supported"},
                {benefit2: "20 Property Listings"},
                {benefit3: "60 Days Availability"},
                {benefit4: "Feature Properties"},
                {benefit5: "24/7 Full support"}
            ],
            bgColor: "#EB675333", buttonColor: "#EB6753", textColor: "white", moreArrow: "/white-more-arrow.svg",
            borderColor: "#EB6753",  membershipTitleText: "#EB6753"
        },
        {
            memberShipPlan: "Professional", price: "$599.00",
            icon: "/basicIcon.svg", description: "Professional listing submission, active for 60 days",
            benefits: [
                {benefit1: "All Operating Supported"},
                {benefit2: "20 Property Listings"},
                {benefit3: "60 Days Availability"},
                {benefit4: "Feature Properties"},
                {benefit5: "24/7 Full support"}
            ],
            bgColor: "white", textColor: "#EB6753", moreArrow: "/coral-more-arrow.svg",
            borderColor: "#EB6753", buttonColor: "white", membershipTitleText: "black"
        },
    ]

    return (
        <section className="w-[90%] md:w-[75%] mx-auto">
            <div className="items-center flex flex-col py-7 md:py-15">
                <p className="text-2xl font-bold">Membership plans</p>
                <p className="text-[14px] font-light">Aliquam lacinia diam quis lacus euismod</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {MembershipPlans.map((items, index) => {
                    return (
                        <div style={{
                            backgroundColor: items.bgColor,
                            borderBottom: items.bgColor
                        }} key={index} className="gap-10 flex flex-col shadow rounded-md justify-center p-5">
                            <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[15px] font-semibold">{items.memberShipPlan}</p>
                                    <p style={{
                                    color: items.membershipTitleText
                                }} className="text-2xl font-bold">{items.price}</p>
                                </div>
                                <img className="h-12 w-12" src={items.icon} alt="" />
                            </div>
                            <div>
                                <p className="text-[13px]">{items.description}</p>
                            </div>
                            <div className="gap-2 flex flex-col">
                            {items.benefits.map((items, index) => {
                                return (
                                    <div className="flex items-center text-[12px]" key={index}>
                                        <div className="pr-1">
                                            <LucideCheckCircle2 size={14}/>
                                        </div>
                                        <p>{items.benefit1}</p>
                                        <p>{items.benefit2}</p>
                                        <p>{items.benefit3}</p>
                                        <p>{items.benefit4}</p>
                                        <p>{items.benefit5}</p>
                                    </div>
                                )
                            })}
                            </div>
                            <button className="border-1 rounded-md justify-center gap-3 items-center flex h-10" style={{ backgroundColor: items.buttonColor, borderColor: items.borderColor }}>
                                <p className="text-[14px] font-semibold" style={{color: items.textColor}}>
                                Add to cart
                                </p>
                                <img className="h-3.5 w-3.5" src={items.moreArrow} alt="" />
                            </button>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default MemberShip;