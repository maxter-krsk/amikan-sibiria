"use client";

import t from "@/app/styles/modules/typography.module.css";
import { useState } from "react";

export default function ServicesAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center md:items-start">
      <button
        onClick={handleOnClick}
        className="flex gap-25 md:gap-30 desk:gap-50 items-center pb-15 md:pb-20 cursor-pointer"
      >
        <span className={`${t.display} uppercase font-bold text-beige`}>
          Что взять с собой
        </span>
        <span className="text-26 md:text-30 font-semibold text-white bg-sand rounded-full w-[3.12rem] h-[3.12rem] desk:w-[4rem] desk:h-[4rem] flex items-center justify-center">
          +
        </span>
      </button>
      {isOpen && (
        <div className="w-full border border-sand rounded-[1.87rem] mb-20">
          <p className="text-beige text-12 md:-text-16 desk:text-18 p-15 md:p-20 desk:p-30">
            Рюкзак, солнцезащитные очки, личная аптечка, средства личной
            гигиены, дождевик, лёгкий пуховик, головной убор, термобельё,
            флисовая одежда, футболки, рабочие и тёплые перчатки, носки, бафф,
            вейдерсы, сандалии для бани, нож, накомарник, репелленты (3 баллона
            на человека)
          </p>
        </div>
      )}
    </div>
  );
}
