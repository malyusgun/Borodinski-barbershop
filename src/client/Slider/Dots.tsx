import { DotsProps } from '@/types';
import {clsx} from 'clsx'

const Dots: React.FC<DotsProps> = ({slide, slidesdata, goToSlide}) => {
  const dots = [];
  for (let i = 0; i < slidesdata.count; i++) {
    dots.push(i)
  }
  return (
    <div className="dots-container mx-auto mb-[18px] sm:mb-[46px] flex gap-[23px] w-max px-[25px] bg-bgcolor relative z-10 max-sm:mt-[25px] max-lg:-mt-[45px]">
      { dots.map((i) => <div className={clsx('dot w-[7px] h-[7px] border-solid border-black border-[1px] rotate-45 cursor-pointer', {
        'bg-black': i === slide,
        'bg-white': i === slide && slidesdata.slides[0].title === 'БЫСТРО',
        'border-white': slidesdata.slides[0].title === 'БЫСТРО'
      })}
      key={i} onClick={() => goToSlide(i)}></div>)}
    </div>
  )
}

export default Dots