'use client'

import { useState } from "react";
import AddReview from "@/client/Slider/AddReview";
import Slider from "./Slider";
import { slides } from "@/utils/SlidesData";
import FormAddReview from "@/client/Slider/FormAddReview";

const Reviews = () => {
  const [reviewForm, setReviewForm] = useState<boolean>(false)
  const [ slidesdata ] = useState({slides: slides, count: 3});
  return (
    <section className="reviews pt-[27px] sm:pt-[37px] relative">
      <div className="_container">
        <div className="mb-[37px] max-sm:mb-[28px] header-block max-sm:justify-center">
          <h2 className="header-title max-sm:text-[30px] max-sm:text-center">ОТЗЫВЫ О НАС</h2>
          <AddReview setReviewForm={setReviewForm} />
        </div>
        <Slider slidesdata={slidesdata}/>
      </div>
      <FormAddReview {...{slidesdata, reviewForm, setReviewForm}}/>
    </section>
  );
}

export default Reviews