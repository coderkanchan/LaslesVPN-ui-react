import image from '../assets/image2.png';
import check from '../assets/check.png';



export default function Section1() {
    const data = [
        { id: "1", line: "Powerfull online protection." },
        { id: "2", line: "Internet without borders." },
        { id: "3", line: "Supercharged VPN" },
        { id: "4", line: "No specific time limits." }
    ]


    return (
        <div className="lg:flex  items-center justify-between mx-auto px-3 max-w-[1140px] mb-[100px]">
            <div className='max-w-full min-h-full '>
                <img className='w-full h-full' src={image} alt='image' />
            </div>
            <div className='mt-20'>
                <div className='max-w-[427px] min-h-[210px]'>
                    <h2 className='font-medium text-[35px] mb-[10px] text-[#0B132A]'>We Provide Many Features You Can Use</h2>
                    <p className='max-w-[427px] min-h-[60px] text-[#4F5665] text-base font-normal leading-[30px] my-[30px]'>You can explore the features that we provide with fun and have their own functions each feature.</p>
                </div>
                <div className=''>
                    {data.map((lines) => (
                        <div key={lines.id} className=' flex items-center my-4'>
                            <img src={check} alt='check icon' />
                            <span className='ml-4'>{lines.line}</span>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}