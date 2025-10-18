import icon from '../assets/icon.png';
import location from '../assets/location.png';
import Server from '../assets/Server.png';
export default function Box() {
    return (

        <div className="flex sm:flex-row sm:py-0 py-8 flex-col justify-around items-center mx-auto max-w-[1140px] min-h-[200px] rounded-[10px] shadow-2xl shadow-[#efeff1] my-[100px]">

            <div className='w-[140px] flex items-center justify-between'>
                <img src={icon} alt='icon' />
                <div>
                    <span className='font-bold text-[25px] text-[#0B132A]'>90+</span>
                    <p className='text-[#4F5665] font-normal text-xl'>Users</p>
                </div>
            </div>

            <div className='w-[3px] bg-gray-100 h-[125px] '></div>

            <div className='w-[160px] flex items-center justify-between'>
                <img src={location} alt='icon' />
                <div>
                    <span className='font-bold text-[25px] text-[#0B132A]'>30+</span>
                    <p className='text-[#4F5665] font-normal text-xl'>Locations</p>
                </div>
            </div>

            <div className='w-[3px] bg-gray-100 h-[125px] '></div>

            <div className='w-[140px] flex items-center justify-between'>
                <img src={Server} alt='icon' />
                <div>
                    <span className='font-bold text-[25px] text-[#0B132A]'>50+</span>
                    <p className='text-[#4F5665] font-normal text-xl'>Servers</p>
                </div>
            </div>
        </div>

        

    )
}
