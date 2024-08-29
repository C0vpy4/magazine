import Sphere from "./Spheres";
import Image from "next/image";

export default function Card() {
  return (
    <div className="relative flex flex-col items-center justify-center w-[100%] ">
      <div className="w-[100%] h-[292px] bg-[#FFF] rounded-[25px] opacity-[20%] backdrop-blur-[25%] z-10 "></div>
      <div className="z-20 absolute text-center font-comfortaa flex justify-center items-center flex-col gap-5 ">
      <Image
              src="/Image.png"
              width={127}
              height={138}
              alt="Screenshots of the dashboard project showing desktop version"
            />
        <div className=" text-white flex gap-[5%]  text-2xl md:text-xl text-nowrap  ">
          <div className="">Краска Delux </div>
          <div className="">4.5☆</div>
        </div>
        <button className="group text-base underline bg-[#FFF] bg-opacity-10 h-7 w-32 rounded-3xl hover:bg-opacity-15 transition-all"><div className="opacity-50 group-hover:opacity-75">Купить</div></button>
      </div>
      <Sphere />
    </div>
  );
}
