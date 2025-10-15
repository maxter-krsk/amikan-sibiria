import Image from "next/image";
import { Button } from "@/app/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-darkGreen">
      <div className="container flex flex-col items-center text-center pt-[12.875rem] md:pt-100 desk:pt-[9rem] pb-[13.5rem] md:pb-90 desk:pb-120">
        <Image
          src="/images/error-page/error-404.svg"
          alt="Изображение с 404 ошибкой"
          width={1042}
          height={676}
          className="block bg-darkGreen w-[18.5625rem] h-[9.375rem] md:w-[45.5rem] md:h-[23.75rem] desk:w-[65.125rem] desk:h-[25rem] mx-auto"
        />
        <p className="text-[#FFFFFF] text-18 md:text-22 font-medium">
          Страница не найдена
        </p>
        <Button className="mt-20 md:mt-30" href="/">
          Вернуться на главную
        </Button>
      </div>
    </section>
  );
}
