'use client'

import { useState } from "react";
import Slider from "./Slider";

export default function Advantages() {
  const imagesUrl = [
    "img/advantages/01.svg",
    "img/advantages/02.svg",
    "img/advantages/03.svg",
  ];
  const titles = ["БЫСТРО", "КРУТО", "ДОРОГО"];
  const descriptions = [
    "Мы делаем свою работу быстро! Два часа пролетят незаметно и вы - счастливый обладатель стильной стрижки-минутки",
    "Забудьте, как вы стриглись раньше. Мы сделаем из вас звезду футбола или кино. Во всяком случае внешне.",
    "Наши мастера — профессионалы своего дела не могут стоить дёшево. К тому же, разве цена не даёт определённый статус?",
  ];
  const slides = descriptions.map((text, i) => {
    return {
      url: imagesUrl[i],
      title: titles[i],
      text: text
    }
  })
  const [ slidesdata ] = useState({slides: slides, count: 3});
  return (
    <div className="bg-[#242424] sm:bg-[#353535] -mt-[320px] lg:-mt-[160px] pt-[320px] lg:pt-[208px] relative advantages">
      <div className="_container">
        <div className="flex flex-col lg:flex-row justify-center items-center max-sm:hidden">
          {imagesUrl.map((imgUrl, i) => {
            return (
              <div key={imgUrl} className="advantages__item lg:flex-col">
                <img src={imgUrl} alt="" className="w-[95px]" />
                <div className='text-start lg:text-center'>
                  <h3 className="font-bold text-[30px] text-white uppercase leading-none pb-4">
                    {titles[i]}
                  </h3>
                  <p className="text-white text-[20px] leading-snug">
                    {descriptions[i]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="advantages-slider sm:hidden relative text-white">
          <Slider slidesdata={slidesdata}/>
        </div>
      </div>
    </div>
  );
}
