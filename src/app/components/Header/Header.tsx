"use client";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./Burger";
import t from "@/app/styles/modules/typography.module.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const LIGHT_LOGO = "/icons/logos/logo-light.svg";
  const DARK_LOGO = "/icons/logos/logo-dark.svg";

  return (
    <header className="fixed desk:top-[2.5rem] top-[1.25rem] left-0 right-0 z-40 desk:px-[1.25rem]">
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
          <nav className="hidden desk:block px-[2.188rem] py-[1.25rem] bg-beige rounded-[6.25rem]">
            <ul className={`${t["body-lg"]} flex gap-[1.2rem] text-darkGreen`}>
              <li>
                <Link href="/">О туре</Link>
              </li>
              <li>
                <Link href="/">Преимущества</Link>
              </li>
              <li>
                <Link href="/">Программа</Link>
              </li>
              <li>
                <Link href="/">Галерея</Link>
              </li>
              <li>
                <Link href="/">Отзывы</Link>
              </li>
              <li>
                <Link href="/">FAQ</Link>
              </li>
              <li>
                <Link href="/">Контакты</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-[1.2rem]">
            <Link
              href="/"
              className={`${t.subtitle} hidden uppercase font-semibold text-beige bg-sand rounded-[3.125rem] desk:block desk:px-[2.188rem] desk:py-[1.25rem] md:px-[1.875rem] md:py-[1.031rem] py-[0.938rem]`}
            >
              Оставить заявку
            </Link>
            <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
    </header>
  );
}
