"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/Button";
import { IconLink } from "@/app/components/ui/socials/IconLink";
import t from "@/app/styles/modules/typography.module.css";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

type BurgerMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const panelAnimation = {
  hidden: { x: "100%", opacity: 0, scale: 0.98 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    x: "100%",
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
} as const satisfies Variants;

const overlayAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.5,
    transition: { duration: 0.25, ease: "linear" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "linear" },
  },
} as const satisfies Variants;

export default function BurgerMenu({ isOpen, toggleMenu }: BurgerMenuProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, mounted]);

  return (
    <div className="desk:hidden">
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      >
        <div className="relative w-[3.125rem] h-[3.125rem] bg-sand rounded-full flex flex-col justify-center items-center gap-[0.2rem]">
          <motion.span
            className="w-[1.25rem] h-[0.1rem] bg-beige rounded-[0.125rem]"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 7.25 },
            }}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          ></motion.span>

          <motion.span
            className="w-[1.25rem] h-[0.1rem] bg-beige rounded-[0.125rem]"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.2 }}
          />

          <motion.span
            className="w-[1.25rem] h-[0.1rem] bg-beige rounded-[0.125rem]"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.2 }}
          />

          <motion.span
            className="w-[1.25rem] h-[0.1rem] bg-beige rounded-[0.125rem]"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -7.25 },
            }}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
        </div>
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence initial={false}>
            {isOpen && (
              <div
                className="fixed inset-0"
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
              >
                <motion.div
                  onClick={toggleMenu}
                  className="fixed inset-0 z-50 bg-black"
                  variants={overlayAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                />

                <motion.div
                  role="document"
                  variants={panelAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col bg-beige fixed z-[60] top-0 right-0 w-full h-full p-20 md:w-[50%]"
                >
                  <div className="mt-90 md:mt-0">
                    <nav>
                      <ul
                        className="flex flex-col gap-10 text-darkGreen text-14"
                      >
                        <li>
                          <Link onClick={toggleMenu} href="/">
                            О туре
                          </Link>
                        </li>
                        <li>
                          <Link onClick={toggleMenu} href="/">
                            Преимущества
                          </Link>
                        </li>
                        <li>
                          <Link onClick={toggleMenu} href="/">
                            Программа
                          </Link>
                        </li>
                        <li>
                          <Link onClick={toggleMenu} href="/">
                            Галерея
                          </Link>
                        </li>
                        <li>
                          <Link onClick={toggleMenu} href="/">
                            Отзывы
                          </Link>
                        </li>
                        <li>
                          <Link onClick={toggleMenu} href="/">
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link onClick={toggleMenu} href="/">
                            Контакты
                          </Link>
                        </li>
                      </ul>
                    </nav>

                    <Button
                      onClick={toggleMenu}
                      href="/"
                      className="inline-block w-full mt-30 !text-center sm:hidden"
                    >
                      Оставить заявку
                    </Button>

                    <div className="flex justify-center sm:justify-start gap-20 mt-30">
                      <IconLink
                        href={"/"}
                        label={"YouTube"}
                        icon={
                          <Image
                            src="/icons/ui/socials-icons/youtube.svg"
                            alt="YouTube"
                            width={23}
                            height={23}
                          />
                        }
                      />
                      <IconLink
                        href={"/"}
                        label={"Телеграм"}
                        icon={
                          <Image
                            src="/icons/ui/socials-icons/telegram.svg"
                            alt="Телеграм"
                            width={23}
                            height={23}
                          />
                        }
                      />
                      <IconLink
                        href={"/"}
                        label={"Вконтакте"}
                        icon={
                          <Image
                            src="/icons/ui/socials-icons/vk.svg"
                            alt="Вконтакте"
                            width={23}
                            height={23}
                          />
                        }
                      />
                      <IconLink
                        href={"/"}
                        label={"WhatsApp"}
                        icon={
                          <Image
                            src="/icons/ui/socials-icons/wa.svg"
                            alt="WhatsApp"
                            width={23}
                            height={23}
                          />
                        }
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
