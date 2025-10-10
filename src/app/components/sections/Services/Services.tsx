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
    <section className="bg-darkGreen md:rounded-[3.12rem] md:mx-20 pb-40 md:pb-50 mb-100 md:mb-120 desk:mb-150">
      <div className="container">
        <h1
          className={`${t.heading} uppercase font-bold text-beige text-right md:text-left py-40 md:py-50`}
        >
          Что включено
        </h1>
        <ServicesCard />
        <div className="mt-20 md:mt-30 desk:mt-50 flex flex-col items-center md:items-end gap-10 md:gap-20 pb-30">
          <p className="text-beige font-medium text-left text-14 md:text-18 desk:text-20">
            Возможны дополнительные услуги
          </p>
          <Button onClick={openPriceHandler}>
            Уточнить стоимость тура<span> →</span>
          </Button>
          <PopupPrice
            open={isOpenPrice}
            onOpenChange={() => setIsOpenPrice(!open)}
          />
        </div>
        <ServicesAccordion />
        <p className="text-beige text-12 md:text-16 desk:text-18">
          Путешествие не требует физической подготовки, подходит для семей и
          дружеских компаний (группа от 4 человек)
        </p>
      </div>
    </section>
  );
}
