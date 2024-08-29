export default function Map() {
  return (
    <div className="flex justify-center items-start flex-col px-[5%] sm:px-[10%] w-[100%] overflow-clip snap-proximity ">
      <h1 className=" text-shadow-glow text-[94px] sm:text-[124px] md:text-[116px] lg:text-[128px] font-sashaoluu text-nowrap opacity-[64%] ">
        ГДЕ МЫ?
      </h1>

      <div className="flex justify-center items-start flex-col gap-[46px] w-[100%] min-h-[100vh] relative ">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Abffa6cc619a20cd5c2413bd999cd3d3f0956a9aae28e4e2f08d1e65b68dc8f06&amp;source=constructor"
          width=""
          height=""
          className=" drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] map w-full h-[584px] "

          frameBorder="0"
        ></iframe>
        <div className="map-text bg-[#333] text-white font-comfortaa flex items-center justify-center rounded-[25px]">
          <h1 className=" w-[100%] text-[32px] md:text-[16px] px-[30px] py-[10px] sm:text-[8px] text-[6px] font-comfortaa text-nowrap opacity-[64%] info-block ">
            МКАД, 41-й километр, 4, стр. 27, Москва Ж12/5
            <br />
            Время работы: ВТ-СБ с 7 по 16 часов
          </h1>
        </div>
      </div>
    </div>
  );
}