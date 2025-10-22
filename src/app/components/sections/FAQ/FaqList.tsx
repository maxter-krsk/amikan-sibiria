"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FaqListProps = {
  name: string;
  descr: string;
  className?: string;
  isOpened?: boolean;
};

export default function FaqList({ name, descr, isOpened }: FaqListProps) {
  const [isOpen, setIsOpen] = useState<boolean>(!!isOpened);

  return (
    <motion.div className="border border-lightGreen rounded-10 md:rounded-20 desk:rounded-30 overflow-hidden mb-10 desk:mb-20 last:mb-0">
      <button
        className="bg-lightGreen cursor-pointer w-full uppercase text-left text-beige font-bold text-14 md:text-24 desk:text-30 px-15 md:px-30 py-15 md:py-25"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
      >
        <div className="flex justify-between items-center">
          {name}
          <span
            className={`bg-sand ml-20 lg:ml-0 rounded-full flex-shrink-0 w-[3.12rem] h-[3.12rem] md:w-[4rem] md:h-[4rem] flex items-center justify-center text-26 md:text-30 font-semibold transition-transform duration-400 transform-gpu will-change-transform ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          >
            +
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="faq-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="border-t border-lightGreen p-15 md:p-20">
              <p className="text-darkGreen font-normal text-12 md:text-16 lg:text-18">
                {descr}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
