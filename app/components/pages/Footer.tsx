import Image from "next/image";

export default function Footer() {
  return (
    <div className="text-white p-5">
      <div className="flex justify-between items-start w-full flex-col sm:flex-row">
        <div className="flex flex-col">
          <h2 className="text-[36px] sm:text-[46px] md:text-[50px] lg:text-[65px] font-sashaoluu text-nowrap">КОНТАКТЫ</h2>
          <div className="text-[24px] sm:text-[34px] md:text-[40px] lg:text-[55px] font-sashaoluu text-nowrap">
          <p>+7 999 867 23 45</p>
          <p>smirsallereg@gmail.com</p>
          <p>hzcompany@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[36px] sm:text-[46px] md:text-[50px] lg:text-[65px] font-sashaoluu text-nowrap">НАВИГАЦИЯ</h2>
          <div className="text-[24px] sm:text-[34px] md:text-[40px] lg:text-[55px] font-sashaoluu text-nowrap">
          <p>Главная</p>
          <p>Фильмы</p>
          <p>Форма</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-[36px] sm:text-[46px] md:text-[50px] lg:text-[65px] font-sashaoluu text-nowrap">СОЦ. СЕТИ</h2>
          <div>
            <Image
              src="/TikTok.png"
              width={46}
              height={46}
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>
          <div>
            <Image
              src="/Twitter.png"
              width={46}
              height={46}
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>
          <div>
            <Image
              src="/Facebook.png"
              width={46}
              height={46}
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full mt-5">
        <p className="font-sashaoluu text-[24px]">
          Краски у нас
        </p>
        <p className="text-shadow-glow font-sashaoluu text-[24px]">
          By Hz company
        </p>
      </div>
    </div>
  );
}
