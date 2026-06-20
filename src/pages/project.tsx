import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const slides = [
  {
    id: 1,
    text: "متن اسلاید ۱",
    images: [
      "/projects/first/0-double living room.jpg",
      "/projects/first/0-living room 01.jpg",
      "/projects/first/0-living room 2.jpg",
      "/projects/first/0-Tv wall.jpg"
    ],
  },
  {
    id: 2,
    text: "متن۲",
    images: [
      "/projects/second/child room.jpg",
      "/projects/first/thumb1-2.jpg",
      "/projects/first/thumb2-2.jpg",
      "/projects/first/thumb3-2.jpg"
    ],
  },
];

const Project = () => {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];
  const [currentImages, setCurrentImages] = useState(slide.images);
  
  const changeSlide = (newIndex) => {
    setCurrent(newIndex);
    setCurrentImages(slides[newIndex].images);
  };

  const swapImages = (index) => {
    if (index === 0) return;
    const newImages = [...currentImages];
    const temp = newImages[0];
    newImages[0] = newImages[index];
    newImages[index] = temp;
    setCurrentImages(newImages);
  };

  return (
    <div className="w-full p-4 m-4">
      <div className="flex flex-row items-stretch justify-center gap-4">
        <div className="border  w-2/3 p-4">
          {slide.text}
        </div>
        <div className="flex flex-col w-2/3 gap-4">
          <div className=" grow p-4 text-center h-80 flex items-center justify-center overflow-hidden">
            <img 
              src={currentImages[0]} 
              alt="main"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-row gap-4 h-32">
            {currentImages.slice(1).map((img, index) => (
              <button
                key={index}
                onClick={() => swapImages(index + 1)}
                className=" flex-1 cursor-pointer hover:border-blue-500 transition-all overflow-hidden"
              >
                <img 
                  src={img} 
                  alt={`thumb-${index}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button 
          onClick={() => changeSlide((current - 1 + slides.length) % slides.length)} 
          className="px-4 py-2 cursor-pointer rounded-full border border-gray-600 transition-all flex items-center gap-2"
        >
          <FaArrowLeft />
        </button>
        <button 
          onClick={() => changeSlide((current + 1) % slides.length)} 
          className="px-4 py-2 cursor-pointer rounded-full border-gray-600 border transition-all flex items-center gap-2"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Project;