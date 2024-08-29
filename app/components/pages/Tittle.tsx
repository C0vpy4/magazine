import Image from "next/image";

export default function Tittle() {
  return (
    <div className="min-h-screen w-[100%] p-10 flex justify-center items-center relative">
      <div className="text-center z-10">
      <h1 className="text-shadow-glow text-[200px] md:text-[180px] sm:text-[150px] text-[94px] font-sashaoluu ">КРАСКИ У НАС</h1>
    <h2 className="text-shadow-glow text-white mt-2 md:text-[38px] sm:text-[28px] text-[24px] font-sashaoluu">магазин красок и сантехники</h2>
      </div>
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <Image
          src="/Title-back.png"
          width={1235.91}
          height={728.28}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
    </div>
  );
}
