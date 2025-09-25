import NavBar from "./Navbar";


const Hero = () => {
    return (
        <section className="h-[90vh] bg-cover flex flex-col bg-center" style={{ backgroundImage: "url('/Hero.png')" }}>
            <NavBar />
            <div className="flex-1 flex flex-col justify-center items-center gap-4 text-center">
                <p className="text-5xl uppercase text-white font-bold">Find the Perfect Home</p>
                <p className="text-white max-w-[45%]">Explore trusted listings, prime locations, and personalized support. Whether you’re buying,
                    selling, or renting, we make real estate seamless and stress-free.</p>
            </div>
        </section>
    )
}

export default Hero;