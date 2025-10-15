"use client";

import { useState } from "react";
import btn from "@/app/styles/modules/faq-button.module.css";

type FaqListProps = {
  name: string;
  descr: string;
  className?: string;
  isOpened?: boolean;
};

export default function FaqList({
  name,
  descr,
  className,
  isOpened,
}: FaqListProps) {
  const [isOpen, setIsOpen] = useState<boolean>(!!isOpened);

  const HandleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button className={btn.faqButton} onClick={HandleClick}>
        <div className="flex justify-between items-center">
          {name}
          <span className={`bg-sand rounded-full flex-shrink-0 w-[3.12rem] h-[3.12rem] md:w-[4rem] md:h-[4rem] flex items-center justify-center text-26 md:text-30 font-semibold transition-transform duration-400 transform-gpu will-change-transform ${isOpen ? "rotate-45" : "rotate-0"}`}>
            +
          </span>
        </div>
      </button>
      {isOpen && (
        <div>
          <p className="text-darkGreen font-normal mb-10 desk:mb-20 pt-50 pb-10 px-10 md:pb-20 md:px-20 lg:pt-60 lg:pb-30 lg:px-30 border border-lightGreen rounded-bl-[0.625rem] rounded-br-[0.625rem] md:rounded-bl-[1.25rem] md:rounded-br-[1.25rem] desk:rounded-bl-[1.87rem] desk:rounded-br-[1.87rem] -mt-50 text-12 md:text-16 lg:text-18">
            {descr}
          </p>
        </div>
      )}
    </div>
  );
}
