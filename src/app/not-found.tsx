import Image from "next/image";
import { Button } from "@/app/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-darkGreen">
      <div className="container flex flex-col items-center text-center pt-[206px] md:pt-[100px] desk:pt-[144px] pb-[216px] md:pb-[90px] desk:pb-[120px]">
        <Image
          src="/images/error-page/error-404.svg"
          alt="Изображение с 404 ошибкой"
          width={1042}
          height={540}
          className="w-[297px] h-[150px] md:w-[728px] md:h-[380px] desk:w-[1042px] desk:h-[400S px] mx-auto object-contain"
        />
        <p className="text-[#FFFFFF] text-[18px] md:text-[22px] font-medium">Страница не найдена</p>
        <Button
          className="mt-[20px] md:mt-[30px]"
          href="/"
        >
          Вернуться на главную
        </Button>
      </div>
    </section>
  );
}
