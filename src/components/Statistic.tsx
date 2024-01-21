export default function Statistics() {
  return (
    <section className="sm:-mt-[320px] lg:-mt-[161px] relative z-10 sm:max-lg:pt-[80px]">
      <div
        className="_container"
      >
        <div className="max-sm:flex max-sm:flex-col sm:grid statistics__body max-sm:-mx-[20px]">
          <div
            className="statistics__cell white-cell p-[25px] pb-[35px] sm:pr-[85px] lg:pr-[25px] flex flex-col justify-between max-sm:h-[183px] max-sm:px-[20px]"
          >
            <div className="flex flex-col sm:max-lg:flex-row max-sm:items-center max-sm:text-center lg:gap-[34px] justify-between">
              <h1 className="text-[40px] font-bold leading-none w-[205px] max-sm:text-[30px] max-sm:uppercase max-sm:mb-[13px]">Стрижка у нас это выгодно!</h1>
              <p className="text-[20px] leading-snug sm:w-[205px]">
                Мужская стрижка требует точного подхода. Обратимся к статистике:
              </p>
            </div>
            <span
              className="inline-block text-[20px] leading-snug opacity-30 py-[17px] lg:py-[30px] max-sm:absolute -bottom-[60px] left-0 max-sm:w-full text-center max-sm:text-white max-sm:opacity-30"
            >
              * — приведённые данные ложь
            </span>
          </div>
          <div
            className="statistics__cell common-cell-first p-[25px] pb-[30px] max-sm:p-0 max-sm:px-[20px]"
          >
            <div className="text-[40px] md:text-[72px] font-bold">
              1500*
            </div>
            <div className="text-[20px] leading-snug max-sm:text-[18px] max-sm:text-end max-sm:w-min">рублей вложений</div>
          </div>
          <div
            className="statistics__cell light-gray-cell p-[25px] pb-[30px] max-sm:p-0 max-sm:px-[20px]"
          >
            <div className="text-[40px] md:text-[72px] font-bold">
              7 200
            </div>
            <div className="text-[20px] leading-snug max-sm:text-[18px] max-sm:text-end max-sm:w-min">секунд времени мастера</div>
          </div>
          <div
            className="statistics__cell dark-gray-cell p-[25px] pb-[30px] max-sm:p-0 max-sm:px-[20px]"
          >
            <div className="text-[40px] md:text-[72px] font-bold">
              90 000
            </div>
            <div className="text-[20px] leading-snug max-sm:text-[18px] max-sm:text-end max-sm:w-min">постриженных волос</div>
          </div>
          <div
            className="statistics__cell common-cell-second p-[25px] pb-[30px] max-sm:p-0 max-sm:px-[20px]"
          >
            <div className="text-[40px] md:text-[72px] font-bold">
              500 000*
            </div>
            <div className="text-[20px] leading-snug max-sm:text-[18px] max-sm:text-end max-sm:w-min">лайков и комплиментов</div>
          </div>
        </div>
      </div>
    </section>
  );
}