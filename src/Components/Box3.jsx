export default function SubscribeBox() {
    return (
        <div className="bg-[#F8F8F8] relative z-20">
            {/* White box floating between slider and footer */}
            <div className="max-w-6xl mx-auto px-4  relative translate-y-1/2">
            
                <div className="bg-white rounded-lg shadow-xl shadow-[##DDDDDD] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Left text */}
                    <div className="text-center md:text-left">
                        <h2 className="text-[35px] md:text-3xl sm:text-xl font-medium mt-4 text-[#0B132A] leading-snug">
                            Subscribe Now for <br className="hidden md:block" />
                            <span className="text-[#0B132A] mt-3">Get Special Features!</span>
                        </h2>
                        <p className="text-[#4F5665] text-sm md:text-base mt-6">
                            Let’s subscribe with us and find the fun.
                        </p>
                    </div>

                    {/* Right button */}
                    <div>
                        <button className="bg-[#F53838] hover:bg-red-600 text-white font-semibold px-8 py-3 rounded shadow-xl shadow-[#F5383859] transition">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
