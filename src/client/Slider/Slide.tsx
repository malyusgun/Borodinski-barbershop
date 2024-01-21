import { SlideObj } from "@/types";
import SlideImage from "./SlideImage";
interface SlideProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  slide: SlideObj;
}
const Slide: React.FC<SlideProps> = ({slide}) => {
  return (
    <div className="slide w-full h-full flex sm:items-center gap-[20px] sm:gap-[30px] lg:gap-[70px] sm:max-lg:pl-[30px] sm:pr-[3%]">
      <SlideImage src={slide.url}/>
      <div className="flex flex-col gap-[12px] overflow-hidden">
        <h3 className=" text-[24px] font-bold leading-normal">{slide.title}</h3>
        <p className="leading-normal">{slide.text}</p>
      </div>
    </div>
  );
}

export default Slide;