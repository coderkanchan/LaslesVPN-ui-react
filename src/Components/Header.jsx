
import image1 from '../assets/image1.png';
export default function Header() {
    return (
        <>
            <div className="max-w-[1140px] mx-auto ">
                <div className='mx-3 max-w-[1140px] flex flex-col lg:flex-row lg:gap-6 mt-[50px] justify-between '>
                    <div className="xl:max-w-[555px] lg:max-w-[455px] max-w-[555px] pt-[20px]">
                        <h1 className="lg:text-[40px] xl:text-[50px] sm:text-[40px] text-[30px] font-medium text-[#0B132A]">Want anything to be easy with<span className="font-bold"> LaslesVPN.</span></h1>
                        <p className="xl:max-w-[555px] lg:max-w-[455px] max-w-[555px] min-h-[60px] my-[20px] text-[#4F5665] text-base">Provide a network for all your needs with ease and fun using <span className='text-base font-medium'>LaslesVPN </span> discover interesting features from us.</p>
                        <button className="w-[250px] h-[60px] bg-[#F53838] max-xl:mt-[50px] text-white rounded-[10px] shadow-xl shadow-[#F5383859] my-[20px] font-normal">Get Started</button>
                    </div>
                    <div className=" w-full h-full">
                        <img className="w-full h-full" src={image1} alt="image" />
                    </div>
                </div>
            </div>


        </>
    )
   
}