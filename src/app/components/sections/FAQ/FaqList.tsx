"use client";

import { useState } from "react";
import btn from "@/app/styles/modules/faq-button.module.css";
import { motion, AnimatePresence } from "framer-motion";

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

  const HandleClick = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <motion.button
        className={`${btn.faqButton} relative z-10 w-full text-left`}
        onClick={HandleClick}
        aria-expanded={isOpen}
        animate={{
          borderTopLeftRadius: "1.875rem",
          borderTopRightRadius: "1.875rem",
          borderBottomLeftRadius: isOpen ? 0 : "1.875rem",
          borderBottomRightRadius: isOpen ? 0 : "1.875rem",
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
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
      </motion.button>

      <div className="mb-10">
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="faq-content"
              className="
                relative
                border border-lightGreen border-t-0
                box-border
                z-0
              "
              initial={{ height: 0, opacity: 0, borderRadius: "0 0 0 0" }}
              animate={{
                height: "auto",
                opacity: 1,
                borderBottomLeftRadius: "1.875rem",
                borderBottomRightRadius: "1.875rem",
              }}
              exit={{
                height: 0,
                opacity: 0,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden", willChange: "height, opacity, border-radius" }}
            >
              <div className="p-15 md:p-30">
                <p className="text-darkGreen font-normal text-12 md:text-16 lg:text-18">
                  {descr}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
