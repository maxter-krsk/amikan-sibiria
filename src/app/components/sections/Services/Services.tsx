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
    <section id="about" className="bg-darkGreen md:rounded-[3.12rem] md:mx-20 pb-40 md:pb-50 mb-100 scroll-mt-100 md:mb-120 md:scroll-mt-120 desk:mb-150 desk:scroll-mt-150">
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
          <Button
            className="flex justify-center items-center md:gap-10 lg:gap-20"
            onClick={openPriceHandler}
          >
            Уточнить стоимость тура
            <svg
              width="42"
              height="8"
              viewBox="0 0 42 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:block"
            >
              <path
                d="M41.3536 4.35355C41.5488 4.15829 41.5488 3.84171 41.3536 3.64645L38.1716 0.464466C37.9763 0.269204 37.6597 0.269204 37.4645 0.464466C37.2692 0.659728 37.2692 0.976311 37.4645 1.17157L40.2929 4L37.4645 6.82843C37.2692 7.02369 37.2692 7.34027 37.4645 7.53553C37.6597 7.7308 37.9763 7.7308 38.1716 7.53553L41.3536 4.35355ZM0 4V4.5H41V4V3.5H0V4Z"
                fill="white"
              />
            </svg>
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
