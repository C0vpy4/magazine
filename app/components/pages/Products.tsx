import Card from "./attributs/Card";

export default function Products() {
  return (
    <div className="flex justify-center items-start flex-col px-[5%] sm:px-[10%] w-[100%]">
      <h1 className="text-shadow-glow text-[94px] sm:text-[124px] md:text-[116px] lg:text-[128px] font-sashaoluu text-nowrap opacity-[64%]">
        TOVARU
      </h1>
      <div className="w-[100%]">
        <div className=" relative w-[100%] flex flex-row gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
