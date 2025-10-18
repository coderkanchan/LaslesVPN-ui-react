
import netflix from '../assets/netflix.png';
import reddit from '../assets/redit.png';
import amazon from '../assets/amazon.png';
import discord from '../assets/discord.png';
import spotify from '../assets/spotify.png';
import netflix2 from '../assets/netflix2.png'

export default function Box2() {
    const images = [
        { id: 1, src: netflix ,change:netflix2 },
        { id: 2, src: reddit },
        { id: 3, src:  amazon},
        { id: 4, src: spotify },
        { id: 5, src: discord }
    ]
    return (
        <div className='max-w-[1140px] mx-auto flex  justify-between items-center py-20'>
            {
                images.map(image => (
                    <div key={image.id} className='max-w-full'>
                        <img src={image.src}/>
                    </div>
                ))
            }
        </div>
    )
}