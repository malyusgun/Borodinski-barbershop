import { SlideObj, SlidesList } from "@/types";
import Slide from "./Slide";

const SlidesList: React.FC<SlidesList> = ({slide, slidesdata}) => {
  return (
    <div
      className="flex transition-all duration-500 items-center h-full"
      style={{width: `${slidesdata.slides.length * 100}%`, 
      transform: `translateX(-${slide * (100 / slidesdata.slides.length)}%)` }}
    >
      {slidesdata.slides.map((slide:SlideObj, index: number) => (
        <Slide key={index} slide={slide}/>
      ))}
    </div>
  );
}

export default SlidesList