import GlobalImg from '../assets/Global.png';
import Box2 from '../components/Box2.jsx';

export default function Section3() {
    


    return (
        <div className="bg-[#F8F8F8] text-center px-3">
            <div className="min-h-[400px] pt-20">
                <h1 className="max-w-[383px] min-h-[100px] mx-auto font-medium text-[35px] text-[#0B132A]">Huge Global Network of Fast VPN</h1>
                <p className="max-w-[555px] min-h-[60px] mx-auto my-8">See LaslesVPN everywhere to make it easier for you when you move locations.</p>
            </div>
            <img className='max-w-full mx-auto' src={GlobalImg} alt='Global Image' />
            <Box2 />
        </div>
    )
}