"use client";

import Link from "next/link";
import Image from "next/image";
import { IconLink } from "@/app/components/ui/socials/IconLink";
import t from "@/app/styles/modules/typography.module.css";
import { motion, AnimatePresence, type Variants } from "framer-motion";

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
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }, // плавный "ease-out"
  },
  exit: {
    x: "100%",
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }, // быстрее на закрытие
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
  return (
    <div className="desk:hidden">
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      >
        <div className="relative z-30 w-[4rem] h-[4rem] bg-sand rounded-full flex flex-col justify-center items-center gap-[0.35rem]">
          <span className="w-[2rem] h-[0.1rem] bg-beige rounded-[0.125rem]"></span>
          <span className="w-[2rem] h-[0.1rem] bg-beige rounded-[0.125rem]"></span>
          <span className="w-[2rem] h-[0.1rem] bg-beige rounded-[0.125rem]"></span>
          <span className="w-[2rem] h-[0.1rem] bg-beige rounded-[0.125rem]"></span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <div className="fixed inset-0" id="mobile-menu">
            <motion.div
              onClick={toggleMenu}
              className="z-10 w-full h-full fixed bg-black"
              variants={overlayAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              variants={panelAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col bg-beige fixed z-20 top-0 right-0 w-full h-full p-[1.25rem] md:w-[50%]"
            >
              <div className="sm:mb-[1.87rem] md:mb-0">
                <Link href="/" onClick={toggleMenu}>
                  <Image
                    className="md:hidden"
                    src="/icons/logos/logo-dark.svg"
                    alt="Логотип Амикан"
                    width={64}
                    height={64}
                  />
                </Link>
              </div>

              <nav>
                <ul
                  className={`${t["body-lg"]} flex flex-col gap-[0.625rem] text-darkGreen`}
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

              <Link
                onClick={toggleMenu}
                href="/"
                className={`${t.subtitle} mt-[1.875rem] text-center uppercase font-semibold text-beige px-[1.9rem] py-[1.3rem] bg-sand rounded-[6.2rem]`}
              >
                Оставить заявку
              </Link>

              <div className="flex justify-center gap-[1.25rem] mt-[2.5rem]">
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
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
