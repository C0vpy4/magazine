import Sphere from "./Spheres";

export default function Card() {
  return (
      <div className="relative flex flex-col items-center justify-center w-[100%]">
        <div className="w-[100%] h-[292px] bg-[#FFF] rounded-[25px] opacity-[20%] backdrop-blur-[25%] z-10 "></div>
        <Sphere />
      </div>
  );
}
