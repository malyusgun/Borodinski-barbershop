import Image from "next/image";

const SlideImage: React.FC<{src: string}> = ({src}) => {
  return (
    <>
      <Image src={src} alt="Image of client" className="object-cover max-lg:rounded-full max-lg:w-[80px] max-lg:h-[80px] lg:w-[250px] lg:h-[160px] max-sm:w-[50px] max-sm:h-[50px] max-sm:rounded-none max-sm:mt-5" width={250} height={160}/>
    </>
  );
}

export default SlideImage