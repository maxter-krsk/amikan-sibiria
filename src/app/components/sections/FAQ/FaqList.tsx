"use client";

import { useState } from "react";
import t from "@/app/styles/modules/typography.module.css";
import btn from "@/app/styles/modules/faq-button.module.css";

type FaqListProps = {
  name: string;
  descr: string;
  className?: string;
};

export default function FaqList({ name, descr, className }: FaqListProps) {
  const [isOpen, setIsOpen] = useState(false);

  const HandleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        className={`${btn.faqButton}`}
        onClick={HandleClick}
      >
        <div className="flex justify-between items-center">
          {name}
          <span className="bg-sand rounded-full w-[4rem] h-[4rem] flex items-center justify-center text-[1.87rem]">
            +
          </span>
        </div>
      </button>
      {isOpen && (
        <div>
          <p
            className={`${t["body-lg"]} text-darkGreen font-normal mb-[1.25rem] pt-[3rem] p-[1.87rem] border border-lightGreen rounded-bl-[1.87rem] rounded-br-[1.87rem] -mt-[3rem]`}
          >
            {descr}
          </p>
        </div>
      )}
    </div>
  );
}
