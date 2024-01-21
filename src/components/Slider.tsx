'use client'

import Arrows from "@/client/Slider/Arrows";
import Dots from "@/client/Slider/Dots";
import SlidesList from "@/client/Slider/SlidesList";
import { SlideObj } from "@/types";
import { useState } from "react";
interface SliderProps {
  slidesdata: {
    slides: SlideObj[],
    count: number
  }
}
const Slider: React.FC<SliderProps> = ({slidesdata}) => {
  const [slide, setSlide] = useState(0);

  
  const moveSlides = (direction: number) => {
    let slideNum = 0;
    if (slide + direction < 0) {
      slideNum = slidesdata.count - 1;
    } else {
      slideNum = (slide + direction) % slidesdata.count;
    }
    setSlide(slideNum);
  };

  const goToSlide = (slide: number) => {
    setSlide(slide)
  }
  return (
      <>
        <div className="relative">
          <Arrows moveSlides={moveSlides}/>
          <div className="overflow-hidden w-[85%] h-[160px] max-sm:h-max mx-auto mb-[42px] border-[1px] border-solid border-[#e5ddd5] max-sm:border-0 max-sm:w-full">
            <SlidesList {...{slide, slidesdata}}/>
          </div>
          <Dots {...{slide, slidesdata, goToSlide}}/>
        </div>
      </>
  );
};

export default Slider;