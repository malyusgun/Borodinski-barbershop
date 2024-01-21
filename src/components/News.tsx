import clsx from "clsx";

export default function News() {
  const dates = [
    {
      day: 29,
      month: "сент",
    },
    {
      day: 19,
      month: "сент",
    },
    {
      day: 9,
      month: "сент",
    },
  ];
  const descriptions = [
    "Нам наконец завезли Ягермайстер! Теперь вы можете пропусить стаканчик во время стрижки.",
    "В нашей команде пополнение, Борис «Бритва» Стригунец, пополнил наши стройные ряды. Спешите записаться!",
    "Все дорожает, а наши стрижки нет! Как так? Приходите, постригитесь и узнаете, в чем здесь подвох!",
  ];
  return (
    <section className="pt-[128px] lg:pt-[120px] sm:border-b-[1px] border-solid border-[#e5ddd5] max-sm:mb-[28px]">
      <div className="_container relative">
        <div className="mb-[60px] header-block max-sm:mb-[27px]">
          <h2 className="header-title max-sm:text-[30px]">НОВОСТИ И АКЦИИ</h2>
        </div>
        <div className="flex justify-center items-center pb-[13px] md:pb-[40px] max-sm:flex-col">
          {descriptions.map((text, i) => {
            return (
              <div
                key={text[2]}
                className={clsx("flex-[0_1_50%] lg:flex-[0_1_33.333%] pr-[45px] flex justify-start items-center gap-[20px] max-sm:py-[18px]", {
                  'max-lg:hidden': i === descriptions.length - 1,
                  'max-sm:border-b-[1px] max-sm:border-solid max-sm:border-[#E5DDD5]': i === 0
                })}
              >
                <div className="item-new__date">
                  <span className="block text-white text-center text-[30px] font-bold leading-none mt-[5px]">
                    {dates[i].day}
                  </span>
                  <span className="block text-white text-center text-[16px] leading-none mb-[10px] uppercase">
                    {dates[i].month}
                  </span>
                </div>
                <div className="item-new__text">{text}</div>
              </div>
            );
          })}
        </div>
        <button className="header-button sm:absolute min-[700px]:right-[64px] sm:right-[20px] sm:top-0 max-sm:w-full">
            <span>показать все</span>
          </button>
      </div>
    </section>
  );
}
