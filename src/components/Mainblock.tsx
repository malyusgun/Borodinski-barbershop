import Image from "next/image";

export default function Mainblock() {
  return (
    <div className="relative max-sm:hidden">
      <div className="_container">
        <div className="pb-[440px] pt-[55px] relative max-lg:h-[100px]">
          <Image className="block mx-auto max-lg:h-[100px] object-cover object-top" src="/img/mainblock/logo.svg" alt="logo" width={374} height={153}/>
        </div>
      </div>
      <div className="_ibg absolute w-full h-auto left-0 top-0 -z-10">
        <Image src="/img/mainblock/cover.jpg" alt="" fill={true} priority={true}/>
      </div>
    </div>
  );
}