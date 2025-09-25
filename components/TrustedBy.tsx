import { CheckCircle, CheckCircle2 } from "lucide-react";




const TrustedBy = () => {

    const TrustReasons = [
        { reasons: "Find excellent deals" },
        { reasons: "Friendly host & Fast support" },
        { reasons: "List your own property" },
    ]

    return (
        <section className="flex bg-[rgba(235,103,83,0.2)] py-7 md:py-13">
            <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
            <div>
                <img src="/TrustedImage.png" alt="Trusted Image" />
            </div>
            <div className="flex flex-col gap-7 ">
                <p className="text-[15px] md:text-2xl font-bold md:max-w-[200px] text-center self-center">Trusted By Best
                    Exclusive Agents</p>
                <p className="text-[12px] max-w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.</p>
                <div className="flex flex-col gap-3">
                    {TrustReasons.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <CheckCircle2 size={13} />
                            <p className="text-[12px] font-semibold">{item.reasons}</p>
                        </div>
                    ))}
                    </div>
                    <button className="h-7 w-20 font-semibold text-white rounded-md bg-[#EB6753] items-center flex justify-center text-[10px] gap-2">
                        See More
                        <img className="h-2.5 w-2.5" color="text-white" src="./white-more-arrow.svg" alt="more-arrow" />
                </button>
            </div>
            </div>
        </section>
    )
}

export default TrustedBy;