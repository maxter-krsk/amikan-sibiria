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
      className={`${bg.heroBg} mx-0 desk:mt-[1.25rem] desk:mx-[1.25rem] mb-[9.38rem] pb-[3.75rem] pt-[9.06rem] relative`}
      aria-labelledby="hero-title"
    >
      <div className="container">
        <div className="flex gap-[0.62rem] desk:flex-row desk:items-end mb-[1.25rem] desk:mb-[1.87rem] md:flex-col flex-col">
          <h1 className="font-bold desk:text-[4.38rem] md:text-[2.5rem] text-[1.75rem] text-center md:text-left leading-[1.2] uppercase text-[#FFFFFF]">
            Сибирь, которую
            <br />
            стоит увидеть
          </h1>
          <p className="font-medium desk:text-[1.38rem] md:text-[1.12rem] text-[0.75rem] text-center md:text-left text-[#FFFFFF]">
            Отдых и рыбалка на Саяно-Шушенском
            <br />
            водохранилище и Саянской реке Кантегир
          </p>
        </div>
        <div
          className="flex flex-col gap-[0.62rem] md:gap-[1.25rem] mb-[6.87rem] md:mb-[5.62rem] desk:mb-[3.12rem] items-center md:items-start"
          aria-describedby="cta-hint"
        >
          <Button
            onClick={ProgramPopupHandler}
            className="desk:w-[28.68rem] md:w-[21.31rem] w-[18.12rem] pr-[1.87rem] md:text-[0.87rem]"
            type="button"
          >
            Получить программу тура
          </Button>
          <ProgramPopup open={open} onOpenChange={() => setOpen(!open)} />
          <p
            id="cta-hint"
            className="font-normal text-[0.75rem] md:text-[0.87rem] desk:text-[1rem] text-center md:text-left text-[#FFFFFF]"
          >
            Оставьте контакты — мы пришлем
            <br className="md:hidden" />
            подробное описание
          </p>
        </div>
        <ul className="flex flex-col items-center md:flex-row md:items-stretch md:flex-nowrap gap-[0.62rem] md:gap-[1.25rem]">
          <li className="w-[18.75rem] md:w-[22.12rem] desk:w-[44.38rem] p-[0.93rem] md:p-[1.25rem] bg-beige rounded-[0.62rem] md:rounded-[1.25rem] desk:rounded-[1.87rem]">
            <div className="flex gap-[1.25rem]">
              <Image
                className="w-[19.06rem] h-[12.25rem] object-cover rounded-[1.25rem] hidden desk:block shrink-0"
                src="/images/hero/hero-scenery.jpg"
                alt="Панорамный вид на СШГЭС"
                width={305}
                height={196}
              />
              <div className="flex flex-col gap-[0.62rem] md:gap-[2.5rem] desk:justify-between text-darkGreen">
                <p className="font-semibold text-[0.75rem] md:text-[1rem] leading-[1.25] text-center md:text-start [text-wrap:balance]">
                  Премиальный тур для тех, кто хочет насладиться природой и
                  отдохнуть в комфортных условиях
                </p>
                <p className="font-medium text-center md:text-start text-[0.62rem] md:text-[0.87rem] desk:text-[1.12rem] leading-[1.2] whitespace-normal break-words [hyphens:auto]">
                  Панорамные виды, тёплая база, авторская кухня. Заезд на
                  музей-усадьбу В.И. Ленина и экскурсия по окрестностям
                </p>
              </div>
            </div>
          </li>

          <li className="w-[18.75rem] md:w-[22.12rem] desk:w-[44.38rem] p-[0.93rem] md:p-[1.25rem] bg-beige rounded-[0.62rem] md:rounded-[1.25rem] desk:rounded-[1.87rem]">
            <div className="flex gap-[1.25rem] desk:flex-row-reverse h-full">
              <Image
                className="w-[19.06rem] h-[12.25rem] object-cover rounded-[1.25rem] hidden desk:block shrink-0"
                src="/images/hero/hero-man.jpg"
                alt="Панорамный вид на СШГЭС"
                width={305}
                height={196}
              />
              <div className="flex flex-col justify-between text-darkGreen">
                <p className="font-semibold text-[0.75rem] md:text-[1rem] leading-[1.25] text-center md:text-start [text-wrap:balance]">
                  Приезжайте семьей, в компании друзей или коллег — будет
                  интересно и уютно
                </p>
                <p className="hidden md:block uppercase font-semibold md:text-[1.12rem] desk:text-[1.25rem]">
                  <Link href="/" aria-label="Узнать больше о туре">
                    Узнать больше
                  </Link>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
