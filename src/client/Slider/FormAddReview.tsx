import { FormAddReviewProps } from "@/types";
import { useInput } from "@/utils/useInput";
import clsx from "clsx";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const FormAddReview: React.FC<FormAddReviewProps> = ({
  slidesdata,
  reviewForm,
  setReviewForm,
}) => {
  const [messageVisible, setMessageVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState('')
  const formReview = useRef(null);
  const { register, watch } = useForm();
  const inputImage = useRef<HTMLInputElement | null>(null);
  const name = useInput("name", "", { isEmpty: true, minLength: 3 });
  const review = useInput("review", "", { isEmpty: true, minLength: 5 });

  const postReview = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    slidesdata.slides.push({
      url: imageUrl ? imageUrl : '/img/review/noname.jpg',
      title: name.value,
      text: review.value,
    });
    slidesdata.count++;
    name.setValue("");
    review.setValue("");
    name.setDirty(false);
    review.setDirty(false);
    setMessageVisible(true);
    setTimeout((e) => {
      setMessageVisible(false);
    }, 5000);
    setImageUrl('');
    if (inputImage.current) {
      inputImage.current.value = '';
    }
  };

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 z-20 w-full h-full bg-black bg-opacity-50",
        {
          'hidden': !reviewForm,
          'block': reviewForm,
        }
      )}
      ref={formReview}
      onClick={(e) => {
        if (e.target === formReview.current) setReviewForm(false);
      }}
    >
      <div className={clsx("relative translate-y-1/2 mx-auto w-max h-[370px]  bg-bgcolor py-[15px] px-[60px]",
      {
        'animate-descent': reviewForm
      })}>
        <h2 className="text-[32px] font-bold w-max my-[30px] mx-auto">
          Добавьте свой отзыв
        </h2>
        <form method="post" encType="multipart/form-data">
          <div className="my-[20px] flex justify-between relative">
            <label className="text-[20px] mr-[30px]" htmlFor="name">
              Ваше имя:
            </label>
            {name.isDirty && name.error && (
              <div className="text-red-600 absolute -top-[15px] left-[165px] font-bold text-[14px] ">
                {name.error}
              </div>
            )}
            <input
              className="w-[300px] border-[1px] border-solid border-black rounded-[5px] py-[2px] px-[5px] resize-none bg-bgcolor"
              type="text"
              placeholder="Имя"
              id="name"
              value={name.value}
              onBlur={() => name.onBlur()}
              onChange={(e) => name.onChange(e)}
            />
          </div>
          <div className="my-[20px] flex justify-between relative">
            <label className="text-[20px] mr-[30px]" htmlFor="review">
              Ваши впечатления:
            </label>
            {review.isDirty && review.error && (
              <div className="text-red-600 absolute -top-[15px] left-[165px] font-bold text-[14px]">
                {review.error}
              </div>
            )}
            <textarea
              className="w-[300px] border-[1px] border-solid border-black rounded-[5px] py-[2px] px-[5px] resize-none bg-bgcolor"
              placeholder="Текст отзыва"
              id="review"
              rows={7}
              value={review.value}
              onBlur={() => review.onBlur()}
              onChange={(e) => review.onChange(e)}
            />
          </div>
          <label className="cursor-pointer">
            <span className="inline-block border-[1px] border-solid border-black bg-black text-white p-3 cursor-pointer">{inputImage?.current?.files && inputImage.current.files.length > 0 ? inputImage.current.files[0].name : 'Выбрать файл'}</span>
            <input
              type="file"
              accept="image/*"
              ref={inputImage}
              onChange={(e) => { if (e.target.files) {
                setImageUrl(URL.createObjectURL(e.target.files[0]));
              }}}
              className="hidden"
            />
          </label>
          <span style={{ display: messageVisible ? "inline" : "none", paddingLeft: '5px' }}>
            Ваш отзыв опубликован на сайте.
          </span>
          <button
            className={clsx(
              "w-[100px] p-[10px] text-white font-bold text-[20px] float-right bg-black",
              {
                "opacity-30": Boolean(name.error || review.error),
              }
            )}
            disabled={Boolean(name.error || review.error)}
            onClick={(e) => postReview(e)}
          >
            Отправить
          </button>
        </form>
        <div
          className="text-[60px] leading-[0.5] font-bold absolute right-[15px] top-[15px] cursor-pointer"
          onClick={() => setReviewForm(false)}
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default FormAddReview;
