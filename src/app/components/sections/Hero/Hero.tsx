"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import t from "@/app/styles/modules/typography.module.css";
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
      className={`${bg.heroBg} mx-0 desk:mt-[1.25rem] desk:mx-[1.25rem]  mb-[150px] pb-[60px] pt-[145px] relative`}
      aria-labelledby="hero-title"
    >
      <div className="container">
        <div className="flex gap-[0.62rem] desk:flex-row desk:items-end mb-[1.25rem] desk:mb-[1.87rem] md:flex-col flex-col">
          <h1 className="font-bold desk:text-[70px] md:text-[40px] text-[28px] text-center md:text-left leading-[1.2] uppercase text-[#FFFFFF]">
            Сибирь, которую<br/>стоит увидеть
          </h1>
          <p className="font-medium desk:text-[22px] md:text-[18px] text-[12px] text-center md:text-left text-[#FFFFFF]">
            Отдых и рыбалка на Саяно-Шушенском<br/>водохранилище и Саянской реке Кантегир
          </p>
        </div>
        <div
          className="flex flex-col gap-[0.62rem] md:gap-[1.25rem] mb-[3.12rem] items-center md:items-start"
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
          <p id="cta-hint" className="font-normal text-[0.75rem] md:text-[0.87rem] desk:text[1rem] text-center md:text-left text-[#FFFFFF]">
            Оставьте контакты — мы пришлем<br className="md:hidden"/>подробное описание
          </p>
        </div>
        <ul className="flex gap-[1.25rem]">
          <li className="p-[20px] flex gap-[1.25rem] bg-beige rounded-[30px] max-w-[710px]">
            <Image
              className="rounded-[20px]"
              src="/images/hero/hero-scenery.jpg"
              alt="Панорамный вид на СШГЭС"
              width={305}
              height={196}
            />
            <div className="flex flex-col gap-[48px] text-darkGreen">
              <p className="leading-5">
                <strong className="font-semibold text-[16px]">
                  Премиальный тур для тех, кто хочет насладиться природой и
                  отдохнуть в комфортных условиях
                </strong>
              </p>
              <p className="font-medium text-[18px] leading-6">
                Панорамные виды, тёплая база, авторская кухня. Заезд на
                музей-усадьбу В.И. Ленина и экскурсия по окрестностям
              </p>
            </div>
          </li>

          <li className="p-[20px] flex flex-row-reverse gap-[1.25rem] bg-beige rounded-[30px] max-w-[670px]">
            <Image
              className="rounded-[20px]"
              src="/images/hero/hero-man.jpg"
              alt="Панорамный вид на СШГЭС"
              width={305}
              height={196}
            />
            <div className="flex flex-col justify-between gap-[112px] text-darkGreen">
              <p className="leading-5 max-w-[340px]">
                <strong className="font-semibold text-[16px]">
                  Приезжайте семьей, в компании друзей или коллег — будет
                  интересно и уютно
                </strong>
              </p>
              <p className="uppercase font-semibold text-[20px]">
                <Link href="/" aria-label="Узнать больше о туре">
                  Узнать больше
                </Link>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
