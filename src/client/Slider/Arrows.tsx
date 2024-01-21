import { ArrowsProps } from "@/types";

const Arrows:React.FC<ArrowsProps> = ({moveSlides}) => {
  return (
    <div className="absolute top-0 left-0 flex justify-between w-full max-sm:hidden">
      <button
        className="slider-button"
        onClick={() => moveSlides(-1)}
      ></button>
      <button
        className="slider-button button-right"
        onClick={() => moveSlides(1)}
      ></button>
    </div>
  );
}

export default Arrows;