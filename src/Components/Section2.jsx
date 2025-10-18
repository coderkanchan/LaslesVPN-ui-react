import cardimg from '../assets/cardimg.png';
import check from '../assets/jam_check.png';


export default function Section2() {
    const cards = [
        {
            id: 1, title: "Free Plan", buy: "Free",
            lines: ["Unlimited Bandwitch", "Encrypted Connection", "No Traffic Logs", "Works on All Devices"]
        },
        {
            id: 2, title: "Standard Plan", buy: "$9", hasoff: "true",
            lines: ["Unlimited Bandwitch", "Encrypted Connection", "No Traffic Logs", "Works on All Devices", "Connect Anyware"]
        },
        {
            id: 3, title: "Premium Plan", buy: "$12 ", hasoff: "true",
            lines: ["Unlimited Bandwitch", "Encrypted Connection", "No Traffic Logs", "Works on All Devices", "Connect Anyware", "Get New Features"]
        }
    ]

    return (
        <div className='w-full bg-[#F8F8F8] py-20'>
            <div className=" mx-auto max-w-[1140px] text-center">
                <div className="mb-10">
                    <h3 className="font-medium text-4xl my-6 text-[#0B132A]">Choose Your Plan</h3>
                    <p className="font-normal text-base max-w-[555px] h-[60px] mx-auto text-[#4F5665]">Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                </div>


                <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-5 place-items-center ">
                    {cards.map(card => (
                        <div key={card.id} className="w-[330px] min-h-[760px]  border-[2px] bg-[#FFFFFF] border-[#DDDDDD] rounded-[10px] hover:border-[#F53838] transition-all duration-300">
                            <img className='mx-auto mt-[70px] mb-[30px]' src={cardimg} alt="image" />
                            <span className="text-lg font-medium text-[#0B132A]">{card.title}</span>

                            <ul className='h-[290px] mx-10'>
                                {card.lines.map((line, index) => (
                                    <li key={index} className='flex items-center my-5 text-[#4F5665]'>
                                        <img className='mr-5' src={check} alt='image' />
                                        {line}
                                    </li>
                                ))}
                            </ul>

                            <li className='list-none font-medium text-[25px] mb-5' key={card.index} >{card.buy}<span className='text-[20px] text-[#4e586f] font-normal'> {card.hasoff ? "/ mo" : ""}</span></li>

                            <button className='w-[177px] h-[47px] border-[2px] border-[#F53838] rounded-[50px] text-[#F53838] font-bold hover:text-[white] hover:shadow-xl hover:shadow-[#F5383859] hover:bg-[#F53838] transition-all duration-300'>Select</button>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
