import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'

export default function Footer() {
    const icons = [
        { id: 1, src: facebook },
        { id: 2, src: twitter },
        { id: 3, src: instagram }
    ]

    const datas = [
        { id: 1, title: "Product", lines: ["Download ", "Pricing", "Locations", "Server", "Countries", "Blog"] },
        { id: 2, title: "Engage", lines: ["LaslesVPN ? ", "FAQ", "Tutorials", "About Us", "Privacy Policy", "Terms of Service"] },
        { id: 3, title: "Earn Money", lines: ["Affiliate", "Become Partner"] }
    ]


    return (
        <div className='bg-[#eeeded]  h-auto pt-[200px]  pb-[80px]'>
            <div className='max-w-[1140px] mx-auto flex flex-col md:flex-row gap-20 md:gap-0 flex-wrap justify-between relative px-3'>
                <div className=''>
                    <div className='flex items-center justify-between w-[130px]'>
                        <img src={logo} alt='logo' />
                        <span className="font-medium">Lasles<span className="font-bold">VPN</span></span>
                    </div>
                    <p className='max-w-[340px] h-[61px] text-[#4F5665] py-10'><span className=' text-base font-medium'>LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>

                    <div className='flex items-center '>
                        {
                            icons.map((icon, index) => (
                                <div key={index} className='pt-12 relative right-5'>
                                    <img src={icon.src} />
                                </div>
                            ))
                        }
                    </div>
                    <p className='text-[#AFB5C0] py-3 text-base'>©2020Lasles <span className='font-medium'>VPN</span></p>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-2  gap-20 justify-between '>

                    {datas.map((data, index) => (
                        <div key={index} className=''>
                            <h3 className='text-[#0B132A] font-medium text-lg pb-4'>{data.title}</h3>
                            <ul>
                                {data.lines.map((line, index) => (
                                    <li key={index} className='text-base font-normal text-[#4F5665] py-3'>{line}</li>
                                ))}
                            </ul>
                        </div>))
                    }
                </div>
            </div>
        </div>
    )
}