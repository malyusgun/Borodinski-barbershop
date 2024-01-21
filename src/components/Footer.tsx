import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#292929] text-white relative">
      <div className="_container pt-[77px] pb-[25px] sm:py-[50px] flex sm:max-mb:justify-between sm:max-mb:pb-[205px] max-sm:flex-col max-sm:gap-[27px]">
        <div className="sm:mr-[50px] lg:mr-[90px] sm:w-[318px]">
          <h2 className="font-bold uppercase mb-[25px] max-sm:text-center">Барбершоп Бородинский</h2>
          <p className="max-sm:text-center">
            г. Санкт-Петербург, ул. Большая Конюшенная 19/8 </p>
            <span className="max-sm:hidden">Тел.: </span>
            <span className="max-sm:block max-sm:w-full max-sm:py-[12px] max-sm:mt-[17px] max-sm:border-[1px] border-solid border-[#4A4A4A] max-sm:text-center">+7 (812)
              555-66-66
            </span>
        </div>
        <div className="mr-auto sm:max-mb:absolute max-mb:bottom-[60px] left-0 sm:max-mb:w-full max-mb:px-[64px] max-[700px]:px-[20px] max-sm:px-0 max-sm:-mx-[20px]">
          <p className="mb-[13px] text-center max-mb:hidden">Давайте дружить!</p>
          <ul className="flex max-mb:w-full">
            <li className="contacts__link-item max-mb:w-1/3 max-mb:h-[101px]">
              <a
                className="contacts__link max-mb:w-full max-mb:h-[101px]"
                href="https://vk.com/im"
                target="_blank"
              >
                <Image
                  src="img/footer/vk-icon.svg"
                  alt=""
                  width={15}
                  height={17}
                  className="max-mb:w-[23px] max-mb:h-[26px]"
                />
              </a>
            </li>
            <li className="contacts__link-item  max-mb:w-1/3 max-mb:h-[101px]">
              <a
                className="contacts__link max-mb:w-full max-mb:h-[101px]"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <Image
                  src="img/footer/youtube-icon.svg"
                  alt=""
                  width={19}
                  height={19}
                  className="max-mb:size-[36px]"
                />
              </a>
            </li>
            <li className="contacts__link-item  max-mb:w-1/3 max-mb:h-[101px]">
              <a
                className="contacts__link max-mb:w-full max-mb:h-[101px]"
                href="https://web.telegram.org/a/"
                target="_blank"
              >
                <Image
                  src="img/footer/telegram-icon.svg"
                  alt=""
                  width={19}
                  height={19}
                  className="max-mb:size-[36px]"
                />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-center">Разработано:</h2>
          <span className="author-name inline-block text-center mt-[13px] max-sm:w-full">HTML ACADEMY</span>
        </div>
      </div>
    </footer>
  )
}