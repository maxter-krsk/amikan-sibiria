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
        className="flex gap-[1.56rem] md:gap-[1.87rem] desk:gap-[3.12rem] items-center pb-[0.93rem] md:pb-[1.25rem] cursor-pointer"
      >
        <span className={`${t.display} uppercase  font-bold text-beige`}>
          Что взять с собой
        </span>
        <span className="text-[1.62rem] md:text-[1.87rem] font-semibold text-white bg-sand rounded-full w-[3.12rem] h-[3.12rem] desk:w-[4rem] desk:h-[4rem] flex items-center justify-center">
          +
        </span>
      </button>
      {isOpen && (
        <div className="w-full border border-sand rounded-[1.87rem] mb-[1.25rem]">
          <p className="text-beige text-[0.75rem] md:-text-[1rem] desk:text-[1.12rem] p-[0.93rem] md:p-[1.25rem] desk:p-[1.87rem]">
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
