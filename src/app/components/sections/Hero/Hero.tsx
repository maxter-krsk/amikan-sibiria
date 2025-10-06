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
      className={`${bg.heroBg} mx-[20px] mb-[150px] pb-[60px] pt-[145px]`}
      aria-labelledby="hero-title"
    >
      <div className="container">
        <div className="desk:flex desk:flex-row desk:items-end desk:mb-[1.87rem] md:flex-col">
          <h1
            id="hero-title"
            className="font-bold text-[70px] leading-[1.2] uppercase text-[#FFFFFF]"
          >
            Сибирь, которую стоит увидеть
          </h1>
          <p className="font-medium text-[22px] text-[#FFFFFF]">
            Отдых и рыбалка на Саяно-Шушенском водохранилище и Саянской реке
            Кантегир
          </p>
        </div>
        <div
          className="flex flex-col gap-[1.25rem] mb-[3.12rem]"
          aria-describedby="cta-hint"
        >
          <Button
            onClick={ProgramPopupHandler}
            className="max-w-[28.75rem]"
            type="button"
          >
            Получить программу тура
          </Button>
          <ProgramPopup open={open} onOpenChange={() => setOpen(!open)} />
          <p id="cta-hint" className="font-normal text-[16px] text-[#FFFFFF]">
            Оставьте контакты — мы пришлем подробное описание
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
