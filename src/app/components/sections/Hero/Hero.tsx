"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/app/components/ui/Button";
import ProgramPopup from "../../ui/popups/ProgramPopup";
import bg from "@/app/styles/modules/herobg.module.css";
export default function Hero() {
  const [open, setOpen] = useState(false);

  const ProgramPopupHandler = () => {
    setOpen(true);
  };

  return (
    <section
      className={`${bg.heroBg} mx-0 desk:mt-20 desk:mx-20 mb-100 md:mb-120 desk:mb-150 pt-20 md:pt-60 relative min-h-screen`}
      aria-labelledby="hero-title"
    >
      <div className="container mx-auto flex flex-col justify-center min-h-screen">
        <div className="flex gap-10 desk:gap-40 desk:flex-row desk:items-end mb-20 desk:mb-30 md:flex-col flex-col">
          <h1 className="font-bold desk:text-70 md:text-40 text-28 text-center md:text-left leading-[1.2] uppercase text-[#FFFFFF]">
            Сибирь, которую
            <br />
            стоит увидеть
          </h1>
          <p className="font-medium desk:text-22 md:text-18 text-12 text-center md:text-left text-[#FFFFFF]">
            Отдых и рыбалка на Саяно-Шушенском
            <br />
            водохранилище и Саянской реке Кантегир
          </p>
        </div>
        <div
          className="flex flex-col gap-10 md:gap-20 mb-20 md:mb-90 desk:mb-50 items-center md:items-start"
          aria-describedby="cta-hint"
        >
          <Button
            onClick={ProgramPopupHandler}
            className="relative flex items-start desk:w-[28.688rem] md:w-[21.313rem] w-[18.125rem] leading-none"
            type="button"
          >
            Получить программу тура
            <Image
              src="/icons/ui/arrows/arrow-main.svg"
              alt="Стрелка для получения программы тура"
              width={41}
              height={1}
              className="w-[2.563rem] h-[0.5rem] hidden md:block absolute desk:right-35 md:right-30 top-1/2 -translate-y-1/2"
            />
          </Button>
          <ProgramPopup open={open} onOpenChange={() => setOpen(!open)} />
          <p
            id="cta-hint"
            className="font-normal text-12 md:text-14 desk:text-16 text-center md:text-left text-[#FFFFFF]"
          >
            Оставьте контакты — мы пришлем
            <br className="md:hidden" />
            подробное описание
          </p>
        </div>
        <ul className="flex flex-col items-center md:flex-row md:items-stretch md:flex-nowrap gap-10 md:gap-20">
          <li className="w-[18.75rem] md:w-[22.12rem] desk:w-[44.38rem] p-[0.938rem] md:p-20 bg-beige rounded-10 md:rounded-20 desk:rounded-30">
            <div className="flex gap-[1.25rem]">
              <Image
                className="w-[19.063rem] h-[12.25rem] object-cover rounded-20 hidden desk:block shrink-0"
                src="/images/hero/hero-scenery.jpg"
                alt="Панорамный вид на СШГЭС"
                width={305}
                height={196}
              />
              <div className="flex flex-col gap-10 md:gap-40 desk:gap-[3rem] desk:justify-between text-darkGreen">
                <p className="font-semibold text-12 md:text-16 leading-[1.25] text-center md:text-start">
                  Премиальный тур для тех, кто хочет насладиться природой и
                  отдохнуть в комфортных условиях
                </p>
                <p className="font-medium text-center md:text-start text-10 md:text-14 desk:text-18 leading-[1.2]">
                  Панорамные виды, тёплая база, авторская кухня. Заезд на
                  музей-усадьбу В.И. Ленина и экскурсия по окрестностям
                </p>
              </div>
            </div>
          </li>

          <li className="relative w-[18.75rem] md:w-[22.13rem] desk:w-[44.4rem] p-[0.938rem] md:p-20 bg-[url('/icons/ui/figures/card-mobile.svg')] md:bg-[url('/icons/ui/figures/card-tablet.svg')] desk:bg-[url('/icons/ui/figures/card-desk.svg')] bg-no-repeat bg-center bg-cover bg-position-0 md:bg-position-[0,100%] rounded-10 md:rounded-20 desk:rounded-30">
            <div className="flex gap-20 desk:flex-row-reverse h-full">
              <Image
                className="w-[19.06rem] h-[12.25rem] object-cover rounded-20 hidden desk:block shrink-0"
                src="/images/hero/hero-man.jpg"
                alt="Мужчина с уловом"
                width={305}
                height={196}
              />
              <div className="min-h-[5.94rem] flex flex-col md:gap-[4.125rem] desk:gap-[7rem] text-darkGreen">
                <p className="font-semibold text-[0.75rem] md:text-[1rem] leading-[1.25] text-center md:text-start">
                  Приезжайте семьей, в компании друзей или коллег — будет
                  интересно и уютно
                </p>
                <p className="hidden md:block uppercase font-semibold md:text-18 desk:text-20 md:ml-[3.94rem] desk:ml-[4.56rem]">
                  <Link className="underline-animation" href="/#features" aria-label="Узнать больше о туре">
                    Узнать больше
                  </Link>
                </p>
              </div>
            </div>
            <Link
              href="/#features"
              aria-label="Перейти к информации о туре"
              className="absolute left-[7.813rem] bottom-[0.063rem] md:left-[0.063rem] md:bottom-[0.063rem]
             w-[3.125rem] h-[3.125rem] md:w-[3.625rem] md:h-[3.625rem]
             rounded-full bg-sand flex items-center justify-center
             hover:bg-lightGreen transition-colors duration-300 ease-out
             group transform-gpu"
            >
              <Image
                src="/icons/ui/arrows/arrow-main.svg"
                alt="Стрелка для перехода к информации о туре"
                width={30}
                height={8}
                className="w-[1.875rem] h-[0.5rem] origin-center rotate-90 md:rotate-[125deg]
               transition-transform duration-300 ease-out transform-gpu will-change-transform
               group-hover:rotate-[90deg]"
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
