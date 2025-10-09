"use client";

import { useState } from "react";
import t from "@/app/styles/modules/typography.module.css";
import ServicesCard from "./ServicesCard";
import ServicesAccordion from "./ServicesAccordion";
import PopupPrice from "../../ui/popups/PopupPrice";
import { Button } from "@/app/components/ui/Button";

export default function Services() {
  const [isOpenPrice, setIsOpenPrice] = useState(false);

  const openPriceHandler = () => {
    setIsOpenPrice(true);
  };

  return (
    <section className="bg-darkGreen md:rounded-[3.12rem] md:mx-[1.25rem] pb-[2.5rem] md:pb-[3.12rem] mb-[6.25rem] md:mb-[7.5rem] desk:mb-[9.37rem]">
      <div className="container">
        <h1
          className={`${t.heading} uppercase font-bold text-beige text-right md:text-left py-[2.5rem] md:py-[3.12rem]`}
        >
          Что включено
        </h1>
        <ServicesCard />
        <div className=" mt-[1.25rem] md:mt-[1.87rem] desk:mt-[3.12rem] flex flex-col items-center md:items-end gap-[0.62rem] md:gap-[1.25rem] pb-[1.87rem]">
          <p className={`${t.subtitle} text-beige font-medium text-left`}>
            Возможны дополнительные услуги
          </p>
          <Button onClick={openPriceHandler}>
            Уточнить стоимость тура<span> →</span>
          </Button>
          <PopupPrice open={isOpenPrice} onOpenChange={() => setIsOpenPrice(!open)} />
        </div>
        <ServicesAccordion />
        <p className="text-beige text-[0.75rem] md:text-[1rem] desk:text-[1.12rem]">
          Путешествие не требует физической подготовки, подходит для семей и
          дружеских компаний (группа от 4 человек)
        </p>
      </div>
    </section>
  );
}
