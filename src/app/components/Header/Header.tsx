"use client";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./Burger";
import { Button } from "@/app/components/ui/Button";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const scrolledActive = isScrolled && !isOpen;

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const next = window.scrollY > 70;
      setIsScrolled((prev) => (prev !== next ? next : prev));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const LIGHT_LOGO = "/icons/logos/logo-light.svg";
  const DARK_LOGO = "/icons/logos/logo-dark.svg";

  return (
    <header
      className={clsx(
        "fixed left-0 right-0 z-40 desk:px-20 transition-[background-color,box-shadow,backdrop-filter,padding]",
        "duration-300 ease-out will-change-[background-color,box-shadow,backdrop-filter,padding] rounded-b-3xl",
        {
          "py-10 md:py-20 bg-darkGreen/70 backdrop-blur-xl shadow-md rounded-b-3xl":
            scrolledActive,
          "py-10 md:py-20 desk:py-40 bg-transparent shadow-none":
            !scrolledActive,
        }
      )}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/" aria-label="На главную" className="block">
            {mounted && (
              <>
                <Image
                  className="md:hidden desk:w-[4rem] w-[3.125rem] desk:h-[4rem] h-[3.125rem]"
                  src={isOpen ? DARK_LOGO : LIGHT_LOGO}
                  alt="Логотип Амикан (мобильный)"
                  width={64}
                  height={64}
                  priority
                />
                <Image
                  className="hidden md:block desk:hidden desk:w-[4rem] w-[3.125rem] desk:h-[4rem] h-[3.125rem]"
                  src={LIGHT_LOGO}
                  alt="Логотип Амикан (планшет)"
                  width={64}
                  height={64}
                />
                <Image
                  className="hidden desk:block desk:w-[4rem] w-[3.125rem] desk:h-[4rem] h-[3.125rem]"
                  src={isOpen ? DARK_LOGO : LIGHT_LOGO}
                  alt="Логотип Амикан (десктоп)"
                  width={64}
                  height={64}
                />
              </>
            )}
          </Link>
          <nav className="hidden desk:block px-35 py-20 bg-beige rounded-[6.25rem]">
            <ul className="flex text-18 gap-20 text-darkGreen">
              <li>
                <Link className="underline-animation" href="/#about">
                  О туре
                </Link>
              </li>
              <li>
                <Link className="underline-animation" href="/#features">
                  Преимущества
                </Link>
              </li>
              <li>
                <Link className="underline-animation" href="/#program">
                  Программа
                </Link>
              </li>
              <li>
                <Link className="underline-animation" href="/#gallery">
                  Галерея
                </Link>
              </li>
              <li>
                <Link className="underline-animation" href="/#feedbacks">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link className="underline-animation" href="/#faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="underline-animation" href="/#contacts">
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-20">
            <div
              className={clsx(
                "flex justify-between items-center transition-opacity",
                isOpen && "opacity-0 pointer-events-none"
              )}
            >
              <Button href="/#contacts" className="hidden sm:block">
                Оставить заявку
              </Button>
            </div>
            <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
    </header>
  );
}
