import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import img1 from '../assets/cardimg1.png';
import img2 from '../assets/cardimg2.png';
import img3 from '../assets/cardimg3.png';
import img4 from '../assets/cardimg4.png';
import img5 from '../assets/cardimg5.png';
import img6 from '../assets/cardimg6.png';

const data = [
  { id: 1, name: "Viezh Robert", location: "Warsaw, Poland", rating: 4.5, image: img1, message: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”." },
  { id: 2, name: "Yessica Christy", location: "Shanxi, China", rating: 4.5, image: img2, message: "“I like it because I like to travel far and still can connect with high speed.”." },
  { id: 3, name: "Kim Young Jou", location: "Seoul, South Korea", rating: 4.5, image: img3, message: "“This is very unusual for my business that currently requires a virtual private network that has high security.”." },
  { id: 4, name: "Viezh Robert", location: "Warsaw, Poland", rating: 4.5, image: img4, message: "Wow... I am very happy to use this VPN..." },
  { id: 5, name: "Yessica Christy", location: "Shanxi, China", rating: 4.5, image: img5, message: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”." },
  { id: 6, name: "Kim Young Jou", location: "Seoul, South Korea", rating: 4.5, image: img6, message: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”." },
];

export default function Slidr() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [visibleCards]);

  const totalSlides = data.length - visibleCards + 1;

  const nextCard = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToIndex = (i) => setCurrentIndex(i);

  return (
    <div className="bg-[#F8F8F8] max-w-full w-full px-3  overflow-x-hidden">

      <div className="mx-auto xl:max-w-[1360px] max-w-[1140px]">


        <div className="xl:relative xl:left-[100px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out "
            style={{ width: `${(data.length / visibleCards) * 100}%`, transform: `translateX(-${(100 / data.length) * currentIndex}%)`, }}>

            {data.map((item, i) => (
              <div key={i} className="p-5 py-10 flex-shrink-0 w-full" style={{ width: `${100 / data.length}%` }}>
                <div className="h-full border-2 border-[#DDD] rounded-lg hover:shadow-xl hover:shadow-[#DDDDDD] hover:bg-white hover:border-[#F53838] p-9">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center justify-between gap-5">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                      <div className="flex-1">
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span>{item.rating}</span>
                      <FaStar className="text-orange-400" />
                    </div>
                  </div>
                  <p className=" text-gray-600 text-base font-normal line-clamp-4">{item.message}</p>
                </div>
              </div>
            ))}
            
          </div>
        </div>

        {/* Dots and Arrows */}
        <div className="max-w-[1140px] mx-auto px-3 flex items-center justify-between mt-8">
          {/* Dots */}
          <div className="flex gap-2 mt-4">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <div
                key={i}
                onClick={() => goToIndex(i)}
                className={`h-[11px] cursor-pointer rounded-full transition-all duration-300 ${i === currentIndex
                  ? "w-[30px] bg-[#F53838]"
                  : "w-[11px] bg-gray-300"
                  }`}
              ></div>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-4 mt-4">
            <button
              aria-label="Previous Slide"
              onClick={prevCard}
              disabled={currentIndex === 0}
              className="text-[#F53838] text-[40px] flex items-center justify-center w-[55px] h-[55px] border-2 border-[#F53838] rounded-full hover:bg-[#F53838] hover:text-white disabled:opacity-50 transition"
            >
              <IoIosArrowRoundBack />
            </button>
            <button
              aria-label="Next Slide"
              onClick={nextCard}
              disabled={currentIndex === totalSlides - 1}
              className="text-[#F53838] text-[40px] flex items-center justify-center w-[55px] h-[55px] border-2 border-[#F53838] rounded-full hover:bg-[#F53838] hover:text-white disabled:opacity-50 transition"
            >
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


