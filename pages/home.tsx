import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import samplePacks from "../data";

const HomePage: React.FC = () => {
  const data = samplePacks;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);

  const goToPrevious = () => {
    setPreviousIndex(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setPreviousIndex(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const previousImage = document.getElementById(
      `carousel-image-${previousIndex}`
    );
    previousImage?.classList.add("previous");
    const currentImage = document.getElementById(
      `carousel-image-${currentIndex}`
    );
    currentImage?.classList.remove("previous");
  }, [currentIndex, previousIndex]);
  return (
    <div className="relative max-w-lg mx-auto mt-64">
      {data.map((samplePack, index) => (
        <div
          key={samplePack.id}
          id={`carousel-image-${index}`}
          className={`absolute inset-0 flex flex-col items-center justify-center carousel-image ${
            index !== currentIndex ? "previous" : ""
          }`}
        >
          <Image
            src={samplePack.image}
            width={400}
            height={400}
            alt="carousel image"
          />
          <h3 className="mt-2 text-black text-center">{samplePack.name}</h3>
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-between">
        <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full transition-opacity duration-500 ease-in-out">
          <button
            className="text-white hover:text-gray-200"
            onClick={goToPrevious}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
        <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full transition-opacity duration-500 ease-in-out">
          <button className="text-white hover:text-gray-200" onClick={goToNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
